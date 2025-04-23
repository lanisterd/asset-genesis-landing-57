
// Portfolio Data Types
export interface PortfolioItem {
  venture_name: string;
  slug: string;
  tagline: string;
  website: string;
  sectors: string[];
  stage: "Idea" | "MVP" | "Funded" | "Launched";
  tech_stack: string[];
  launch_year?: number;
  key_impact: string;
  modules_used: string[];
  image: string;
  description: string;
  challenge_opportunity: string;
  solution_stack: string[];
  results?: {
    stats: { label: string; value: string }[];
    testimonials?: { quote: string; author: string; role?: string }[];
  };
  status: "live" | "coming-soon";
  color?: string; // For category-based styling
}

// Portfolio Items Data
export const portfolioItems: PortfolioItem[] = [
  {
    venture_name: "1 Asset Labs",
    slug: "1-asset-labs",
    tagline: "Internal Venture Builder for MVPs and Agentic AI Products",
    website: "https://1assetlabs.com",
    sectors: ["Tech", "Innovation", "Venture Studio"],
    stage: "Launched",
    tech_stack: ["AI", "Web3", "MVP Development"],
    launch_year: 2023,
    key_impact: "Rapid prototype development and AI-enabled product launching",
    modules_used: ["Agentic AI", "No-code Builders", "Web3 Infrastructure"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    description: "1 Asset Labs serves as the internal venture studio for rapidly developing and testing new product concepts with a focus on agentic AI and blockchain technologies.",
    challenge_opportunity: "Traditional product development cycles are too slow for emerging tech markets. 1 Asset Labs creates rapid prototypes that can be tested and scaled within weeks instead of months.",
    solution_stack: ["No-code MVP builders", "Agentic AI integration", "Token-ready architecture", "User testing frameworks"],
    results: {
      stats: [
        { label: "Products Launched", value: "12+" },
        { label: "Average MVP Timeline", value: "3 weeks" },
        { label: "Success Rate", value: "73%" }
      ],
      testimonials: [
        { quote: "The Labs team cut our go-to-market time in half while adding AI capabilities we hadn't even considered.", author: "Internal Product Lead", role: "Partner" }
      ]
    },
    status: "live",
    color: "#FFC107" // Gold/yellow for innovation
  },
  {
    venture_name: "Expert Circles",
    slug: "expert-circles",
    tagline: "Tokenized Expert Economy Platform",
    website: "https://expertcircles.com",
    sectors: ["Knowledge Economy", "Creator Tools", "Web3"],
    stage: "MVP",
    tech_stack: ["Tokenization", "Marketplace", "Content Management"],
    launch_year: 2023,
    key_impact: "Tokenized knowledge economy built for experts, coaches, and educators",
    modules_used: ["Expert Badge Generator", "Marketplace Infra", "Token Gated Tools"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
    description: "Expert Circles empowers knowledge workers, coaches, and educators to tokenize their expertise and monetize their content through a decentralized platform.",
    challenge_opportunity: "Most experts rely on generic platforms for credibility and monetization. Expert Circles builds native infrastructure that reflects and rewards their value.",
    solution_stack: ["AI-generated Expert Profiles", "Tokenized IP Registry", "Digital Product Storefronts", "Affiliate/DAO Mechanisms"],
    results: {
      stats: [
        { label: "Verified Experts", value: "30+" },
        { label: "Pre-Seed Revenue", value: "$15K+" },
        { label: "Founding NFT", value: "Sold Out" }
      ],
      testimonials: [
        { quote: "This is Shopify for the expert economy. Beautiful, flexible, and future-proof.", author: "Early Expert Circle Member" }
      ]
    },
    status: "live",
    color: "#9C27B0" // Purple for knowledge
  },
  {
    venture_name: "1 Asset Fan Club (DAO)",
    slug: "1-asset-fan-club",
    tagline: "Decentralized Fan Engagement & Token Utility Layer",
    website: "https://1assetfanclub.com",
    sectors: ["Community", "DAO", "Entertainment"],
    stage: "MVP",
    tech_stack: ["DAO Tools", "Token Governance", "Community Management"],
    launch_year: 2023,
    key_impact: "Transforming passive audiences into active stakeholders through decentralized governance",
    modules_used: ["Token Gating", "DAO Governance", "Reward Systems"],
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&w=500&q=80",
    description: "1 Asset Fan Club converts traditional fan relationships into active community participation through decentralized governance and token-based rewards.",
    challenge_opportunity: "Fans want deeper engagement with brands and creators but lack the infrastructure to participate meaningfully. Our DAO layer enables true ownership and governance.",
    solution_stack: ["Token-based Voting", "Community Treasury", "Tiered Access System", "Cross-platform Integration"],
    results: {
      stats: [
        { label: "Active Members", value: "1,200+" },
        { label: "Governance Proposals", value: "45+" },
        { label: "Avg. Engagement", value: "+220%" }
      ],
      testimonials: [
        { quote: "Our community transformed from casual followers to strategic partners almost overnight.", author: "Entertainment Partner", role: "Studio Executive" }
      ]
    },
    status: "live",
    color: "#4CAF50" // Green for community
  },
  {
    venture_name: "Alpha Capital",
    slug: "alpha-capital",
    tagline: "F&B Digitization & Franchise Enablement",
    website: "https://alphacapital.com.sa",
    sectors: ["F&B", "Franchise", "Digitization"],
    stage: "Launched",
    tech_stack: ["Digital Transformation", "Franchise Management", "Payment Systems"],
    launch_year: 2022,
    key_impact: "Modernizing traditional F&B businesses with digital infrastructure and franchise models",
    modules_used: ["Digital Operations", "Franchise Management", "Automated Workflows"],
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=500&q=80",
    description: "Alpha Capital brings digital transformation to the food and beverage industry by enabling franchise models and operational efficiency through technology.",
    challenge_opportunity: "Traditional F&B businesses struggle with digitization and scaling. We provide the infrastructure to transform local successes into franchisable operations.",
    solution_stack: ["Digital Operations Platform", "Franchise Management Tools", "Brand Standardization", "Multi-location Analytics"],
    results: {
      stats: [
        { label: "Businesses Transformed", value: "12" },
        { label: "Revenue Growth", value: "+35%" },
        { label: "Operational Costs", value: "-22%" }
      ],
      testimonials: [
        { quote: "We went from a local restaurant to a 6-location franchise in 18 months with Alpha's platform.", author: "Restaurant Owner", role: "Client" }
      ]
    },
    status: "live",
    color: "#FF5722" // Orange for F&B
  },
  {
    venture_name: "RDM Wallet",
    slug: "rdm-wallet",
    tagline: "Responsible Decision-Making Wallet with Ethical Spending Logic",
    website: "https://rdmwallet.xyz",
    sectors: ["FinTech", "Ethical Finance", "SocFi"],
    stage: "MVP",
    tech_stack: ["Purpose-Bound Tokens", "Ethics Filtering", "AI Behavior Analytics"],
    launch_year: 2023,
    key_impact: "Introduces programmable consent layers for financial decision-making",
    modules_used: ["Purpose-Bound Tokens", "Ethics Filtering", "AI Behavior Analytics"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80",
    description: "RDM Wallet introduces ethical guardrails and programmable consent layers to financial decision-making, allowing users to align spending with their values.",
    challenge_opportunity: "Traditional wallets facilitate spending, but not mindful spending. RDM Wallet embeds ethical layers and behavioral checks into every transaction.",
    solution_stack: ["Token permissions", "Ethical guardrails", "Spend recommendations", "Programmable restrictions"],
    results: {
      stats: [
        { label: "Test Users", value: "50" },
        { label: "Improved Spending Clarity", value: "45%" },
        { label: "NGO Interest", value: "Strong" }
      ],
      testimonials: [
        { quote: "It's not just a wallet. It's an accountability layer for values-driven finance.", author: "Early Tester" }
      ]
    },
    status: "live",
    color: "#2196F3" // Blue for finance
  },
  {
    venture_name: "BigWater",
    slug: "bigwater",
    tagline: "DePIN-Powered Water Intelligence Protocol",
    website: "https://bigwater.xyz",
    sectors: ["DePIN", "Sustainability", "Water"],
    stage: "Funded",
    tech_stack: ["DePIN Stack", "IoT", "Blockchain"],
    launch_year: 2023,
    key_impact: "Built a decentralized water intelligence network for equitable water distribution",
    modules_used: ["DePIN Stack", "Node Rewards", "Governance Tools"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&q=80",
    description: "BigWater creates a decentralized physical infrastructure network (DePIN) for water monitoring, distribution, and governance through tokenized incentives.",
    challenge_opportunity: "Billions of gallons of water go untracked or wasted due to siloed infrastructure and opaque distribution data. BigWater solves this with on-chain data contribution incentives.",
    solution_stack: ["Real-time sensor data", "Blockchain sync", "Tokenized incentives", "Verified water footprints"],
    results: {
      stats: [
        { label: "Sensor Nodes", value: "20+" },
        { label: "Water Data Contributions", value: "3K+" },
        { label: "Protocol Partnerships", value: "Initiated" }
      ],
      testimonials: [
        { quote: "We went from isolated water monitoring to a live intelligence layer for water justice.", author: "BigWater Core Contributor" }
      ]
    },
    status: "live",
    color: "#03A9F4" // Light blue for water
  },
  {
    venture_name: "1 Asset Movies",
    slug: "1-asset-movies",
    tagline: "Tokenized Film Funding & Fan Equity Marketplace",
    website: "https://1assetmovies.com",
    sectors: ["Film", "Entertainment", "Tokenization"],
    stage: "Launched",
    tech_stack: ["Tokenization", "Fan Engagement", "Revenue Distribution"],
    launch_year: 2022,
    key_impact: "Raised $150K+ through fan-tokenized film funding",
    modules_used: ["Token Vault", "Fan DAO Club", "Revenue Distribution"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80",
    description: "1 Asset Movies revolutionizes film financing by enabling fans to directly invest in and own a stake in films through tokenization.",
    challenge_opportunity: "Traditional film financing lacks transparency and excludes fans. We created a token-powered fan investment engine.",
    solution_stack: ["Tokenized IP Vault", "DAO Fan Club", "Smart Revenue Distribution", "Global Distribution Rights"],
    results: {
      stats: [
        { label: "Fans Onboarded", value: "3,000+" },
        { label: "First-time Investors", value: "80%" },
        { label: "IPs Pre-funded", value: "2" }
      ],
      testimonials: [
        { quote: "Tokenizing our story gave us more than capital — it gave us community, purpose, and global reach.", author: "Independent Tamil Producer" }
      ]
    },
    status: "live",
    color: "#E91E63" // Pink for entertainment
  },
  {
    venture_name: "1 Asset IP Vault",
    slug: "1-asset-ip-vault",
    tagline: "Tokenized IP Registry and Licensing Infrastructure",
    website: "",
    sectors: ["IP Rights", "Legal Tech", "Licensing"],
    stage: "Idea",
    tech_stack: ["Smart Contracts", "Rights Management", "Licensing Automation"],
    key_impact: "Simplifying IP management and licensing through tokenization",
    modules_used: ["Smart Contracts", "Rights Registry", "Licensing Templates"],
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=500&q=80",
    description: "1 Asset IP Vault creates a decentralized registry for intellectual property that simplifies licensing, royalty distribution, and IP management.",
    challenge_opportunity: "IP rights management is complex and often inaccessible. Our solution streamlines the process through smart contracts and standardized templates.",
    solution_stack: ["Tokenized IP Registry", "Automated Licensing", "Royalty Distribution", "Rights Verification"],
    status: "coming-soon",
    color: "#3F51B5" // Indigo for legal/IP
  },
  {
    venture_name: "Echelon Productions",
    slug: "echelon-productions",
    tagline: "Web3-Native Entertainment Studio & Film IP Partner",
    website: "",
    sectors: ["Entertainment", "Production", "Web3"],
    stage: "Idea",
    tech_stack: ["Content Production", "IP Management", "Distribution"],
    key_impact: "Integrating web3 principles into traditional entertainment production",
    modules_used: ["Production Workflow", "Community Engagement", "IP Management"],
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=500&q=80",
    description: "Echelon Productions is a web3-native entertainment studio that integrates blockchain technology into traditional film and content production workflows.",
    challenge_opportunity: "Entertainment production remains siloed and inefficient. Echelon brings web3 principles to streamline collaboration, financing, and distribution.",
    solution_stack: ["Decentralized Production", "Community-Driven Content", "Token-Powered Distribution", "Cross-Platform IP"],
    status: "coming-soon",
    color: "#9C27B0" // Purple for entertainment
  }
];

// Helper functions for portfolio data
export const getFeaturedPortfolioItems = (): PortfolioItem[] => {
  // Return a curated list of featured items (adjust as needed)
  return portfolioItems.filter(item => item.status === "live").slice(0, 4);
};

export const getLivePortfolioItems = (): PortfolioItem[] => {
  return portfolioItems.filter(item => item.status === "live");
};

export const getComingSoonPortfolioItems = (): PortfolioItem[] => {
  return portfolioItems.filter(item => item.status === "coming-soon");
};

export const getPortfolioItemBySlug = (slug: string): PortfolioItem | undefined => {
  return portfolioItems.find(item => item.slug === slug);
};

// Get unique sectors for filtering
export const getUniqueSectors = (): string[] => {
  const sectors = new Set<string>();
  portfolioItems.forEach(item => {
    item.sectors.forEach(sector => sectors.add(sector));
  });
  return Array.from(sectors).sort();
};

// Get unique stages for filtering
export const getUniqueStages = (): string[] => {
  const stages = new Set<string>();
  portfolioItems.forEach(item => {
    stages.add(item.stage);
  });
  return Array.from(stages).sort();
};

// Get unique tech stacks for filtering
export const getUniqueTechStacks = (): string[] => {
  const techStacks = new Set<string>();
  portfolioItems.forEach(item => {
    item.tech_stack.forEach(tech => techStacks.add(tech));
  });
  return Array.from(techStacks).sort();
};

// Get unique launch years for filtering
export const getUniqueLaunchYears = (): number[] => {
  const years = new Set<number>();
  portfolioItems.forEach(item => {
    if (item.launch_year) {
      years.add(item.launch_year);
    }
  });
  return Array.from(years).sort();
};
