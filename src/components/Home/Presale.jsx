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

// Chain and token configurations
const chains = [
  {
    id: "eth",
    name: "Ethereum",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    symbol: "ETH",
    chainId: 1,
  },
  {
    id: "bnb",
    name: "BSC",
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
    symbol: "BNB",
    chainId: 56,
  },
  {
    id: "sol",
    name: "Solana",
    icon: "https://cryptologos.cc/logos/solana-sol-logo.svg",
    symbol: "SOL",
    chainId: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
  },
  {
    id: "trx",
    name: "Tron",
    icon: "https://cryptologos.cc/logos/tron-trx-logo.svg",
    symbol: "TRX",
    chainId: 728126428,
  },
];

const getTokensForChain = (chainId) => {
  const stablecoins = {
    eth: {
      symbol: "USDT",
      icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
    },
    bnb: {
      symbol: "USDT",
      icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
    },
    sol: {
      symbol: "USDC",
      icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
    },
    trx: {
      symbol: "USDT",
      icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg",
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

const USDCMINT = new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB");

function PresaleForm() {
  const [selectedChain, setSelectedChain] = useState("eth");
  const [selectedToken, setSelectedToken] = useState("");
  const [amount, setAmount] = useState("");
  const [cryptoPrices, setCryptoPrices] = useState({});

  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("solana"); // for solana
  const { chainId, switchNetwork, caipNetworkId } = useAppKitNetwork();

  console.log({ caipNetworkId, chainId,address });

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
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,solana,binancecoin&vs_currencies=usd"
        );
        pricesMap = pricesMap.data;
        let pricesFormatted = {
          eth: pricesMap.ethereum.usd,
          sol: pricesMap.solana.usd,
          bnb: pricesMap.binancecoin.usd,
        };
        setCryptoPrices(pricesFormatted);
      } catch (error) {
        console.error("Failed to fetch crypto prices:", error);
      }
    };

    getCryptoPrices();
  }, []);

  const handleChainChange = (event) => {
    console.log(event.target.value);
    switchNetwork(networks[event.target.value]);
    setAmount("");
    setSelectedChain(event.target.value);
  };

  const handleTokenChange = (event) => {
    console.log(event.target.value, "token");
    setSelectedToken(event.target.value);
  };

  // max button
  const handleMaxClick = async () => {
    try {
      if (!isConnected) {
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
      } else {
        if (selectedToken.id === "usdt") {
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
    const rate = 1; // Example rate: 1 token = 1000 presale tokens
    try {
      if (!amount || amount === "" || !cryptoPrices[selectedChain]) return 0;

      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        toast.error("Please enter a valid amount");
        return 0;
      }

      if (
        selectedToken.toLowerCase() === "usdt" ||
        selectedToken.toLowerCase() === "usdc"
      ) {
        let baseAmount = parsedAmount * rate;
        return baseAmount;
      }

      const priceInUSDT = cryptoPrices[selectedChain] * parsedAmount;
      const baseAmount = priceInUSDT * rate;
      return baseAmount;
    } catch (err) {
      console.log(err);
      toast.error("Error calculating token amount");
      return 0;
    }
  };

  // function to send a TX to solana
  const handleSendTx = async () => {
    try {
      if (selectedToken.id === "usdt") {
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

  const handleSendTransaction = async () => {
    try {
      if (!isConnected) {
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
      } else {
        if (selectedToken.id === "usdt") {
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
            chainId,
            args: [import.meta.env.VITE_WALLET_ADDRESS, amountInUnits],
          });
          const receipt = await waitForTransactionReceipt(
            wagmiAdapter?.wagmiConfig,
            {
              hash,
              chainId,
            }
          );
          console.log(receipt?.transactionHash, "-->receipt");

          toast.success("Transaction sent successfully");
        } else {
          const result = await sendTransaction(wagmiAdapter?.wagmiConfig, {
            to: import.meta.env.VITE_WALLET_ADDRESS,
            value: parseEther(amount),
            chainId,
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

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#000000",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
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
            {/* Selectors in one row */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 4, color: "rgba(255,255,255,0.7)" }}
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
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "rgba(255,255,255,0.7)" }}
              >
                Amount in {selectedToken} You Pay:
              </Typography>
              <StyledTextField
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
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
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "rgba(255,255,255,0.7)" }}
              >
                Amount in MGNT You Receive:
              </Typography>
              <StyledTextField
                fullWidth
                value={calculateReceiveAmount()}
                disabled
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box
                        component="img"
                        src="https://via.placeholder.com/24" // Replace with your token logo
                        alt="MGNT"
                        sx={{ width: 24, height: 24 }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {isConnected ? (
              <>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<Wallet size={20} />}
                  onClick={() => handleSendTransaction()}
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
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default PresaleForm;
