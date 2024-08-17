import computer from "../assets/computer.png";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="w-full sm:pt-[80px] pt-[20px] relative sm:my-5 my-2 max_width_screen text-white flex flex-col sm:flex-row justify-center p-5 items-center">
            <div className="flex-1 flex flex-col gap-2">
                <motion.div
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="z-[2]"
                >
                    <h1 className="text-4xl sm:text-5xl font-thin text-white">Alex tech</h1>
                    <span className="my-2 text__gradient bg-clip-text text-transparent text-3xl">Full Stack Developer</span>
                    <p className="leading-6 tracking-tighter font-light">
                        I&apos;m a passionate Full Stack Developer with over 2 years of experience in building responsive and visually
                        appealing web applications. My expertise lies in HTML, CSS, Tailwind CSS, and JavaScript, with a strong focus on
                        React for creating dynamic user interfaces. Alongside my web development skills, I have a solid foundation in Java,
                        C++, Python, and C#, which allows me to approach problems from different angles and develop robust solutions.
                    </p>
                </motion.div>
                <div className="absolute z-[0] w-[60%] h-[30%] top-0 left-0 pink__gradient overflow-hidden" />
                <div className="absolute z-[0] w-[70%] h-[60%] top-1 left-0 blue__gradient overflow-hidden" />
                <div className="absolute z-[0] w-[40%] h-[40%] top-2 left-0 yellow__gradient overflow-hidden" />
            </div>
            <div className="flex-1 w-full flex sm:justify-end justify-center my-5 sm:mt-0 mt-16">
                <a href="https://lovepik.com/images/png-software-technology.html" target="_blank" rel="noopener noreferrer">
                    <motion.img
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        src={computer}
                        alt="computer"
                        className="rounded-lg h-[400px] md:w-[60%] object-cover relative z-10"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;
