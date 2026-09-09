/**
 * people.js — Centralized Leadership Data
 * Single source of truth for all people/leadership profiles.
 */

export const people = [
  {
    id: 'ved-prakash',
    slug: 'ved-prakash',
    aliasSlugs: ['ved-parkash'],
    name: 'Ved Prakash',
    role: 'Project Head',
    subRole: 'Software Engineer | Project Coordinator | ERP & Business Application Professional',
    company: 'Vayunex Solution',
    companyUrl: 'https://www.vayunexsolution.com',
    experience: 20,
    experienceLabel: '20+ Years of Experience',
    education: 'MCA',
    university: 'Punjab University',
    origin: 'Yamuna Nagar, Haryana',
    image: '/images/people/ved-prakash.jpg',
    imageAlt: 'Ved Prakash — Project Head at Vayunex Solution',

    shortBio:
      'Ved Prakash is the Project Head at Vayunex Solution, bringing over two decades of enterprise engineering experience in ERP implementations, CRM process automation, business application development, and software delivery governance across manufacturing, automobile, and telecom sectors.',

    fullBio: [
      'Ved Prakash serves as Project Head at Vayunex Solution, where he directs software project delivery, engineering coordination, and system quality standards across the company\'s enterprise client engagements and proprietary platforms.',
      'With more than 20 years of hands-on software development and project leadership experience, he has built deep specialization in end-to-end business applications, custom ERP implementations, and CRM process automation. His background covers the entire operational lifecycle — spanning purchase, stores, production, MRP, billing, accounts, quality control, gate management, and legacy data conversion.',
      'His professional journey includes significant milestone projects across diverse core industries. Between 2006 and 2014, he worked as Software Engineer and Project Coordinator at the National Centre for Computers & Management Services (NCCMS), Chandigarh, delivering customized ERP and business application solutions for multiple commercial and manufacturing organizations.',
      'Over his career, he has engineered and supported major industrial systems including agricultural equipment manufacturing ERP for AGROSAW Industries (Ambala Cantt) with full CRM lifecycle coverage from lead generation to payment follow-up; automobile components manufacturing ERP for Kapson Industries – KIND (Jalandhar); industrial manufacturing ERP for Farm Fresh Foods (Paonta Sahib); telecom manufacturing ERP and supply/service billing systems for Synergy Telecommunications (Mohali); and automobile sales and dealership ERP for Malwa Automobile Pvt. Ltd. (Tata Motors Dealership), where he spearheaded critical data conversion and migration from legacy Siebel systems into custom ERP.',
      'In addition, he has provided long-standing independent software development and ongoing application maintenance services for Osaw Agro Industries Pvt. Ltd., reinforcing his reputation for long-term software dependability and customer trust.',
      'Educated with a Master of Computer Applications (MCA) from Punjab University, he unites rigorous computer science foundations with two decades of on-the-ground industrial engineering wisdom. At Vayunex Solution, he ensures that every digital solution is built on predictable architecture, structured milestone governance, and disciplined engineering execution.',
    ],

    expertise: [
      'ERP Engineering & Implementation',
      'End-to-End CRM Automation',
      'Project Leadership & Delivery Governance',
      'Full-Stack Software Development',
      'AI Project Governance & Delivery',
      'Enterprise AI & Workflow Integration',
      'Material Requirement Planning (MRP/MPP)',
      'Legacy Data Migration (Siebel to ERP)',
      'Supply & Service Billing Systems',
      'Multi-Industry Business Process Automation',
    ],

    functionalMatrix: [
      {
        area: 'Sales Management',
        details: 'Lead & enquiry follow-up, sales order processing, sales coordination, and counter sales workflows.'
      },
      {
        area: 'CRM & Sales Lifecycle',
        details: 'Full customer lifecycle: lead capture, qualification, party management, quotations, sales conversion, and receivable tracking.'
      },
      {
        area: 'Purchase & Procurement',
        details: 'End-to-end purchase workflows, supplier-related operations, quotation comparison, and procurement management.'
      },
      {
        area: 'Accounts & Commercial Finance',
        details: 'Integrated financial accounting, receipts, customer payment status, billing coordination, and receivable follow-up.'
      },
      {
        area: 'Payroll & HR Management',
        details: 'Employee management, attendance synchronization, payroll computation, and compliance-related ERP operations.'
      },
      {
        area: 'Stores & Inventory Telemetry',
        details: 'Stores operations, stock management, gate management, and material issue tracking.'
      },
      {
        area: 'Production & MRP',
        details: 'Material Requirement Planning (MRP / MPP), work order routing, shop-floor management, and production tracking.'
      },
      {
        area: 'Multi-Tier Billing',
        details: 'Sales billing, supply billing, service billing, and commercial invoice generation.'
      },
      {
        area: 'Quality & Gate Control',
        details: 'Quality control workflows, inspection logging, gate-in / gate-out operations, and complaint information tracking.'
      },
      {
        area: 'Data Conversion & Migration',
        details: 'Extraction, transformation, validation, and migration of legacy database records (including Siebel to modern ERP).'
      },
      {
        area: 'Project Coordination & Governance',
        details: 'Client requirement analysis, structured milestone planning, engineering team coordination, and application maintenance.'
      }
    ],

    industryPortfolio: [
      {
        client: 'AGROSAW Industries',
        location: 'Ambala Cantt, Haryana',
        industry: 'Agriculture Equipment Manufacturing ERP & CRM',
        description: 'Engineered a comprehensive ERP and complete CRM flow for agricultural machinery manufacturing (Seed Graders, Cleaners, Elevators). Implemented complete customer journey from lead generation to order conversion and payment follow-up, alongside Stores, Production, MRP, Accounts, and Gate Management.'
      },
      {
        client: 'Kapson Industries – KIND',
        location: 'Jalandhar, Punjab',
        industry: 'Automobile Components Manufacturing ERP',
        description: 'Developed customized ERP environment for auto parts and motor stampings manufacturing. Focused on Material Requirement Planning (MRP), integration of manufacturing planning with financial accounting, and production operations.'
      },
      {
        client: 'Farm Fresh Foods (FFF)',
        location: 'Paonta Sahib / Batamandi, Himachal Pradesh',
        industry: 'Industrial Manufacturing ERP',
        description: 'Automated core manufacturing, commercial, and administrative operations for industrial pipe, pole, and collar manufacturing, covering purchase, stores, sales, accounts, payroll, and quality control.'
      },
      {
        client: 'Synergy Telecommunications',
        location: 'Mohali, Punjab',
        industry: 'Telecom Infrastructure Manufacturing & Billing System',
        description: 'Automated operational processes for telecom towers and panels manufacturing. Implemented sales order processing, supply and service billing, work order processing, customer payment receipts, and complaint management systems.'
      },
      {
        client: 'Malwa Automobile Pvt. Ltd.',
        location: 'Tata Motors Dealership (Rohini & Karnal Units)',
        industry: 'Automobile Sales & Dealership ERP',
        description: 'Automated dealership operations including vehicle purchase, vehicle sales management, counter sales, and commercial billing. Spearheaded comprehensive data conversion and migration from legacy Siebel system into modern ERP.'
      },
      {
        client: 'Osaw Agro Industries Pvt. Ltd.',
        location: 'Independent Software Services',
        industry: 'Business Application Support & Process Enhancement',
        description: 'Long-standing independent software development and ongoing application maintenance, continuously delivering application support and business process automation.'
      },
      {
        client: 'NCCMS (National Centre for Computers & Management Services)',
        location: 'Chandigarh',
        industry: 'Enterprise Software & ERP Services (2006–2014)',
        description: 'Worked as Software Engineer and Project Coordinator, delivering customized ERP and business application initiatives for multiple organizations across diverse manufacturing and commercial sectors.'
      }
    ],

    careerTimeline: [
      {
        phase: '2006 – 2014',
        heading: 'Software Engineer & Project Coordinator — NCCMS Chandigarh',
        description:
          'Spearheaded customized ERP and enterprise business applications across manufacturing, automobile, and commercial clients, taking responsibility for module development, client requirements, and application lifecycle support.',
      },
      {
        phase: '2014 – Present',
        heading: 'Enterprise ERP & Business Application Engagements',
        description:
          'Delivered major industrial ERP and CRM solutions for AGROSAW Industries, Kapson Industries, Farm Fresh Foods, Synergy Telecommunications, Malwa Automobile (Tata Motors Dealership), and Osaw Agro Industries.',
      },
      {
        phase: 'Current',
        heading: 'Project Head — Vayunex Solution',
        description:
          'Directing project delivery, client collaboration, and engineering governance across Vayunex Solution’s enterprise software engagements and proprietary platform ecosystems.',
      },
    ],

    faq: [
      {
        question: 'Who is Ved Prakash at Vayunex Solution?',
        answer:
          'Ved Prakash is the Project Head at Vayunex Solution. He brings over 20 years of experience in business application engineering, ERP implementation, CRM automation, and software delivery governance across manufacturing, automobile, and telecom sectors.',
      },
      {
        question: 'What is Ved Prakash\'s role at Vayunex Solution?',
        answer:
          'His role is Project Head. He oversees software project delivery, client requirements translation, engineering team coordination, and architecture quality across Vayunex Solution\'s enterprise engagements and proprietary platforms.',
      },
      {
        question: 'How much experience does Ved Prakash have?',
        answer:
          'Ved Prakash has more than 20 years of experience in software engineering, customized ERP development, and technical project leadership.',
      },
      {
        question: 'What is Ved Prakash\'s educational background?',
        answer:
          'He holds an MCA (Master of Computer Applications) from Punjab University.',
      },
      {
        question: 'What enterprise systems has Ved Prakash engineered?',
        answer:
          'Throughout his career, Ved Prakash has engineered and coordinated large-scale ERP and CRM implementations for organizations including AGROSAW Industries, Kapson Industries (KIND), Farm Fresh Foods, Synergy Telecommunications, Malwa Automobile (Tata Motors dealership Siebel-to-ERP migration), Osaw Agro Industries, and NCCMS Chandigarh.',
      },
      {
        question: 'Does Ved Prakash oversee AI and Machine Learning projects at Vayunex Solution?',
        answer:
          'Yes. Alongside enterprise ERP and business systems, Ved Prakash directs project delivery and governance for Vayunex Solution\'s active AI/ML teams, ensuring that machine learning pipelines and AI agent workflows integrate reliably into enterprise operational environments.',
      },
    ],

    relatedServices: [
      { label: 'Web Development', href: '/services/web-development/' },
      { label: 'Enterprise Software', href: '/services/web-development/custom-web-apps/' },
      { label: 'AI & Data Science', href: '/services/ai-data-science/' },
      { label: 'SaaS Product Engineering', href: '/services/web-development/saas/' },
    ],

    seo: {
      title: 'Ved Prakash — Project Head | Vayunex Solution',
      description:
        'Ved Prakash is the Project Head at Vayunex Solution with 20+ years of experience in ERP implementation, CRM automation, enterprise software delivery, and AI project governance. MCA from Punjab University.',
      canonical: 'https://www.vayunexsolution.com/people/ved-prakash/',
    },

    schema: {
      id: 'https://www.vayunexsolution.com/people/ved-prakash/#person',
      alumniOf: 'Punjab University',
      knowsAbout: [
        'ERP Systems Implementation',
        'CRM Process Automation',
        'Full-Stack Software Development',
        'Project Leadership & Governance',
        'AI & Machine Learning Project Delivery',
        'Material Requirement Planning (MRP)',
        'Data Conversion & Migration',
        'Manufacturing & Telecom Systems',
      ],
    },
  },

  {
    id: 'sandeep-kumar',
    slug: 'sandeep-kumar',
    name: 'Sandeep Kumar',
    role: 'Technical Head',
    company: 'Vayunex Solution',
    companyUrl: 'https://www.vayunexsolution.com',
    experience: 17,
    experienceLabel: '17+ Years of Experience',
    education: 'MCA',
    university: 'Punjab University',
    origin: 'Yamuna Nagar, Haryana',
    image: '/images/people/sandeep-kumar.jpg',
    imageAlt: 'Sandeep Kumar — Technical Head at Vayunex Solution',

    shortBio:
      'Sandeep Kumar is the Technical Head at Vayunex Solution, with over 17 years of experience in software engineering and technical leadership. He guides the company\'s technical direction, architecture standards, and engineering quality across its proprietary software platforms and enterprise client engagements.',

    fullBio: [
      'Sandeep Kumar is the Technical Head at Vayunex Solution, holding primary responsibility for the technical direction, architectural standards, and engineering quality of the company\'s software systems.',
      'With more than 17 years of experience in software engineering and technical leadership, he has developed a broad and deep understanding of how complex software systems are designed, built, and maintained over time. His experience spans the technical architecture of application systems, systems design, backend engineering, and the governance practices that ensure software remains maintainable, reliable, and scalable as it grows.',
      'In his role as Technical Head, he works closely with engineering teams to establish technical standards, review architectural decisions, and provide the kind of senior technical judgment that high-stakes software development requires. He is responsible for ensuring that the systems Vayunex Solution builds — whether proprietary SaaS platforms or enterprise client engagements — are designed to last and engineered to perform.',
      'Throughout his career, he has provided technical leadership and software engineering guidance across a range of organizational contexts. This breadth of experience has given him the ability to adapt technical approaches to different business environments while maintaining consistent standards of quality and architectural soundness.',
      'His approach to technical leadership is grounded in a clear-eyed view of software complexity. He understands that good architecture is not about adopting the newest frameworks or the most complex approaches — it is about making considered, defensible technical decisions that support long-term system health. He values clarity, reliability, and engineering practices that reduce technical debt rather than accumulate it.',
      'He holds an MCA from Punjab University, combining formal academic training in computer science with more than seventeen years of practical software engineering experience. His educational foundation and extensive hands-on background together make him well-equipped for the technical demands of leading engineering at a company that operates its own software platforms while serving enterprise clients.',
      'At Vayunex Solution, he ensures that every system the company builds reflects rigorous technical thinking — from the initial architecture through to how systems evolve as business requirements change over time.',
    ],

    expertise: [
      'Technical Leadership',
      'Software Architecture',
      'Systems Engineering',
      'AI/ML Systems Architecture',
      'Custom LLM & Neural Inference',
      'AI Engineering Mentorship',
      'Backend Architecture',
      'Engineering Standards',
    ],

    careerTimeline: [
      {
        phase: 'Foundation',
        heading: 'Software Engineering',
        description:
          'Developed deep expertise in software engineering and systems design, building a strong technical foundation across application development and systems architecture.',
      },
      {
        phase: 'Growth',
        heading: 'Technical Leadership',
        description:
          'Expanded into technical leadership roles, providing architectural guidance and engineering direction across diverse software development environments.',
      },
      {
        phase: 'Current',
        heading: 'Technical Head — Vayunex Solution',
        description:
          'Leading the technical direction of Vayunex Solution, establishing architecture standards, guiding engineering teams, and ensuring all software systems meet rigorous quality and reliability requirements.',
      },
    ],

    faq: [
      {
        question: 'Who is Sandeep Kumar at Vayunex Solution?',
        answer:
          'Sandeep Kumar is the Technical Head at Vayunex Solution. He leads the technical direction, architecture standards, and engineering quality of the company\'s software platforms and enterprise client systems.',
      },
      {
        question: 'What is Sandeep Kumar\'s role at Vayunex Solution?',
        answer:
          'His role is Technical Head. He is responsible for setting technical direction, establishing architecture standards, and ensuring engineering quality across all software systems that Vayunex Solution develops.',
      },
      {
        question: 'How much experience does Sandeep Kumar have?',
        answer:
          'Sandeep Kumar has more than 17 years of experience in software engineering and technical leadership.',
      },
      {
        question: 'What is Sandeep Kumar\'s educational background?',
        answer:
          'He holds an MCA (Master of Computer Applications) from Punjab University.',
      },
      {
        question: 'What does Sandeep Kumar focus on at Vayunex Solution?',
        answer:
          'He focuses on technical architecture, systems engineering, engineering standards governance, and providing technical leadership across both Vayunex Solution\'s proprietary software platforms and enterprise client projects.',
      },
      {
        question: 'What is Sandeep Kumar\'s role in Vayunex Solution\'s AI and ML initiatives?',
        answer:
          'Sandeep Kumar leads the technical architecture for all AI and machine learning initiatives at Vayunex Solution, overseeing model deployment, high-throughput inference, and mentoring junior AI engineers and freshers working on live production systems.',
      },
    ],

    relatedServices: [
      { label: 'Web Development', href: '/services/web-development/' },
      { label: 'AI & Data Science', href: '/services/ai-data-science/' },
    ],

    seo: {
      title: 'Sandeep Kumar — Technical Head | Vayunex Solution',
      description:
        'Sandeep Kumar is the Technical Head at Vayunex Solution with 17+ years of experience in software engineering, technical architecture, systems design, and AI/ML pipelines. MCA from Punjab University.',
      canonical: 'https://www.vayunexsolution.com/people/sandeep-kumar/',
    },

    schema: {
      id: 'https://www.vayunexsolution.com/people/sandeep-kumar/#person',
      alumniOf: 'Punjab University',
      knowsAbout: [
        'Software Architecture',
        'Technical Leadership',
        'Systems Engineering',
        'AI/ML Systems Architecture',
        'Custom LLM & Neural Inference',
        'Backend Architecture',
        'Engineering Standards',
      ],
    },
  },

  {
    id: 'rajesh-kumar',
    slug: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    role: 'AI/ML Engineer & Researcher',
    subRole: 'Machine Learning Systems | Neural Network Architectures | Autonomous Agent Research',
    company: 'Vayunex Solution',
    companyUrl: 'https://www.vayunexsolution.com',
    experience: 6,
    experienceLabel: 'AI & Neural Systems Specialist',
    education: 'Applied AI & ML Systems',
    university: 'Computer Science & Intelligence Engineering',
    origin: 'Chandigarh Tricity, India',
    image: '/images/people/rajesh-kumar.jpg',
    imageAlt: 'Rajesh Kumar — AI/ML Engineer & Researcher at Vayunex Solution',

    shortBio:
      'Rajesh Kumar is an AI/ML Engineer and Researcher at Vayunex Solution, specializing in applied machine learning, neural architectures, retrieval-augmented generation (RAG) pipelines, and autonomous agent orchestration.',

    fullBio: [
      'Rajesh Kumar serves as AI/ML Engineer & Researcher at Vayunex Solution, where he spearheads research and production engineering of intelligent systems, deep learning workflows, and neural inference infrastructure across the company\'s SaaS platforms and enterprise engagements.',
      'His technical work focuses on applied machine learning, deterministic agent orchestration, hybrid vector retrieval, and custom fine-tuning of large language models. He works closely with engineering leadership to transform theoretical AI advancements into high-throughput, fault-tolerant business software.',
      'At Vayunex Solution, he contributes to core architectural initiatives including SocialNex generative copilot pipelines, automated customer telemetry models, and robust multi-agent systems designed for long-term production dependability.',
    ],

    expertise: [
      'Applied Machine Learning',
      'Neural Network Architectures',
      'Autonomous Agent Swarms',
      'RAG & Vector Retrieval',
      'LLM Fine-Tuning & Inference',
      'Computer Vision & NLP',
      'Deterministic Agent Guardrails',
      'High-Throughput Model Serving',
      'Semantic Search & Embeddings',
      'AI Workflow Orchestration',
    ],

    highlights: [
      {
        title: 'Neural & Agent Architectures',
        description: 'Designs structured, guardrailed multi-agent swarms utilizing LangGraph and hybrid vector embedding architectures.',
      },
      {
        title: 'Applied Machine Learning',
        description: 'Researches and deploys production-grade ML inference pipelines for automated document intelligence, classification, and predictive analytics.',
      },
      {
        title: 'Production RAG Systems',
        description: 'Implements zero-hallucination enterprise retrieval systems combining semantic dense vectors with deterministic keyword search.',
      },
      {
        title: 'AI Engineering Standards',
        description: 'Enforces rigorous latency benchmarking, token optimization, and deterministic safety guardrails across all AI/ML microservices.',
      },
    ],

    functionalMatrix: [
      {
        area: 'Autonomous Agent Orchestration',
        details: 'Multi-agent state machines, LangGraph workflows, and tool-calling validation for deterministic reasoning.',
      },
      {
        area: 'Vector Retrieval & Hybrid Search',
        details: 'Dense and sparse vector embeddings, Qdrant/Pinecone vector databases, rerankers, and chunking strategies.',
      },
      {
        area: 'Computer Vision & Document Intelligence',
        details: 'OCR inference pipelines, automated entity extraction, layout parsing, and visual document understanding.',
      },
      {
        area: 'LLM Fine-Tuning & Model Optimization',
        details: 'LoRA/QLoRA adaptation, quantized model serving (vLLM/Ollama), and low-latency API inference gateways.',
      },
    ],

    industryPortfolio: [
      {
        client: 'SocialNex AI Copilot Engine',
        location: 'Vayunex Proprietary Ecosystem',
        industry: 'Autonomous Social Intelligence & Content Generation',
        description: 'Engineered core AI generation and predictive engagement algorithms powering automated brand scheduling, caption generation, and multi-channel analytics.',
      },
      {
        client: 'Enterprise RAG Knowledge Base',
        location: 'Enterprise Client Engagements',
        industry: 'Zero-Hallucination Enterprise Search',
        description: 'Architected high-precision retrieval-augmented generation pipelines enabling internal business teams to query thousands of technical and compliance documents securely.',
      },
      {
        client: 'SchoolDost Verification & Moderation',
        location: 'Vayunex Proprietary Ecosystem',
        industry: 'Verified Academic Network Security',
        description: 'Designed automated student verification pipelines and content moderation models to keep academic communication verified and free from spam.',
      },
    ],

    careerTimeline: [
      {
        phase: 'Foundations',
        heading: 'Machine Learning & Neural Architecture Research',
        description:
          'Conducted in-depth practical research in deep learning, transformer architectures, vector embeddings, and computer vision classification.',
      },
      {
        phase: 'Systems Engineering',
        heading: 'Production AI Inference & RAG Pipelines',
        description:
          'Built high-performance model serving microservices, optimized token usage, and developed semantic search systems for production web platforms.',
      },
      {
        phase: 'Current',
        heading: 'AI/ML Engineer & Researcher — Vayunex Solution',
        description:
          'Leading applied AI research, agent orchestration frameworks, and neural capabilities across Vayunex Solution’s SaaS products and enterprise software solutions.',
      },
    ],

    faq: [
      {
        question: 'What is Rajesh Kumar\'s role at Vayunex Solution?',
        answer:
          'Rajesh Kumar is the AI/ML Engineer & Researcher at Vayunex Solution, focusing on applied machine learning, neural architectures, and autonomous AI system research.',
      },
      {
        question: 'What AI/ML domains does Rajesh Kumar specialize in?',
        answer:
          'His primary domains include retrieval-augmented generation (RAG), multi-agent autonomous workflows, deep learning inference optimization, and natural language processing for enterprise SaaS products.',
      },
      {
        question: 'How does Rajesh Kumar contribute to Vayunex products?',
        answer:
          'Rajesh works on core intelligence layers across Vayunex SaaS platforms, including AI copilot capabilities in SocialNex, automated classification engines, and deterministic workflow agents.',
      },
    ],

    relatedServices: [
      { label: 'AI & Data Science', href: '/services/ai-data-science/' },
      { label: 'NLP & LLM Engineering', href: '/services/ai-data-science/nlp-llm/' },
      { label: 'Machine Learning', href: '/services/ai-data-science/machine-learning/' },
      { label: 'Computer Vision', href: '/services/ai-data-science/computer-vision/' },
    ],

    seo: {
      title: 'Rajesh Kumar — AI/ML Engineer & Researcher | Vayunex Solution',
      description:
        'Rajesh Kumar is an AI/ML Engineer and Researcher at Vayunex Solution, specializing in applied machine learning, neural architectures, enterprise RAG, and autonomous agents.',
      canonical: 'https://www.vayunexsolution.com/people/rajesh-kumar/',
    },

    schema: {
      id: 'https://www.vayunexsolution.com/people/rajesh-kumar/#person',
      knowsAbout: [
        'Applied Machine Learning',
        'Neural Network Architecture',
        'Autonomous Agent Workflows',
        'Retrieval-Augmented Generation (RAG)',
        'Natural Language Processing (NLP)',
        'Vector Embeddings & Semantic Search',
        'Deep Learning Inference',
      ],
    },
  },
];

/**
 * Returns a person by their slug or alias slug.
 * Supports both 'ved-prakash' and legacy 'ved-parkash'.
 */
export function getPersonBySlug(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase().replace(/\/$/, '');
  return (
    people.find(
      (p) => p.slug === s || (p.aliasSlugs && p.aliasSlugs.includes(s))
    ) || null
  );
}

/** Returns all people. */
export function getAllPeople() {
  return people;
}

/**
 * Resolves a blog author string to a person data object.
 * Accepts display name strings like "Ved Prakash", "Ved Parkash", or "Sandeep Kumar".
 * Returns null for unknown authors (e.g. "Vayunex Team") — never breaks.
 */
export function resolveAuthorToPerson(authorName) {
  if (!authorName) return null;
  const normalized = authorName.trim().toLowerCase();
  return (
    people.find((p) => {
      if (p.name.toLowerCase() === normalized) return true;
      if (p.slug === normalized.replace(/\s+/g, '-')) return true;
      if (p.aliasSlugs && p.aliasSlugs.includes(normalized.replace(/\s+/g, '-'))) return true;
      if (normalized === 'ved parkash' && p.slug === 'ved-prakash') return true;
      if (normalized === 'ved prakash' && p.slug === 'ved-prakash') return true;
      if (normalized === 'rajesh kumar' && p.slug === 'rajesh-kumar') return true;
      return false;
    }) || null
  );
}
