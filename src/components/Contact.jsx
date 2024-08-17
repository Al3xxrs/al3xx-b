import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
    const navItems = [
        {
            id: "LinkedIn",
            icon: <FaLinkedin className="text-3xl cursor-pointer" />,
            url: "https://www.linkedin.com/in/ahtisham-web-developer",
            label: "LinkedIn Profile",
        },
        {
            id: "GitHub",
            icon: <FaGithub className="text-3xl cursor-pointer" />,
            url: "https://www.github.com/Al3xxrs/",
            label: "GitHub Profile",
        },
        {
            id: "Fiverr",
            icon: <SiFiverr className="text-3xl cursor-pointer" />,
            url: "",
            label: "Fiverr Profile",
        },
        {
            id: "Upwork",
            icon: <FaSquareUpwork className="text-3xl cursor-pointer" />,
            url: "https://www.upwork.com/freelancers/~0136f9e4718c573c93?mp_source=share",
            label: "Upwork Profile",
        },
    ];

    return (
        <footer className="w-full flex flex-col items-center pb-5">
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center flex-col w-full relative z-[4] mb-9"
            >
                <h1 className="text-white text-5xl text-center">Get in Touch</h1>
            </motion.div>

            <ul className="flex gap-4 flex-wrap mt-2 text-white">
                {navItems.map((item) => (
                    <motion.li
                        key={item.id}
                        whileHover={{ scale: 1.1, color: "#4FD1C5" }} // Scale and color change on hover
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                            {item.icon}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </footer>
    );
};

export default Contact;
