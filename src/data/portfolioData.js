// Data sourced from Fady John Fayek's profile [cite: 1]

export const personalInfo = {
  name: "Fady John Fayek", // [cite: 1]
  headline: "Software Engineering Student building AI, Embedded, Networking, and Full-Stack Systems",
  email: "fadijohn9@gmail.com", // [cite: 2]
  location: "Cairo, Egypt", // [cite: 7]
  linkedin: "https://linkedin.com/in/fady-john-9439801a7", // [cite: 25]
  github: "https://github.com/Fadij1", // TODO: Update
  resumeUrl: "/resume.pdf", // Place in public folder
  education: {
    school: "Ain Shams University", // [cite: 13]
    degree: "Software Engineering", // [cite: 12]
    period: "09/2022 - 07/2027", // [cite: 6]
    gpa: "3.13/4" // [cite: 13]
  }
};

export const projects = [
  {
    id: "aegis",
    title: "Aegis Protocol: Reliable UDP", // [cite: 22]
    category: "Networking",
    hook: "Engineered a reliable application-layer protocol over UDP.",
    tech: ["Python", "Socket Programming", "UDP"], // [cite: 22]
    description: "Engineered a reliable application-layer protocol over UDP with Stop-and-Wait ARQ, optimized binary packet design under strict MTU constraints, robust error control, and a custom simulation environment to validate performance under packet loss and latency.", // [cite: 22]
    architectureDetails: ["Stop-and-Wait ARQ", "Binary Packet Constraints", "Packet Loss Simulation"],
    demoType: "network-flow"
  },
  {
    id: "marketplace",
    title: "Online Marketplace", // [cite: 22]
    category: "Web",
    hook: "Full-Stack Web Application (MERN).",
    tech: ["React.js", "Node.js", "MongoDB", "JWT"], // [cite: 18, 22]
    description: "Architected a full-featured MERN e-commerce platform with role-based access, secure JWT authentication, RESTful APIs for product and order management, and a Super User dashboard for real-time monitoring.", // [cite: 22]
    architectureDetails: ["Role-based Access Control", "REST API architecture", "Real-time monitoring panel"],
    demoType: "architecture"
  },
  {
    id: "door-locker",
    title: "Embedded Door Locker Security", // [cite: 22]
    category: "Embedded",
    hook: "Dual-ECU security system on Tiva C.",
    tech: ["Embedded C", "ARM Cortex-M", "UART"], // [cite: 22, 27]
    description: "Designed and implemented a dual-ECU security system on Tiva C microcontrollers with UART-based communication, hardware abstraction for peripherals, and integrated safety features including auto-lock and alarms.", // [cite: 22]
    architectureDetails: ["Dual-ECU Design", "UART Communication", "Hardware Abstraction Layer"],
    demoType: "hardware-flow"
  },
  {
    id: "dino-agent",
    title: "Autonomous Dino Run Agent", // [cite: 22]
    category: "AI",
    hook: "Reinforcement Learning (AI) using Q-Learning.",
    tech: ["Python", "Q-Learning", "PyGame"], // [cite: 22]
    description: "Developed a Python Q-Learning agent for the Chrome Dino game with a custom PyGame environment, dynamic state representation, and an Epsilon-Greedy strategy for autonomous optimal gameplay.", // [cite: 22]
    architectureDetails: ["Dynamic State Representation", "Epsilon-Greedy Strategy", "Reward Mapping"],
    demoType: "rl-flow"
  }
];

export const experience = [
  {
    role: "Software Development Intern", // [cite: 32]
    company: "MCV (Manufacturing Commercial Vehicles)", // [cite: 32]
    period: "07/2025 - 08/2025", // [cite: 32]
    details: "Collaborated on full-stack development of 'LuIZ,' a course registration web app using ASP.NET Core MVC. Integrated a real-time Python/Flask AI chatbot with Google Gemini and implemented internal APIs." // [cite: 32]
  },
  {
    role: "ACE Summer School Program", // [cite: 32]
    company: "University Of East London", // [cite: 32]
    period: "07/2024", // [cite: 32]
    details: "Gained hands-on experience with AWS and Azure for IoT and Smart City solutions. Performed large-scale data processing with PySpark and Python visualizations." // [cite: 32]
  }
];

export const skills = {
  Languages: ["C++", "C", "Java", "Python", "JavaScript", "MATLAB", "MS-SQL"], // [cite: 16]
  Web: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"], // [cite: 18]
  Embedded: ["Embedded C", "ARM Cortex-M", "UART", "I2C", "GPIO", "ISRs"], // [cite: 27]
  Tools: ["Git/GitHub", "Docker", "Simulink", "Xilinx Vivado", "QuestaSim", "PySpark"] // [cite: 29]
};