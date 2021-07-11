import Mock from "../mock";

const database = {
  information: {
    name: "Shrikant Dewangan",
    aboutContent:
      "A postgraduate student pursuing my degree in Master's of Computer Application at National Institute of Technology, Raipur , and also i am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
    age: 24,
    phone: "",
    nationality: "Indian ",
    language: "English, Hindi",
    email: "",
    address: "Raipur (C.G.)",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "https://facebook.com/programmershri",
      twitter: "https://twitter.com/programmershri",
      instagram: "https://instagram.com/programmershri",
      linkedin: "https://www.linkedin.com/in/programmershri/",
      github: "https://github.com/programmershri",
      youtube: "https://www.youtube.com/channel/UCjAuxXn_kj6eTh4J68QGz5g",
      behance: "",
      dribbble: "",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/Resume.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "color-pallet",
      details: "",
    },
    {
      title: "Web Development",
      icon: "code",
      details: "",
    },
    {
      title: "Web Apps",
      icon: "code",
      details: "",
    },
    {
      title: "Image Editing",
      icon: "image",
      details: "",
    },
    {
      title: "Video Editing",
      icon: "video",
      details: "",
    },
    {
      title: "Project Documentation",
      icon: "files",
      details: "",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "JavaScript",
      value: 70,
    },
    {
      title: "Bootstrap 4",
      value: 50,
    },
    {
      title: "C++",
      value: 75,
    },
    {
      title: "Python3",
      value: 30,
    },
    {
      title: "ReactJS",
      value: 60,
    },
    {
      title: "GraphQL",
      value: 60,
    },
    {
      title: "NodeJS",
      value: 40,
    },
    {
      title: "ExpressJS",
      value: 30,
    },
    {
      title: "VS Code Editor",
      value: 80,
    },
    {
      title: "Git / GitHub (Version Control)",
      value: 80,
    },
    {
      title: "Problem Solving Skills(Competitive Programming) ",
      value: 40,
    },
    {
      title: "DataStructure and Algorithm",
      value: 10,
    },
    {
      title: "Photoshop (Photo Editing)",
      value: 65,
    },
    {
      title: "Filmora (Video Editing)",
      value: 70,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "C/C++ Snippets for VS Code Marketplace ",
      subtitle: "Open Source Project",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://marketplace.visualstudio.com/manage/publishers/programmershri",
    },
    {
      id: 2,
      title: "Own Portfolio",
      subtitle: "Using HTML5 , CSS3 , Javascript",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/programmershri.github.io",
    },
    {
      id: 3,
      title: "Random Mobile Number Generator",
      subtitle: "Using Python",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/ProgrammerShri/Random-Mobile-Number-Generator",
    },
    {
      id: 4,
      title: "Tic-Tac-Toe",
      subtitle: "Using Python",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/ProgrammerShri/Tic-Tac-Toe",
    },
    {
      id: 5,
      title: "Usefull Scripts",
      subtitle: "Using Python and Javascript",
      imageUrl: "/images/project-img-lg.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: "https://github.com/ProgrammerShri/All-Imp-Utility-and-Tools-Scripts",
    },
    {
      id: 6,
      title: "Calculator App",
      subtitle: "Using React-JS",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/ProgrammerShri/Calculator-ReactJS",
    },
    {
      id: 7,
      title: "To-Do App",
      subtitle: "Using React-JS",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/ProgrammerShri/ToDo-App-ReactJS",
    },

    {
      id: 8,
      title: "Airline Reservation System",
      subtitle: "Using JAVA",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/ProgrammerShri/Airline-Reservation-System",
    },
    {
      id: 9,
      title: "Contact Management System",
      subtitle: "Using JAVA",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/ProgrammerShri/Contact-Management-System",
    },
    {
      id: 10,
      title: "Python Program Files",
      subtitle: "Using Python",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/ProgrammerShri/Python-Program-Files",
    },

    {
      id: 11,
      title: "GitHub Markdown",
      subtitle: "Design Github Overview using Markdown",
      imageUrl: "/images/project-img-sm.jpg",
      largeImageUrl: ["/images/project-img-lg.jpg"],
      url: "https://github.com/ProgrammerShri/ProgrammerShri",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 Dec - 2021 Feb",
        position: "React Developer (Intern)",
        company: "Relive Technology",
        details:
          "I am a Intern in a Relive Technology, and i am Working on a Realtime Software and Apps and also develop projects using ReactJS and MongoDB",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2023",
        graduation: "Master of Computer Application ",
        university: "National Institute of Technology, Raipur",
        details: "I am Pursuing my Post-Graduation MCA from NIT Raipur ",
      },
      {
        id: 2,
        year: "2016 - 2019",
        graduation: "Bachelor of Computer Application",
        university: "Pandit Ravishanker Shukla University",
        details: "Completed My Bachelors from Pragati College , Raipur",
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "I.T.I in Computer Operator in Programming Assistant",
        university: "Sandipani Academy Pvt. Academy",
        details:
          "Completed My One Year Diploma in Computer Application from Sandipani Academy, Durg",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: [""],
    emailAddress: ["shrikantdewangan.nitrr@gmail.com"],
    address: "Raipur, Chhattisgarh, India",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
