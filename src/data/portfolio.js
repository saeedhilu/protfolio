export const portfolioData = {
  hero: {
    heading: "Software Engineer",
    subheading: "Building scalable, high-concurrency SaaS platforms. Specializing in distributed architecture, data integrity, and performance optimization.",
    cta: [
      { label: "View Engineering Case Studies", href: "#case-studies", primary: true },
      { label: "Download Resume", href: "/resume.pdf", primary: false }
    ]
  },
  highlights: [
    {
      title: "High-Concurrency Handling",
      description: "Designed and scaled systems capable of processing millions of concurrent requests, including complex voucher generation workflows. Handled 1000+ concurrent financial operations without data collisions."
    },
    {
      title: "Data Integrity & Consistency",
      description: "Implemented transaction-safe operations ensuring atomicity and idempotency across distributed financial workflows. Ensured zero duplication in critical financial transactions."
    },
    {
      title: "System Reliability",
      description: "Built audit-safe infrastructures with robust failure-handling mechanisms. Designed idempotent and retry-safe workflows for reliability under failure scenarios."
    },
    {
      title: "Real-Time Systems",
      description: "Supported concurrent users across live WebRTC sessions and maintained low-latency communication in real-time platforms and NFC systems."
    }
  ],
  experience: [
    {
      id: "viknbooks",
      role: "Software Engineer",
      company: "ViknBooks",
      period: "Year - Present",
      context: "Multi-tenant SaaS platform serving diverse business needs.",
      architecture: ["Django", "FastAPI", "PostgreSQL", "Celery", "Redis"],
      contributions: [
        "Architected a high-throughput voucher generation system, resolving race conditions through distributed locks and optimized database indexing.",
        "Integrated Celery and Redis for asynchronous background processing, reducing API response times.",
        "Enforced strict data atomicity and idempotency in financial transactions to guarantee zero double-spending or ledger discrepancies.",
        "Optimized complex PostgreSQL queries and designed multi-tenant database architectures to support rapid data scaling."
      ]
    },
    {
      id: "self-stack",
      role: "Full Stack Developer Intern",
      company: "Self Stack",
      period: "Previous Year - Year", // TODO: Update with exact years
      context: "Backend-heavy system design and real-world feature development.",
      architecture: ["Django", "PostgreSQL", "React", "REST APIs"],
      contributions: [
        "Built and optimized scalable backend APIs using Django for production environments.",
        "Worked on concurrency-safe operations and strict transaction management.",
        "Designed relational data models and optimized complex queries for performance.",
        "Integrated responsive frontend components using React where required."
      ]
    }
  ],
  caseStudies: [
    {
      id: "voucher-generation",
      title: "High-Concurrency Voucher Generation System",
      context: "ViknBooks Financial Core",
      problem: "Duplicate voucher numbers occurred under concurrent financial transactions.",
      focus: ["Race conditions", "Transaction safety", "Idempotency"],
      solution: "Designed a concurrency-safe voucher generation system using deterministic sequencing and database-level guarantees.",
      outcome: "Eliminated duplication and ensured financial data integrity under high concurrency (1000+ concurrent requests)."
    },
    {
      id: "institution-platform",
      title: "Unified Institution Platform (E-commerce + E-learning)",
      context: "Live Classes & Course Delivery",
      problem: "Needed a unified platform combining e-commerce, course delivery, and live learning with real-time communication.",
      focus: ["Real-time communication", "Concurrent user handling", "Multi-module system design"],
      solution: "Implemented live classes using WebRTC. Designed recording workflows for session storage. Managed concurrent users across sessions and purchases.",
      outcome: "Delivered a scalable learning platform supporting reliable, low-latency synchronous (live) and asynchronous (recorded) experiences."
    },
    {
      id: "nfc-contactless",
      title: "NFC-Based Contactless System",
      context: "Fast Interaction Ecosystem",
      problem: "Required low-latency data exchange and real-time processing for physical interactions.",
      focus: ["Low-latency data exchange", "Real-time processing", "System integration"],
      solution: "Integrated NFC read/write workflows with backend services to ensure fast response times and reliable data synchronization.",
      outcome: "Built a responsive and efficient contactless interaction system with maintained low-latency communication."
    }
  ],
  skills: {
    backend: ["Python", "Django", "FastAPI", "Node.js", "REST/GraphQL APIs"],
    data: ["PostgreSQL", "Database Indexing", "Query Optimization", "Redis", "Caching"],
    distributed: ["Celery", "Message Queues", "Background Workers", "Idempotency"],
    infrastructure: ["Multi-tenant Architecture", "Concurrency Control", "Transaction Management", "System Reliability"],
    frontend: ["React", "Vite", "Tailwind CSS", "WebRTC"]
  },
  certifications: [
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/a23404ef4db6"
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/d831017a5d1e"
    }
  ],
  systemThinking: {
    scalability: "I design for the next order of magnitude. Horizontal scaling should be frictionless, and bottlenecks should be identified through metrics, not outages.",
    dataIntegrity: "Financial data requires absolute precision. I prioritize atomicity, proper isolation levels, and idempotency across all state-mutating operations.",
    failureHandling: "Systems fail. I build with graceful degradation, circuit breakers, and comprehensive dead-letter queue (DLQ) strategies to ensure observability and rapid recovery."
  }
};
