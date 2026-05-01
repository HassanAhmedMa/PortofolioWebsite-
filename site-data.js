window.PORTFOLIO_DATA = {
  profile: {
    name: "Hassan Ahmed",
    role: "Software Engineer",
    headline: "From code to canvas, building software with curiosity, clarity, and care.",
    subheadline:
      "Computer Science-focused portfolio with projects spanning software testing, application development, data work, and student-built product experiences.",
    location: "Qesm El Nozha, Cairo, Egypt",
    intro:
      "I am a Computer Science student and aspiring software engineer who enjoys turning ideas into usable products. My work blends structured testing, implementation detail, and interface thinking so every build feels reliable as well as polished.",
    passions:
      "I care about software quality, thoughtful user experience, data-backed problem solving, and the kind of engineering craft that makes a product easier to trust. I am especially interested in testing workflows, application logic, and building systems that stay maintainable as they grow.",
    photo: "assets/profile/MyFormalImage.jpeg",
    heroHighlights: [
      { label: "Focus", value: "Software Engineering + QA" },
      { label: "Education", value: "Ain Shams University" },
      { label: "Current lens", value: "Testing, UI, and product quality" }
    ],
    quickFacts: [
      ["Role", "Software Engineer"],
      ["University", "Ain Shams University"],
      ["Experience", "Software Tester Intern at Digital Blocks"],
      ["Location", "Cairo, Egypt"],
      ["Portfolio scope", "Computer Science projects only"]
    ],
    contacts: [
      ["Name", "Hassan Ahmed"],
      ["Phone", "+201122228646"],
      ["Email", "hassanahmedwork9975@gmail.com"],
      ["Address", "Qesm El Nozha, Cairo, Egypt"]
    ],
    links: [
      ["Resume PDF", "assets/resume/HassanAhmedMahmoudResume2026Update.pdf"],
      ["LinkedIn", "https://www.linkedin.com/in/hassanahmedma"],
      ["GitHub", "https://github.com/HassanAhmedMa"]
    ]
  },
  skillCategories: [
    {
      title: "Quality Assurance",
      items: [
        "ISTQB Foundation Level",
        "Manual Testing",
        "Regression Testing",
        "System Testing",
        "User Acceptance Testing",
        "Test Cases",
        "Test Execution",
        "Bug Tracking",
        "STLC / SDLC",
        "Test Design"
      ]
    },
    {
      title: "Software Engineering",
      items: [
        "Java",
        "C#",
        "Python",
        "C++",
        "Object-Oriented Programming",
        "Data Structures",
        "Problem Solving",
        "Application Development",
        "Programming",
        "Communication"
      ]
    },
    {
      title: "Data + Databases",
      items: [
        "SQL",
        "MySQL",
        "Oracle Database",
        "Query Writing",
        "DQL",
        "Database Administration",
        "Structured Data",
        "Statistical Data Analysis",
        "Data Mining",
        "Microsoft Azure Machine Learning"
      ]
    },
    {
      title: "Product + Interface",
      items: [
        "JavaFX",
        "UIX",
        "Microsoft Excel",
        "Google Forms",
        "English Writing",
        "Spoken English",
        "English Listening"
      ]
    }
  ],
  projects: [
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
      contributors: [{
        name: "Ali Mohamed",
        url: "https://github.com/alinakhla",
        referenceLabel: "GitHub"
      }, , "Ziad Ehab", "Naif el-kady", "Ahmed Ashraf"],
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
      title: "2D Game",
      subtitle: "Google dinosaur with advanced features",
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
        "Simple Ui",

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
