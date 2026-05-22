import {
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CandlestickChart,
  CircleDollarSign,
  Coins,
  Cpu,
  DatabaseZap,
  Gem,
  Globe2,
  Handshake,
  Landmark,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users2,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

export type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "cyan" | "violet" | "mint" | "gold";
};

export type PortfolioCategory =
  | "Mainnet Infrastructure"
  | "Web3 Platforms"
  | "NFT & Digital Assets"
  | "Payments & FinTech"
  | "Wallet & Staking"
  | "AI / Prediction";

export type PortfolioProject = {
  title: string;
  category: PortfolioCategory;
  tag: string;
  summary: string;
  details: string;
  metrics: string[];
};

export type DetailItem = {
  title: string;
  label: string;
  description: string;
  metric?: string;
};

export type TimelineMetric = {
  value: string;
  label: string;
  description: string;
};

export type ProductShowcase = {
  title: string;
  category: string;
  url: string;
  image: string;
  captureNote: string;
  summary: string;
  details: string[];
  capabilities: string[];
};

export const navItems = [
  { label: "Solution", href: "#solution" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Products", href: "#products" },
  { label: "BOI", href: "#boi" },
  { label: "Treasury", href: "#treasury" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
];

export const heroStats: Stat[] = [
  { value: "17+", label: "Completed Projects", detail: "Completed projects from the opening PDF slide." },
  { value: "$10M", label: "Fundraising", detail: "Fundraising track record shown in the PDF." },
  { value: "Global", label: "Exchange Listings & Partnerships", detail: "Global exchange listings and partnerships." },
  { value: "Full-Stack", label: "From Mainnet to Listing", detail: "Full-stack support from mainnet to listing." },
];

export const problemPoints = [
  "Legal and regulatory setup",
  "Technical execution",
  "Liquidity access",
  "Exchange listing",
  "Global expansion",
];

export const solutionCards: Feature[] = [
  {
    title: "Regulatory Environment",
    description:
      "Through Thailand BOI, we dramatically reduce the time and cost required to establish complex regulations.",
    icon: ShieldCheck,
    accent: "cyan",
  },
  {
    title: "Blockchain Solutions",
    description:
      "Support for advanced blockchain solutions reduces the burden of technology development and enhances project completeness.",
    icon: Blocks,
    accent: "violet",
  },
  {
    title: "Strategic In-Kind Investment",
    description:
      "With active in-kind investment in high-quality projects, we secure financial stability and growth momentum.",
    icon: Gem,
    accent: "mint",
  },
  {
    title: "Fast Market Entry & Listing",
    description:
      "With rapid execution, we support market entry and global exchange listing in a one-stop process to maximize value.",
    icon: Rocket,
    accent: "gold",
  },
];

export const portfolioCategories: Array<"All" | PortfolioCategory> = [
  "All",
  "Mainnet Infrastructure",
  "Web3 Platforms",
  "NFT & Digital Assets",
  "Payments & FinTech",
  "Wallet & Staking",
  "AI / Prediction",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "VAISEN Mainnet",
    category: "Mainnet Infrastructure",
    tag: "EVM Mainnet",
    summary: "Mainnet service built with a full EVM-based stack including wallet, explorer, and API.",
    details:
      "EVM-based blockchain mainnet, wallet, explorer, API, and payment system full-stack development. Includes patented wallet infrastructure.",
    metrics: ["Mainnet", "Wallet", "Explorer"],
  },
  {
    title: "Nicaragua KARUNA Bank ATM",
    category: "Payments & FinTech",
    tag: "Banking Partnership",
    summary: "Mainnet supply for Karuna Bank in Nicaragua and contract signed for 100 local currency to crypto ATMs.",
    details:
      "Signed a contract with KARUNA Bank in Nicaragua to build 100 ATMs. Supporting a blockchain mainnet-based global payment infrastructure business.",
    metrics: ["100 ATMs", "Banking", "Payments"],
  },
  {
    title: "BUYZONE.IO",
    category: "Web3 Platforms",
    tag: "Decentralized OTC",
    summary: "Decentralized OTC swap platform that generated $25M in real transactions and supports ETH, Polygon, and BNB.",
    details:
      "BUYZONE is a decentralized OTC platform that enables easy swaps using only a MetaMask wallet. Its model protects assets from liquidity attacks and maintains stable initial pricing.",
    metrics: ["OTC", "MetaMask", "SPOT"],
  },
  {
    title: "SMFI.IO",
    category: "Web3 Platforms",
    tag: "Music Copyright",
    summary: "Web3-based Spotify-inspired platform where users earn coins by listening after uploading music.",
    details:
      "SMFI.IO offers music copyright holders transparent and fair rewards through an innovative Web3.0 platform.",
    metrics: ["Rewards", "Music", "Web3"],
  },
  {
    title: "ARTII NFT",
    category: "NFT & Digital Assets",
    tag: "NFT Platform",
    summary: "World's first real-world fine art NFT platform with Andy Warhol and Picasso NFT issuance.",
    details:
      "Development of an NFT project and digital asset platform based on Picasso and Andy Warhol themes. Listed on Bittrex US exchange.",
    metrics: ["NFT", "Minting", "Assets"],
  },
  {
    title: "RealSun RWA",
    category: "NFT & Digital Assets",
    tag: "RWA",
    summary: "Solar NFT marketplace with purchase, sale, auction, and fractional ownership features.",
    details:
      "RealSun NFT and RealSun Wallet support solar NFT marketplace activity and Web3 wallet trading infrastructure.",
    metrics: ["RWA", "Tokenization", "Assets"],
  },
  {
    title: "HubMembershipPay",
    category: "Payments & FinTech",
    tag: "Membership Payment",
    summary: "Membership payment and commerce infrastructure for Web3-enabled payment operations.",
    details:
      "Built as part of the payments and fintech infrastructure track in the Speednano development portfolio.",
    metrics: ["Membership", "Payment", "Access"],
  },
  {
    title: "UniversePay",
    category: "Payments & FinTech",
    tag: "Global Payment",
    summary: "Global membership payment and settlement infrastructure from the payments and fintech portfolio.",
    details:
      "Payment infrastructure supporting global transaction routing, settlement, and digital asset payment operations.",
    metrics: ["Global", "Settlement", "Merchant"],
  },
  {
    title: "Kpay",
    category: "Payments & FinTech",
    tag: "FinTech",
    summary: "FinTech payment product for digital commerce, wallet access, and partner payment operations.",
    details:
      "Implemented as a Web3 payment service within the broader payment infrastructure portfolio.",
    metrics: ["FinTech", "Commerce", "Wallet"],
  },
  {
    title: "Blockpay",
    category: "Payments & FinTech",
    tag: "Blockchain Payment",
    summary: "Blockchain-based payment and settlement solution for practical payment workflows.",
    details:
      "Built to support token-based payments, settlement, and digital asset utility inside partner ecosystems.",
    metrics: ["Blockchain", "Payment", "Utility"],
  },
  {
    title: "GEC Wallet",
    category: "Wallet & Staking",
    tag: "Wallet",
    summary: "Renewable energy Web3.0 project with GEC Wallet digital asset management system.",
    details:
      "GEC Wallet provides digital asset management infrastructure for renewable energy Web3.0 use cases.",
    metrics: ["Wallet", "Custody", "Access"],
  },
  {
    title: "Staking Platform",
    category: "Wallet & Staking",
    tag: "Yield Infrastructure",
    summary: "Staking platform infrastructure for ETH staking, yield operation, and treasury-linked growth.",
    details:
      "Designed for staking participation, yield accounting, treasury compounding, and automated rewards.",
    metrics: ["Staking", "Yield", "Treasury"],
  },
  {
    title: "AI Prediction Solution",
    category: "AI / Prediction",
    tag: "AI Analytics",
    summary: "AI prediction solution from the Web3 solutions and development chapter.",
    details:
      "Technical infrastructure for AI prediction and Web3 solution development.",
    metrics: ["AI", "Signals", "Prediction"],
  },
];

export const productShowcases: ProductShowcase[] = [
  {
    title: "RealSun Wallet",
    category: "RWA - Wallet",
    url: "https://wallet.realsun.info",
    image: "/assets/products/realsun-wallet-new.png",
    captureNote: "New dashboard capture supplied by client",
    summary:
      "A wallet dashboard for the RealSun RWA ecosystem, showing RSP balance, fixed rate reference, P2P locked balance, available balance, and quick actions for buying, sending, DEX, P2P, and withdrawals.",
    details: [
      "Turns RealSun from a concept into a usable RWA wallet interface with visible balance, rate, and transaction entry points.",
      "The dashboard supports user-friendly actions such as Buy, QR Send/Receive, Send RSP, DEX, P2P, and Withdraw.",
      "Strategically, it connects asset participation, wallet access, and RWA liquidity actions inside one product flow.",
    ],
    capabilities: ["RSP wallet", "P2P balance", "DEX access", "QR send/receive"],
  },
  {
    title: "RealSun Platform",
    category: "NFT Mall",
    url: "https://realsun.info",
    image: "/assets/products/realsun-nft-mall.png",
    captureNote: "Public capture from RealSun homepage and platform section.",
    summary:
      "An information and participation platform where users explore operational data, generation statistics, and project participation information for real solar power businesses operating in Korea.",
    details: [
      "Supports non-custodial wallet integration with multi-sig protection.",
      "Enables direct minting of Solar NFTs backed by verified plant data.",
      "Includes a payment bridge for fiat on-ramp and crypto payment support.",
    ],
    capabilities: ["Solar NFT minting", "Wallet connection", "Payment bridge"],
  },
  {
    title: "SMFI.IO",
    category: "SMFI - MusicFi",
    url: "https://smfi.io",
    image: "/assets/products/smfi-new.png",
    captureNote: "New application dashboard capture supplied by client",
    summary:
      "A live MusicFi-style consumer platform where users can explore music, upload tracks, join battle mechanics, browse NFTs, and interact with trending releases.",
    details: [
      "The product screen shows a full app experience with trending music cards, new releases, loved tracks, upload access, battle mode, notes, wallet, and profile navigation.",
      "Designed around music discovery, creator participation, and reward-oriented user activity.",
      "Fits the portfolio as a consumer-facing Web3 platform that can connect copyright, community engagement, NFTs, and creator monetization.",
    ],
    capabilities: ["Music discovery", "Upload", "Battle mode", "NFTs", "Wallet"],
  },
  {
    title: "BUYZONE.IO",
    category: "SmartOTC Swap Platform",
    url: "https://buyzone.io",
    image: "/assets/products/buyzone-new.png",
    captureNote: "New marketplace capture supplied by client",
    summary:
      "A P2P token marketplace for direct ERC-20 token trading across Ethereum, Polygon, and BNB Chain, with token listings, analytics, affiliate rewards, and wallet connection.",
    details: [
      "The product screen presents active token listings, chain filters, marketplace search, token price, available supply, sold progress, and seller wallet references.",
      "Supports wallet-based market access through a Connect Wallet flow, reducing friction for Web3 users.",
      "Strategically useful for early project market entry because it combines OTC/P2P distribution, multi-chain support, and liquidity access before broader listing.",
    ],
    capabilities: ["P2P marketplace", "ERC-20 swaps", "Multi-chain", "Affiliate rewards"],
  },
  {
    title: "HUBpay",
    category: "Payment - HubMembership",
    url: "https://hubmembership.info",
    image: "/assets/products/hubmembership-new.png",
    captureNote: "New wallet dashboard capture supplied by client",
    summary:
      "A HUBpay payment wallet dashboard for membership-based payment flows, showing Hpoint balance, token balances, charge/conversion actions, quick menu payment tools, and mobile navigation.",
    details: [
      "The screen shows a practical user wallet with Hpoint balance, KRW equivalent, BNB/USDT/HEP balances, charge, conversion, payment, transfer, gift, and exchange actions.",
      "Supports membership-oriented payment and settlement journeys for communities or partner services.",
      "Fits the payments and fintech infrastructure track by connecting wallet balances, payment actions, and mobile-first user access.",
    ],
    capabilities: ["Hpoint wallet", "Charge", "Conversion", "Payment", "Transfer"],
  },
];

export const exchangeListings: DetailItem[] = [
  {
    title: "ProBit Global",
    label: "Exchange Listing",
    description:
      "Supported listing strategy and market entry planning for ProBit Global exchange. Successfully completed the listing by integrating marketing, community, and liquidity strategies.",
    metric: "Project F / Project Z",
  },
  {
    title: "Bittrex",
    label: "Global Exchange Support",
    description:
      "Supported listing on the U.S.-based Bittrex exchange and executed a global exchange integration strategy. Analyzed the regulatory environment and expanded access to global investors.",
    metric: "Project A",
  },
  {
    title: "India Inocyx",
    label: "OTC Infrastructure",
    description:
      "Signed an OTC supply agreement with India's Inocyx exchange and collaborated on global liquidity provision. Expanded the liquidity network across Asian markets.",
    metric: "OTC Partner",
  },
  {
    title: "Punkvism Network",
    label: "Global Community",
    description:
      "Supported the buildout of a U.S.-based Punkvism global community network. Executed Web3 ecosystem partnership infrastructure and blockchain community expansion strategies.",
    metric: "Community",
  },
  {
    title: "Binance",
    label: "Tier 1 Global",
    description:
      "Provided strategy development, requirement analysis, marketing, and community preparation consulting for listing on Binance, the world's largest exchange.",
    metric: "Listing Prep",
  },
  {
    title: "OKX",
    label: "Tier 1 Global",
    description:
      "End-to-end consulting for the OKX listing process. Supported global liquidity acquisition and investor access strategies for Asia and the Middle East.",
    metric: "Market Access",
  },
  {
    title: "Huobi",
    label: "Greater China / SEA",
    description:
      "Huobi global listing consulting and market entry strategy for Greater China and Southeast Asia. Local community building and marketing support.",
    metric: "Regional Growth",
  },
  {
    title: "Upbit / Bithumb",
    label: "Korea Tier 1",
    description:
      "Analyzed listing requirements for Korea's largest exchanges and prepared KYC and AML compliance strategies to maximize access for Korean investors.",
    metric: "Korea Access",
  },
];

export const companyBuilderPillars: DetailItem[] = [
  {
    title: "Blockchain Company Builder",
    label: "Vision 2025+",
    description:
      "We discover promising blockchain projects and participate directly as co-builders by contributing technology, corporate structure, and licenses as in-kind investments. We work together from the idea stage through global market entry.",
    metric: "Company Builder",
  },
  {
    title: "Ethereum Treasury Company",
    label: "Treasury Strategy",
    description:
      "We operate a treasury strategy that accumulates project revenue and partnership equity in Ethereum (ETH). In the long term, we increase ETH holdings to continuously grow corporate asset value.",
    metric: "ETH Core",
  },
  {
    title: "In-Kind License Investment",
    label: "Company Builder",
    description:
      "We invest in-kind through Thailand BOI, FBL, blockchain licenses for RWA, ICO, NFT, and U.S. Wyoming licenses so partner projects can secure a legally compliant operating structure immediately.",
    metric: "License Leverage",
  },
];

export const boiCards: Feature[] = [
  {
    title: "BOI-approved entity",
    description: "An entity officially approved by Thailand's Board of Investment. It provides tax incentives, foreign land ownership, and visa quotas, securing a top-tier business position in Thailand as a Southeast Asian Web3 hub.",
    icon: Building2,
    accent: "cyan",
  },
  {
    title: "Foreign Business License",
    description: "With a Foreign Business License, foreign companies can legally operate in Thailand even in restricted sectors, creating a legal basis for blockchain, fintech, and digital asset services.",
    icon: Landmark,
    accent: "violet",
  },
  {
    title: "Blockchain license pathway for RWA, ICO, NFT",
    description: "Through Thailand's SEC and related authorities, it is possible to legally obtain licenses for RWA tokenization, ICO issuance, and NFT platform operations.",
    icon: LockKeyhole,
    accent: "mint",
  },
  {
    title: "Wyoming digital asset structure",
    description: "Wyoming provides DAO LLC structures, legal protection for NFT assets, and digital asset-friendly laws, enhancing access to U.S. investors and global credibility.",
    icon: BriefcaseBusiness,
    accent: "gold",
  },
  {
    title: "Southeast Asia Web3 hub",
    description: "As of 2024, Thailand is the largest cryptocurrency market in Southeast Asia. The BOI entity is positioned at the center of this market.",
    icon: Globe2,
    accent: "cyan",
  },
  {
    title: "Fast project launch",
    description: "Launch ICO, NFT, and RWA projects quickly on a legally compliant structure without complex regulations.",
    icon: Rocket,
    accent: "violet",
  },
];

export const treasuryCards: Feature[] = [
  {
    title: "ETH Accumulation Strategy",
    description: "Hold and manage ETH as a core reserve asset. A strategy for transitioning corporate finance into digital assets.",
    icon: Coins,
    accent: "cyan",
  },
  {
    title: "Stablecoin Reserve",
    description: "Manage reserves based on USDT and USDC stablecoins. Stabilize liquidity and hedge risk.",
    icon: CircleDollarSign,
    accent: "mint",
  },
  {
    title: "Yield Infrastructure",
    description: "Build a yield infrastructure based on DeFi protocols. Maximize the return on treasury assets.",
    icon: DatabaseZap,
    accent: "violet",
  },
  {
    title: "RWA-linked Strategy",
    description: "Treasury strategy linked to real-world assets (RWA). Hybrid management of digital and physical assets.",
    icon: Landmark,
    accent: "gold",
  },
  {
    title: "Staking & Treasury Management",
    description: "Integrated operation of ETH staking yield and treasury management. Designed for compound growth.",
    icon: CandlestickChart,
    accent: "cyan",
  },
  {
    title: "Digital Asset Portfolio Operation",
    description: "Multi-asset portfolio management. Strategic rebalancing according to market cycles.",
    icon: LineChart,
    accent: "violet",
  },
];

export const capitalInfrastructure: DetailItem[] = [
  {
    title: "Strategic Capital Infrastructure",
    label: "Treasury & Investment",
    description:
      "Based on the Thailand BOI entity structure, we build a digital asset treasury system for the strategic management of investor capital and long-term enterprise value growth.",
    metric: "Institutional",
  },
  {
    title: "5-Year Convertible Bond",
    label: "Investor Participation",
    description:
      "5-Year Convertible Bond Structure - a stable long-term investment participation structure.",
    metric: "5-Year",
  },
  {
    title: "Convertible to Equity",
    label: "Future Conversion",
    description:
      "Future equity conversion possible - direct participation in corporate growth value.",
    metric: "Equity Path",
  },
  {
    title: "Treasury-Backed Strategy",
    label: "ETH Treasury",
    description:
      "Digital asset-based operating strategy - backed by ETH treasury.",
    metric: "ETH-Linked",
  },
];

export const investorModel: DetailItem[] = [
  {
    title: "Investor Capital",
    label: "Capital Inflow",
    description: "Investors participate in capital through convertible bonds or strategic partnerships.",
  },
  {
    title: "Ethereum Treasury",
    label: "ETH Treasury Operations",
    description: "Incoming capital is converted into and managed through ETH-based treasury operations.",
  },
  {
    title: "Asset Growth",
    label: "Asset Growth",
    description: "Asset value grows through staking, DeFi, and RWA-linked strategies.",
  },
  {
    title: "Investor Distribution Structure",
    label: "Distribution Structure",
    description: "Convertible bond value appreciation plus equity conversion plus revenue distribution structure.",
  },
];

export const vipTreasuryCards: DetailItem[] = [
  {
    title: "Private ETH Treasury Service",
    label: "VIP Service",
    description:
      "Private Ethereum Treasury management services for high-net-worth individuals and strategic partners.",
  },
  {
    title: "Ethereum Asset Strategy",
    label: "Asset Strategy",
    description:
      "Long-term ETH asset strategy development and portfolio optimization.",
  },
  {
    title: "RWA-linked Treasury Design",
    label: "RWA Strategy",
    description:
      "Treasury design linked to real-world assets. Digital-physical hybrid strategy.",
  },
];

export const ethTreasuryGoals: TimelineMetric[] = [
  {
    value: "1,500 ETH",
    label: "Year 1 - 2026",
    description: "Initial treasury build-out phase.",
  },
  {
    value: "5,000 ETH",
    label: "Year 2 - 2027",
    description: "Expanded staking plus DeFi compounding operations.",
  },
  {
    value: "15,000 ETH",
    label: "Year 3 - 2028",
    description: "Goal to become Asia's largest blockchain treasury.",
  },
];

export const financialProjection: TimelineMetric[] = [
  {
    value: "$8.35M",
    label: "Estimated NAV - 2026",
    description: "Estimated NAV for Year 1 based on solution packages, infrastructure rental revenue, project equity value, and 1,500 ETH target accumulation.",
  },
  {
    value: "$29.8M",
    label: "Estimated NAV - 2027",
    description: "Estimated NAV for Year 2 with $4,500,000 solution packages and infrastructure rental revenue, $10,000,000 estimated equity value, and 5,000 ETH target accumulation.",
  },
  {
    value: "$92M",
    label: "Estimated NAV - 2028",
    description: "Estimated NAV for Year 3 with $12,000,000 solution packages and infrastructure rental revenue, $35,000,000 estimated equity value, and 15,000 ETH target accumulation.",
  },
];

export const teamStructure: DetailItem[] = [
  {
    title: "Leadership",
    label: "Key Members",
    description:
      "Choi, Chairman, leads decision-making and direction for the overall project operation, driving growth for investors and partners.",
  },
  {
    title: "Danny",
    label: "CEO",
    description:
      "Identifies outstanding projects and participates in investment decisions, while supporting projects to establish themselves in the global market and continue to grow.",
  },
  {
    title: "Jaian",
    label: "Global Community",
    description:
      "Builds global communities and establishes strong brand awareness, expanding into worldwide blockchain communities and networks to support fundraising, networking, and partnerships.",
  },
  {
    title: "Continuous Global Talent Acquisition",
    label: "Global Team Members",
    description:
      "We strengthen our team and capabilities through diverse experts and partnerships for successful Web3 projects.",
  },
];

export const roadmapItems = [
  {
    year: "2026",
    title: "Activate Global Operating Base",
    description:
      "Activate Thailand entity, establish Dubai Web3 development company, and secure large-scale partnerships.",
  },
  {
    year: "2027",
    title: "Launch RWA and Joint Ventures",
    description:
      "Simultaneous RWA projects in the U.S. and Thailand; diversify joint ventures based on a Chula license and deploy 5,000 ETH.",
  },
  {
    year: "2028+",
    title: "Scale Treasury Leadership",
    description:
      "Target major blockchain holding company growth and treasury leadership across Asia.",
  },
];

export const teamCards: Feature[] = [
  {
    title: "Development Experts",
    description: "Elite development team for building innovative blockchain solutions and implementing technology.",
    icon: Cpu,
    accent: "cyan",
  },
  {
    title: "Global Influencers",
    description: "A Web3-focused influencer network for strong marketing and community building.",
    icon: Sparkles,
    accent: "violet",
  },
  {
    title: "Strategic Partners",
    description: "Strategic collaboration partners across industries including technology, finance, and media.",
    icon: Handshake,
    accent: "mint",
  },
  {
    title: "Expert Advisory Group",
    description: "A top-tier advisory group of experts in law, finance, technology, and market strategy.",
    icon: Users2,
    accent: "gold",
  },
];

export const ctaCards = [
  {
    title: "Project Partnership",
    description: "Project partnership and in-kind investment inquiries.",
    icon: Network,
  },
  {
    title: "Treasury Partnership",
    description: "Ethereum Treasury partnerships and strategic collaboration inquiries.",
    icon: WalletCards,
  },
  {
    title: "VIP Treasury Service",
    description: "Private treasury service inquiries for high-net-worth individuals.",
    icon: BarChart3,
  },
  {
    title: "Request Investor Deck",
    description: "Request detailed materials for investors.",
    icon: Layers3,
  },
];
