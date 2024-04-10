import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={estudios}
                direction="right"
                speed="slow"/>
        </div>
    );
}

const estudios = [
    {   quote: "Tecnólogo en electrónica",
        name:  "Instituto Tecnologico Metropolitano",
        title: "2019",},
        
    {   quote: "Ingeniero electrónico",
        name:  "Instituto Tecnologico Metropolitano",
        title: "2022",},
    
];
