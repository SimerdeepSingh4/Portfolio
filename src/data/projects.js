export const projects = [
  {
    id: "1",
    title: "Mentora LMS",
    featured: true,
    
    year: "2024",
    shortDescription:"A full-featured Learning Management System built using MERN stack with role-based dashboards for students, teachers, and admins.",
    description:
      "Mentora is a modern Learning Management System built using the MERN stack. It caters to students, educators, and organizations by offering role-based access and features such as course creation, assessments, personalized learning, and secure payment integration.",
    features: [
      "Role-based dashboards for students, teachers, and admins",
      "Course creation, quizzes, and assignments",
      "AI-powered personalized learning paths",
      "Secure payment integration",
      "Progress tracking and analytics",
      "Cloud-based file uploads (Cloudinary)"
    ],
    challenges: [
      "Implementing real-time progress tracking",
      "Integrating AI for personalized learning",
      "Ensuring secure authentication and payments"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/Mentora-LMS-",
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "https://github.com/SimerdeepSingh4/Mentora-LMS-" }
    ],
    videoUrl: "https://www.youtube.com/embed/HVTNYHJv_FI?si=dNcgc6hexCAfoSAG",
    sections: [
      {
        title: "Student Dashboard",
        content:
          "Students can browse and enroll in courses, attempt quizzes and assignments, and track their learning progress. The system also uses AI to suggest personalized learning paths.",
        images: [
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220081/Project1A_om4mrq.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220083/Project1B_jghrsf.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220082/Project1C_rsaxfo.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220081/Project1D_piiuss.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220081/Project1E_ihqbi9.png",
        ],
      },
      {
        title: "Teacher Dashboard",
        content:
          "Teachers can create and manage courses, organize content, track student performance, and conduct assessments through an intuitive interface.",
        images: [
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220081/Project1F_ge3bg4.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220082/Project1G_l6rhho.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220082/Project1H_gqudkj.png",
        ],
      },
      {
        title: "Admin Dashboard",
        content:
          "Admins oversee platform operations, manage users, approve instructor applications, and monitor performance and transactions. They ensure the platform runs smoothly.",
        images: [
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220082/Project1I_yinbuj.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220083/Project1K_zj9dye.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220083/Project1L_lxsh9c.png",
        ],
      },
    ],
    tech: [
      "React",
      "Vite",
      "Redux",
      "Shadcn UI",
      "Stripe",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273589/Mentora_Thumbnail_ujmqgk.png",
  },
  {
    id: "2",
    title: "V.O.L.T (Voice-to-Output Language Transcription)",
    featured: false,
        year: "2023",    shortDescription: "Real-time multilingual speech-to-text app with emotion detection and tone transformation.",
    description:
      "V.O.L.T is an advanced real-time multilingual transcription app built using React.js and Node.js. It enables users to convert live speech into accurate written text across various languages. What sets it apart is its integrated emotion detection system, which captures the speaker's emotional tone, and a tone transformation feature that allows users to convert the transcribed text into formal, informal, or neutral styles. Designed for professionals, educators, and global teams, V.O.L.T simplifies cross-language communication while adding emotional intelligence to speech-to-text conversion.",
    features: [
      "Real-time multilingual transcription",
      "Emotion detection from speech",
      "Tone transformation (formal, informal, neutral)",
      "Cloud-based storage (Firebase)",
      "User-friendly interface"
    ],
    challenges: [
      "Integrating multiple speech APIs",
      "Accurate emotion detection",
      "Optimizing for real-time performance"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/V.O.L.T",
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "#" }
    ],
    images: [
      "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220084/project2A_soifsp.png",
      "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220085/project2B_sz0pka.png",
      "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220085/project2C_mnkfa2.png"
    ],
    tech: [
      "React",
      "Node.js",
      "Whisper API",
      "Firebase",
      "Google Cloud Speech API",
    ],
    thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273588/V.O.L.T_Thumbnail_xif5m6.png",
  },
  {
    id: "3",
    title: "AI-Powered Code Review Platform",
    featured: false,
    
    year: "2024",
    shortDescription: "AI-powered code review tool using Google Gemini with syntax highlighting and markdown feedback.",
    description:
      "A full-stack code review application built using React and Node.js, integrated with Google's Gemini AI to provide real-time, automated feedback on prewritten code. It offers syntax highlighting, mobile responsiveness, and markdown-formatted results for code quality, performance, and security insights.",
    features: [
      "AI-powered code review (Google Gemini API)",
      "Syntax highlighting (PrismJS)",
      "Markdown-formatted feedback",
      "Mobile responsive design",
      "Real-time feedback"
    ],
    challenges: [
      "Integrating AI for code analysis",
      "Ensuring accurate and actionable feedback",
      "Maintaining performance with large code snippets"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/SimerdeepSingh4/Code-Reviewer",
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "https://github.com/SimerdeepSingh4/Code-Reviewer" }
    ],
    videoUrl: "https://www.youtube.com/embed/037fjQBPv5c?si=uqN1i2PVHrmi2TKo",
    images: [
      "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220085/project3A_ndnsro.png",
      "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220085/project3B_mk1oxo.png", 
      "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220085/project3C_wtbzvg.png"
    ],
    tech: [
      "React",
      "Vite",
      "PrismJS",
      "React Markdown",
      "Node.js",
      "Express",
      "Google Gemini",
      "Axios"
    ],
    thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273590/Code_Reviwer_Thumbnail_uhmlt1.png",
  },
  {
  id: "4",
  title: "Real-Time Multiplayer Chess Game",
  featured: true,
    year: "2026",  shortDescription:"A web-based real-time multiplayer chess game with matchmaking and server-side move validation using Socket.IO and chess.js.",
  description:
    "A web-based real-time multiplayer chess application built using Node.js, Express, and Socket.IO. The platform allows two players to compete live in a synchronized game session with automatic matchmaking and unique game rooms. The server validates all moves using chess.js, manages multiple concurrent games, and handles game-over conditions such as checkmate, timeout, or player disconnection. The interactive and responsive UI supports drag-and-drop and click-to-move functionality, making the gameplay smooth and intuitive across devices.",
  features: [
    "Real-time multiplayer gameplay using Socket.IO",
    "Automatic matchmaking with waiting room",
    "Unique game rooms for multiple concurrent matches",
    "Server-side move validation using chess.js",
    "Turn-based timer system (30 seconds per move)",
    "Drag-and-drop and click-to-move support",
    "Auto-flipping chessboard for black player",
    "Responsive and interactive UI"
  ],
  challenges: [
    "Managing multiple concurrent game sessions",
    "Synchronizing real-time moves between players",
    "Implementing reliable server-side move validation",
    "Handling disconnections and timeout scenarios"
  ],
  demoUrl: "https://chess-app-4bp9.onrender.com/",
  githubUrl: "https://github.com/SimerdeepSingh4/chess-newc",
  links: [
    { label: "Live Demo", url: "https://chess-app-4bp9.onrender.com/" },
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/chess-newc" }
  ],
  images: [
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769814021/Screenshot_2026-01-31_042725_jinu1e.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769814021/Screenshot_2026-01-31_042734_zusoge.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769814022/Screenshot_2026-01-31_042854_fvu0hs.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769814022/Screenshot_2026-01-31_042848_jixwva.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769814022/Screenshot_2026-01-31_042912_wj6cvy.png"
  ],
  tech: [
    "Node.js",
    "Express",
    "Socket.IO",
    "Chess.js",
    "EJS",
    "Tailwind CSS"
  ],
  thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273589/Chess_Thmbnail_vfikzg.png",
},
{
  id: "5",
  title: "Animated Card Hover Effect",
  featured: false,

  description:
    "A simple front-end practice project focused on creating visually appealing animated card hover effects using pure HTML and CSS. The project demonstrates the use of CSS custom properties, conic gradients, and keyframe animations to produce glowing borders and smooth hover transitions.",
  demoUrl: "https://simerdeepsingh4.github.io/card-hover-effect/",
  githubUrl: "https://github.com/SimerdeepSingh4/card-hover-effect",
  links: [
    { label: "Live Demo", url: "https://simerdeepsingh4.github.io/card-hover-effect/" },
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/card-hover-effect" }
  ],
  // images: [
  //   "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220090/card1_demo.png",
  //   "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1765220091/card2_demo.png"
  // ],
  tech: [
    "HTML",
    "CSS",
  ],
  thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769801025/Screenshot_2026-01-31_004901_ebm3fl.png",
  sneakPeek: true,
},
{
  id: "6",
  title: "MCP-Powered Terminal AI Assistant",
  featured: true,
  
  shortDescription:"A terminal-based AI assistant built with Node.js that leverages MCP for extensible tool-based interactions and automation.",
  description:
    "A terminal-based AI assistant built with Node.js that leverages a large language model and the Model Context Protocol (MCP). The assistant runs entirely in the command line and can perform tasks such as content generation, social media operations, file handling, and coding assistance through an extensible tool-based architecture.",
  features: [
    "Conversational AI in the terminal",
    "Extensible tool-based architecture using MCP",
    "Social media automation and analytics",
    "File read/write operations via AI commands",
    "Code generation and explanation support",
    "User personalization support"
  ],
  challenges: [
    "Designing a modular MCP-based architecture",
    "Secure handling of multiple API integrations",
    "Synchronizing tool execution with AI responses"
  ],
  demoUrl: "#",
  githubUrl: "https://github.com/SimerdeepSingh4/MCP_Server",
  links: [
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/MCP_Server" }
  ],
  videoUrl: "https://www.youtube.com/embed/pnY2nQEdM0E?si=RyqOlZLtW_x7s3uZ",
  images: [
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769816340/Screenshot_2026-01-31_050550_oapv4s.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769816282/Screenshot_2026-01-31_050607_ikvuwy.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769816282/Screenshot_2026-01-31_050719_hmkpcd.png"
  ],
  tech: [
    "Node.js",
    "Express",
    "Model Context Protocol (MCP)",
    "Google Gemini",
  ],
  thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273588/MCP_Thumbnail_pcgb3j.png",
},
{
  id: "7",
  title: "Live Real-Time Location Sharing App",
  featured: false,
  
  shortDescription: "Real-time location sharing app using Socket.IO and Leaflet for live map updates.",
  description:
    "A real-time location sharing web application built using Node.js, Express.js, Socket.IO, and Leaflet.js. The app allows multiple users to share their live geographic location and view all connected users on an interactive map powered by OpenStreetMap, with real-time updates via WebSockets.",
  features: [
    "Real-time location updates using Socket.IO",
    "Live map visualization with Leaflet.js and OpenStreetMap",
    "Geolocation API integration for live tracking",
    "Multi-user support with unique markers",
    "Responsive design for mobile and desktop",
    "Express.js server with EJS templating"
  ],
  challenges: [
    "Synchronizing real-time location updates between users",
    "Handling frequent geolocation updates efficiently",
    "Managing multiple user markers on the map"
  ],
  demoUrl: "#",
  githubUrl: "https://github.com/SimerdeepSingh4/RealTime_Tracker",
  links: [
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/RealTime_Tracker" }
  ],
  
  images: [
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769801809/Screenshot_2026-01-31_010523_q3c6uw.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769801809/Screenshot_2026-01-31_010523_q3c6uw.png"
  ],
  tech: [
    "Node.js",
    "Express",
    "Socket.IO",
    "Leaflet.js",
    "EJS",
    "Geolocation API",

  ],
  thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273588/Realtime_tracker_thumbnail_ugzjez.png",
},
{
  id: "8",
  title: "K72.ca Website Clone",
  featured: false,
  
  shortDescription: "Frontend clone of K72.ca focusing on GSAP-powered animations and smooth transitions.",
  description:
    "A frontend clone of the K72.ca creative agency website built using React and Vite. The project focuses on recreating smooth page transitions, high-performance animations, and a modern full-screen navigation experience using GSAP, while maintaining a responsive and clean UI.",
  features: [
    "Multi-page navigation using React Router",
    "Smooth page transitions and animations with GSAP",
    "Full-screen animated navigation menu",
    "Project showcase layout",
    "Responsive design across devices"
  ],
  challenges: [
    "Recreating complex GSAP animations",
    "Managing smooth transitions between routes",
    "Maintaining performance with animation-heavy UI"
  ],
  demoUrl: "https://k72-clone-eta.vercel.app/",
  githubUrl: "https://github.com/SimerdeepSingh4/K72-clone",
  links: [
    { label: "Live Demo", url: "https://k72-clone-eta.vercel.app/" },
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/K72-clone" }
  ],
  videoUrl: "https://www.youtube.com/embed/Dl2RgfxVKNg?si=vT8dJkya3DcmzfLJ",
  images: [
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769813482/Screenshot_2026-01-31_041757_mtgacq.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769813483/Screenshot_2026-01-31_041823_tlpdfa.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769813481/Screenshot_2026-01-31_041909_rffgjz.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769813481/Screenshot_2026-01-31_041930_bg72zo.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769813481/Screenshot_2026-01-31_041835_teptnz.png",
  ],
  tech: [
    "React",
    "Vite",
    "GSAP",
    "Tailwind CSS"
  ],
  thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769813482/Screenshot_2026-01-31_041757_mtgacq.png",
},
{
  id: "9",
  title: "Real-Time Voting App",
  featured: false,
  
  shortDescription: "Real-time voting app with WebSocket-powered live results and interactive charts.",
  description:
    "A modern real-time voting application built with React and Node.js that enables users to cast votes and view live results instantly. The app leverages WebSockets for real-time updates, interactive data visualizations, and secure session handling, delivering a smooth and engaging voting experience across devices.",
  features: [
    "Live vote updates using Socket.IO",
    "Interactive charts and real-time statistics",
    "Modern UI with Tailwind CSS and shadcn/ui",
    "Dark and light theme support",
    "JWT-based session management",
    "Duplicate vote prevention",
    "Responsive and mobile-optimized design"
  ],
  challenges: [
    "Synchronizing real-time vote updates across clients",
    "Preventing duplicate votes reliably",
    "Managing WebSocket connections at scale",
    "Integrating live charts with streaming data"
  ],
  demoUrl: "#",
  githubUrl: "https://github.com/SimerdeepSingh4/Real-Time-Voting-App",
  links: [
    {
      label: "Live Demo",
      url: "https://real-time-voting-app-beta.vercel.app/"
    },
    {
      label: "GitHub",
      url: "https://github.com/SimerdeepSingh4/Real-Time-Voting-App"
    }
  ],
  videoUrl: "https://www.youtube.com/embed/OQVd26kaAgU?si=ckrj5W7ibeZb7qS6",
  images: [
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769820969/Screenshot_2026-01-31_060554_fwjo24.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821010/Screenshot_2026-01-31_061428_tqyeeb.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821011/Screenshot_2026-01-31_061459_nludgj.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821012/Screenshot_2026-01-31_061445_hhxcj4.png",
  ],
  tech: [
    "React",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "JWT",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion"
  ],
  thumbnail:
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273588/Voting_App_Thumbnail_ctk5by.png",
},
{
  id: "10",
  title: "Mini Helpdesk App",
  featured: false,
  
  shortDescription: "Real-time helpdesk ticketing system with admin dashboard and live Socket.IO updates.",
  description:
    "A modern, real-time helpdesk ticket management system built using the MERN stack. The application allows users to submit support tickets while admins can manage, filter, and update ticket statuses in real time using Socket.IO. It demonstrates real-world customer support workflows with a clean dashboard, live updates, and responsive UI.",
  features: [
    "Support ticket creation with priority levels",
    "Admin dashboard for managing and updating tickets",
    "Real-time updates using Socket.IO",
    "Advanced filtering, sorting, and search functionality",
    "Ticket status workflow (Open, In Progress, Closed)",
    "Statistics dashboard with visual metrics",
    "Modern UI using Tailwind CSS and shadcn/ui",
    "JWT-based authentication and role handling"
  ],
  challenges: [
    "Implementing real-time dashboard updates reliably",
    "Designing role-based access for users and admins",
    "Managing ticket state and filters efficiently",
    "Handling form validation and error states cleanly"
  ],
  demoUrl: "#",
  githubUrl: "https://github.com/SimerdeepSingh4/Mini-Helpdesk-App",
  links: [
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/Mini-Helpdesk-App" }
  ],
  videoUrl: "https://www.youtube.com/embed/n1ojngXgE9w?si=KcCdnb3MWxL558iU",
      sections: [
      {
        title: "User Dashboard",
        
        images: [
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821080/Screenshot_2026-01-31_061842_b2cspg.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821083/Screenshot_2026-01-31_062325_yydnrl.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821083/Screenshot_2026-01-31_062246_xfeeao.png",
        ],
      },
      {
        title: "Admin Dashboard",
        
        images: [
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821079/Screenshot_2026-01-31_062456_wxiane.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821080/Screenshot_2026-01-31_062513_zncg6k.png",
        ],
      },
    ],
  tech: [
    "React",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "MongoDB",
    "Socket.IO",
    "JWT",
    "Tailwind CSS",
    "Shadcn UI"
  ],
  thumbnail:
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273588/Mini_helpdesk_thumbnail_bckh8i.png",
},
{
  id: "11",
  title: "Figma-like Design Tool",
  featured: false,
  
  shortDescription: "Interactive web-based canvas tool for creating and manipulating shapes and text.",
  description:
    "A sophisticated web-based design interface that allows users to create, style, and arrange visual elements on a canvas. The project features a multi-panel layout including a layers panel and a property editor, mimicking real-world design software. It focuses on object-oriented manipulation, persistence via local storage, and multi-format export options.",
  features: [
    "Interactive canvas for adding and manipulating rectangles and text",
    "Real-time property editor for styling (color, size, rotation, font)",
    "Drag-and-drop element positioning and corner-handle resizing",
    "Layers panel for organizational management and selection",
    "Keyboard shortcuts (Arrow keys, Shift, Delete) for precision editing",
    "Automatic persistence using Browser Local Storage",
    "Export functionality to both JSON and standalone HTML files",
    "Modern dark-themed UI for a professional design experience"
  ],
  challenges: [
    "Developing precise resize and drag logic for canvas elements",
    "Synchronizing the property editor with selected element states",
    "Implementing efficient keyboard listeners for element manipulation",
    "Creating a robust export system to render design data into valid HTML"
  ],
  demoUrl: "#",
  githubUrl: "https://github.com/SimerdeepSingh4/Figma-Clone",
  links: [
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/Figma-Clone" }
  ],
  videoUrl: "https://www.youtube.com/embed/7NK-3-YwKog?si=TerWmNMtCEA56z4y", 
  images: [
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821880/Screenshot_2026-01-31_063908_dai7h7.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821881/Screenshot_2026-01-31_063955_io1xcr.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769821881/Screenshot_2026-01-31_064017_iyzbf5.png"
  ],
  tech: [
    "Vanilla JS",
    "HTML",
    "CSS",
    "Local Storage"
  ],
  thumbnail:
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1769822086/Gemini_Generated_Image_nkuvlhnkuvlhnkuv_ztanex.png",
},
{
  id: "12",
  title: "macOS Clone — Frontend UI",
  featured: false,
  
  shortDescription: "A high-fidelity macOS desktop environment built with React and SCSS.",
  description:
    "A professional, pixel-perfect replication of the macOS operating system environment in the browser. This project focuses on high-performance animations, complex window management logic, and a modular component architecture. It features a functional Dock with magnification, draggable/resizable windows, a glassmorphic Control Center, and several built-in utility apps.",
  features: [
    "High-fidelity macOS UI with glassmorphism and fluid animations",
    "Interactive Dock with magnification, bounce effects, and active state indicators",
    "Advanced window management (draggable, resizable, stackable) using react-rnd",
    "Global Spotlight Search command palette for app navigation",
    "Functional Control Center with real-time sliders for volume and brightness",
    "Wallpaper personalization with persistence via Local Storage",
    "Context-aware custom right-click menus across the desktop",
    "Suite of built-in apps including a CLI Emulator, Notes, and GitHub Feed"
  ],
  challenges: [
    "Replicating complex OS-level interactions (magnification, window depth) in the DOM",
    "Managing a global window state to handle stacking order (z-index) and focus logic",
    "Implementing efficient, modular SCSS for glassmorphic visual effects",
    "Optimizing real-time interactions like Spotlight search and Control Center toggles"
  ],
  demoUrl: "https://mac-os-clone-kk32.vercel.app/",
  githubUrl: "https://github.com/SimerdeepSingh4/Mac-OS_Clone",
  links: [
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/Mac-OS_Clone" },
    { label: "Live Demo", url: "https://mac-os-clone-kk32.vercel.app/" }
  ],
  videoUrl: "https://www.youtube.com/embed/hEPzLLJg_HE?si=cUIgFHo-adXCwwSF",
  images: [
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1770400634/Screenshot_2026-02-01_203547_jg00it.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1770400634/Screenshot_2026-02-01_203843_ky0eqt.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1770400633/Screenshot_2026-02-01_203741_wv6yh6.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1770400635/Screenshot_2026-02-02_072046_ma5zlt.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1770400643/Screenshot_2026-02-01_203939_mptfph.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1770400775/Screenshot_2026-02-02_073555_gpww9x.png"
  ],
  tech: [
    "React",
    "Vite",
    "SCSS",
    "React-Rnd",
    "Local Storage",
    "Context API"
  ],
  thumbnail:
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1770400634/Screenshot_2026-02-01_203534_ofii6o.png",
},
{
  id: "13",
  title: "Productivity Dashboard",
  featured: false,
  difficulty: "Intermediate",
  shortDescription: "An all-in-one vanilla JS dashboard for tasks, focus, and daily planning.",
  description:
    "A clean, single-page productivity suite designed to centralize daily workflows. Built with vanilla JavaScript and ES modules, it integrates a multi-functional To-Do manager, a 24-hour daily planner, a configurable Pomodoro timer, and an idea-capturing board. The app features real-time weather integration via geolocation and custom-built UI panels, providing a seamless desktop-like experience in the browser.",
  features: [
    "Full-featured To-Do manager with search, priority filtering, and stats",
    "Interactive 24-hour daily planner with text export capability",
    "Customizable Pomodoro focus timer with work/break cycle tracking",
    "Real-time weather dashboard with browser geolocation and AQI data",
    "Dynamic 'Idea Board' with random-pick helper for creative brainstorming",
    "Motivational quote widget with clipboard integration and refresh logic",
    "Persistence layer using Local Storage for tasks, plans, and theme settings",

  ],
  challenges: [
    "Implementing reliable weather and reverse-geocoding API handshakes",
    "Building a global keyboard listener system (Esc key) for modal navigation",
    "Handling local storage synchronization for multiple distinct feature sets",
    "Managing complex app state without a framework",
  ],
  demoUrl: "#",
  githubUrl: "https://github.com/SimerdeepSingh4/Productivity_Dashboard",
  links: [
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/Productivity_Dashboard" }
  ],
  videoUrl: null,
  images: [
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1772117473/Productivity_Dashboard1_botypo.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1772117473/Productivity_Dashboard2_o5cjmt.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1772117472/Productivity_Dashboard3_gvtbnw.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1772117473/Productivity_Dashboard4_juogky.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1772117477/Productivity_Dashboard5_jieh8g.png",
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1772117481/Productivity_Dashboard6_bd7fq7.png"
  ],
  tech: [
    "Vanilla JS",
    "HTML",
    "CSS",
    "Local Storage",

  ],
  thumbnail:
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1772117500/Productivity_Dashboard_thumbnail_qduzap.png",
},
{
  id: "14",
  title: "Movie Platform",
  featured: false,
  difficulty: "Advanced",
  shortDescription: "A full-stack movie discovery engine with Redis caching, infinite scroll, and admin controls.",
  description:
    "A comprehensive, MERN stack movie discovery application designed for searching movies, TV shows, and actors. This project leverages the TMDB API, using a Node.js backend to securely proxy requests and cache results in Redis to drastically improve load times. Authentic users maintain favorites, a custom watchlist, and watch history, while a protected Admin Dashboard allows owners to manually add custom movies with ImageKit integration and manage users. The frontend is built with React 19 and utilizes GSAP and Motion for fluid animations.",
  features: [
    "Seamless endless scrolling on all discovery and search pages",
    "Redis caching layer for TMDB API proxy to minimize load times and reduce rate limits",
    "Comprehensive user profiles with Favorites, custom Watchlist, and automatically tracked Watch History",
    "Protected Admin Dashboard allowing owners to manually add movies (with ImageKit integration)",
    "Admin capability to manage or ban registered users",
    "JWT-based user authentication with Redis-based token blacklisting for secure logouts",
    "Beautiful & dynamic UI using Shadcn UI, Tailwind CSS, GSAP, and Motion animations",
    "Backend efficiently proxies TMDB API calls, keeping API keys secure"
  ],
  challenges: [
    "Integrating Redis for reliable request caching and token blacklisting during user logouts",
    "Implementing infinite scroll across multiple content types (Movies, TV Shows, Search)",
    "Replicating modern motion design on the web using GSAP timelines and Motion",
    "Securing external TMDB API calls by building a dedicated backend proxy with caching"
  ],
  demoUrl: "https://movie-platform-1-3xep.onrender.com/",
  githubUrl: "https://github.com/SimerdeepSingh4/Movie-Platform",
  links: [
    { label: "GitHub", url: "https://github.com/SimerdeepSingh4/Movie-Platform" },
    { label: "Live Demo", url: "https://movie-platform-1-3xep.onrender.com/" }
  ],
  videoUrl: null, 
  sections: [
      {
        title: "User Dashboard",
        
        images: [
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427101/CineBase-1_hcc4dq.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427101/CineBase-2_myutfh.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427100/CineBase-3_szulgy.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427101/CineBase-4_zq5y8c.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427100/CineBase-5_qunyas.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427100/CineBase-6_azxwdi.png",
        ],
      },
      {
        title: "Admin Dashboard",
        
        images: [
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427099/CineBase-Ad-1_laavmn.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427099/CineBase-Ad-2_odz12o.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427099/CineBase-Ad-3_yfoxpa.png",
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773427101/CineBase-Ad-4_g432bj.png",
        ],
      },
    ],
  tech: [
    "React",
    "Redux",
    "GSAP",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Tailwind CSS",
    "Shadcn UI",
    "JWT",
  ],
  thumbnail:
    "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1773426092/Gemini_Generated_Image_bcw91nbcw91nbcw9_giplir.png",
}
];