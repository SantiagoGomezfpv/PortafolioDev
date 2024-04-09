import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Logohtml from '../assets/LogoHtml.png';
import LogoCss from '../assets/LogoCss.png';
import LogoJs from '../assets/LogoJs.png';
import LogoC from '../assets/LogoC.png';
import LogoNext from '../assets/LogoNext.png';
import LogoNode from '../assets/LogoNode.png';
import LogoPython from '../assets/LogoPython.png';
import LogoReact from '../assets/LogoReact.png';
import LogoTailwind from '../assets/LogoTailwind.png';
import LogoGit from '../assets/LogoGit.png';
import LogoGitHub from '../assets/LogoGitHub.png';
import LogoFirebase from '../assets/LogoFirebase.png';
import LogoWordPress from '../assets/LogoWordPress.png';

const Frontend = [
    {
        id: 1,
        name: "HTML",
        image:Logohtml
    },
    {
        id: 2,
        name: "CSS",
        image:LogoCss
    },
    {
        id: 3,
        name: "JavaScript",
        image:LogoJs    
    },
    {
        id: 4,
        name: "React.Js",
        image:LogoReact
    },
    {
        id: 5,
        name: "TailwindCSS",
        image:LogoTailwind 
    },
    ];

    const Backend = [
        {
            id: 1,
            name: "Python",
            image:LogoPython
        },
        {
            id: 2,
            name: "C++",
            image:LogoC
        },
        {
            id: 3,
            name: "Node.Js",
            image:LogoNode    
        },
        ];

    const Aprendiendo = [
        {
            id: 1,
            name: "Next.js",
            image:LogoNext
        },
        {
            id: 2,
            name: "React Native",
            image:LogoReact
        },
        ];

    const Herramientas = [
        {
            id: 1,
            name: "Next.js",
            image:LogoGit
        },
        {
            id: 2,
            name: "React Native",
            image:LogoGitHub
        },
        {
            id: 3,
            name: "JavaScript",
            image:LogoFirebase    
        },
        {
            id: 4,
            name: "TailwindCSS",
            image:LogoWordPress    
        },
        ];
    
    export function AnimatedTooltipPreview() {
    return (
        <div className="w-full">
            <div className="flex flex-row items-center justify-center mb-3 md:mb-10 w-full">
                <h1 className="mr-3 md:mr-5 text-xl md:text-2xl font-bold">Frontend</h1>
                <AnimatedTooltip items={Frontend}/>
            </div>
            <div className="flex flex-row items-center justify-center mb-3 md:mb-10 w-full">
                <h1 className="mr-3 md:mr-5 text-xl md:text-2xl font-bold">Backend</h1>
                <AnimatedTooltip items={Backend}/>
            </div>
            <div className="flex flex-row items-center justify-center mb-3 md:mb-10 w-full">
                <h1 className="mr-3 md:mr-5 text-xl md:text-2xl font-bold">Aprendiendo</h1>
                <AnimatedTooltip items={Aprendiendo}/>
            </div>
            <div className="flex flex-row items-center justify-center mb-3 md:mb-10 w-full">
                <h1 className="mr-3 md:mr-5 text-xl md:text-2xl font-bold">Herramientas</h1>
                <AnimatedTooltip items={Herramientas}/>
            </div>
        </div>
        
    );
}
