import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
import { FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { motion } from "framer-motion";

const Technology = () => {
    const technologies = [
        { id: 1, icon: <RiReactjsLine className="text-5xl text-cyan-400" />, duration: 2.5, label: "React.js" },
        { id: 2, icon: <DiHtml5 className="text-5xl text-orange-700" />, duration: 3, label: "HTML5" },
        { id: 3, icon: <DiCss3 className="text-5xl text-blue-400" />, duration: 5, label: "CSS3" },
        { id: 4, icon: <DiJavascript className="text-5xl text-yellow-300" />, duration: 2, label: "JavaScript" },
        { id: 5, icon: <FaNodeJs className="text-5xl text-green-500" />, duration: 6, label: "Node.js" },
        { id: 6, icon: <FaPython className="text-5xl text-blue-800" />, duration: 6, label: "Python" },
        { id: 7, icon: <FaJava className="text-5xl text-red-500" />, duration: 6, label: "Java" },
        { id: 8, icon: <TbBrandCpp className="text-5xl text-cyan-600" />, duration: 6, label: "C++" },
        { id: 9, icon: <TbBrandCSharp className="text-5xl text-purple-500" />, duration: 6, label: "C#" },
    ];

    const iconVar = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeatType: "reverse",
                repeat: Infinity,
            },
        },
    });

    return (
        <section className="py-[60px] mt-[40px] mb-[30px]">
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center flex-col w-full relative z-[4] mb-9"
            >
                <h2 className="text-white text-5xl text-center">Technologies</h2>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3 justify-center m-3 mt-8">
                {technologies.map((tech) => (
                    <motion.div
                        key={tech.id}
                        variants={iconVar(tech.duration)}
                        animate="animate"
                        initial="initial"
                        aria-label={tech.label}
                        className="border-4 border-neutral-800 rounded-2xl p-4"
                    >
                        {tech.icon}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Technology;
