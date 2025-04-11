import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  styled,
  Grid,
  Chip,
  Dialog,
} from "@mui/material";
import { Wallet } from "lucide-react";
import { toast } from "react-toastify";

// Connectivity
import {
  useAppKit,
  useAppKitNetwork,
  useAppKitAccount,
  useAppKitProvider,
} from "@reown/appkit/react";
import { formatUnits, parseEther, parseUnits } from "viem";
import {
  readContract,
  writeContract,
  getBalance,
  sendTransaction,
  waitForTransactionReceipt,
} from "@wagmi/core";
import { wagmiAdapter } from "../../Wagmi";
import {
  PublicKey,
  Transaction,
  SystemProgram,
  Connection,
} from "@solana/web3.js";
import {
  getAssociatedTokenAddress,
  getMint,
  createTransferInstruction,
  getAccount,
  TokenAccountNotFoundError,
  TOKEN_2022_PROGRAM_ID,
} from "@solana/spl-token";
import { networks, contracts } from "./Networks";
import abi from "./abi.json";
import axios from "axios";
import logo from "../../assets/logo.png";
import { MANTRA_CHAIN_ID, MANTRA_CHAIN_INFO } from "../../mantraconfig";
import { SigningStargateClient } from "@cosmjs/stargate";

// import TronWeb from "tronweb";

const StyledInputLabel = styled(InputLabel)({
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-focused": {
    color: "#e561c3",
  },
});

// Custom styled Select for better visual appeal
const StyledSelect = styled(Select)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 16px",
    color: "#fff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(229, 97, 195, 0.5)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e561c3",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiSvgIcon-root": {
    color: "#fff",
  },
  "& .MuiPaper-root": {
    backgroundColor: "#121212",
    color: "#fff",
  },
}));

// Custom styled TextField to match Select styling
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "#fff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "10px",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(229, 97, 195, 0.5)",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e561c3",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled": {
    WebkitTextFillColor: "rgba(255, 255, 255, 0.5) !important",
  },
  "& .MuiInputAdornment-root": {
    color: "#fff",
  },
}));

async function connectKeplr() {
  if (!window.keplr) {
    alert("Please install Keplr Wallet!");
    return null;
  }

  await window.keplr.experimentalSuggestChain(MANTRA_CHAIN_INFO);
  await window.keplr.enable(MANTRA_CHAIN_ID);

  const offlineSigner = window.getOfflineSigner(MANTRA_CHAIN_ID);
  const accounts = await offlineSigner.getAccounts();

  return {
    address: accounts[0].address,
    signer: offlineSigner,
  };
}

// === Token Transfer Function ===
async function sendTokens({ signer, senderAddress, recipientAddress, amount }) {
  const client = await SigningStargateClient.connectWithSigner(
    MANTRA_CHAIN_INFO.rpc,
    signer
  );

  const fee = {
    amount: [{ denom: "uom", amount: "5000" }],
    gas: "200000",
  };

  const result = await client.sendTokens(
    senderAddress,
    recipientAddress,
    [{ denom: "uom", amount }],
    fee,
    "Sent from my React app"
  );

  return result;
}

// Chain and token configurations
const chains = [
  {
    id: "OM",
    name: "Mantra",
    icon: "/om.png",
    symbol: "OM",
    chainId: MANTRA_CHAIN_INFO.chainId,
  },
  {
    id: "eth",
    name: "Ethereum",
    icon: "/eth.svg",
    symbol: "ETH",
    chainId: 1,
  },
  {
    id: "bnb",
    name: "BSC",
    icon: "/bnb.svg",
    symbol: "BNB",
    chainId: 56,
  },

  {
    id: "sol",
    name: "Solana",
    icon: "/sol.svg",
    symbol: "SOL",
    chainId: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
  {
    id: "trx",
    name: "Tron",
    icon: "/tron.svg",
    symbol: "TRX",
    chainId: 728126428,
  },
];

const getTokensForChain = (chainId) => {
  const stablecoins = {
    eth: {
      symbol: "USDT",
      icon: "/usdt.svg",
    },
    bnb: {
      symbol: "USDT",
      icon: "/usdt.svg",
    },
    OM: {
      symbol: "USDT",
      icon: "/usdt.svg",
    },
    sol: {
      symbol: "USDC",
      icon: "/usdc.svg",
    },
    trx: {
      symbol: "USDT",
      icon: "/usdt.svg",
    },
  };

  const chain = chains.find((c) => c.id === chainId);
  if (!chain) return [];

  return [
    { symbol: chain.symbol, icon: chain.icon, isNative: true },
    {
      symbol: stablecoins[chainId].symbol,
      icon: stablecoins[chainId].icon,
      isNative: false,
    },
  ];
};

const connection = new Connection(
  "https://mainnet.helius-rpc.com/?api-key=d70a7724-24a1-41cd-9496-e471e2ae03e8"
);

const USDCMINT = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");

const getTimeLeft = (endTime) => {
  const difference = new Date(endTime) - Date.now();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Presale ended
};

const presaleEndTime = 1744210800000; // stage 1 end time in milliseconds

function PresaleForm() {
  const [selectedChain, setSelectedChain] = useState("OM");
  const [selectedToken, setSelectedToken] = useState("");
  // console.log({ selectedChain, selectedToken }, "selectedChain");
  const [amount, setAmount] = useState("");
  const [cryptoPrices, setCryptoPrices] = useState({});
  const [model, setModel] = useState(false);
  const [tronLinkWallet, setTronLinkWallet] = useState(false);

  // const [preSaleTime, setPreSaleTime] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setPreSaleTime(getTimeLeft(presaleEndTime));
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(null);

  const handleConnectWallet = async () => {
    const wallet = await connectKeplr();
    if (wallet) {
      setWalletAddress(wallet.address);
      setSigner(wallet.signer);
    }
  };

  const handleTransfer = async () => {
    if (!signer || !walletAddress)
      return alert("Please connect your wallet first!");

    try {
      const result = await sendTokens({
        signer,
        senderAddress: walletAddress,
        recipientAddress: "mantra1rqmyfkh9yskd0mqpv070jsq9ytt2wl53x5tgjw",
        amount: (Number(amount) * 1_000_000).toString(),
      });
      toast.success(`✅ Success: TxHash: ${result.transactionHash}`);
    } catch (err) {
      console.error(err);
      toast.error("❌ Transfer Failed");
    }
  };
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("solana"); // for solana
  const { chainId, switchNetwork } = useAppKitNetwork();

  // check if user connected through tronlink
  useEffect(() => {
    if (window.tronWeb) {
      if (window.tronWeb.defaultAddress.base58) {
        console.log("state tronlinkSte -=-=-=-");
        setTronLinkWallet(true);
      }
    }
  }, [model]);

  // Set default token when chain changes
  useEffect(() => {
    const tokens = getTokensForChain(selectedChain);
    setSelectedToken(tokens[0].symbol);
  }, [selectedChain]);

  // Set selected chain when wallet is connected
  useEffect(() => {
    chains?.forEach((item) => {
      if (item.chainId === chainId) {
        setSelectedChain(item.id);
      }
    });
  }, [isConnected, chainId]);

  // get crypto prices
  useEffect(() => {
    const getCryptoPrices = async () => {
      try {
        let pricesMap = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana,binancecoin,tron,mantra-dao&vs_currencies=usd"
        );
        pricesMap = pricesMap.data;
        // console.log(pricesMap, "pricesMap-=-=--=-");

        let pricesFormatted = {
          eth: pricesMap.ethereum.usd,
          sol: pricesMap.solana.usd,
          bnb: pricesMap.binancecoin.usd,
          trx: pricesMap.tron.usd,
          OM: pricesMap["mantra-dao"].usd,
        };
        setCryptoPrices(pricesFormatted);
      } catch (error) {
        console.error("Failed to fetch crypto prices:", error);
      }
    };

    getCryptoPrices();
  }, []);

  const handleChainChange = async (event) => {
    setAmount("");
    console.log(event.target.value);
    if (event.target.value === "trx") {
      setModel(true);
    } else {
      switchNetwork(networks[event.target.value]);
      setSelectedChain(event.target.value);
    }
  };

  const handleTokenChange = (event) => {
    console.log(event.target.value, "token");
    setSelectedToken(event.target.value);
  };

  // max button
  const handleMaxClick = async () => {
    try {
      if (selectedChain !== "trx" && !isConnected) {
        return toast.error("Please connect your wallet");
      }
      if (selectedChain === "sol") {
        if (selectedToken === "USDC") {
          const account = await getAssociatedTokenAddress(
            USDCMINT,
            new PublicKey(address)
          );
          const getmint = await getMint(connection, USDCMINT);
          const balance = await getAccount(connection, account);
          let formatedBalance = formatUnits(
            balance?.amount,
            getmint?.decimals.toString()
          );
          setAmount(formatedBalance);
        } else {
          const balance = await connection.getBalance(new PublicKey(address));
          let formatedBalance = formatUnits(balance.toString(), 9);
          setAmount(formatedBalance);
        }
      } else if (selectedChain === "trx") {
        if (!window.tronWeb) toast.error("TronLink is not installed");
        if (!window.tronWeb.defaultAddress.base58)
          toast.error("Please connect your wallet");
        if (selectedToken === "USDT") {
          console.log(contracts[selectedChain]);
          const userAddress = window.tronWeb.defaultAddress.base58;
          const usdtContract = await window.tronWeb
            .contract()
            .at(contracts[selectedChain]);

          const decimals = await usdtContract.decimals().call();
          const result = await usdtContract.balanceOf(userAddress).call();
          let formatedBalance = formatUnits(result, decimals);
          console.log({ decimals, result, formatedBalance });

          setAmount(formatedBalance);
        } else {
          const balanceInSun = await window.tronWeb.trx.getBalance(address);
          const balanceInTRX = window.tronWeb.fromSun(balanceInSun);
          console.log({ balanceInSun, balanceInTRX });
          setAmount(balanceInTRX);
        }
      } else {
        if (selectedToken === "USDT") {
          const decimals = await readContract(wagmiAdapter.wagmiConfig, {
            abi,
            address: contracts[selectedChain],
            functionName: "decimals",
          });

          const result = await readContract(wagmiAdapter.wagmiConfig, {
            abi,
            address: contracts[selectedChain],
            functionName: "balanceOf",
            args: [address],
          });
          let formatedBalance = formatUnits(
            result.toString(),
            decimals.toString()
          );
          setAmount(formatedBalance);
        } else {
          const balance = await getBalance(wagmiAdapter.wagmiConfig, {
            address,
          });
          setAmount(balance?.formatted);
        }
      }
    } catch (error) {
      console.log("Failed to set max amount:", error);
    }
  };

  // calculate receive token amount
  const calculateReceiveAmount = () => {
    const rate = import.meta.env.VITE_TOKEN_PRICE; // Example rate: 1 token = 1000 presale tokens
    try {
      if (!amount || amount === "" || !cryptoPrices[selectedChain]) return 0;

      const parsedAmount = Number(amount);

      if (isNaN(parsedAmount) || parsedAmount < 0) {
        toast.error("Please enter a valid amount");
        return 0;
      }

      if (
        selectedToken.toLowerCase() === "usdt" ||
        selectedToken.toLowerCase() === "usdc"
      ) {
        let baseAmount = parsedAmount / rate;
        return baseAmount.toFixed(4);
      }

      const priceInUSDT = cryptoPrices[selectedChain] * parsedAmount;
      const baseAmount = priceInUSDT / rate;

      return baseAmount.toFixed(4);
    } catch (err) {
      console.log(err);
      toast.error("Error calculating token amount");
      return 0;
    }
  };

  // function to send a TX to solana
  const handleSendTx = async () => {
    try {
      if (selectedToken === "USDC") {
        const senderAccount = await getAssociatedTokenAddress(
          USDCMINT,
          new PublicKey(address)
        );
        const receiverAccount = await getAssociatedTokenAddress(
          USDCMINT,
          new PublicKey(import.meta.env.VITE_SOLANA_ADDRESS)
        );

        const a = await getAccount(connection, senderAccount);

        //send token
        const latestBlockhash = await connection.getLatestBlockhash(
          "confirmed"
        );
        let txAmount = parseUnits(amount, 6);
        console.log({ latestBlockhash, txAmount });

        const transaction = new Transaction({
          recentBlockhash: latestBlockhash.blockhash,
          feePayer: new PublicKey(address),
        }).add(
          createTransferInstruction(
            senderAccount,
            receiverAccount,
            new PublicKey(address),
            txAmount
          )
        );

        const signature = await walletProvider.sendTransaction(
          transaction,
          connection
        );

        console.log("USDT Transfer Solana ---->> ", signature);
      } else {
        const latestBlockhash = await connection.getLatestBlockhash(
          "confirmed"
        );
        console.log({ latestBlockhash });

        // create the transaction
        const transaction = new Transaction({
          feePayer: new PublicKey(address),
          recentBlockhash: latestBlockhash?.blockhash,
        }).add(
          SystemProgram.transfer({
            fromPubkey: new PublicKey(address), // source address,
            toPubkey: new PublicKey(import.meta.env.VITE_SOLANA_ADDRESS), // destination address
            lamports: parseUnits(amount, 9),
          })
        );
        console.log("transaction-=-=");
        // raise the modal
        const signature = await walletProvider.sendTransaction(
          transaction,
          connection
        );
        // print the Transaction Signature
        console.log("Native Transfer Solana ---->> ", signature);
      }
      return toast.success("Transaction sent successfully");
    } catch (error) {
      console.log("Failed to send transaction :: Solana:=>", error);
      if (error instanceof TokenAccountNotFoundError) {
        toast.error("USDT Account not found");
      } else {
        toast.error(error.message);
      }
    }
  };

  const connectTronLink = async () => {
    try {
      if (window.tronWeb) {
        await window.tronWeb.request({ method: "tron_requestAccounts" });
        console.log(window.tronWeb.defaultAddress);

        return window.tronWeb.defaultAddress.base58
          ? window.tronWeb.defaultAddress.base58
          : null;
      } else {
        console.error("TronLink is not installed.");
        toast.error("TronLink is not installed");
        return null;
      }
    } catch (error) {
      console.log(error, "in connect tron ");
      toast.error("Error connecting to TronLink");
      return { error: error.message };
    }
  };

  const sendTRX = async () => {
    try {
      if (!window.tronWeb) toast.error("TronLink is not installed");
      if (!window.tronWeb.defaultAddress.base58) {
        toast.error("Please connect your wallet");
      }

      const amountInSun = window.tronWeb.toSun(amount);
      const transaction = await window.tronWeb.trx.sendTransaction(
        import.meta.env.VITE_TRON_ADDRESS,
        amountInSun
      );
      console.log("TRX Transaction ---->> ", transaction);
      toast.success("Transaction sent successfully");
      return transaction;
    } catch (error) {
      console.error("TRX Transaction Error:", error);
      toast.error(error);
    }
  };

  const sendUSDT = async () => {
    try {
      if (!window.tronWeb) toast.error("TronLink is not installed");
      if (!window.tronWeb.defaultAddress.base58)
        toast.error("Please connect your wallet");

      const usdtContract = await window.tronWeb
        .contract()
        .at(contracts[selectedChain]);
      const amountInSun = amount * 1_000_000;

      const transaction = await usdtContract
        .transfer(import.meta.env.VITE_TRON_ADDRESS, amountInSun)
        .send();
      console.log("TRX Transaction ---->> ", transaction);
      toast.success("Transaction sent successfully");
      return transaction;
    } catch (error) {
      console.error("USDT Transaction Error:", error);
      toast.error(error);
    }
  };

  const handleSendTransaction = async () => {
    try {
      if (selectedChain !== "trx" && !isConnected) {
        return toast.error("Please connect your wallet");
      }

      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        toast.error("Please enter a valid amount");
        return 0;
      }

      console.log({ parsedAmount });

      if (chainId === "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp") {
        await handleSendTx();
      } else if (selectedChain === "trx" && tronLinkWallet) {
        if (selectedToken === "USDT") {
          await sendUSDT();
        } else {
          await sendTRX();
        }
      } else {
        if (selectedToken === "USDT") {
          console.log(
            contracts[selectedChain],
            "selected chain contract address =-=-= "
          );

          //    check token decimals
          const result = await readContract(wagmiAdapter.wagmiConfig, {
            abi,
            address: contracts[selectedChain],
            functionName: "decimals",
          });
          //   usdt transfer
          const amountInUnits = parseUnits(amount, result.toString());

          const hash = await writeContract(wagmiAdapter?.wagmiConfig, {
            address: contracts[selectedChain],
            abi,
            functionName: "transfer",
            // chainId,
            args: [import.meta.env.VITE_EVM_ADDRESS, amountInUnits],
          });
          const receipt = await waitForTransactionReceipt(
            wagmiAdapter?.wagmiConfig,
            {
              hash,
              // chainId,
            }
          );
          console.log(receipt?.transactionHash, "-->receipt");

          toast.success("Transaction sent successfully");
        } else {
          const result = await sendTransaction(wagmiAdapter?.wagmiConfig, {
            to: import.meta.env.VITE_EVM_ADDRESS,
            value: parseEther(amount),
            // chainId,
          });
          console.log(result, "-->Native Transfer result");
          toast.success("Transaction sent successfully");
        }
      }
    } catch (err) {
      console.log("Failed to send transaction:=>", err);
      if (err.shortMessage) {
        return toast.error(err.shortMessage);
      }
    }
  };

  console.log(
    window.tronWeb.defaultAddress.base58,
    "user TRX address",
    tronLinkWallet,
    chainId
  );

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#000000",
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Dialog
        open={model}
        onClose={() => setModel(false)}
        sx={{
          "& .MuiDialog-paper": {
            minWidth: { xs: "80%", sm: "400px" },
            p: 2,
            background: "#101010",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 500, textAlign: "center", color: "gray", mb: 2 }}
        >
          Chose a Wallet
        </Typography>
        <Button
          variant="contained"
          startIcon={<Wallet size={20} />}
          sx={{
            py: 1,
            my: 1.5,
            background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
            borderRadius: "12px",
            fontSize: "1.1rem",
            "&:hover": {
              background: "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
            },
          }}
          onClick={async () => {
            let resTron = await connectTronLink();
            if (!resTron) {
              toast.error("Please unlock TronLink to switch network");
              return;
            }
            if (resTron?.error) {
              return;
            }
            setSelectedChain("trx");
            setModel(false);
          }}
        >
          Tron Link{" "}
        </Button>
        <Button
          variant="contained"
          startIcon={<Wallet size={20} />}
          sx={{
            py: 1,
            background: "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
            borderRadius: "12px",
            fontSize: "1.1rem",
            "&:hover": {
              background: "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
            },
          }}
          onClick={() => {
            open();
            setModel(false);
          }}
        >
          {" "}
          Trust Wallet{" "}
        </Button>
      </Dialog>
      <Box
        sx={{
          maxWidth: "480px",
          mx: "auto",
        }}
      >
        <Card
          sx={{
            borderRadius: "24px",
            color: "#fff",
            border: "1px solid transparent",
            background:
              "linear-gradient(black, black) padding-box, linear-gradient(90deg, #e561c3, #a261e5) border-box",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "18px", sm: "24px", md: "30px" },
                  fontFamily: "plus jakarta sans",

                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "max-content",
                  }}
                >
                  MAGNETRA
                </span>{" "}
                Presale
              </Typography>
              <Typography component="h5" sx={{ fontWeight: "bold" }}>
                <span
                  style={{
                    background:
                      "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "max-content",
                  }}
                >
                  Phase 1{" "}
                </span>
                {/* Ends In */}
              </Typography>
              <Typography
                component="p"
                sx={{
                  my: 0.5,
                  fontSize: { xs: "12px", sm: "18px" },
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "max-content",
                    fontWeight: "bold",
                  }}
                >
                  Coming Soon
                </span>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14 },
                  // mb: 1,
                }}
              >
                <span style={{ fontWeight: "bold" }}>1 $MGN =</span> ${" "}
                {import.meta.env.VITE_TOKEN_PRICE}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14 },
                  mb: 1,
                }}
              >
                <span style={{ fontWeight: "bold" }}>Launch Price =</span> $
                0.04
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 15,
                  borderRadius: 4,
                  bgcolor: "#ffffff20",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -20,
                    right: 0,
                    height: "100%",
                    fontSize: "10px",
                  }}
                >
                  30M $MGN
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: `${0}%`,
                    borderRadius: 4,
                    background:
                      "linear-gradient(-90deg, #e561c3 0%, #a261e5 100%)",
                    fontSize: "10px",
                    fontWeight: 900,
                    pr: 1,
                    textAlign: "right",
                    verticalAlign: "middle",
                  }}
                >
                  {0}%
                </Box>
              </Box>
            </Box>
            {/* Selectors in one row */}
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ my: 2, color: "rgba(255,255,255,0.7)" }}
              >
                Select Chain & Token
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <StyledInputLabel id="chain-select-label">
                      Network
                    </StyledInputLabel>
                    <StyledSelect
                      label={"Network"}
                      value={selectedChain}
                      onChange={handleChainChange}
                      displayEmpty
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: "#121212",
                            color: "#fff",
                            "& .MuiMenuItem-root:hover": {
                              bgcolor: "rgba(229, 97, 195, 0.1)",
                            },
                          },
                        },
                      }}
                      renderValue={(selected) => {
                        const chain = chains.find((c) => c.id === selected);
                        return (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Box
                              component="img"
                              src={chain.icon}
                              alt={chain.name}
                              sx={{ width: 24, height: 24 }}
                            />
                            {chain.name}
                          </Box>
                        );
                      }}
                    >
                      {chains.map((chain) => (
                        <MenuItem
                          key={chain.id}
                          value={chain.id}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Box
                            component="img"
                            src={chain.icon}
                            alt={chain.name}
                            sx={{ width: 24, height: 24 }}
                          />
                          {chain.name}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <StyledInputLabel id="chain-select-label">
                      Token
                    </StyledInputLabel>
                    <StyledSelect
                      label="Token"
                      labelId="token-select-label"
                      id="token-select"
                      value={selectedToken}
                      onChange={handleTokenChange}
                      displayEmpty
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: "#121212",
                            color: "#fff",
                            "& .MuiMenuItem-root:hover": {
                              bgcolor: "rgba(229, 97, 195, 0.1)",
                            },
                          },
                        },
                      }}
                      renderValue={(selected) => {
                        const tokens = getTokensForChain(selectedChain);
                        const token = tokens.find((t) => t.symbol === selected);
                        return (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Box
                              component="img"
                              src={token?.icon}
                              alt={token?.symbol}
                              sx={{ width: 24, height: 24 }}
                            />
                            {token?.symbol}
                          </Box>
                        );
                      }}
                    >
                      {getTokensForChain(selectedChain).map((token) => (
                        <MenuItem
                          key={token.symbol}
                          value={token.symbol}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Box
                            component="img"
                            src={token.icon}
                            alt={token.symbol}
                            sx={{ width: 24, height: 24 }}
                          />
                          {token.symbol}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            {/* Amount Input */}
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "rgba(255,255,255,0.7)" }}
              >
                You Pay:
              </Typography>
              {/* {selectedToken === "om" && (
                <StyledTextField
                  fullWidth
                  placeholder="Recipient Address"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  sx={{ mb: 2 }}
                />
              )} */}
              <StyledTextField
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Amount in ${selectedToken}`}
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        onClick={handleMaxClick}
                        sx={{
                          minWidth: "auto",
                          px: 2,
                          py: 0.5,
                          background:
                            "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                          borderRadius: "8px",
                          color: "#fff",
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                          },
                        }}
                      >
                        Max
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Amount to Receive */}
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "rgba(255,255,255,0.7)" }}
              >
                {/* Amount in $MGN */}
                You Receive:
              </Typography>
              <StyledTextField
                fullWidth
                // value={calculateReceiveAmount()}
                value={`${calculateReceiveAmount()} $MGN`}
                readOnly
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box
                        component="img"
                        src={logo} // Replace with your token logo
                        alt="MGNT"
                        sx={{ width: "50px" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {selectedToken === "OM" ? (
              <Box>
                {!walletAddress ? (
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Wallet size={20} />}
                    onClick={handleConnectWallet}
                    sx={{
                      py: 1.5,
                      background:
                        "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                      borderRadius: "12px",
                      fontSize: "1.1rem",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                      },
                    }}
                  >
                    Connect Wallet
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Wallet size={20} />}
                    onClick={handleTransfer}
                    disabled={!walletAddress}
                    sx={{
                      py: 1.5,
                      background:
                        "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                      borderRadius: "12px",
                      fontSize: "1.1rem",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                      },
                    }}
                  >
                    Purchase Tokens
                  </Button>
                )}
              </Box>
            ) : (
              <Box>
                {selectedChain === "trx" || isConnected ? (
                  <>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<Wallet size={20} />}
                      onClick={() => handleSendTransaction()}
                      // disabled={true}
                      sx={{
                        py: 1.5,
                        background:
                          "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                        borderRadius: "12px",
                        fontSize: "1.1rem",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                        },
                      }}
                    >
                      Purchase Tokens
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<Wallet size={20} />}
                      onClick={() => open()}
                      sx={{
                        py: 1.5,
                        background:
                          "linear-gradient(90deg, #e561c3 0%, #a261e5 100%)",
                        borderRadius: "12px",
                        fontSize: "1.1rem",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #d450b2 0%, #9150d4 100%)",
                        },
                      }}
                    >
                      Connect Wallet
                    </Button>
                  </>
                )}
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default PresaleForm;
