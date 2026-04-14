export const personalInfo = {
  name: "Fady John Fayek", 
//  studentId: "22P0051",
  headline: "Software Engineering Student building AI, Embedded, Networking, and Full-Stack Systems",
  email: "fadijohn9@gmail.com", 
  phone: "+201211483304", 
  dateOfBirth: "2004-02-21", 
  nationality: "Egyptian",
  location: "Cairo, Egypt", 
  linkedin: "https://linkedin.com/in/fady-john-9439801a7", 
  github: "https://github.com/Fadij1", 
  resumeUrl: "/resume.pdf", 
  education: [
    {
      school: "Ain Shams University", 
      degree: "Software Engineering", 
      period: "09/2022 - 07/2027", 
      location: "Cairo, Egypt",
      gpa: "3.13/4" 
    },
    {
      school: "College de la Sainte Famille", 
      degree: "Graduate", 
      period: "09/2008 - 07/2022",
      location: "Cairo, Egypt"
    }
  ],
  languages: [
    { name: "Arabic", proficiency: "Native" },
    { name: "English", proficiency: "IELTS B2 Academic" },
    { name: "French", proficiency: "Delf B2" }
  ]
};

export const projects = [
  {
    id: "aegis",
    title: "Aegis Protocol: Reliable UDP Transport", 
    date: "12/2025",
    category: "Networking",
    hook: "Engineered a reliable application-layer protocol over UDP.",
    tech: ["Python", "Socket Programming", "UDP"], 
    description: "Engineered a reliable application-layer protocol over UDP with Stop-and-Wait ARQ, optimized binary packet design under strict MTU constraints, robust error control, and a custom simulation environment to validate performance under packet loss and latency.", 
    architectureDetails: ["Stop-and-Wait ARQ", "Binary Packet Constraints", "Packet Loss Simulation"],
    demoType: "network-flow"
  },
  {
    id: "marketplace",
    title: "Online Marketplace (MERN Stack)", 
    date: "12/2025",
    category: "Web",
    hook: "Full-Stack Web Application.",
    tech: ["React.js", "Node.js", "MongoDB", "JWT"], 
    description: "Architected a full-featured MERN e-commerce platform with role-based access, secure JWT authentication, RESTful APIs for product and order management, and a Super User dashboard for real-time monitoring and system control.", 
    architectureDetails: ["Role-based Access Control", "REST API architecture", "Real-time monitoring panel"],
    demoType: "architecture"
  },
  {
    id: "door-locker",
    title: "Embedded Door Locker Security System", 
    date: "12/2025",
    category: "Embedded",
    hook: "Dual-ECU security system on Tiva C.",
    tech: ["Embedded C", "ARM Cortex-M", "UART"], 
    description: "Designed and implemented a dual-ECU security system on Tiva C microcontrollers with UART-based communication, hardware abstraction for peripherals, and integrated safety features including auto-lock, password retry, and alarm mechanisms.", 
    architectureDetails: ["Dual-ECU Design", "UART Communication", "Hardware Abstraction Layer"],
    demoType: "hardware-flow"
  },
  {
    id: "dino-agent",
    title: "Autonomous Dino Run Agent", 
    date: "11/2025",
    category: "AI",
    hook: "Reinforcement Learning (AI) using Q-Learning.",
    tech: ["Python", "Q-Learning", "PyGame"], 
    description: "Developed a Python Q-Learning agent for the Chrome Dino game with a custom PyGame environment, dynamic state representation, and an Epsilon-Greedy strategy for autonomous optimal gameplay.", 
    architectureDetails: ["Dynamic State Representation", "Epsilon-Greedy Strategy", "Reward Mapping"],
    demoType: "rl-flow"
  },
  {
    id: "elearning-platform",
    title: "E-Learning & Career Platform (ASP.NET MVC)",
    date: "08/2025",
    category: "Web",
    hook: "MCV internship Capstone Project.",
    tech: ["ASP.NET Core MVC", "SQL Server", "Python", "Flask", "Gemini AI"],
    description: "Developed a full-featured LMS with ASP.NET Core MVC and SQL Server, including role-based portals, instructor dashboards, career simulation, secure admin panel, and an interactive Python Flask chatbot for web-based queries.",
    architectureDetails: ["Role-based Portals", "Secure Admin Panel", "AI Chatbot Integration"],
    demoType: "architecture"
  },
  {
    id: "app-rating-predictor",
    title: "App Rating & Success Predictor",
    date: "05/2025",
    category: "AI",
    hook: "Machine Learning & Deep Learning ensemble model.",
    tech: ["Machine Learning", "Deep Learning", "Random Forest"],
    description: "Developed a hybrid Random Forest-Deep Learning ensemble with stacking regression to predict Google Play Store app ratings, leveraging advanced feature engineering, text processing, and large-scale data analysis for improved accuracy.",
    architectureDetails: ["Hybrid Ensemble Model", "Stacking Regression", "Feature Engineering"],
    demoType: "ml-flow"
  },
  {
    id: "dc-motor-control",
    title: "DC Motor Position Control System",
    date: "05/2025",
    category: "Embedded",
    hook: "Control Engineering Course: PID-controlled feedback system.",
    tech: ["Arduino", "MATLAB", "Simulink", "PID Control"],
    description: "Built a PID-controlled feedback system with Arduino for precise DC motor positioning, tuning parameters via MATLAB/Simulink to optimize response and minimize error for the Control Engineering Course.",
    architectureDetails: ["PID Controller", "Feedback Loop", "Parameter Tuning"],
    demoType: "hardware-flow"
  },
  {
    id: "washing-machine",
    title: "Washing Machine Control System",
    date: "12/2024",
    category: "Embedded",
    hook: "Electronic Design Automation Course: Verilog-based control system.",
    tech: ["Verilog", "QuestaSim", "State Machines"],
    description: "Designed and simulated a Verilog-based digital control system with state machines for washing machine cycles, verifying timing and logic correctness using QuestaSim for the Electronic Design Automation Course.",
    architectureDetails: ["Finite State Machine", "Timing Verification", "Logic Simulation"],
    demoType: "hardware-flow"
  },
  {
    id: "mips-processor",
    title: "MIPS Processor Design",
    date: "05/2024",
    category: "Embedded",
    hook: "Computer Organization and Architecture Course: MIPS processor in VHDL.",
    tech: ["VHDL", "Xilinx Vivado"],
    description: "Designed and implemented a basic MIPS processor in VHDL using Xilinx Vivado, successfully simulating instruction execution for the Computer Organization and Architecture Course.",
    architectureDetails: ["Instruction Execution", "VHDL Implementation", "Hardware Simulation"],
    demoType: "hardware-flow"
  }
];

export const experience = [
  {
    role: "Software Development Intern", 
    company: "MCV (Manufacturing Commercial Vehicles) - Cairo, Egypt", 
    period: "07/2025 - 08/2025", 
    details: "Collaborated on full-stack development of \"LuIZ,\" a course registration web app using ASP.NET Core MVC with CSHTML/Bootstrap frontend, integrated a real-time Python/Flask AI chatbot with Google Gemini, implemented internal APIs, and delivered the project in an agile team environment." 
  },
  {
    role: "ACE Summer School Program", 
    company: "University Of East London - London, United Kingdom", 
    period: "07/2024", 
    details: "Gained hands-on experience with AWS and Azure for IoT and Smart City solutions, performed large-scale data processing with PySpark and Python visualizations, and collaborated internationally to design and present innovative urban analytics projects." 
  }
];

export const certificatesAndVolunteering = [
  "Big Data and Data Visualization By University of East London",
  "Embedded Systems Level 1 By Edges Academy",
  "Artificial Intelligence By National Telecommunication Institute",
  "ASU Career Center Volunteer By University of Ain Shams"
];

export const skills = {
  Languages: ["C++", "C", "Java", "Python", "JavaScript", "MATLAB", "MS-SQL"], 
  Web: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"], 
  Embedded: ["Embedded C", "ARM Cortex-M (Tiva C)", "UART", "I2C", "GPIO", "timers", "ISRs"], 
  Tools: ["Git/GitHub", "Jira", "Docker", "VS Code", "Postman", "MATLAB", "Simulink", "Xilinx Vivado", "QuestaSim", "PySpark"], 
  "Soft Skills": ["Agile Methodology", "Technical Leadership", "Cross-functional Collaboration", "Problem Solving"] 
};

export const blogPosts = [
  {
    title: "Architecting a University Management System with Scrum",
    date: "Nov 2025",
    readTime: "5 min read",
    summary: "How we organized our Agile Software Engineering project using a product backlog, sprint planning, and daily standups to deliver a scalable UMS.",
    tags: ["Agile", "Scrum", "Software Engineering"]
  },
  {
    title: "Context Switching in FreeRTOS on ARM Cortex-M4",
    date: "Mar 2026",
    readTime: "8 min read",
    summary: "Deep dive into the mechanics of RTOS task scheduling, saving state registers, and hardware abstraction on the Tiva C microcontroller.",
    tags: ["Embedded Systems", "FreeRTOS", "C"]
  },
  {
    title: "Optimizing Q-Learning for a T-Rex Runner Agent",
    date: "Nov 2025",
    readTime: "6 min read",
    summary: "Notes on defining the state space, reward functions, and epsilon-greedy exploration strategies for autonomous gameplay in PyGame.",
    tags: ["AI", "Reinforcement Learning", "Python"]
  }
];