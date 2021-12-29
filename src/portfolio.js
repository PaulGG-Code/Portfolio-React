/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-216062095-1",
};

//Home Page
const greeting = {
  title: "Hey 👋.",
  title2: "Blockchainer",
  logo_name: "gedeon.p()",
  nickname: "P / G.G",
  full_name: "Paul Gedeon",
  subTitle:
    "Cybersecurity Engineer, Blockchain Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1y2HncAKjXf6bos9RbHQIjii9xrrqhRDe/view?usp=sharing",
  mail: "mailto:paulgedeon2@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/PaulGG-Code",
  linkedin: "https://www.linkedin.com/in/paul-gedeon/",
 // gmail: "paulgedeon2@gmail.com",
 // facebook: "https://www.facebook.com/harikrishan.kanani/",
 // twitter: "https://twitter.com/Harikrushn9",
 // instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "Cybersecurity Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Security by Design Architectures",
        "⚡ Perform Risk Analysis",
        "⚡ Security Auditing",
        "⚡ Reserve Engineering",
        "⚡ Security Evaluation"
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        //{
        //  skillName: "Android",
        //  fontAwesomeClassname: "simple-icons:android",
        //  style: {
        //    color: "#3DDC84",
        //  },
        //},
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        //{
        //  skillName: "Flutter",
        //  fontAwesomeClassname: "simple-icons:flutter",
        //  style: {
        //    color: "#02569B",
        //  },
        //},
        //{
        //  skillName: "Dart",
        //  fontAwesomeClassname: "simple-icons:dart",
        //  style: {
        //    color: "#29B0EE",
        //  },
        //},
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        //{
        //  skillName: "MySQL",
        //  fontAwesomeClassname: "simple-icons:mysql",
        //  style: {
        //    color: "#4479A1",
        //  },
        //},
        //{
        //  skillName: "jQuery",
        //  fontAwesomeClassname: "simple-icons:jquery",
        //  style: {
        //    color: "#0865A6",
        //  },
        //},
        //{
        //  skillName: "Wordpress",
        //  fontAwesomeClassname: "simple-icons:wordpress",
        //  style: {
        //    color: "#207297",
        //  },
        //},
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        //{
        //  skillName: "C",
        //  fontAwesomeClassname: "simple-icons:c",
        //  style: {
        //    color: "#E94E32",
        //  },
        //},
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Blockchain Dev",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience developing Smart Contracts",
        "⚡ Experience auditing Smart Contracts",
        "⚡ Experience with Solidity",
        "⚡ Experience with IPFS",
        "⚡ Experience with TheGraph",
      ],
      softwareSkills: [
        //{
        //  skillName: "AWS",
        //  fontAwesomeClassname: "simple-icons:aws",
        //  style: {
        //    color: "#FF9900",
        //  },
        //},
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
       // {
       //   skillName: "Firebase",
       //   fontAwesomeClassname: "simple-icons:vercel",
       //   style: {
       //     color: "#FFCA28",
       //   },
       // },
       // {
       //   skillName: "PostgreSQL",
       //   fontAwesomeClassname: "simple-icons:postgresql",
       //   style: {
       //     color: "#336791",
       //   },
       // },
       // {
       //   skillName: "MongoDB",
       //   fontAwesomeClassname: "simple-icons:mongodb",
       //   style: {
       //     color: "#47A248",
       //   },
       // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "EPITA, Paris",
      subtitle: "Masters in Computer Science / Computer Security",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2019 - 2021",
      descriptions: [
        //"⚡ I'm currently pursuing my bachelors in Information Technology."
         "⚡ I have studied core subjects like Penetration Testing, Network Security, Cryptography, Project Management, etc.",
         "⚡ I have also completed various online courses as well as CTF on Hackthebox.",
         "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.epita.fr/",
    },
    {
      title: "American University of Science & Technonlogy",
      subtitle: "Bachelor in Information Communication Technology",
      logo_path: "ssgandhy.png",
      alt_name: "AUST",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, C++, Java etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.aust.edu.lb",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CISCO CCNA",
      subtitle: "CISCO Academy",
      logo_path: "mongo.png",
     // certificate_link:
     //   "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "CISCO Academy",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "CISCO CCNA 2",
      subtitle: "CISCO Academy",
      logo_path: "hackathon1.svg",
     // certificate_link:
     //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "CISCO CCNA 3",
      subtitle: "CISCO Academy",
      logo_path: "mongo.png",
     // certificate_link:
     //   "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "CISCO Academy",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "CISCO CCNA 4",
      subtitle: "CISCO Academy",
      logo_path: "iit.png",
     // certificate_link:
     //   "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "CISCO Security",
      subtitle: "CISCO Academy",
      logo_path: "mlh-logo.svg",
    //  certificate_link:
     //   "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Linux Prfessional",
      subtitle: "Comptia A+",
      logo_path: "flutter.png",
    //  certificate_link:
    //    "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Comptia A+",
      color_code: "#2AAFED",
    },
   // {
   //   title: "Postman Student Expert",
   //   subtitle: "Postman",
   //   logo_path: "postman.png",
   //   certificate_link:
   //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
   //   alt_name: "Postman",
      // color_code: "#f36c3d",
   //   color_code: "#fffbf3",
   // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed an internship at Red Alert Labs after my graduations where I learn a lot of crazy stuff in the IoT world. I then followed the team after the graduation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "IoT Security Evaluator",
          company: "Red Alert Labs",
          company_url: "https://redalertlabs.com/",
          logo_path: "valora.jpg",
          duration: "Apr 2020 - Present",
          location: "Office",
          description:
          `Conduct security evaluations.
          Work closely with the Project Managers and Team Leads on building a security architecture by design.
          Review and secure Developed applications.
          Increased productivity and reduce the risks in IoT world.
          `,
            // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "IoT Security Evaluator (Internship)",
          company: "Red Alert Labs",
          company_url: "https://redalertlabs.com/",
          logo_path: "valora.jpg",
          duration: "Apr 2020 - Present",
          location: "Office",
          description:
          `Development of Penetration testing tools in order to successfully exploit various IoT protocols.
          Build a secure testing environment
          Increased productivity and reduce the risks in IoT world.
          `,
            // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Ap>
          color: "#0071C5",
        },
        {
          title: "Blockchain Development (Freelancer)",
          company: "Frosty",
          company_url: "https://frosty.app",
          logo_path: "nightowls.jpg",
          duration: "Nov 2021 - Present",
          location: "Work From Home",
          description:
          `Develop smart contracts using secure openzeppelin guidlines.
          `,
            // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Network Engineer",
          company: "AUST",
          company_url: "https://aust.edu.lb/",
          logo_path: "valora.jpg",
          duration: "Sep 2014 - Sep 2016",
          location: "Office",
          description:
          `Design, build, configure and secure networking architecture.
          `,
            // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Ap>
          color: "#0071C5",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        //{
         // title: "Cross Winter of Code Mentor",
         // company: "CWOC",
        //  company_url: "https://crosswoc.ieeedtu.in/",
        //  logo_path: "cwoc.png",
        //  duration: "Feb 2021 - Present",
        //  location: "Work From Home",
        //  description:
        //    "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
        //  color: "#4285F4",
        //},
       // {
        //  title: "Campus Hustler",
        //  company: "Skillenza",
        //  company_url: "https://skillenza.com/",
        //  logo_path: "skillenza.png",
        //  duration: "Feb 2021 - Present",
        //  location: "Work from Home",
        //  description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //  color: "#196acf",
        //},
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
          "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
       // {
        //  title: "Google Local Guide",
        //  company: "Google Map",
        //  company_url: "https://maps.google.com/localguides/",
        //  logo_path: "localguide.png",
        //  duration: "Sep 2018 - Present",
        //  location: "Work From Home",
        //  description:
        //    "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
        //  color: "#D83B01",
        //},
       // {
       //   title: "GDG Student Volunteer",
       //   company: "Google Developer Groups",
       //   company_url: "https://gdg.community.dev/",
       //   logo_path: "gdg.png",
       //   duration: "Feb 2021 - Present",
       //   location: "Work From Home",
       //   description:
       //     "Google Developer Group Surat Student Volunteer and Member.",
       //   color: "#D83B01",
       // },
       // {
       //   title: "E. F. I. Student Volunteer",
       //   company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
       //   company_url: "https://indiaenvironment.org/",
       //   logo_path: "efi.png",
       //   duration: "Apr 2017 - Present",
       //   location: "Work From Home",
       //   description:
       //     "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
       //   color: "#5a900f",
       // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and Cybersecurity PoC. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "paul.png",
    description:
      "Leave me a message. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Follow me on Twitter.",
    link: "https://twitter.com/io_blockchain",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "GnRaModulation",
      url: "https://github.com/PaulGG-Code/GnRaModulation",
      description: "This project consist of  RF modulations built with Gnu Radio ",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "ArtsyWishArt NFT",
      url: "https://github.com/PaulGG-Code/ArtsyWishArtNFT",
      description:
        "Contracts and Deployment of ArtsWishArtNFT.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "2",
      name: "BinanceBot ",
      url: "https://github.com/PaulGG-Code/BinanceBot",
      description:
        "A simple blockchain and cryptocurrency Binance Bot (Learning)",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "BlockChainExploitation",
      url: "https://github.com/PaulGG-Code/BlockChainExploitation",
      description:
        "Scripts used in Blockchain Exploitation Blog .",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "personal portfolio",
      url: "https://www.cyberawareness.xyz/",
      description:
        "CyberPunk Portfolio.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "RubberDucky_Scripts",
      url: "https://github.com/PaulGG-Code/RubberDucky_Scripts",
      description:
        "Simple Rubber Ducky exploitations scripts",
      languages: [
        {
          name: "Bash",
          iconifyClass: "logos-bash",
        },
      ],
    },
    {
      id: "4",
      name: "Security_Python",
      url: "https://github.com/PaulGG-Code/Security_Python",
      description:
        "Cybersecurity exploitations scripts written in Python.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Vulnerability Scanner",
      url: "https://github.com/PaulGG-Code/vulners-scanner",
      description:
        "Vulnerability scanner based on vulners.com audit API.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Smart Mirror",
      url: "",
      description:
        "Smart mirror built on a raspberry pi programmed in js and python",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "433Utils",
      url: "https://github.com/PaulGG-Code/-433Utils",
      description:
        "433Utils is a collection of code and documentation designed to assist you in the connection and usage of RF 433MHz transmit and receive modules to/with your Arduino and Rapberry Pi..",
      languages: [
        {
          name: "C++",
          iconifyClass: "logos-c++",
        },
      ],
    },
    {
      id: "8",
      name: "NFT-Auction-Marketplace",
      url: "https://github.com/PaulGG-Code/NFT-Auction-Marketplace",
      description:
        "Ethereum NFT Digitial Art Auction Marketplace",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "ContractFuzzer ",
      url: "https://github.com/PaulGG-Code/ContractFuzzer",
      description: "The Ethereum Smart Contract Fuzzer for Security Vulnerability Detection (ASE 2018) .",
      languages: [
        {
          name: "Go",
          iconifyClass: "logos-go",
        },
      ],
    },
    {
      id: "10",
      name: "Frosty Smart Contracts",
      url: "https://frosty.app",
      description: "[Frosty NFT] The Digital Art Engine",
      languages: [
        {
          name: "typescrypt",
          iconifyClass: "logos-typescrypt",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
