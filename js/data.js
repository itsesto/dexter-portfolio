const portfolioData = {
  profile: {
    name: "Dexter Esto",
    role: "AI Automation Engineer",
    handle: "@dexautomation",
    email: "itsesto3@gmail.com",
    image: "assets/images/profile/dexter-profile.png"
  },

  socialLinks: {
    github: "#",
    linkedin: "#",
    x: "#",
    youtube: "#"
  },

  navigation: [
    {
      label: "Home",
      page: "home",
      href: "index.html",
      icon: "home"
    },
    {
      label: "Projects",
      page: "projects",
      href: "projects.html",
      icon: "folder"
    },
    {
      label: "Services",
      page: "services",
      href: "services.html",
      icon: "cube"
    },
    {
      label: "Credentials",
      page: "credentials",
      href: "credentials.html",
      icon: "chart"
    },
    {
      label: "Testimonials",
      page: "testimonials",
      href: "index.html#testimonials",
      icon: "message"
    },
    {
      label: "About",
      page: "about",
      href: "about.html",
      icon: "user"
    },
    {
      label: "Contact",
      page: "contact",
      href: "contact.html",
      icon: "mail"
    }
  ]
};

portfolioData.home = {
  hero: {
    title: "I build AI systems that run your business while you sleep.",
    description:
      "AI automation engineer helping businesses replace repetitive work with organized workflows."
  },

tools: [
  "n8n",
  "Make",
  "Zapier",
  "Microsoft Power Automate",
  "Pipedrive",
  "GoHighLevel",
  "HubSpot",
  "Asana",
  "ClickUp",
  "Notion",
  "Airtable",
  "Supabase",
  "Firebase",
  "Google Sheets",
  "Google Calendar",
  "Slack",
  "OpenAI",
  "Claude",
  "Gemini",
  "Ollama",
  "Groq",
  "Vapi",
  "Retell",
  "JavaScript",
  "Python",
  "APIs",
  "Webhooks",
  "ngrok",
  "Mailtrap"
],

  aiBuilds: [
    "AI Agents",
    "Workflow Automation",
    "RAG & Knowledge",
    "CRM Integration",
    "Voice Agents",
    "Data Pipelines",
    "APIs & Webhooks",
    "Process Automation"
  ],

  services: [
    {
      number: "01",
      title: "Workflow Automation",
      description:
        "Reduce repetitive tasks and connect business tools."
    },
    {
      number: "02",
      title: "CRM Automation",
      description:
        "Organize lead qualification, follow-up, and pipelines."
    },
    {
      number: "03",
      title: "AI Voice Agents",
      description:
        "Answer inquiries and book appointments automatically."
    },
    {
      number: "04",
      title: "AI Integration",
      description:
        "Connect AI models with business data and software."
    }
  ],

  credentials: [
  {
    title: "AI Engineer",
    image:
      "assets/images/certificates/aiengineer.png"
  },
  {
    title: "Data Engineer",
    image:
      "assets/images/certificates/dataengineer.png"
  },
  {
    title: "n8n Automation",
    image:
      "assets/images/certificates/n8n.png"
  },
  {
    title: "TESDA Certificate",
    image:
      "assets/images/certificates/tesda.png"
  },
  {
    title: "Zapier Certificate 1",
    image:
      "assets/images/certificates/zap1.png"
  },
  {
    title: "Zapier Certificate 2",
    image:
      "assets/images/certificates/zap2.png"
  },
  {
    title: "Zapier Certificate 3",
    image:
      "assets/images/certificates/zap3.png"
  },
  {
    title: "Zapier Certificate 4",
    image:
      "assets/images/certificates/zap4.png"
  }
]
};

portfolioData.projects = [
  {
    id: "leadflow-ai",
    title: "LeadFlow AI",
    category: "CRM",
    type: "leadflow",
    summary:
      "An AI-assisted lead management system that qualifies leads, updates records, and answers CRM questions using natural-language commands.",
    tools: [
      "n8n",
      "Supabase",
      "React",
      "AI"
    ]
  },

  {
    id: "construction-reactivation",
    title: "Construction Lead Reactivation",
    category: "Lead Generation",
    type: "reactivation",
    summary:
      "A system that finds inactive construction inquiries, evaluates eligibility, interprets replies, and supports consultation booking.",
    tools: [
      "n8n",
      "GoHighLevel",
      "AI"
    ]
  },

  {
    id: "feedback-mining",
    title: "Customer Feedback Mining",
    category: "Customer Support",
    type: "feedback",
    summary:
      "An AI classification workflow that detects sentiment, topic, urgency, department, and cases requiring human review.",
    tools: [
      "n8n",
      "GoHighLevel",
      "Ollama"
    ]
  },

  {
    id: "aquaflow",
    title: "AquaFlow CRM Automation",
    category: "CRM",
    type: "aquaflow",
    summary:
      "A customer assessment and CRM system covering inquiry intake, qualification, consultation booking, and follow-up.",
    tools: [
      "n8n",
      "Pipedrive",
      "ngrok"
    ]
  },

  {
    id: "primeflow",
    title: "PrimeFlow Voice Receptionist",
    category: "Voice AI",
    type: "primeflow",
    summary:
      "An AI receptionist that handles plumbing inquiries, checks availability, books appointments, and synchronizes call data.",
    tools: [
      "n8n",
      "Pipedrive",
      "Google Calendar",
      "Vapi"
    ]
  },

  {
    id: "smart-stretch",
    title: "Smart Stretch Chatbot",
    category: "Customer Support",
    type: "chatbot",
    summary:
      "A website chatbot that answers customer questions using an AI model and a structured knowledge source.",
    tools: [
      "Groq",
      "JavaScript",
      "AI"
    ]
  },

  {
    id: "coastal-solar",
    title: "CoastalSolar AI Customer Support",
    category: "Customer Support",
    type: "coastal-solar",
    summary:
      "An AI-powered customer support system that answers common solar inquiries, captures customer details, and routes requests that require human assistance.",
    tools: [
      "n8n",
      "AI",
      "JavaScript"
    ]
  }
];

portfolioData.projectFilters = [
  "All",
  "CRM",
  "Lead Generation",
  "Customer Support",
  "Voice AI"
];

portfolioData.homeVideos = [
  {
    title: "PrimeFlow",
    subtitle: "AI Voice Receptionist",
    src: "assets/videos/primeflow.mp4",
    projectUrl: "case-study.html?project=primeflow"
  },
  {
    title: "AquaFlow",
    subtitle: "Water Treatment CRM Automation",
    src: "assets/videos/aquaflow.mp4",
    projectUrl: "case-study.html?project=aquaflow"
  },
  {
    title: "LeadFlow AI",
    subtitle: "AI Lead Management System",
    src: "assets/videos/leadflow.mp4",
    projectUrl: "case-study.html?project=leadflow-ai"
  },
  {
    title: "CoastalSolar AI",
    subtitle: "AI Customer Support System",
    src: "assets/videos/coastal-solar.mp4",
    projectUrl: "case-study.html?project=coastal-solar"
  },
  {
    title: "Customer Feedback Mining",
    subtitle: "Construction Feedback Classification System",
    src: "assets/videos/feedback-mining.mp4",
    projectUrl: "case-study.html?project=feedback-mining"
  },
  {
    title: "Construction Lead Reactivation",
    subtitle: "Inactive Lead Recovery and Qualification System",
    src: "assets/videos/construction-reactivation.mp4",
    projectUrl:
      "case-study.html?project=construction-reactivation"
  }
];

/* ========================================
   DETAILED CASE-STUDY CONTENT

   Before-and-after values are prototype
   benchmarks or operational estimates.
   They are not claimed client results.
======================================== */

portfolioData.caseStudies = {
  primeflow: {
    workflowImage:
      "assets/images/workflows/primeflow-workflow.png",

    workflowAlt:
      "PrimeFlow AI Voice Receptionist workflow showing the call, booking, CRM, and calendar automation process.",

    workflowCaption:
      "The AI receptionist collects the caller's information, checks availability, books the appointment, and synchronizes the result with Pipedrive and Google Calendar.",

    businessProblem:
      "Plumbing businesses can miss calls while technicians are working, after business hours, or when office staff are unavailable. Manual call handling also creates delays between the initial inquiry, appointment scheduling, calendar updates, and CRM follow-up.",

    businessSolution:
      "PrimeFlow uses an AI voice receptionist to answer customer calls, collect the plumbing concern and contact information, check appointment availability, book a suitable time, and synchronize the call data with Pipedrive and Google Calendar. Calls that need judgment or incomplete information are sent to a human follow-up stage.",

    metrics: [
      {
        label: "Call availability",
        before: "Limited office hours",
        after: "24/7 AI intake"
      },
      {
        label: "Appointment entry",
        before: "Manually entered",
        after: "Automatically synchronized"
      },
      {
        label: "Duplicate protection",
        before: "Manual checking",
        after: "Exact call-ID validation"
      },
      {
        label: "CRM handoff",
        before: "Multiple manual updates",
        after: "One automated workflow"
      }
    ],

    improvements: [
      "Faster response to new plumbing inquiries",
      "Consistent collection of caller information",
      "Automatic availability checking and booking",
      "Synchronized Pipedrive and Google Calendar records",
      "Duplicate call and appointment protection",
      "Human follow-up for incomplete or sensitive cases"
    ],

    roiDefaults: {
      monthlyVolume: 120,
      minutesBefore: 12,
      minutesAfter: 3,
      hourlyRate: 350,
      monthlyToolCost: 3500,
      setupCost: 25000
    }
  },

  aquaflow: {
    workflowImage:
      "assets/images/workflows/aquaflow-workflow.png",

    workflowAlt:
      "AquaFlow customer assessment, qualification, booking, and CRM automation workflow.",

    workflowCaption:
      "Customer assessment information is validated by n8n, qualified, checked for duplicates, and synchronized with the appropriate Pipedrive records and booking stages.",

    businessProblem:
      "Water-treatment companies often handle assessment forms, qualification, scheduling, customer records, and follow-ups manually. This can lead to duplicate records, inconsistent qualification, slow response times, and poor visibility across the sales process.",

    businessSolution:
      "AquaFlow connects the customer assessment form with n8n and Pipedrive. It validates each inquiry, checks for existing people and deals, qualifies the request, creates the correct CRM records, schedules an assessment, and tracks the customer through a structured nine-stage sales pipeline.",

    metrics: [
      {
        label: "Inquiry processing",
        before: "Manual review",
        after: "Automated validation"
      },
      {
        label: "Duplicate checking",
        before: "Staff-dependent",
        after: "Built into the workflow"
      },
      {
        label: "Pipeline visibility",
        before: "Scattered updates",
        after: "9 structured stages"
      },
      {
        label: "Booking handoff",
        before: "Separate manual task",
        after: "Connected to the CRM"
      }
    ],

    improvements: [
      "Standardized customer assessment intake",
      "Automatic normalization and validation",
      "Duplicate person and deal prevention",
      "Consistent qualification decisions",
      "Automatic Pipedrive record creation",
      "Clear assessment and sales-stage tracking"
    ],

    roiDefaults: {
      monthlyVolume: 80,
      minutesBefore: 18,
      minutesAfter: 4,
      hourlyRate: 350,
      monthlyToolCost: 2800,
      setupCost: 30000
    }
  },

  "leadflow-ai": {
    workflowImage:
      "assets/images/workflows/leadflow-ai-workflow.png",

    workflowAlt:
      "LeadFlow AI lead intake, qualification, prioritization, and CRM management workflow.",

    workflowCaption:
      "LeadFlow AI centralizes incoming leads, validates their information, applies AI-assisted qualification, and keeps lead statuses and CRM records organized.",

    businessProblem:
      "Sales teams can lose opportunities when leads are stored across forms, spreadsheets, messages, and disconnected tools. Manual qualification and status updates make it difficult to identify which leads need immediate attention.",

    businessSolution:
      "LeadFlow AI centralizes lead intake, validation, qualification, prioritization, and CRM updates. The system can interpret operational commands, organize lead records, update statuses, and provide a clearer view of the sales pipeline.",

    metrics: [
      {
        label: "Lead intake",
        before: "Scattered sources",
        after: "Centralized records"
      },
      {
        label: "Qualification",
        before: "Manual review",
        after: "AI-assisted scoring"
      },
      {
        label: "Status updates",
        before: "Individual record editing",
        after: "Automated commands"
      },
      {
        label: "Pipeline visibility",
        before: "Limited reporting",
        after: "Live dashboard"
      }
    ],

    improvements: [
      "Centralized lead information",
      "Faster lead qualification",
      "Consistent status management",
      "Reduced repetitive CRM work",
      "Better visibility into priority leads",
      "Structured data for reporting"
    ],

    roiDefaults: {
      monthlyVolume: 200,
      minutesBefore: 10,
      minutesAfter: 2,
      hourlyRate: 350,
      monthlyToolCost: 2200,
      setupCost: 28000
    }
  },

  "coastal-solar": {
    workflowImage:
      "assets/images/workflows/coastal-solar-workflow.png",

    workflowAlt:
      "CoastalSolar AI customer-support and human-escalation workflow.",

    workflowCaption:
      "Customer questions are identified and answered using approved information, while complex or sensitive requests are routed to a human team member.",

    businessProblem:
      "Solar companies receive repetitive questions about services, pricing, installation, eligibility, maintenance, and scheduling. Customers may wait for a response when support staff are unavailable or busy with more complex cases.",

    businessSolution:
      "CoastalSolar AI provides a structured customer-support experience that answers approved common questions, captures inquiry details, and routes requests that need human judgment. The system helps customers receive faster information without removing human control from important decisions.",

    metrics: [
      {
        label: "Common questions",
        before: "Answered repeatedly",
        after: "Instant AI response"
      },
      {
        label: "Support availability",
        before: "Business hours",
        after: "Always available"
      },
      {
        label: "Escalation",
        before: "Informal handoff",
        after: "Structured routing"
      },
      {
        label: "Inquiry capture",
        before: "Inconsistent",
        after: "Standardized"
      }
    ],

    improvements: [
      "Faster responses to common solar questions",
      "Reduced repetitive support workload",
      "More consistent customer information",
      "Structured escalation to human staff",
      "Improved inquiry capture",
      "Better availability outside office hours"
    ],

    roiDefaults: {
      monthlyVolume: 300,
      minutesBefore: 7,
      minutesAfter: 1,
      hourlyRate: 350,
      monthlyToolCost: 1800,
      setupCost: 22000
    }
  },

  "feedback-mining": {
    workflowImage:
      "assets/images/workflows/customer-feedback-workflow.png",

    workflowAlt:
      "Customer Feedback Mining AI classification and human-review workflow.",

    workflowCaption:
      "Submitted feedback is validated and classified by sentiment, topic, urgency, and department before uncertain or critical cases are placed into human review.",

    businessProblem:
      "Construction feedback can arrive through different channels and may contain complaints, safety concerns, billing issues, scheduling concerns, or positive feedback. Manual review makes prioritization inconsistent and can delay critical cases.",

    businessSolution:
      "The Customer Feedback Mining system validates each feedback record and uses a local AI model to classify sentiment, topic, urgency, and responsible department. Critical, ambiguous, or low-confidence results are routed to human review before operational action.",

    metrics: [
      {
        label: "Classification",
        before: "Manual interpretation",
        after: "AI-assisted taxonomy"
      },
      {
        label: "Priority levels",
        before: "Subjective",
        after: "4 urgency levels"
      },
      {
        label: "Department routing",
        before: "Manual forwarding",
        after: "Automatic assignment"
      },
      {
        label: "Uncertain cases",
        before: "Potentially overlooked",
        after: "Human-review queue"
      }
    ],

    improvements: [
      "Consistent feedback classification",
      "Faster detection of critical safety concerns",
      "Automatic department assignment",
      "Evidence-based AI validation",
      "Human review for ambiguous classifications",
      "Duplicate and invalid-input protection"
    ],

    roiDefaults: {
      monthlyVolume: 150,
      minutesBefore: 9,
      minutesAfter: 2,
      hourlyRate: 350,
      monthlyToolCost: 1500,
      setupCost: 26000
    }
  },

  "construction-reactivation": {
    workflowImage:
      "assets/images/workflows/construction-reactivation-workflow.png",

    workflowAlt:
      "Construction inactive-lead reactivation, qualification, and consultation-booking workflow.",

    workflowCaption:
      "Inactive leads are checked for eligibility and communication permission before outreach, reply classification, qualification, and consultation booking.",

    businessProblem:
      "Construction companies can accumulate inactive inquiries that are never revisited. Staff must manually check old conversations, eligibility, location, budget, permission, project details, and availability before contacting each lead again.",

    businessSolution:
      "The Construction Lead Reactivation System scans inactive leads, verifies campaign eligibility, performs controlled outreach, interprets replies, qualifies renewed interest, and books consultations when requirements are satisfied. Safety controls prevent unauthorized or duplicate actions.",

    metrics: [
      {
        label: "Lead screening",
        before: "Manual record review",
        after: "Automated eligibility checks"
      },
      {
        label: "Test dataset",
        before: "100 inactive records",
        after: "Qualified candidate list"
      },
      {
        label: "Reply handling",
        before: "Manual interpretation",
        after: "AI-assisted classification"
      },
      {
        label: "Booking protection",
        before: "Manual checking",
        after: "Duplicate-aware validation"
      }
    ],

    improvements: [
      "Recovered visibility into inactive leads",
      "Consistent campaign eligibility checks",
      "Communication-permission enforcement",
      "AI-assisted reply classification",
      "Human review for unclear information",
      "Duplicate-safe consultation booking"
    ],

    roiDefaults: {
      monthlyVolume: 100,
      minutesBefore: 15,
      minutesAfter: 4,
      hourlyRate: 350,
      monthlyToolCost: 2500,
      setupCost: 32000
    }
  }
};

/* ========================================
   SERVICES PAGE
======================================== */

portfolioData.servicesPage = {
  introduction: {
    eyebrow: "AI AUTOMATION SERVICES",
    title:
      "Practical automation for repetitive business processes.",
    description:
      "I design low-code AI automation systems that help businesses organize leads, respond faster, reduce manual work, and keep important information synchronized across their tools."
  },

  services: [
    {
      number: "01",
      title: "AI Workflow Automation",
      description:
        "Automate repetitive processes using structured business rules, AI-assisted decisions, and human-review safeguards.",
      idealFor:
        "Businesses manually transferring information, reviewing submissions, assigning tasks, or repeating the same administrative process.",
      deliverables: [
        "Process and automation assessment",
        "n8n workflow development",
        "Input validation and normalization",
        "AI classification or extraction",
        "Error handling and retry logic",
        "Testing and handoff documentation"
      ],
      tools: [
        "n8n",
        "JavaScript",
        "AI APIs",
        "Webhooks"
      ]
    },

    {
      number: "02",
      title: "CRM Automation & Integration",
      description:
        "Connect forms, lead sources, calendars, and internal workflows with a structured CRM pipeline.",
      idealFor:
        "Sales and service businesses dealing with duplicate records, delayed follow-ups, inconsistent qualification, or unclear pipeline visibility.",
      deliverables: [
        "CRM pipeline configuration",
        "Contact and deal automation",
        "Duplicate-record protection",
        "Lead qualification logic",
        "Task and follow-up creation",
        "CRM notes and activity synchronization"
      ],
      tools: [
        "Pipedrive",
        "GoHighLevel",
        "n8n",
        "Google Sheets"
      ]
    },

    {
      number: "03",
      title: "AI Customer Support Systems",
      description:
        "Build customer-support assistants that answer approved questions, classify requests, and escalate cases that need human attention.",
      idealFor:
        "Businesses receiving repetitive questions, customer feedback, service inquiries, or support requests across multiple channels.",
      deliverables: [
        "Support-intake workflow",
        "Knowledge-based AI responses",
        "Sentiment and urgency classification",
        "Department or agent routing",
        "Human-review conditions",
        "Interaction logging and reporting"
      ],
      tools: [
        "n8n",
        "Ollama",
        "Groq",
        "GoHighLevel"
      ]
    },

    {
      number: "04",
      title: "AI Voice Receptionist & Booking",
      description:
        "Create an AI receptionist that collects caller information, checks availability, books appointments, and synchronizes the result with business systems.",
      idealFor:
        "Appointment-based businesses that miss calls, manually manage bookings, or need support outside regular office hours.",
      deliverables: [
        "Voice-agent conversation design",
        "Customer-information collection",
        "Calendar availability checking",
        "Appointment booking workflow",
        "CRM synchronization",
        "Human follow-up routing"
      ],
      tools: [
        "Vapi",
        "Retell",
        "n8n",
        "Google Calendar",
        "Pipedrive"
      ]
    }
  ],

  process: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understand the current process, business problem, tools, users, and required outcome."
    },
    {
      number: "02",
      title: "Workflow Design",
      description:
        "Map the automation, decision points, integrations, safeguards, and human-review rules."
    },
    {
      number: "03",
      title: "Build & Test",
      description:
        "Develop the workflow using test data, validate failure cases, and confirm every integration."
    },
    {
      number: "04",
      title: "Launch & Handoff",
      description:
        "Move the approved workflow into controlled use and provide clear operating documentation."
    }
  ],

  included: [
    "Low-code implementation",
    "Organized and labeled workflows",
    "Validation and duplicate protection",
    "Error handling and retries",
    "Human-review safeguards",
    "Synthetic-data testing",
    "Basic documentation",
    "Post-build walkthrough"
  ]
};
/* ========================================
   ABOUT PAGE
======================================== */

portfolioData.about = {
  introduction: {
    eyebrow: "ABOUT ME",

    title:
      "I build practical AI automations for real business processes.",

    description:
      "I am a Computer Engineering professional focused on AI automation, CRM integration, and low-code business systems. I enjoy turning repetitive and disorganized processes into workflows that are easier to operate, monitor, and improve."
  },

  story: [
    "My interest in automation started with understanding how software, data, and business operations can work together. Instead of using AI only for isolated tasks, I focus on building complete systems that move information between websites, automation platforms, CRMs, calendars, databases, and human teams.",

    "My portfolio includes lead management, inactive-lead reactivation, customer-feedback classification, customer assessment, AI customer support, and voice-receptionist systems. These projects use realistic business scenarios and synthetic data to demonstrate how the automation works safely from beginning to end.",

    "I prefer practical low-code solutions that remain organized, testable, and understandable. AI is used where it adds value, while important decisions, unclear information, and sensitive cases remain under human control."
  ],

  principles: [
    {
      number: "01",
      title: "Business problem first",
      description:
        "The automation begins with understanding the manual process, operational problem, and result the business actually needs."
    },
    {
      number: "02",
      title: "Simple and maintainable",
      description:
        "I avoid unnecessary complexity and build workflows that can be understood, tested, updated, and handed over clearly."
    },
    {
      number: "03",
      title: "Human control where needed",
      description:
        "Uncertain, sensitive, or high-impact decisions are routed to a person instead of being handled blindly by AI."
    }
  ],

 toolkit: [
  "n8n",
  "Make",
  "Zapier",
  "Microsoft Power Automate",
  "Pipedrive",
  "GoHighLevel",
  "HubSpot",
  "Asana",
  "ClickUp",
  "Notion",
  "Airtable",
  "Supabase",
  "Firebase",
  "Google Sheets",
  "Google Calendar",
  "Slack",
  "OpenAI",
  "Claude",
  "Gemini",
  "Ollama",
  "Groq",
  "Vapi",
  "Retell",
  "JavaScript",
  "Python",
  "APIs",
  "Webhooks",
  "ngrok",
  "Mailtrap"
],

  workingStyle: [
    "Start by mapping the current process",
    "Use test data before enabling live actions",
    "Validate inputs before sending information",
    "Prevent duplicate contacts, deals, and bookings",
    "Add clear error handling and recovery paths",
    "Document the workflow for easier handoff"
  ]
};
/* ========================================
   CONTACT PAGE
======================================== */

portfolioData.contact = {
  formEndpoint:
  "https://script.google.com/macros/s/AKfycbz2Yqbk7oPGBltT8egF-9FeRO7PmMtv4YfpralDaWHlNntS-XTyqxPsJrXSNBHtHlLX_w/exec",

  introduction: {
    eyebrow: "LET’S WORK TOGETHER",

    title:
      "Tell me what process you want to improve.",

    description:
      "Share the repetitive task, workflow problem, or business process you want to automate. I will review the information and suggest a practical next step."
  },

  email: "itsesto3@gmail.com",

  location:
    "Philippines — available for remote projects worldwide",

  responseTime:
    "I aim to reply within 1–2 business days.",

  calendlyUrl:
    "https://calendly.com/itsesto3/30min",

  services: [
    "AI Workflow Automation",
    "CRM Automation & Integration",
    "AI Customer Support System",
    "AI Voice Receptionist & Booking",
    "Lead Qualification & Follow-up",
    "Data Processing & Classification",
    "Automation Consultation",
    "Other"
  ]
};
/* ========================================
   CONTACT FORM SUBMISSION
======================================== */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm =
    document.getElementById(
      "contactForm"
    );

  const contactFormStatus =
    document.getElementById(
      "contactFormStatus"
    );

  const contactSubmitButton =
    contactForm?.querySelector(
      ".contact-submit-button"
    );

  const serviceSelect =
    contactForm?.querySelector(
      '[name="service"]'
    );

  const endpoint =
    portfolioData.contact?.formEndpoint;

  /*
   * Automatically select a service when
   * arriving from the Services page.
   */
  const contactParameters =
    new URLSearchParams(
      window.location.search
    );

  const requestedService =
    contactParameters.get("service");

  if (
    requestedService &&
    serviceSelect
  ) {
    const matchingOption = [
      ...serviceSelect.options
    ].find((option) => {
      return (
        option.value.toLowerCase() ===
        requestedService
          .replace(/-/g, " ")
          .toLowerCase()
      );
    });

    if (matchingOption) {
      serviceSelect.value =
        matchingOption.value;
    }
  }

  /*
   * Hidden honeypot used to reduce
   * automated spam submissions.
   */
  if (contactForm) {
    const honeypot =
      document.createElement("input");

    honeypot.type = "text";
    honeypot.name = "website";
    honeypot.tabIndex = -1;
    honeypot.autocomplete = "off";
    honeypot.setAttribute(
      "aria-hidden",
      "true"
    );

    honeypot.style.position = "absolute";
    honeypot.style.left = "-9999px";
    honeypot.style.width = "1px";
    honeypot.style.height = "1px";
    honeypot.style.opacity = "0";

    contactForm.appendChild(honeypot);
  }

  function showContactStatus(
    type,
    message
  ) {
    if (!contactFormStatus) return;

    contactFormStatus.className =
      `contact-form-status visible ${type}`;

    contactFormStatus.textContent =
      message;
  }

  contactForm?.addEventListener(
    "submit",
    async (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();

        showContactStatus(
          "error",
          "Please complete all required fields."
        );

        return;
      }

      if (
        !endpoint ||
        endpoint.includes(
          "PASTE_YOUR"
        ) ||
        !endpoint.endsWith("/exec")
      ) {
        showContactStatus(
          "error",
          "The contact form is not connected yet. Please email me directly instead."
        );

        return;
      }

      const originalButtonText =
        contactSubmitButton?.textContent;

      if (contactSubmitButton) {
        contactSubmitButton.disabled = true;
        contactSubmitButton.textContent =
          "Sending inquiry...";
      }

      showContactStatus(
        "loading",
        "Sending your project inquiry..."
      );

      try {
        const formData =
          new FormData(contactForm);

        const requestBody =
          new URLSearchParams();

        formData.forEach(
          (value, key) => {
            requestBody.append(
              key,
              String(value)
            );
          }
        );

        /*
         * no-cors is used because Apps Script
         * returns through a Google redirect.
         * The request is still submitted to
         * the private spreadsheet endpoint.
         */
        await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          body: requestBody
        });

        showContactStatus(
          "success",
          "Thank you! Your project inquiry was sent successfully. I will review it and respond as soon as possible."
        );

        contactForm.reset();
      } catch (error) {
        console.error(
          "Contact form error:",
          error
        );

        showContactStatus(
          "error",
          "Your inquiry could not be sent. Please try again or contact me directly by email."
        );
      } finally {
        if (contactSubmitButton) {
          contactSubmitButton.disabled = false;
          contactSubmitButton.textContent =
            originalButtonText ||
            "Send project inquiry →";
        }
      }
    }
  );
});
