export const projects = [
  {
    id: "trusted-wall",
    title: "The Trusted Wall",
    featured: true,
    isFreelance: true,
    clientName: "The Trusted Wall",
    clientRole: "Lead Developer / Consultant",
    testimonial: {
      quote: "Simerdeep developed our website exactly as we envisioned and was highly responsive throughout the process. He successfully integrated our projects, blog, and study material management system, making it easy for our team to update content without technical assistance. We are very satisfied with the final result and his professionalism.",
      author: "Ar. Himanshu Gautam",
      role: "Founder & Lead Architect",
      company: "The Trusted Wall",
      avatar: "https://ik.imagekit.io/w4si6daal/WhatsApp%20Image%202026-04-29%20at%205.58.11%20PM.jpeg?tr=w-800,f-auto"
    },
    shortDescription: "A custom architectural portfolio featuring smooth GSAP animations and a headless Sanity CMS backend.",
    description: "I built this custom portfolio for an architectural firm to showcase their residential and commercial projects. It uses React and GSAP for smooth page transitions and is integrated with Sanity CMS so the client can easily manage their project gallery without touching code.",
    features: [
      "Smooth GSAP animations for interactive page transitions",
      "Headless Sanity CMS integration for client-side content management",
      "Responsive layout built using React and Tailwind CSS",
      "Categorized project archive with custom taxonomy support",
      "Optimized masonry grid layout for fast high-resolution image loads"
    ],
    challenges: [
      "Optimizing performance when loading large architectural images along with GSAP animations",
      "Structuring flexible schemas in Sanity CMS to fit complex project descriptions",
      "Fine-tuning scroll-based animations to work reliably across mobile devices"
    ],
    demoUrl: "https://thetrustedwall.com",
    links: [
      { label: "Live Site", url: "https://thetrustedwall.com" }
    ],
    tech: ["React", "GSAP", "Sanity CMS", "Tailwind CSS", "Framer Motion"],
    thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1778450378/Screenshot_2026-05-11_032206_ix81gy.png",
    sections: [
      {
        title: "The Brief",
        content: "The Trusted Wall, an architecture and interior design firm, needed a modern website that showcased their projects, services, and expertise while remaining easy to manage without technical knowledge. In addition to replicating and improving their existing web presence, the client required a content management system that would allow them to independently publish projects, blogs, research articles, and structured study materials for students and professionals.",
        images: ["https://res.cloudinary.com/dyfjy8kmv/image/upload/v1778450378/Screenshot_2026-05-11_032206_ix81gy.png", "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1778450377/Screenshot_2026-05-11_032249_zpkmvz.png", "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1778450377/Screenshot_2026-05-11_032552_toy99z.png"]
      },
      {
        title: "The Solution",
        content: "I developed a responsive React-based website and integrated Sanity CMS as a headless content management solution. Custom content models were created for projects, blogs, and study materials, including a course-and-chapter structure that enables organized educational content. The CMS allows the client to upload images, publish articles, manage project portfolios, and update study resources without developer assistance. The final solution delivers a professional user experience while providing a scalable and easy-to-maintain content workflow.",
        images: ["https://res.cloudinary.com/dyfjy8kmv/image/upload/v1778450376/Screenshot_2026-05-11_032308_vaijlg.png", "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1778450376/Screenshot_2026-05-11_032606_hoeyzh.png", "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1778450376/Screenshot_2026-05-11_032540_mc6ubx.png"]
      }
    ]
  },
  {
    id: "1",
    title: "Mentora LMS",
    featured: false,

    shortDescription: "A full-stack learning platform with role-based dashboards for students, teachers, and admins.",
    description:
      "Mentora is a Learning Management System I built using the MERN stack. It includes dedicated dashboards for students to track progress, teachers to manage courses and create quizzes, and admins to oversee platform activity.",
    features: [
      "Dedicated student, teacher, and admin dashboards",
      "Course creator supporting quizzes and assignments",
      "Secure payment checkout integration",
      "Visual progress trackers and course analytics",
      "Cloud-based file storage using Cloudinary"
    ],
    challenges: [
      "Designing a relational MongoDB schema to link courses, enrollments, and user progress",
      "Handling real-time state synchronization for active quiz attempts",
      "Integrating third-party secure APIs for payments and media hosting"
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
    shortDescription: "A real-time speech-to-text app with tone adjustment and multilingual support.",
    description:
      "V.O.L.T is a real-time transcription app built with React and Node.js. It converts spoken audio to text across multiple languages, detects emotional tone, and allows users to transform the output into formal, casual, or neutral phrasing using AI.",
    features: [
      "Real-time transcription supporting multiple languages",
      "Tone transformation for rewriting transcripts using AI models",
      "Cloud-based database storage with Firebase integration",
      "Interactive audio visualization controls"
    ],
    challenges: [
      "Handling audio streaming synchronization between the frontend and transcription APIs",
      "Managing token constraints and prompt structures for quick AI tone adjustments",
      "Optimizing WebSocket channels for continuous, low-latency live feedback"
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

    shortDescription: "An interactive code reviewer built with React and Monaco Editor featuring automated AI feedback.",
    description:
      "I built this platform to automate code reviews using Monaco Editor and AI models. It accepts code snippets, scores code quality, and provides actionable feedback. It also features a fallback system between Gemini and Mistral APIs to ensure continuous service.",
    features: [
      "Code editor interface powered by Monaco Editor",
      "AI feedback generated using Gemini and Mistral models",
      "API fallback logic to use a secondary engine if primary fails",
      "Multi-layout workspace optimized for mobile and desktop screens"
    ],
    challenges: [
      "Implementing API timeout detection and automatic model switching",
      "Ensuring Monaco Editor resizing doesn't trigger layout shifting on mobile screens",
      "Architecting dynamic backend API target switching (production to local)"
    ],
    demoUrl: "https://code-reviewer-nine-smoky.vercel.app/",
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
      "Mistral AI",
      "Google Gemini",
      "Axios"
    ],
    thumbnail: "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1766273590/Code_Reviwer_Thumbnail_uhmlt1.png",
    performanceNote: {
      title: "⚡ Performance Note",
      description: "This project's backend is hosted on Render's free tier. The first request may take 30-60 seconds due to server cold start, but subsequent requests will be much faster."
    }
  },
  {
    id: "4",
    title: "Real-Time Multiplayer Chess Game",
    featured: false,
    shortDescription: "A real-time multiplayer chess game with live matchmaking and server-side move validation.",
    description:
      "A multiplayer chess game built using Node.js and Socket.IO. It supports real-time matchmaking, private game rooms, and uses chess.js on the server to validate every move before updating the board to prevent client-side modifications.",
    features: [
      "Real-time multiplayer synchronization via Socket.IO",
      "Active matchmaking queue and lobby waiting area",
      "Secure server-side move validation with chess.js",
      "Automatic game board orientation adjustment per player color",
      "Integrated turn timers and automatic timeout forfeit logic"
    ],
    challenges: [
      "Managing active game sessions and client socket mappings in memory",
      "Synchronizing and broadcasting state changes with zero race conditions",
      "Safely recovering game state when a player temporarily disconnects"
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
    performanceNote: {
      title: "⚡ Performance Note",
      description: "This project's backend is hosted on Render's free tier. The first request may take 30-60 seconds due to server cold start, but subsequent requests will be much faster."
    }
  },
  {
    id: "5",
    title: "Animated Card Hover Effect",
    featured: false,

    description:
      "A front-end practice project demonstrating animated card hover effects built with pure HTML and CSS. It uses CSS custom properties, linear gradients, and keyframe transitions to create animated card boundaries.",
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
    featured: false,

    shortDescription: "A command-line AI assistant built using Node.js and Model Context Protocol (MCP).",
    description:
      "This is a terminal assistant that uses the Model Context Protocol (MCP) to interact with local files and APIs. It allows the LLM to execute tools directly from the command line, such as reading files, running scripts, and automating tasks.",
    features: [
      "Command-line AI chat interface",
      "Modular tool execution framework using MCP protocols",
      "Local file read and write operations via natural language",
      "Extensible tool templates for API integrations"
    ],
    challenges: [
      "Designing a secure system for verifying local commands before execution",
      "Structuring reliable tool schema definitions that map correctly to AI prompts",
      "Handling tool execution error logging and recovering conversation context"
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

    shortDescription: "A live map tracker that displays connected users in real time using Leaflet and Socket.IO.",
    description:
      "A location tracking app built with Node.js, Socket.IO, and Leaflet.js. It allows connected clients to share their GPS coordinates in real time, displaying all active users on a shared OpenStreetMap interface.",
    features: [
      "Real-time location broadcasts over WebSockets",
      "Interactive map rendering powered by Leaflet.js",
      "Device Geolocation API integration for coordinates",
      "Distinct active markers dynamically drawn per user connection"
    ],
    challenges: [
      "Filtering noisy or inaccurate Geolocation coordinate jumps",
      "Managing the lifecycle of markers on connection loss or timeout",
      "Optimizing broadcast frequencies to minimize server bandwidth usage"
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

    shortDescription: "A recreation of the agency website K72.ca, focusing on fluid GSAP transitions.",
    description:
      "A frontend replica of the K72.ca agency website built with React. The main goal was to replicate the brand's smooth vertical layout animations, full-screen navigations, and timeline-triggered animations using GSAP.",
    features: [
      "Routable page layouts using React Router",
      "Custom GSAP animation timelines for scroll-driven animations",
      "Responsive grid and layout matching the design guidelines"
    ],
    challenges: [
      "Aligning and debugging scroll trigger offsets for accurate element animations",
      "Managing React component state unmounting while GSAP animations are still playing"
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

    shortDescription: "A live poll app featuring instant results and charts using Socket.IO.",
    description:
      "A polling application built with React and Node.js. It enables users to cast votes on active polls and view visual chart updates in real time using Socket.IO.",
    features: [
      "WebSocket-driven vote streaming via Socket.IO",
      "Interactive data charts displaying live poll results",
      "JWT token validation to manage voting sessions",
      "Device-level storage rules to prevent duplicate voting"
    ],
    challenges: [
      "Preventing duplicate submissions across different clients",
      "Handling concurrent database writes during vote spikes",
      "Updating live charts efficiently without unnecessary component re-renders"
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

    shortDescription: "A customer support ticketing system with live updates and admin queues.",
    description:
      "A ticket management application built with the MERN stack. It allows users to submit support tickets and lets admins manage, filter, and update ticket statuses in real time using Socket.IO.",
    features: [
      "Support ticket creation interface with priority categorization",
      "Live admin dashboard with real-time ticket queues",
      "JWT-based role authentication for customers and admins",
      "Advanced filtering by status, date, and priority level"
    ],
    challenges: [
      "Syncing status changes instantly between user interfaces and admin views",
      "Designing secure, role-restricted API endpoints for admin commands",
      "Handling validation and file attachments on ticket submission"
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

    shortDescription: "A browser-based canvas editor for placing, resizing, and arranging shapes.",
    description:
      "A web-based design canvas built with vanilla JavaScript. It includes a properties sidebar and layers panel, allowing users to place, resize, style, and drag shapes on an interactive viewport.",
    features: [
      "Draggable and resizable canvas shapes",
      "Sidebar controller for editing colors, dimensions, and positioning",
      "Layers panel showing current elements hierarchy",
      "Local storage state autosave and export to static HTML files"
    ],
    challenges: [
      "Writing canvas drag and corner-resize algorithms manually in JavaScript",
      "Managing event bubbling and canvas focus rules for keyboard hotkeys",
      "Exporting complex element coordinates into a correct HTML layout"
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
    featured: true,

    shortDescription: "A high-fidelity replica of the macOS desktop interface built using React and SCSS.",
    description:
      "A frontend project replicating the macOS desktop environment. It features draggable and resizable windows, a magnifying dock, Spotlight search, custom wallpaper controls, and basic built-in utilities like a notepad and terminal emulator.",
    features: [
      "Interactive desktop layout with glassmorphic styling and transition effects",
      "Magnifying application dock using custom mouse tracking algorithms",
      "Draggable, resizable, and stackable window manager powered by react-rnd",
      "Spotlight Search palette for quick navigation shortcuts",
      "Persistent user settings saved directly in Local Storage"
    ],
    challenges: [
      "Managing window focal states and z-index ordering across multiple active apps",
      "Building a custom context menu and dock magnification logic using basic mouse position calculations",
      "Optimizing SCSS imports and variables for clean, reusable modular styling sheets"
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
    shortDescription: "An all-in-one vanilla JS dashboard for tasks, focus, and daily planning.",
    description:
      "A productivity dashboard built using vanilla JavaScript and ES modules. It includes a todo list manager, a 24-hour daily scheduler, a Pomodoro timer, and integrates location-based weather updates.",
    features: [
      "Todo list editor with priorities, filtering, and local autosaving",
      "Interactive daily planner that exports entries as plain text files",
      "Pomodoro timer widget with configurable intervals",
      "Location-based weather forecast using browser Geolocation API"
    ],
    challenges: [
      "Managing multiple distinct application components and shared local storage keys without a framework",
      "Setting up secure and clean API handling for reverse-geocoding coordinates to locate weather stations"
    ],
    demoUrl: "https://productivity-dashboard-steel.vercel.app/",
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
    featured: true,
    difficulty: "Advanced",
    shortDescription: "A film and TV show search platform featuring Redis caching and infinite scrolling.",
    description:
      "A full-stack movie search platform built with the MERN stack. It proxies TMDB requests through Node.js and caches queries in Redis to improve performance, featuring infinite scroll feeds, custom watchlists, and an admin portal.",
    features: [
      "Infinite scroll feed for continuous content discovery",
      "Redis caching layer to store API responses and decrease API call latency",
      "User accounts featuring personal watchlists and history logs",
      "Protected admin routes to manage registered users and custom entries",
      "JWT-based authentication with active token blacklisting on logout"
    ],
    challenges: [
      "Configuring Redis caching policies to correctly handle API updates and token blacklisting",
      "Optimizing list renders during rapid scroll feeds to prevent memory leaks",
      "Proxying external requests securely on the backend while maintaining quick response times"
    ],
    demoUrl: "https://movie-platform-1-3xep.onrender.com/",
    githubUrl: "https://github.com/SimerdeepSingh4/Movie-Platform",
    links: [
      { label: "GitHub", url: "https://github.com/SimerdeepSingh4/Movie-Platform" },
      { label: "Live Demo", url: "https://movie-platform-1-3xep.onrender.com/" }
    ],
    videoUrl: "https://www.youtube.com/embed/fu426xYRvdk?si=WZ-4bLyds47Dr7kq",
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
          "https://res.cloudinary.com/dyfjy8kmv/image/upload/v1780271408/Cinebase-3_ndkhy8.png"
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
    performanceNote: {
      title: "⚡ Performance Note",
      description: "If movies fail to load and you see a “Failed to fetch movies” error, try accessing the site using a VPN. This can happen because the TMDB API doesn’t work on some networks."
    }
  }
];