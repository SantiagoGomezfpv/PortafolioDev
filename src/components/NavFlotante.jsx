import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function FloatingNavDemo() {
    const navItems = [
        {name: "Proyectos",
        link: "/#Proyectos2"},

        {name: "Experiencia",
        link: "/#Experiencia"},

        {name: "Tecnologías - Estudios",
        link: "/#Estudios"},

        {name: "Sobre mí",
        link: "/#sobre-mi"},
    ];
    return (
        <div className="hidden sm:block relative w-full">
            <FloatingNav navItems={navItems}/>
        </div>
    );
};