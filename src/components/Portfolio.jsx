import fakye from "../images/fakye.jpg";
import cleva from "../images/cleva.jpg";
import mother from "../images/mother.jpg";
import food from "../images/food.jpg"; 
import newMother from "../images/mother.png"; 

const projects = [
       {
        title: "Fakye Waitlist",
        description: "“A 10-page web app built with a clean design, Firebase authentication, and a smooth mobile-first experience—showcasing my focus on usability and modern front-end development.",
        tech: ["React, TailwindCSS, TypeScript, Firebase, Redux"],
        image: fakye,
        live: "https://fakye-waitlist.vercel.app/",
        github: "https://github.com/FlackoCodes/newTech",
    },
    {
        title: "Cleva Online Website",
        description: "Worked on the frontend alongside the lead developer, collaborating closely using cutting-edge tech tools to build a clean, efficient, and user-friendly website.",
        tech: ["React", "TailwindCSS", "API"],
        image: cleva, 
        live: "https://cleva.online/",
    },
     {
        title: "Mother Store",
        description: "Developed a responsive WordPress site for Mothercare Inc., combining modern UI design with plugin integrations like WhatsApp chat and e-commerce tools to enhance customer experience and brand presence.",
        tech: ["Wordpress, Plugins"],
        image: newMother,
        live: "https://clickmothercare.com",
    },
    {

        title: "New Tech Web App",
        description:
            "A food recipe web app built using a public food API, allowing users to search, add, and favorite different types of meals. Features include mobile responsiveness and Firebase authentication.",
        tech: ["React", "TailwindCSS", "REST API"],
        image: food,
        live: "https://new-tech-six.vercel.app/",
        github: "https://github.com/FlackoCodes/food-recipe",
    },
    {

        title: "Mother Care Ink",
        description:
            "Designed and built a custom sales tracking dashboard to help a small business client monitor her sales performance. The dashboard includes key metrics such as total revenue, monthly trends, top-selling products, and customer insights. Delivered a user-friendly, visually appealing interface to support data-driven decision-making. Test credentials: 📧 Email: ybenson96@gmail.com 🔐 Password: test",
        tech: ["React", "TailwindCSS", "Paystack API", "Firebase Auth", "REST API"],
        image: mother,
        live: "https://dealslet.com/",
       
    }

];

export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-white text-[#2d2e32] py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#f5f5f5] shadow-md rounded-md overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-700 mb-3">{project.description}</p>

                                <ul className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, idx) => (
                                        <li
                                            key={idx}
                                            className="bg-[#facc15] text-[#2d2e32] px-3 py-1 text-xs rounded-full"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex justify-between text-sm font-medium">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#facc15] hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#facc15] hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
