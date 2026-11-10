export const profile = {
  name: "Gaurav Kumar",
  initials: "GK",
  role: "Software Developer & Blockchain Developer",
  location: "Hyderabad, India",
  email: "gauravkumar7294144@gmail.com",
  phone: "+91 7294144084",
  github: "https://github.com/gauravkumar7294",
  linkedin: "https://www.linkedin.com/in/gaurav-kum%C3%A0r-7a31a7254",
  leetcode: "https://www.leetcode.com/gauravkumar7294144",
  resume: "/Gaurav_Kumar_Resume.pdf",
  bio: "I build reliable full-stack products and blockchain systems—from Next.js platforms and Rust services to Solana programs, Ethereum contracts, and zero-knowledge proofs. I care about clean architecture, secure defaults, and shipping useful software.",
  shortBio:
    "B.Tech ECE engineer focused on software engineering, distributed systems, and decentralized applications. Currently working as a Software Developer & Instructor while building production-style Web3 and full-stack projects.",
};

export const stats = [
  { value: "900+", label: "Students supported" },
  { value: "60+", label: "Instructors enabled" },
  { value: "1K+", label: "IoT readings / day" },
  { value: "15+", label: "Featured builds" },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Rust", "TypeScript", "JavaScript", "Solidity", "C++", "SQL", "Noir"],
  },
  {
    title: "Blockchain & Web3",
    items: [
      "Ethereum",
      "Solana",
      "Smart Contracts",
      "Anchor",
      "OpenZeppelin",
      "Chainlink CRE",
      "SPL Tokens",
      "PDAs",
      "Solana Web3.js / Solana Kit",
      "Wallet Integration",
    ],
  },
  {
    title: "Zero-Knowledge & Cryptography",
    items: ["ZKPs", "zk-SNARKs", "Noir", "Groth16", "Poseidon Hashing", "Merkle Trees"],
  },
  {
    title: "Backend & Databases",
    items: ["Next.js", "React.js", "Node.js", "Axum", "Actix Web", "REST APIs", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Engineering Tools",
    items: ["Docker", "Kubernetes", "AWS", "Linux/Ubuntu", "Git", "GitHub", "Postman", "Vim", "GraphQL"],
  },
];

export const experience = [
  {
    company: "Nxtwave Disruptive Technologies Private Limited",
    role: "Software Developer & Instructor",
    period: "Sep 2026 - Present",
    location: "Hyderabad, India",
    points: [
      "Developed an internal Next.js Instructor Evaluation Platform serving 900+ students and 60+ instructors, with student progress tracking, interaction logging, and instructor workflows.",
      "Built backend functionality using Next.js API Routes and Server Actions with PostgreSQL, designing schemas for student profiles, instructor interactions, progress tracking, and historical records.",
      "Implemented authentication, session management, and role-based access control with 4-hour session expiry and instructor-specific permissions for assigned students.",
    ],
  },
  {
    company: "National Institute of Technology Patna",
    role: "Summer Internship Research Intern",
    period: "May 2025 - June 2025",
    location: "Patna, India",
    points: [
      "Built a full-stack IoT smart agriculture platform using React.js and REST APIs, processing 1000+ sensor data points daily.",
      "Implemented token-based authentication with Clerk and integrated real-time IoT monitoring and automation workflows for remote device management.",
    ],
  },
];

export const education = [
  {
    school: "National Institute of Technology Raipur",
    degree: "Bachelor of Technology - Electronics and Communication Engineering",
    period: "2022 - 2026",
    location: "Raipur, Chhattisgarh",
    courses: ["Operating Systems", "C++", "Data Structures & Algorithms", "OOP", "Computer Networks"],
  },
];

export type Project = {
  title: string;
  category: "Blockchain" | "Full-Stack" | "Systems";
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  metrics?: string[];
  year?: string;
};

export const projects: Project[] = [
  {
    title: "LoomZK",
    category: "Blockchain",
    description:
      "Solana stablecoin lending protocol with SOL-collateralized USDC/USDT loans, oracle-validated pricing, rule-based liquidation, on-chain escrow, proof-of-reserves dashboard, and Groth16 repayment certificates.",
    tech: ["Rust", "Anchor", "Solana", "Circom", "Groth16", "TypeScript", "Next.js", "Pyth", "Chainlink", "LiteSVM"],
    github: "https://github.com/gauravkumar7294/loomZk",
    demo: "https://loomzk.vercel.app/",
    metrics: ["2x collateral", "12% fixed rate", "281 LiteSVM tests"],
    year: "Oct 2026",
  },
  {
    title: "Solana Prediction Market",
    category: "Blockchain",
    description:
      "Decentralized prediction market dApp supporting YES/NO markets, SOL betting, outcome resolution, proportional payouts, wallet integration, and on-chain settlement.",
    tech: ["Solana", "Rust", "Anchor", "Next.js", "React", "TypeScript", "Tailwind CSS", "Codama", "PDA", "LiteSVM"],
    github: "https://github.com/gauravkumar7294/Prediction-Market",
    metrics: ["YES/NO markets", "PDA accounts", "Checked arithmetic"],
    year: "Aug 2026",
  },
  {
    title: "Decentralized Escrow on Solana",
    category: "Blockchain",
    description:
      "Trustless peer-to-peer escrow for SPL token swaps using PDA-based custodial vaults, atomic transactions, refunds, CPI transfers, and Token-2022 compatibility.",
    tech: ["Rust", "Solana", "Anchor", "SPL Token", "Token-2022", "LiteSVM", "PDA", "CPI"],
    github: "https://github.com/gauravkumar7294/Decentralized-Escrow-System-on-Solana",
    metrics: ["Atomic settlement", "Secure refunds", "Account validation"],
    year: "Jun 2026",
  },
  {
    title: "Solana On-Chain Voting Protocol",
    category: "Blockchain",
    description:
      "On-chain voting protocol with poll creation, candidate registration, vote casting, state management, time-based access control, and PDA-based accounts.",
    tech: ["Solana", "Rust", "Anchor", "TypeScript", "PDAs", "LiteSVM"],
    github: "https://github.com/gauravkumar7294/Solana_On_Chain_Voting_Protocol",
    metrics: ["Poll lifecycle", "Time windows", "Integration tests"],
    year: "May 2026",
  },
  {
    title: "Private Transfers",
    category: "Blockchain",
    description:
      "Privacy-preserving SOL transfers using Noir circuits, Groth16 proofs, Merkle commitments, and on-chain verification so users can withdraw without revealing the original deposit.",
    tech: ["Solana", "Noir", "Groth16", "Sunspot", "Anchor", "TypeScript", "Merkle Trees"],
    github: "https://github.com/gauravkumar7294/Private_Transfers",
    metrics: ["ZK withdrawal proofs", "Shared liquidity pool", "On-chain verification"],
    year: "Sep 2026",
  },
  {
    title: "Ethereum Smart Contract Testing",
    category: "Blockchain",
    description:
      "Ethereum smart contract development and automated testing workflow covering deployment, token transfers, transaction validation, and blockchain engineering best practices.",
    tech: ["Solidity", "Hardhat", "Ethers.js", "Chai", "Ethereum"],
    github: "https://github.com/gauravkumar7294/Ethereum-Smart-Contract-Development-and-Unit-Testing",
    metrics: ["Contract deployment", "Token transfers", "Automated tests"],
    year: "Jul 2026",
  },
  {
    title: "Web Wallet",
    category: "Blockchain",
    description:
      "Browser-based wallet experiment for EVM and Solana account management with mnemonic-based key derivation, transaction workflows, and modern React architecture.",
    tech: ["React", "Vite", "Ethers.js", "Solana Web3.js", "BIP39", "Ed25519", "TweetNaCl"],
    github: "https://github.com/gauravkumar7294/web-wallet",
    metrics: ["EVM + Solana", "Mnemonic derivation", "Wallet UX"],
    year: "2025",
  },
  {
    title: "Open Source Project Analyzer",
    category: "Full-Stack",
    description:
      "Repository intelligence platform that combines deterministic code metrics with Google Gemini analysis, GitHub API data, PostgreSQL persistence, and Docker deployment.",
    tech: ["Rust", "Next.js", "TypeScript", "PostgreSQL", "SQLx", "Docker", "REST API", "Google Gemini", "GitHub API"],
    github: "https://github.com/gauravkumar7294/Open-Source-Project-Analyzer-",
    demo: "https://open-source-project-analyzer-topaz.vercel.app",
    metrics: ["AI insights", "GitHub integration", "Dockerized backend"],
    year: "Aug 2026",
  },
  {
    title: "CineStream",
    category: "Full-Stack",
    description:
      "Movie and TV discovery platform with a high-performance Rust backend, modern React frontend, TMDB integration, search, trending content, and responsive streaming-style UI.",
    tech: ["Rust", "Axum", "Tokio", "React", "TypeScript", "TanStack", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/gauravkumar7294/CineStream-Movie-Streaming-Platform-Backend",
    metrics: ["TMDB data", "Async backend", "React Query"],
    year: "Aug 2026",
  },
  {
    title: "Multi-Tenant Blogging Platform",
    category: "Full-Stack",
    description:
      "Scalable organization-based blogging platform where users create organizations, manage members, publish posts, and keep tenant data separated with modern auth and database tooling.",
    tech: ["Next.js", "TypeScript", "React", "Clerk", "Neon Postgres", "Drizzle ORM", "Tailwind CSS"],
    github: "https://github.com/gauravkumar7294/multi-tenant-blogging",
    metrics: ["Multi-tenancy", "Clerk auth", "Drizzle schema"],
    year: "Jul 2026",
  },
  {
    title: "Instructor Evaluation Platform",
    category: "Full-Stack",
    description:
      "Internal Next.js platform for student progress tracking, instructor interaction logging, role-based workflows, and secure access controls at Nxtwave.",
    tech: ["Next.js", "TypeScript", "React", "PostgreSQL", "Server Actions", "API Routes", "RBAC"],
    github: "https://github.com/gauravkumar7294/Instructor_Evaluation",
    metrics: ["900+ students", "60+ instructors", "4-hour sessions"],
    year: "Sep 2026",
  },
  {
    title: "IoT Smart Agri-Trade",
    category: "Full-Stack",
    description:
      "Agro-tech platform combining real-time crop monitoring with a marketplace that helps farmers trade produce directly with buyers.",
    tech: ["React", "Vite", "Express", "Node.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/gauravkumar7294/IOT-Smart-Agri-Trade",
    metrics: ["IoT monitoring", "Marketplace", "JWT auth"],
    year: "2025",
  },
  {
    title: "Broadcast Chat",
    category: "Full-Stack",
    description:
      "Real-time chat application with separate Express backend and React frontend, WebSocket communication, JWT authentication, and deployed production UI.",
    tech: ["TypeScript", "Express", "WebSocket", "JWT", "React", "Vite", "Tailwind CSS"],
    github: "https://github.com/gauravkumar7294/Broadcast-chat",
    demo: "https://broadcast-chat.vercel.app",
    metrics: ["WebSocket chat", "JWT auth", "Live demo"],
    year: "2025",
  },
  {
    title: "HTTP Monitor",
    category: "Systems",
    description:
      "Rust-based asynchronous monitoring system that checks endpoint availability, HTTP status codes, and response times using Tokio and Reqwest.",
    tech: ["Rust", "Tokio", "Reqwest", "TypeScript", "REST APIs"],
    github: "https://github.com/gauravkumar7294/http-Monitor",
    metrics: ["Async checks", "Latency tracking", "Status monitoring"],
    year: "Aug 2026",
  },
  {
    title: "QueueCTL",
    category: "Systems",
    description:
      "CLI-based background job queue with worker processes, exponential-backoff retries, a dead-letter queue, and persistent job state.",
    tech: ["JavaScript", "Node.js", "SQLite", "Drizzle ORM", "Commander", "CLI"],
    github: "https://github.com/gauravkumar7294/QueueCTL",
    metrics: ["Worker processes", "Retry backoff", "Dead-letter queue"],
    year: "2025",
  },
];

export const additionalProjects = [
  {
    title: "StreamYard",
    repo: "https://github.com/gauravkumar7294/Stream-Yard",
    description: "Browser-based live streaming studio using Express and Socket.IO for guest links, screen sharing, branding, and chat highlights.",
  },
  {
    title: "Protocol Upgrade Monitor",
    repo: "https://github.com/gauravkumar7294/Protocol-upgrade-Monitor",
    demo: "https://protocol-upgrade-monitor.vercel.app",
    description: "React and Chart.js dashboard for monitoring protocol upgrade activity and visualizing on-chain metrics.",
  },
  {
    title: "Assessment Rust Backend",
    repo: "https://github.com/gauravkumar7294/Assessment_Rust_Backend",
    description: "Rust/Axum task-management API with JWT sessions, email-based 2FA, RBAC, task assignment, and integration tests.",
  },
  {
    title: "Second Brain",
    repo: "https://github.com/gauravkumar7294/Second-Brain",
    description: "Full-stack knowledge management application with Express, MongoDB, JWT auth, React Router, and a Vite frontend.",
  },
  {
    title: "Contract Farming System",
    repo: "https://github.com/gauravkumar7294/Contract-Farming-System",
    demo: "https://contract-farming-system.vercel.app",
    description: "Prototype marketplace for assured contract farming and stable market access for farmers and buyers.",
  },
  {
    title: "Course Management System in Rust",
    repo: "https://github.com/gauravkumar7294/Course-Management-System-Rust-",
    description: "Rust learning project demonstrating traits, structs, and generics for an online course management system.",
  },
  {
    title: "Food Delivery LLD",
    repo: "https://github.com/gauravkumar7294/Food_Delivery-LLD",
    description: "Object-oriented design and design-pattern implementation of a Swiggy/Zomato-style food ordering system.",
  },
  {
    title: "Single-Threaded Web Server",
    repo: "https://github.com/gauravkumar7294/Single_Threaded_Web_Server",
    description: "Rust HTTP server project focused on networking, request parsing, and low-level web fundamentals.",
  },
  {
    title: "Spotify API",
    repo: "https://github.com/gauravkumar7294/Spotify_API",
    description: "Rust integration project for Spotify API workflows and backend service design.",
  },
  {
    title: "Document Editor",
    repo: "https://github.com/gauravkumar7294/Document_Editor",
    description: "C++ document editor project exploring file handling, data structures, and desktop-style functionality.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
