import {
    react, typescript, javascript, next, tailwind, material, git, postman, khabriLogo, mugafiLogo, project1, project3
} from "../assets"
import {FaGithub, FaLinkedin} from "react-icons/fa";

export const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;
export const GOOGLE_FILE_ID = import.meta.env.VITE_GOOGLE_FILE_ID


export const AppText = {
    hello: 'Hello,',
    Iam: 'I am ',
    SanyaArora: 'Sanya Arora',
    IntroDesc: 'Frontend Developer with 1 year and 4 months of experience in  developing, and optimizing responsive web applications.',
    About: 'About',
    Me: 'Me',
    aboutMeDescription: 'Results-driven Frontend Developer with 1 year and 4 months of experience in designing, developing, and optimizing responsive web applications. Proficient in ReactJS, NextJS, JavaScript, TypeScript, Material UI, Tailwind CSS, HTML, and CSS, with a strong foundation in responsive design and UI/UX best practices.',
    Skills: 'Skills & ',
    Expertise: 'Expertise',
    FrontedDeveloper: 'Frontend Dev',
    Portfolio: 'Portfolio',
    Creative: 'My Creative ',
    CompaniesI: 'Companies I ',
    WorkedFor: 'Worked For',
    Contact: 'Contact ',
    copyWriteText: 'Copyright by Sanya Arora @2025'

}

export const aboutSection = [
    {
        id: 1,
        image: 'https://img.freepik.com/premium-vector/ui-ux-programmer-flat-design-vector-illustration-business-information-team-sharing-ideas-with-designer-coding-interface-software-app-development_2175-1809.jpg?w=2000',
        title: 'UI/UX Best Practices',
        desc: 'Designing intuitive, accessible, and user-focused digital experiences.'
    },
    {
        id: 2,
        image: 'https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=',
        title: 'Responsive & Adaptive Design',
        desc: 'Building seamless, mobile-first experiences across all devices.'
    },
    {
        id: 3,
        image: 'https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg?w=2000',
        title: 'Performance Optimization & API Integration',
        desc: 'Enhancing speed, scalability, and smooth data flow through efficient API handling.'
    }
]

export const skillsList = [
    {
        id: 1,
        icon: next
    },
    {
        id: 1,
        icon: react
    },
    {
        id: 1,
        icon: javascript
    },
    {
        id: 1,
        icon: typescript
    },
    {
        id: 1,
        icon: material
    },
    {
        id: 1,
        icon: tailwind
    },
    {
        id: 1,
        icon: git
    },
    {
        id: 1,
        icon: postman
    },


]

export const workDetail = [
    {
        id: 1,
        year: 'Jan 2022 – April 2023',
        companyName: 'Mugafi (formerly BeUnlu) Pvt. Ltd.',
        position: 'Frontend Developer'
    },
    {
        id: 2,
        year: 'Feb 2021 – Dec 2021',
        companyName: 'Mugafi (formerly BeUnlu) Pvt. Ltd.',
        position: 'Quality Assurance Engineer'
    },
    {
        id: 3,
        year: 'Oct 2018 – Feb 2021',
        companyName: 'Khabri Audio Platform',
        position: 'Senior Quality Analyst'
    },
]

export const portfolio = [
    {
        id: 1,
        title: 'Eternal',
        type: 'website',
        technologies: ["HTML", "CSS", "React", "Redux Tool Kit", "Node.js", "MongoDB"],
        desc: "A fully functional e-commerce website with features like product listing, shopping cart, user authentication, order tracking, payment gateway, and admin dashboard.",
        image: project1,
        demoLink: "https://eternal-ecommerce.vercel.app/"

    },
    {
        id: 2,
        title: 'VirtualR',
        type: 'website',
        technologies: ["HTML", "CSS", "TailwindCSS", "Javascript", "React", "Framer Motion"],
        desc: "A modern and fully responsive landing Page for the Virtual Reality Software company providing software as a service (saas)",
        image: project3,
        demoLink: 'https://virtualr-nu-lake.vercel.app/'
    }
]

export const CompanyImage = [
    {
        id: 1,
        imageUrl: mugafiLogo
    },
    {
        id: 1,
        imageUrl: khabriLogo
    },

]

export const socialNetwork = [
    {
        id: 1,
        logo: FaLinkedin,
        url: 'https://www.linkedin.com/in/sanya15arora'
    },
    {
        id: 2,
        logo: FaGithub,
        url: 'https://github.com/sanya15arora'
    },
]

