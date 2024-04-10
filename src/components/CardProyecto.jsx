import React, { useState } from "react";
import ProyectoBirds from "../assets/ProyectoBirds.png";
import ProyectoIot from "../assets/ProyectoIot.png";
import ProyectoDrones from "../assets/ProyectoDrones.png";

const FlipCard = () => {
    const [isHoveredBirds, setIsHoveredBirds] = useState(false);
    const [isHoveredIot, setIsHoveredIot] = useState(false);
    const [isHoveredDrones, setIsHoveredDrones] = useState(false);
    const handleHoverBirds = () => { setIsHoveredBirds(!isHoveredBirds); };
    const handleHoverIot = () => { setIsHoveredIot(!isHoveredIot); };
    const handleHoverDrones = () => { setIsHoveredDrones(!isHoveredDrones); };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="group relative block h-[23vh] w-[80vw] md:h-[60vh] md:w-[25vw] mb-7 md:m-10" onMouseEnter={handleHoverBirds} onMouseLeave={handleHoverBirds}>
                <div className={`relative flex h-full transform rounded-3xl shadow-2xl shadow-colorMor items-end border-2 border-colorMor bg-gradient-to-r from-colorMor/60 to-transparent transition-transform ${isHoveredBirds ? '-translate-x-2 -translate-y-2' : ''} flex flex-col justify-center items-center`}>
                    <div className={`p-4 !pt-0 transition-opacity ${isHoveredBirds ? 'group-hover:absolute group-hover:opacity-0' : ''} sm:p-6 lg:p-8`}>
                        <img className="size-[15vh] md:size-[40vh]" src={ProyectoBirds} alt=""/>
                        <h2 className="md:mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
                    </div>
                    <div className={`absolute p-4 opacity-0 transition-opacity ${isHoveredBirds ? 'group-hover:relative group-hover:opacity-100' : ''} sm:p-6 lg:p-8`}>
                        <h3 className="md:mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>
                        <p className="md:mt-4 text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                            omnis atque culpa repellendus.
                        </p>
                        <p className="mt-2 md:mt-8 font-bold">Read more</p>
                    </div>
                </div>
            </div>

            <div className="group relative block h-[23vh] w-[80vw] md:h-[60vh] md:w-[25vw] mb-7 md:m-10" onMouseEnter={handleHoverIot} onMouseLeave={handleHoverIot}>
                <div className={`relative flex h-full transform rounded-3xl shadow-2xl shadow-colorMor items-end border-2 border-colorMor bg-gradient-to-r from-colorMor/60 to-transparent transition-transform ${isHoveredIot ? '-translate-x-2 -translate-y-2' : ''} flex flex-col justify-center items-center`}>
                    <div className={`p-4 !pt-0 transition-opacity ${isHoveredIot ? 'group-hover:absolute group-hover:opacity-0' : ''} sm:p-6 lg:p-8`}>
                        <img className="size-[15vh] md:size-[40vh]" src={ProyectoIot} alt="" />
                        <h2 className="md:mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
                    </div>
                    <div className={`absolute p-4 opacity-0 transition-opacity ${isHoveredIot ? 'group-hover:relative group-hover:opacity-100' : ''} sm:p-6 lg:p-8`}>
                        <h3 className="md:mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>
                        <p className="md:mt-4 text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                            omnis atque culpa repellendus.
                        </p>
                        
                        <p className="mt-2 md:mt-8 font-bold">Read more</p>
                    </div>
                </div>
            </div>

            <div className="group relative block h-[23vh] w-[80vw] md:h-[60vh] md:w-[25vw] mb-7 md:m-10" onMouseEnter={handleHoverDrones} onMouseLeave={handleHoverDrones}>
                <div className={`relative flex h-full transform rounded-3xl shadow-2xl shadow-colorMor items-end border-2 border-colorMor bg-gradient-to-r from-colorMor/60 to-transparent transition-transform ${isHoveredDrones ? '-translate-x-2 -translate-y-2' : ''} flex flex-col justify-center items-center`}>
                    <div className={`p-4 !pt-0 transition-opacity ${isHoveredDrones ? 'group-hover:absolute group-hover:opacity-0' : ''} sm:p-6 lg:p-8`}>
                        <img className="size-[15vh] md:size-[40vh]" src={ProyectoDrones} alt="" />
                        <h2 className="md:mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
                    </div>
                    <div className={`absolute p-4 opacity-0 transition-opacity ${isHoveredDrones ? 'group-hover:relative group-hover:opacity-100' : ''} sm:p-6 lg:p-8`}>
                        <h3 className="md:mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>
                        <p className="md:mt-4 text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                            omnis atque culpa repellendus.
                        </p>
                        <p className="mt-2 md:mt-8 font-bold">Read more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { FlipCard };
