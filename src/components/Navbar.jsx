import { FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaSquareUpwork } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import logo from "../assets/website logo.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            id: "Github",
            title: <FaGithub className="text-3xl cursor-pointer" />,
            dest: "https://github.com/Al3xxrs",
        },
        {
            id: "Fiverr",
            title: <SiFiverr className="text-3xl cursor-pointer" />,
            dest: "https://www.fiverr.com/al3xxb?",
        },
        {
            id: "UpWork",
            title: <FaSquareUpwork className="text-3xl cursor-pointer" />,
            dest: "https://www.upwork.com/freelancers/~01b05d3c8b14625b0c?mp_source=share",
        },
    ];

    const iconVar = (duration) => ({
        hidden: {
            y: 40,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: duration,
            },
        },
    });

    return (
        <header className="w-full flex justify-between p-5 text-white items-center max_width_screen relative">
            <motion.img className="h-[100px] object-cover rounded-full" src={logo} alt="Website Logo" />

            {/* Desktop Menu */}
            <ul className="hidden sm:flex sm:gap-7 gap-3">
                {navItems.map((item, i) => (
                    <motion.li key={item.id} variants={iconVar(i / 2)} initial="hidden" animate="visible">
                        <a href={item.dest} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                    </motion.li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
                <LuMenu className="text-4xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <motion.ul
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-[100px] right-5 bg-gray-800 rounded-lg p-4 shadow-lg w-30 flex flex-col gap-4 z-10 sm:hidden"
                >
                    {navItems.map((item, i) => (
                        <motion.li
                            key={item.id}
                            initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: "easeInOut",
                            }}
                        >
                            <a
                                href={item.dest}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-lg flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.id}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </header>
    );
};

export default Navbar;
