import project1 from "../assets/project1.png";
import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = () => {
    const PROJECTS = [
        {
            title: "Aprilia Website (In progress)",
            des: "https://404/" /* Not finished yet */,
            image: project1,
            description:
                "This website is made in pure HTML, CSS, and JS. It boasts a fully customized UI that is both visually appealing and user-friendly.",
            technologies: ["HTML", "CSS", "JavaScript"],
        },
    ];

    return (
        <section className="my-10 p-3 py-[70px]">
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center flex-col w-full relative z-[4] mb-9"
            >
                <h1 className="text-white text-5xl text-center">Projects</h1>
            </motion.div>

            <div className="relative max_width_screen w-full text-white">
                {PROJECTS.map((item, index) => (
                    <div key={index} className="flex sm:flex-row flex-col my-4 relative z-[10]">
                        <div className="flex-1 flex sm:justify-center justify-start sm:my-0 my-2">
                            <img src={item.image} alt={`Screenshot of ${item.title}`} className="sm:w-[40%] w-[90%] rounded-2xl" />
                        </div>
                        <div className="flex flex-1 flex-col gap-3">
                            {item.des ? (
                                <a
                                    href={item.des}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold flex gap-1 cursor-pointer"
                                >
                                    {item.title}
                                    <HiOutlineExternalLink className="text-2xl" />
                                </a>
                            ) : (
                                <div className="font-semibold">
                                    <p className="flex gap-1">{item.title}</p>
                                </div>
                            )}
                            <p className="text-neutral-400">{item.description}</p>
                            <div className="flex gap-2 flex-wrap">
                                {item.technologies.map((tech, index) => (
                                    <div key={index} className="px-2 py-1 text-sm font-medium text-purple-800 bg-neutral-900 rounded">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Background Gradients */}
                <div className="absolute z-[0] w-[30%] h-[60%] bottom-0 -right-0 pink__gradient overflow-hidden" />
                <div className="absolute z-[0] w-[20%] h-[70%] bottom-1 -right-0 blue__gradient overflow-hidden" />
                <div className="absolute z-[0] w-[10%] h-[50%] bottom-2 -right-0 yellow__gradient overflow-hidden" />
            </div>
        </section>
    );
};

export default Project;