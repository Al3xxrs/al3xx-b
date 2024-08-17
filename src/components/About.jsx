import user from "../assets/user.png";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="my-[60px] py-[50px]">
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 50, opacity: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center flex-col w-full relative z-[4] mb-9"
            >
                <h1 className="text-white text-5xl text-center">
                    About <span className="text-neutral-400">Me</span>
                </h1>
            </motion.div>

            <div className="w-full relative my-5 max_width_screen text-white flex gap-3 flex-col-reverse sm:flex-row justify-between p-5">
                <div className="flex-1 flex justify-center my-5 sm:mt-0 mt-16">
                    <img src={user} alt="user" className="rounded-lg h-[300px] relative z-10 md:w-[100%] object-cover" />
                </div>

                <motion.div
                    className="flex-1 flex flex-col gap-2 items-start relative"
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="tracking-tighter font-light relative z-[1] leading-6">
                        My journey started with a keen interest in front-end and back-end technologies, and I have since honed my skills to
                        create clean, efficient, and user-friendly websites. I thrive in collaborative settings and enjoy tackling complex
                        challenges that push my abilities further. In addition to coding, I love exploring new tools and frameworks to stay
                        updated with the latest trends in the industry.
                    </p>

                    <div className="absolute z-[0] w-[60%] h-[30%] top-0 right-0 pink__gradient overflow-hidden" />
                    <div className="absolute z-[0] w-[70%] h-[60%] top-1 right-0 blue__gradient overflow-hidden" />
                    <div className="absolute z-[0] w-[40%] h-[40%] top-2 right-0 yellow__gradient overflow-hidden" />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
