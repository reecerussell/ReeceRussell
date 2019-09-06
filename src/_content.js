export default {
    baseTitle: "Reece Russell / Software Developer",
    nav: [
        {
            text: "Home",
            path: "/",
            target: "_self",
        },
        {
            text: "Github",
            path: "https://github.com/reecerussell",
            target: "_blank",
        },
        {
            text: "Stack",
            path: "/stack",
            target: "_self",
        },
    ],
    intro: {
        greeting: "Hi",
        tagLine:
            "My name is Reece and I am a software developer based in Milton Keynes.",
        sideNote:
            'Just a side note, I am an apprentice software developer, working at <a href="http://prominentmedia.com">Prominent Media</a>.',
        mainNote:
            "I spend my time writing services which I'll never use, configuring servers that I'll never use and learning technologies that interest me.",
    },
    about: {
        header: "About Me",
        content:
            "I'm an apprentice software developer at a small company called Prominent Media. I'm currently studying software language and development methodologies as part of my apprenticeship. My main focus is in C#.NET driven web applications, such as, WebForms, MVC and WebAPI. I have brief experience messing around with Xamarin and mobile development, however, I found that my real interest lies with web development but more in the direction of software infratructure, microservices and Golang.",
    },
    experience: {
        work: {
            header: "Experience",
            children: [
                {
                    title: "Apprentice Software Developer",
                    organisation: "Prominent Media Ltd",
                    from: "Sept 2018",
                    to: "Present",
                },
            ],
        },
        education: {
            header: "Education",
            children: [
                {
                    title: "BCS Level 4 Diploma Software Language",
                    organisation: "Milton Keynes College",
                    from: "Sept 2018",
                    to: "2020",
                },
                {
                    title:
                        "BCS Level 4 Diploma Software Development Methodologies",
                    organisation: "Milton Keynes College",
                    from: "Sept 2018",
                    to: "2020",
                },
                {
                    title: "Microsoft Technical Associate HTML5, CSS3, JS",
                    organisation: "Microsoft",
                    from: "2019",
                    to: "2024",
                },
            ],
        },
    },
    skills: {
        header: "Skills",
        children: [
            {
                title: "HTML5, CSS3",
                stars: 4,
                icon: "",
                description:
                    "I started learning HTML 5 years ago and since become a Microsoft Technical Associate in HTML5, CSS3 and JavaScript.",
            },
            {
                title: "ReactJS/JavaScript",
                stars: 3,
                icon: "",
                description:
                    "JavaScript was the first programming language I learnt, back when I was 13. Now I have written JavaScript and React for production applications; I am also slowly exporing Node, for APIs and rendering React serverside.",
            },
            {
                title: "C#",
                stars: 4,
                icon: "",
                description:
                    "I am highly proficient in C#, using it on a daily basis for web applications, including: Web Forms, MVC and WebApi2.",
            },
            {
                title: "SQL/MySql",
                stars: 3,
                icon: "",
                description:
                    "I originally started with SQL Server, using Entity Framework in .NET; although, I have more experience writing queries for MySql.",
            },
            {
                title: "Golang",
                stars: 2,
                icon: "",
                description: "I love it; I'm also learning it.",
            },
            {
                title: "Docker",
                stars: 1,
                icon: "",
                description:
                    "I'm in the learning process.<br />I've been using Docker Compose to build microservices, however, once I become more compitent in using it, I will be moving to using Kubernetes.",
            },
            {
                title: "Git",
                stars: 2,
                icon: "",
                description:
                    "It's better than SVN.<br />I learnt the basic of Git while working on a college project; now use it for my own personal projects. There's still more to learn!",
            },
        ],
    },
    projects: {
        header: "Projects",
        children: [
            {
                name: "OpenGateway",
                teaser: "An open-source api gateway written in Go.",
                description:
                    "<p><b>PLANNING</b></p><p>OpenGateway will be an API gateway tool used to route http requests to specific internal endpoints - usually microservices, using docker's internal dns.</p><p>The plan is to write the application in Golang using SqlServer or another RDB.</p>",
                imageUrl:
                    "https://static.allcloud.com/assets/images/blog/golang.png",
                githubUrl: "https://github.com/reecerussell/opengateway",
            },
        ],
    },
    footer: {
        email: "me@reecerussell.com",
        copyright: "Copyright &copy; 2019, Reece Russell",
    },
};
