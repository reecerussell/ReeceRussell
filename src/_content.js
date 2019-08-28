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
            "Welcome to my portfolio! I am a software developer, based in Milton Keynes.",
        sideNote:
            'Just a side note, I am an apprentice software developer, working at <a href="http://prominentmedia.com">Prominent Media</a>.',
        mainNote:
            "Currently engaged to ASP.NET Core microservices and exploring GO.<br />This is my first online portfolio. Feel feel to look around and let me know what you think!",
    },
    about: {
        header: "About Me",
        content:
            "I am an apprentice software developer at a small company called Prominent Media while studying software development. My primary focus is on ASP.NET web applications, working with C# and SQL. From time to time, I explore the realms of Xamarin and working with web sockets and restful APIs. However, ASP.NET Core is my current obsession.",
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
                    "Microsoft certified technical associate in HTML5, CSS3 and JavaScript.",
            },
            {
                title: "ReactJS/JavaScript",
                stars: 3,
                icon: "",
                description: "",
            },
            {
                title: "C#",
                stars: 4,
                icon: "",
                description: "",
            },
            {
                title: "SQL/MySql",
                stars: 3,
                icon: "",
                description: "",
            },
            {
                title: "Golang",
                stars: 2,
                icon: "",
                description: "",
            },
            {
                title: "Docker",
                stars: 1,
                icon: "",
                description: "",
            },
            {
                title: "Git",
                stars: 2,
                icon: "",
                description: "",
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
                    "<p><b>PLANNING</b></p><p>OpenGateway will be an API gateway tool used to route http request to specific endpoints - usually microservices, using docker's internal dns.</p><p>The plan is to write the application in Golang using SqlServer or other RDB.</p>",
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
