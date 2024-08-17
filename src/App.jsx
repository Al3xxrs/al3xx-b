import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Loading from "./components/Loading"; // Import the Loading component

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Create a function to check if all images are loaded
        const checkImagesLoaded = () => {
            return new Promise((resolve) => {
                const images = Array.from(document.images);
                const totalImages = images.length;
                let loadedImages = 0;

                if (totalImages === 0) {
                    resolve(); // No images to load
                    return;
                }

                const onImageLoad = () => {
                    loadedImages += 1;
                    if (loadedImages === totalImages) {
                        resolve(); // All images loaded
                    }
                };

                images.forEach((img) => {
                    if (img.complete) {
                        onImageLoad();
                    } else {
                        img.addEventListener("load", onImageLoad);
                        img.addEventListener("error", onImageLoad); // Handle errors
                    }
                });
            });
        };

        const handleLoad = async () => {
            // Wait for images and document ready state
            await checkImagesLoaded();
            if (document.readyState === "complete") {
                setLoading(false); // Set loading to false when all assets are loaded
            } else {
                window.addEventListener("load", () => setLoading(false));
            }
        };

        handleLoad();

        return () => {
            window.removeEventListener("load", () => setLoading(false));
        };
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="bg-slate-950">
            <Navbar />
            <Hero />
            <About />
            <Technology />
            <Services />
            <Project />
            <Contact />
        </div>
    );
}

export default App;
