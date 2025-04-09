export const networks = {
  eth: {
    id: 1,
    name: "Ethereum",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.walletconnect.org/v1/?chainId=eip155%3A1&projectId=a0f87013894a0c18eb739e951c5a1af2",
        ],
      },
      chainDefault: {
        http: ["https://eth.merkle.io"],
      },
    },
    blockExplorers: {
      default: {
        name: "Etherscan",
        url: "https://etherscan.io",
        apiUrl: "https://api.etherscan.io/api",
      },
    },
    contracts: {
      ensRegistry: {
        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      },
      ensUniversalResolver: {
        address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
        blockCreated: 19258213,
      },
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 14353601,
      },
    },
    chainNamespace: "eip155",
    caipNetworkId: "eip155:1",
    assets: {
      imageId: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
    },
  },
  bnb: {
    id: 56,
    name: "BNB Smart Chain",
    nativeCurrency: {
      decimals: 18,
      name: "BNB",
      symbol: "BNB",
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.walletconnect.org/v1/?chainId=eip155%3A56&projectId=a0f87013894a0c18eb739e951c5a1af2",
        ],
      },
      chainDefault: {
        http: ["https://rpc.ankr.com/bsc"],
      },
    },
    blockExplorers: {
      default: {
        name: "BscScan",
        url: "https://bscscan.com",
        apiUrl: "https://api.bscscan.com/api",
      },
    },
    contracts: {
      multicall3: {
        address: "0xca11bde05977b3631167028862be2a173976ca11",
        blockCreated: 15921452,
      },
    },
    chainNamespace: "eip155",
    caipNetworkId: "eip155:56",
    assets: {
      imageId: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    },
  },
  sol: {
    id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    name: "Solana",
    network: "solana-mainnet",
    nativeCurrency: {
      name: "Solana",
      symbol: "SOL",
      decimals: 9,
    },
    rpcUrls: {
      default: {
        http: [
          "https://rpc.walletconnect.org/v1/?chainId=solana%3A5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp&projectId=a0f87013894a0c18eb739e951c5a1af2",
        ],
      },
      chainDefault: {
        http: ["https://rpc.walletconnect.org/v1"],
      },
    },
    blockExplorers: {
      default: {
        name: "Solscan",
        url: "https://solscan.io",
      },
    },
    testnet: false,
    chainNamespace: "solana",
    caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",
    assets: {
      imageId: "a1b58899-f671-4276-6a5e-56ca5bd59700",
    },
  },
  trx: {
    id: 728126428,
    name: "Tron",
    network: "tron-mainnet",
    nativeCurrency: {
      name: "Tron",
      symbol: "TRX",
      decimals: 6,
    },
    rpcUrls: {
      default: {
        http: ["https://api.trongrid.io"], // Tron public RPC
      },
      chainDefault: {
        http: ["https://api.trongrid.io"],
      },
    },
    blockExplorers: {
      default: {
        name: "TronScan",
        url: "https://tronscan.org",
      },
    },
    testnet: false,
    chainNamespace: "tron", // Make sure Reown supports 'tron'
    caipNetworkId: "tron:728126428", // CAIP-2 standard for Tron
    assets: {
      imageId: "https://cryptologos.cc/logos/tron-trx-logo.png",
    },
  },
};

export const contracts = {
  eth: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  bnb: "0x55d398326f99059fF775485246999027B3197955",
  sol: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  trx: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
};
