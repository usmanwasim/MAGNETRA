import {
  //   useWallet,
  WalletProvider,
} from "@tronweb3/tronwallet-adapter-react-hooks";
import {
  //   WalletActionButton,
  //   WalletConnectButton,
  //   WalletDisconnectButton,
  //   WalletSelectButton,
  WalletModalProvider,
} from "@tronweb3/tronwallet-adapter-react-ui";
import { toast } from "react-toastify";
import { TronLinkAdapter } from "@tronweb3/tronwallet-adapters";
import { WalletConnectAdapter } from "@tronweb3/tronwallet-adapter-walletconnect";
import {
  WalletDisconnectedError,
  WalletNotFoundError,
} from "@tronweb3/tronwallet-abstract-adapter";
import { useMemo } from "react";

export function TronProvider({ children }) {
  function onError(e) {
    if (e instanceof WalletNotFoundError) {
      toast.error(e.message);
    } else if (e instanceof WalletDisconnectedError) {
      toast.error(e.message);
    } else toast.error(e.message);
  }

  const adapters = useMemo(() => {
    const tronLinkAdapter = new TronLinkAdapter();
    const walletConnectAdapter = new WalletConnectAdapter({
      network: "Mainnet",
      options: {
        projectId: "cba73ada547c01c1a64d7725fb732495",
      },
    });

    return [tronLinkAdapter, walletConnectAdapter];
  }, []);
  return (
    <WalletProvider
      onError={onError}
      autoConnect={true}
      disableAutoConnectOnLoad={true}
      adapters={adapters}
    >
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  );
}
