import { BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, SquareCode, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "2 años de experiencia",
    },
    // {
    //     id: 2,
    //     name: "Clientes",
    //     icon: <UsersRound />,
    //     description: "+200 clientes satisfechos",
    // },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "3 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/landing_pi.jpg",
    },
    {
        id: 2,
        url: "/landing_RandM.jpg",
    },
    {
        id: 3,
        url: "/home_pi.jpg",
    },
    {
        id: 4,
        url: "/main_RandM.jpg",
    },
    {
        id: 5,
        url: "/detail_pi.jpg",
    },
    {
        id: 6,
        url: "/detail_RandM.jpg",
    },
    {
        id: 7,
        url: "/slider-2.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Countries",
        image: "/pi_project.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Rick & Morty",
        image: "/rick_and_morty.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Book Scape",
        image: "/slider-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    // {
    //     id: 4,
    //     title: "Navegando Ideas Creativas",
    //     image: "/image-4.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 5,
    //     title: "Sitios Web Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Proyectos Web Dinámicos",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "TypeScript",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "React",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Next.Js",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
                value: 50,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development 🧰",
        experience: [
            {
                name: "Node JS",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Express JS",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "PostgreSQL",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Mongo DB",
                subtitle: "Basic",
                value: 40,
            },
            {
                name: "TypeScript",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "Nest JS",
                subtitle: "Intermedio",
                value: 30,
            },
            {
                name: "Python",
                subtitle: "Intermedio",
                value: 60,
            },
            {
                name: "Django",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "Java",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "Spring Boot",
                subtitle: "Intermedio",
                value: 30,
            },
            {
                name: "MySQL",
                subtitle: "Intermedio",
                value: 80,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Front End",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            // {
            //     name: "Optimización SEO",
            // },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Desarrollo Back End",
        icon: <SquareCode/>,
        features: [
            {
                name: "Modelado de Bases de Datos",
            },
            {
                name: "Almacenamiento en la Nube",
            },
            {
                name: "Autenticación local y Remota",
            },
            {
                name: "Creación de full API REST",
            },
            {
                name: "Mailing Service",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+54 2245 421013",
        link: "tel:+5492245421013",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/FernandoAdrogue",
        link: "github.com/fernandoadrogue",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "chinoadrogue@gmail.com",
        link: "mailto:chinoadrogue@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];
