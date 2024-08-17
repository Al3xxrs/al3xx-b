import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const Services = () => {
    const boxVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="w-full text-white py-[60px] px-[20px] pb-[80px]">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center">
                    <motion.div
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 50, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center flex-col w-full relative z-[4] mb-9"
                    >
                        <h2 className="text-white text-5xl text-center">Services</h2>
                    </motion.div>
                    <div className="flex flex-wrap gap-8 justify-center">
                        <motion.div
                            variants={boxVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-[350px] text-center bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-[#225ab9] min-h-[260px] transition-transform duration-300 hover:translate-y-[-8px]"
                            aria-label="Web Development"
                        >
                            <FaCode className="text-4xl mx-auto mb-4 text-white" />
                            <h3 className="text-lg font-semibold mb-2">Web Developer</h3>
                            <p className="text-gray-300">
                                I&apos;m a Frontend Web Developer with experience in HTML, CSS, JavaScript, React, and Tailwind CSS. I bring
                                your ideas to life with clean, efficient code.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={boxVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="max-w-[350px] text-center bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-[#225ab9] min-h-[260px] transition-transform duration-300 hover:translate-y-[-8px]"
                            aria-label="Functional Website"
                        >
                            <FaLaptopCode className="text-4xl mx-auto mb-4 text-white" />
                            <h3 className="text-lg font-semibold mb-2">Functional Websites</h3>
                            <p className="text-gray-300">
                                I create functional, SEO-optimized websites that are visually appealing and tailored to your needs.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={boxVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="max-w-[350px] text-center bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-[#225ab9] min-h-[260px] transition-transform duration-300 hover:translate-y-[-8px]"
                            aria-label="Responsive Layout"
                        >
                            <FaMobileAlt className="text-4xl mx-auto mb-4 text-white" />
                            <h3 className="text-lg font-semibold mb-2">Responsive Layouts</h3>
                            <p className="text-gray-300">
                                My designs ensure a seamless experience across all devices, from mobile phones to desktop computers.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
