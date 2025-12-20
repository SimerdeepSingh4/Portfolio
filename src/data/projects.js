export const projects = [
  {
    id: "1",
    title: "Mentora LMS",
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
  },
  {
    id: "2",
    title: "V.O.L.T (Voice-to-Output Language Transcription)",
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
  },
  {
    id: "3",
    title: "AI-Powered Code Review Platform",
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
      "Google Generative AI (Gemini)",
      "Axios"
    ],
  }
];