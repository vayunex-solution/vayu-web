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
    role: 'AI Integration Engineer',
    subRole: 'SaaS AI Integration | ERP & CRM Intelligent Workflows | Applied AI Systems',
    company: 'Vayunex Solution',
    companyUrl: 'https://www.vayunexsolution.com',
    experience: 5,
    experienceLabel: 'SaaS & ERP AI Specialist',
    education: 'B.Tech (Specialization in AI & ML)',
    university: 'Kurukshetra University (KUK)',
    origin: 'Haryana / Chandigarh Tricity, India',
    image: '/images/people/rajesh-kumar.jpg',
    imageAlt: 'Rajesh Kumar — AI Integration Engineer at Vayunex Solution',

    shortBio:
      'Rajesh Kumar is the AI Integration Engineer at Vayunex Solution, specializing in integrating AI capabilities, intelligent workflow automation, and copilot modules across ERP, CRM, and enterprise SaaS platforms.',

    fullBio: [
      'Rajesh Kumar serves as AI Integration Engineer at Vayunex Solution, where he spearheads the practical embedding of artificial intelligence into enterprise ERP, customer CRM workflows, and proprietary SaaS platforms.',
      'With a B.Tech specialized in Artificial Intelligence & Machine Learning from Kurukshetra University (KUK), his engineering work centers on bridging business systems with modern AI. He transforms operational processes across sales, customer management, inventory, and billing by embedding intelligent automation, predictive copilot engines, and smart document parsing directly into active business software.',
      'At Vayunex Solution, he directs AI integration across our proprietary products—including SocialNex AI copilot automation, SchoolDost student verification models, PayNex automated reconciliation, and Jwelnex ERP catalogue intelligence—ensuring that enterprise AI delivers tangible business outcomes rather than speculative experiments.',
    ],

    expertise: [
      'SaaS AI Integration',
      'ERP AI Workflows & Automation',
      'CRM Lead & Process AI Automation',
      'AI Copilot & Assistant Embedding',
      'Intelligent Document & Invoice Parsing',
      'LLM & Vector API Integration',
      'Predictive Inventory & Sales Scoring',
      'Autonomous Workflow Automation',
      'Multi-Tenant SaaS AI Architecture',
      'Webhook & Business Data AI Triggers',
    ],

    highlights: [
      {
        title: 'ERP AI Automation',
        description: 'Embeds smart automation, automated ledger anomaly detection, and predictive inventory telemetry directly into enterprise ERP workflows.',
      },
      {
        title: 'CRM AI Copilot Integration',
        description: 'Integrates automated lead classification, customer sentiment analysis, and intelligent conversation responders into CRM pipelines.',
      },
      {
        title: 'SaaS Product AI Capabilities',
        description: 'Builds and connects production AI microservices into Vayunex SaaS platforms including SocialNex, SchoolDost, PayNex, and Jwelnex.',
      },
      {
        title: 'Academic & Technical Foundations',
        description: 'B.Tech with Specialization in AI/ML from Kurukshetra University (KUK), focusing on applied machine intelligence in commercial software.',
      },
    ],

    functionalMatrix: [
      {
        area: 'ERP AI Integration',
        details: 'Intelligent inventory telemetry, automated purchase order parsing, invoice OCR extraction, and real-time ledger classification.',
      },
      {
        area: 'CRM AI Automation',
        details: 'Lead qualification copilots, customer interaction scoring, automated follow-up scheduling, and CRM chatbot integration.',
      },
      {
        area: 'SaaS Copilot Workflows',
        details: 'SocialNex generative caption & engagement intelligence, automated moderation, and personalized user triggers.',
      },
      {
        area: 'Business API & LLM Orchestration',
        details: 'Secure multi-tenant OpenAI/Anthropic/open-source model integration, token cost optimization, and structured JSON output guardrails.',
      },
    ],

    industryPortfolio: [
      {
        client: 'SocialNex AI Automation Engine',
        location: 'Vayunex Proprietary Ecosystem',
        industry: 'SaaS AI Integration',
        description: 'Integrated generative copilots and automated scheduling intelligence directly into SocialNex social operations platform.',
      },
      {
        client: 'Jwelnex ERP Intelligent Telemetry',
        location: 'Enterprise Retail & Bullion',
        industry: 'ERP AI Workflows',
        description: 'Engineered smart stock pattern detection, catalogue auto-tagging, and automated valuation alerts for jewellery retail ERP.',
      },
      {
        client: 'Enterprise CRM Automation Pipelines',
        location: 'Enterprise Engagements',
        industry: 'CRM AI Integration',
        description: 'Integrated intelligent lead scoring, follow-up notifications, and CRM data enrichment pipelines across client customer operations.',
      },
    ],

    careerTimeline: [
      {
        phase: 'Education & Foundations',
        heading: 'B.Tech (Specialization in AI/ML) — Kurukshetra University (KUK)',
        description:
          'Completed B.Tech with focused specialization in Artificial Intelligence, Machine Learning, algorithm optimization, and data-driven systems.',
      },
      {
        phase: 'Applied Engineering',
        heading: 'Enterprise SaaS & AI Integrations',
        description:
          'Engineered and deployed AI microservices, webhook pipelines, and document intelligence workflows integrated with commercial database systems.',
      },
      {
        phase: 'Current',
        heading: 'AI Integration Engineer — Vayunex Solution',
        description:
          'Directing AI integration across Vayunex SaaS platforms, ERP environments, and CRM systems, embedding intelligent automation into daily enterprise operations.',
      },
    ],

    faq: [
      {
        question: 'What is Rajesh Kumar\'s role at Vayunex Solution?',
        answer:
          'Rajesh Kumar is the AI Integration Engineer at Vayunex Solution, focusing on integrating AI capabilities and intelligent automation into ERP, CRM, and SaaS software.',
      },
      {
        question: 'What are Rajesh Kumar\'s educational qualifications?',
        answer:
          'Rajesh Kumar holds a B.Tech degree with specialization in Artificial Intelligence & Machine Learning from Kurukshetra University (KUK), Haryana.',
      },
      {
        question: 'How does Rajesh Kumar integrate AI into ERP and CRM systems?',
        answer:
          'He embeds intelligent features into ERP and CRM systems—such as automated invoice parsing, smart lead scoring, customer sentiment classification, predictive inventory telemetry, and AI copilot assistants.',
      },
    ],

    relatedServices: [
      { label: 'AI & Data Science', href: '/services/ai-data-science/' },
      { label: 'NLP & LLM Engineering', href: '/services/ai-data-science/nlp-llm/' },
      { label: 'Machine Learning', href: '/services/ai-data-science/machine-learning/' },
      { label: 'Computer Vision', href: '/services/ai-data-science/computer-vision/' },
    ],

    seo: {
      title: 'Rajesh Kumar — AI Integration Engineer | Vayunex Solution',
      description:
        'Rajesh Kumar is the AI Integration Engineer at Vayunex Solution (B.Tech in AI/ML from KUK), specializing in integrating AI into ERP, CRM, and enterprise SaaS platforms.',
      canonical: 'https://www.vayunexsolution.com/people/rajesh-kumar/',
    },

    schema: {
      id: 'https://www.vayunexsolution.com/people/rajesh-kumar/#person',
      knowsAbout: [
        'SaaS AI Integration',
        'ERP AI Workflows',
        'CRM AI Automation',
        'AI Copilot Systems',
        'Intelligent Business Automation',
        'Machine Learning Integration',
        'Retrieval-Augmented Generation (RAG)',
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
