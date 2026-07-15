window.PORTFOLIO_DATA = {
  profile: {
    name: "Hassan Ahmed",
    role: "Software Engineer",
    headline: "From code to canvas, building software with curiosity, clarity, and care.",
    subheadline:
      "Double-degree Software Engineering student (Ain Shams University & UEL) with a focus on software QA and development powered by AI agents and automated workflows.",
    location: "Nozha, Cairo, Egypt",
    intro:
      "I am a Software Engineering student pursuing a dual degree at Ain Shams University and the University of East London (CGPA: 3.8/4.0). My work bridges software quality assurance (QA), structured testing methodologies (ISTQB), and next-generation software development powered by LLM-based AI agents and automated pipelines.",
    passions:
      "I care about software quality, test automation, and automated workflow design. I am especially interested in leveraging AI agents for software testing, building robust verification pipelines, and designing scalable database systems.",
    photo: "assets/profile/MyFormalImage.jpeg",
    heroHighlights: [
      { label: "Focus", value: "QA & SWE using AI Agents" },
      { label: "CGPA Standing", value: "3.8 / 4.0 (Excellent)" },
      { label: "Credentials", value: "ISTQB Certified Tester" }
    ],
    quickFacts: [
      ["Role", "Software Engineer / QA Analyst"],
      ["University", "Ain Shams University & UEL"],
      ["Credentials", "ISTQB Foundation Level"],
      ["Experience", "Software QA Intern at Digital Blocks"],
      ["Founding Venture", "Co-founder of Everly Digital (March 2026)"],
      ["Location", "Cairo, Egypt"]
    ],
    contacts: [
      ["Name", "Hassan Ahmed"],
      ["Phone", "+201122228646"],
      ["Email", "hassanahmedwork9975@gmail.com"],
      ["Address", "Nozha, Cairo, Egypt"]
    ],
    links: [
      ["Resume PDF", "assets/resume/HassanAhmedMahmoudResume2026Update.pdf"],
      ["LinkedIn", "https://www.linkedin.com/in/hassanahmedma"],
      ["GitHub", "https://github.com/HassanAhmedMa"]
    ]
  },
  skillCategories: [
    {
      title: "AI Agents & Workflows",
      items: [
        "AI Agent Architectures",
        "LLM Orchestration",
        "Automated Workflows",
        "Ollama Local Integration",
        "Prompt Engineering",
        "AI-Driven QA Automation",
        "Agentic Coding Pipelines"
      ]
    },
    {
      title: "Quality Assurance",
      items: [
        "ISTQB Foundation Level",
        "Manual & Regression Testing",
        "API Testing & Verification",
        "Equivalence Partitioning",
        "Boundary Value Analysis",
        "Test Case Design & Execution",
        "Bug Tracking & Logging",
        "Jira",
        "SDLC / STLC"
      ]
    },
    {
      title: "Software Engineering",
      items: [
        "C++ / Python / Java / C#",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "C++ Qt Creator GUI",
        "JavaFX MVC Development",
        "OS-Level Input Simulation",
        "Roblox Luau OOP Patterns",
        "Git / GitHub Version Control"
      ]
    },
    {
      title: "Data & Databases",
      items: [
        "SQL / PostgreSQL / MySQL",
        "Oracle Database normalization",
        "Supabase Backend Integration",
        "Stored Procedures & Triggers",
        "Data Analysis",
        "Microsoft Azure ML Studio"
      ]
    },
    {
      title: "Product & Interactive",
      items: [
        "GSAP 3D Scrollytelling",
        "Three.js Canvas Pinning",
        "Spline 3D Scene Controls",
        "Figma Prototyping",
        "Adobe Photoshop & Illustrator",
        "HTML5 / CSS3 / ES6+ JS",
        "Vite Build Pipeline",
        "Google Apps Script APIs"
      ]
    }
  ],
  projects: [
    {
      slug: "papers-filter-system",
      title: "Papers Filter System",
      subtitle: "Student exam registration portal and automated PDF processing database.",
      summary:
        "Engineered a student enrollment system backed by Supabase PostgreSQL, incorporating registration toggle master controls and Node.js PDF automation scripts.",
      year: "Academic System",
      projectType: "Independent Build",
      role: "Full-Stack Developer",
      deliverable: "Vite Web Portal & Automation Scripts",
      outcome:
        "Developed a secure dashboard with admin approval status badges, utilizing Python and Node.js helper scripts to scan and categorize exam PDF assets.",
      problem:
        "Processing and verifying student registrations and sorting physical exam sheet PDF files is highly labor-intensive and error-prone.",
      approach:
        "Designed a Vite-based admin panel with real-time approval cards. Programmed background scripts using Python to scan directories, extract names, and check paper listings.",
      languages: ["JavaScript", "Python", "SQL"],
      libraries: ["Vite", "Supabase Client", "Node.js FS"],
      skillsLearned: [
        "Postgres relational schemas",
        "Vite build pipeline",
        "Directory script scanning",
        "Admin toggles"
      ],
      contributors: [],
      media: [
        {
          type: "image",
          src: "assets/projects/papers-filter/AcademicVaultLanding.png",
          alt: "Academic Vault student login portal landing page"
        },
        {
          type: "image",
          src: "assets/projects/papers-filter/AdminDashboardAIConsole.png",
          alt: "Academic Vault Admin Dashboard uploader and AI processing console"
        },
        {
          type: "image",
          src: "assets/projects/papers-filter/AdminDashboardArchive.png",
          alt: "Academic Vault Admin Dashboard combined PDF archive database table"
        }
      ]
    },
    {
      slug: "controller-drift-corrector",
      title: "Xbox 360 Controller Drift Corrector",
      subtitle: "Python system calibration mapping physical analog inputs to virtual XInput drivers.",
      summary:
        "Developed a Python systems utility that emulates a virtual Xbox 360 controller using vgamepad, calibrating physical axis drift and filtering electrical noise in real-time.",
      year: "Personal Project",
      projectType: "Independent Build",
      role: "Systems Developer",
      deliverable: "Python CLI & Calibration Utility",
      outcome:
        "Successfully corrected a severe 30,978-point Y-axis joystick drift. Configured circular/radial vector geometry deadzones and utilized Windows winmm.dll to enforce a high-precision 1ms sleep loop resolution.",
      problem:
        "The physical controller's right joystick had a constant upward offset, making game sessions unplayable, and standard Windows calibration sliders lacked the precision to correct it.",
      approach:
        "Programmed a coordinate offset calibration loop in Python. Designed a calibration wizard saving offset matrices to calibration.json, and added a button-hold assistance module (120ms debounce filtering).",
      languages: ["Python"],
      libraries: ["vgamepad", "ctypes (winmm.dll)"],
      skillsLearned: [
        "Input emulation",
        "Windows multimedia timers",
        "Vector geometry math",
        "JSON configuration files",
        "State debouncing"
      ],
      contributors: [],
      media: [
        {
          type: "image",
          src: "assets/Screenshot 2026-07-07 174732.png",
          alt: "Xbox Controller Drift Corrector structure"
        }
      ]
    },
    {
      slug: "course-registration-system",
      title: "Course Registration System",
      subtitle: "C++ Qt desktop application managing schedules with prerequisite checks.",
      summary:
        "Built a desktop registration system in C++ using the Qt GUI framework to manage university student enrollments and enforce prerequisite coursework guidelines.",
      year: "University Project",
      projectType: "Academic Build",
      role: "Software Engineer",
      deliverable: "C++ Qt desktop application",
      outcome:
        "Implemented automated validation loops that analyze transcript records and block invalid registrations, using local file-based database serialization.",
      problem:
        "Manual schedule registration allows students to bypass prerequisite coursework, creating scheduling errors and administrative database conflicts.",
      approach:
        "Designed UI layouts using Qt Creator. Programmed logical checking loops to scan student history matrices and verify compliance before committing course updates to file structures.",
      languages: ["C++"],
      libraries: ["Qt Framework", "Qt Creator"],
      skillsLearned: [
        "Desktop interface design",
        "Prerequisite check logic",
        "Object-oriented development",
        "File-based database serialization"
      ],
      contributors: [],
      media: [
        {
          type: "image",
          src: "assets/projects/no-photo-gold.png",
          alt: "C++ Qt Course Registration system dashboard"
        }
      ]
    },
    {
      slug: "uber-ride-booking-system",
      title: "Uber Ride Booking System",
      subtitle: "C# Windows Forms ride-hailing portal backed by a normalized Oracle SQL database.",
      summary:
        "Developed a desktop ride-hailing simulation modeling passenger bookings, driver dispatches, and fares calculated by distance, with transaction safety backed by Oracle database scripting.",
      year: "University Project",
      projectType: "Team Collaboration",
      role: "Database & Backend Developer",
      deliverable: "C# WinForms desktop app with SQL backend",
      outcome:
        "Programmed SQL stored procedures, database triggers, and normalized schemas in Oracle SQL, connecting them to a C# UI via ADO.NET.",
      problem:
        "Simulating ride dispatching and fare transactions requires synchronized, secure operations to prevent customer balance conflicts and transaction dropouts.",
      approach:
        "Designed C# forms for passenger and driver portals. Engineered Oracle PL/SQL triggers to automate distance-fare calculations and update balances inside ACID transactions.",
      languages: ["C#", "SQL"],
      libraries: ["Windows Forms", "Oracle Client"],
      skillsLearned: [
        "Database normalization",
        "SQL stored procedures",
        "Transaction management",
        "C# ADO.NET"
      ],
      contributors: [],
      media: [
        {
          type: "image",
          src: "assets/projects/no-photo-gold.png",
          alt: "Uber ride booking database model overview"
        }
      ]
    },
    {
      slug: "seniors-2027-asu-website",
      title: "Seniors 2027 Graduation Portal",
      subtitle: "Configurable university class website with GSAP animations and Google Apps Script triggers.",
      summary:
        "Engineered a responsive, config-driven website for the Seniors 2027 graduation class at Ain Shams University, featuring searchable department grids and automated poll inputs.",
      year: "University Initiative",
      projectType: "Lead Developer",
      role: "Frontend & System Architect",
      deliverable: "Responsive Web Portal",
      outcome:
        "Created a mobile-first site utilizing a central config.js setup for layout controls, integrating GSAP ScrollTrigger for parallax timelines.",
      problem:
        "University class websites need frequent department, text, and schedule updates, which usually require editing production code.",
      approach:
        "Decoupled the layout architecture into a JSON-like config script. Connected the trip voting form directly to a Google Sheets database using custom Google Apps Script API endpoints.",
      languages: ["JavaScript", "HTML5", "CSS3"],
      libraries: ["Vite", "GSAP ScrollTrigger"],
      skillsLearned: [
        "GSAP timeline animations",
        "Decoupled web architecture",
        "Google Apps Script APIs",
        "Mobile-first layouts"
      ],
      contributors: [],
      media: [
        {
          type: "image",
          src: "assets/Screenshot 2026-07-07 174457.png",
          alt: "Seniors 2027 graduation portal landing page"
        },
        {
          type: "image",
          src: "assets/Screenshot 2026-07-07 174522.png",
          alt: "Seniors 2027 graduation portal landing page"
        }
      ]
    },
    {
      slug: "digital-invitations-agency",
      title: "Everly Digital Agency Portfolios",
      subtitle: "High-fidelity localized digital invitation platforms with custom animations and API integrations.",
      projectUrl: "https://www.instagram.com/everlydigitalsites",
      projectUrlLabel: "Visit Instagram Page",
      summary:
        "Co-founded a web design agency delivering premium, localized wedding invitation portals, incorporating HSL themes, entrance timelines, and RSVP logging.",
      year: "Business Venture",
      projectType: "Client Operations",
      role: "Co-Founder & Lead Developer",
      deliverable: "Production Web Applications",
      outcome:
        "Successfully built and deployed 7 custom themed experiences (including stardust glow and anime themes) with Google Apps Script RSVP databases.",
      problem:
        "Couples need an elegant, customizable, and reliable way to gather guest RSVPs and present photos without paying high database hosting fees.",
      approach:
        "Designed custom envelope opening animations and background particle grids using GSAP. Wrote Google Apps Script API triggers to capture and log RSVPs directly to Google Sheets.",
      languages: ["JavaScript", "HTML5", "CSS3"],
      libraries: ["GSAP", "Google Apps Script API"],
      skillsLearned: [
        "Business lifecycle",
        "Interactive envelope animations",
        "Performance optimization",
        "Client styling templates"
      ],
      contributors: [],
      media: [
        {
          type: "image",
          src: "assets/projects/no-photo-gold.png",
          alt: "Wedding digital invitation envelope transition"
        }
      ]
    },

    {
      slug: "food-ordering-management-system",
      title: "Food Ordering Management System",
      subtitle: "Desktop ordering experience for menu browsing, login flows, and order handling.",
      summary:
        "A student-built ordering system focused on a clear customer journey, role-based interactions, and the kind of practical CRUD logic that makes desktop software feel complete.",
      year: "University Project",
      projectType: "Team Collaboration",
      role: "Software Engineer",
      deliverable: "JavaFX desktop application",
      outcome:
        "Built an interface-driven project that combines Java application structure, navigation, login handling, and operational flows for managing food orders.",
      problem:
        "The challenge was creating an end-to-end ordering experience that felt understandable for users while still handling the backend logic and structure required for real application behavior.",
      approach:
        "I designed the screens, connected the main flows, and shaped the UI around an approachable desktop experience so the project could show both technical implementation and usability thinking.",
      languages: ["Java"],
      libraries: ["JavaFX", "Scene Builder"],
      skillsLearned: [
        "UI architecture",
        "State-based navigation",
        "Login flow design",
        "Database Connection",
        "Front-Layer login validation",
        "Application structuring"
      ],
      contributors: [
        {
          name: "Ali Mohamed",
          url: "https://github.com/alinakhla",
          referenceLabel: "GitHub"
        },
        {
          name: "Ziad Ehab",
          url: "https://github.com/ziadEhab676",
          referenceLabel: "GitHub"
        },
        "Naif el-kady",
        "Ahmed Ashraf"
      ],
      media: [
        {
          type: "image",
          src: "assets/projects/food-ordering/HomeScreen.png",
          alt: "Concept visual for the food ordering management system"
        },
        {
          type: "image",
          src: "assets/projects/food-ordering/SearchingRestaurants.png",
          alt: "Dashboard inspired screen for the food ordering management system"
        }
      ]
    },
    {
      slug: "Advanced-Google-Dinosaur",
      title: "Advanced Google Dinosaur 2D Game",
      subtitle: "Google dinosaur game replica with enhanced graphics and custom physics.",
      summary:
        "Built a game engine to suit the iconic google dinosaur game, but with more features and enhanced graphics!",
      year: "University Project",
      projectType: "Team Collaboration",
      role: "Software Engineer",
      deliverable: "2D Desktop Game",
      outcome:
        "Learned the basics of the game development, using sprites, gameloop, deltatime for smooth multi-platform experience. More to that, implementing physics for the first time using code was quite a harsh time, but it was fun. ",
      problem:
        "First university project, no epxerience, no tools or clear path way to start. Setting up the environment for SFML was alone a big problem",
      approach:
        "Used 3 Layer parallax with diffirential speed to give a depth feeling to the background.  \nUsed newtons equation to apply gravity effect to player sprite and added a smoothness filter to it. Giving it a natural pull down movement.",
      languages: ["C++"],
      libraries: ["SFML"],
      skillsLearned: [
        "Game Engine",
        "Physics simulation",
        "Sprite programming",
        "Game programming",
        "Simple Ui"
      ],
      contributors: [],
      media: [
        {
          type: "video",
          src: "assets/projects/SFMLProject/DinosuarVideo.mp4",
          alt: "Concept visual for the food ordering management system"
        },
        {
          type: "image",
          src: "assets/projects/SFMLProject/HomePage.png",
          alt: "Dashboard inspired screen for the food ordering management system"
        }
      ]
    }
  ]
};
