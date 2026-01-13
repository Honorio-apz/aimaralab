import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/fotos/photo230000.png",
    "/fotos/photoE0001.png",
    "/fotos/photoE00022.png",
    "/fotos/photo240004.png",
    "/fotos/photo250008.png",
    "/fotos/photo250007.png",
];

export default function HeroCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-full min-h-[500px] md:min-h-[600px] overflow-hidden rounded-3xl shadow-2xl border border-gray-100 dark:border-white/10">
            <AnimatePresence initial={false}>
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt="AiMara Lab Activities"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            {/* Overlay Gradient for Text Readability if needed, though mostly visual here */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index
                            ? "bg-white w-6"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
