export const portfolioData = {
  hero: {
    heading: "Software Engineer",
    subheading: "Building scalable, high-concurrency SaaS platforms. Specializing in distributed architecture, data integrity, and performance optimization.",
    cta: [
      { label: "View Engineering Case Studies", href: "#case-studies", primary: true },
      { label: "Download Resume", href: "/Saeed_NM_Software_Engineer_CV.pdf", primary: false, download: true }
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
      architecture: [
        "Django", 
        "REST APIs", 
        "React", 
        "Redux", 
        "TanStack Query", 
        "PostgreSQL", 
        "Raw SQL Queries", 
        "Database Triggers", 
        "WebSockets", 
        "Auth & Authorization", 
        "Celery", 
        "Redis", 
        "AWS S3", 
        "Postman", 
        "API Documentation", 
        "Git"
      ],
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
  skills: [
    {
      category: "Backend Systems",
      priority: 1,
      items: [
        "Python",
        "Django",
        "FastAPI",
        "REST API Design",
        "GraphQL APIs",
        "Authentication & Authorization",
        "Data Modeling & Schema Design"
      ]
    },
    {
      category: "Data & Storage",
      priority: 2,
      items: [
        "PostgreSQL",
        "Database Indexing",
        "Query Optimization",
        "Query Planning",
        "Database Triggers (PostgreSQL)",
        "Stored Procedures",
        "Redis",
        "Caching Strategies",
        "Data Consistency",
        "Large Dataset Handling"
      ]
    },
    {
      category: "Distributed & Async Systems",
      priority: 3,
      items: [
        "Celery",
        "Background Workers",
        "Message Queues",
        "Task Orchestration",
        "Event-Driven Processing",
        "Retry Mechanisms",
        "Failure Handling",
        "Idempotent Job Design"
      ]
    },
    {
      category: "Concurrency & Transaction Safety",
      priority: 4,
      highlight: true,
      items: [
        "Race Condition Handling",
        "Transaction Management",
        "Transaction Isolation",
        "Atomic Operations",
        "High-Concurrency Systems",
        "Database Locking",
        "Redis Locking",
        "Idempotency"
      ]
    },
    {
      category: "Real-Time Systems",
      priority: 5,
      highlight: true,
      items: [
        "WebRTC",
        "Real-Time Communication",
        "Live Streaming Architecture",
        "Low-Latency Systems",
        "Session Management",
        "Connection Lifecycle Handling"
      ]
    },
    {
      category: "Architecture & Scalability",
      priority: 6,
      items: [
        "Multi-Tenant Architecture",
        "System Design",
        "Scalability Patterns",
        "Performance Optimization",
        "Fault Tolerance",
        "System Reliability"
      ]
    },
    {
      category: "Frontend Engineering",
      priority: 7,
      items: [
        "React",
        "Component Architecture",
        "State Management (Redux)",
        "Server State Management (React Query)",
        "Client Storage (IndexedDB, LocalStorage)",
        "API Integration (Axios / Fetch)",
        "Form Handling & Validation",
        "Performance Optimization (Memoization, Lazy Loading)",
        "Reusable UI Systems",
        "Responsive Design",
        "Vite",
        "Tailwind CSS"
      ]
    }
  ],
  additionalProjects: [
    {
      id: "rasa-chatbot",
      title: "Conversational AI System",
      context: "Rasa Chatbot System",
      contributions: [
        "Built a conversational AI system using Rasa for complex dialog management.",
        "Designed intent classification and dynamic response handling.",
        "Integrated chatbot with backend services for real-time data retrieval and interactions."
      ]
    },
    {
      id: "zoomzzz",
      title: "Room Booking Platform",
      context: "Zoomzzz",
      contributions: [
        "Developed a booking system with comprehensive scheduling and availability management.",
        "Handled concurrent booking scenarios and race condition conflict resolution.",
        "Designed efficient booking workflows and rigorous data validation pipelines."
      ]
    }
  ],
  codingProfiles: [
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/saeedhilu/",
      description: "Consistent problem-solving and algorithmic practice."
    },
    {
      platform: "Codewars",
      url: "https://www.codewars.com/users/saeedhilu",
      description: "Code kata and logic optimization."
    },
    {
      platform: "MonkeyType",
      url: "https://monkeytype.com/profile/Saeed-nm",
      description: "Fast, accurate technical typing discipline."
    }
  ],
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
