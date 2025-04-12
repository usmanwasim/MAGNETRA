import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana";
import { mainnet, bsc, solana } from "@reown/appkit/networks";
import { injected, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  SolflareWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
// import { TronLinkAdapter } from "@tronweb3/tronwallet-adapters";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
// const projectId = import.meta.env.VITE_PROJECT_ID;
const projectId = "cba73ada547c01c1a64d7725fb732495";

// 2. Create a metadata object - optional
const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://example.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Set the networks
const networks = [mainnet, bsc]; //tron

// 4. Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
  connectors: [injected({ shimDisconnect: false })],
});

// 2. Create Solana adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// const tronAdapter = new TronLinkAdapter();

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter], //, tronAdapter
  networks: [mainnet, bsc, solana], // tron
  defaultNetwork: mainnet,
  projectId,
  metadata,
  features: {
    analytics: true,
    email: false,
    socials: [],
  },
});

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
