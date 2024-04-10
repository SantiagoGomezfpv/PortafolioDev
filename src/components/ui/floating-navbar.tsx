import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../utils/cn";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const prevScrollYProgress = useRef<number | null>(null);
    const timeoutId = useRef<number | null>(null);

    // Función para manejar el evento de desplazamiento
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (prevScrollYProgress.current !== null) {
            const velocity = latest - prevScrollYProgress.current;
            if (velocity !== 0) {
                setVisible(true);
                // Si ya hay un timeout en curso, lo limpiamos
                if (timeoutId.current !== null) {
                    clearTimeout(timeoutId.current);
                }
                // Establecemos un nuevo timeout para ocultar el elemento después de un cierto tiempo de inactividad
                timeoutId.current = window.setTimeout(() => {
                    setVisible(false);
                }, 500); // Aquí puedes ajustar el tiempo de espera (en milisegundos) antes de ocultar el elemento
            }
        }
        prevScrollYProgress.current = latest;
    });

    // Funciones para manejar los eventos de hover
    const handleMouseEnter = () => { setHovered(true); };
    const handleMouseLeave = () => { setHovered(false); };
    return (
        <AnimatePresence>
            {(visible || hovered) && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -100,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                        y: -100,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={cn(
                        "flex max-w-fit fixed top-5 inset-x-0 mx-auto border-2 border-colorMor rounded-full backdrop-blur-sm bg-gray-100/10 z-[5000] px-8 py-2 items-center justify-center space-x-4",
                        className
                    )}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {navItems.map((navItem: any, idx: number) => (
                        <a
                            key={`link-${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative items-center flex space-x-1 text-gray-100 hover:text-colorMor font-bold"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block text-sm">{navItem.name}</span>
                        </a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
