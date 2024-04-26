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
                        <h2 className="md:mt-4 text-xl font-medium sm:text-2xl">Api Birds</h2>
                    </div>
                    <div className={`absolute p-4 opacity-0 transition-opacity ${isHoveredBirds ? 'group-hover:relative group-hover:opacity-100' : ''} sm:p-6 lg:p-8`}>
                        <h3 className="md:mt-4 text-lg font-medium sm:text-2xl">Api Birds</h3>
                        <p className="md:mt-4 text-xs sm:text-base">
                        API para detectar especies de aves mediante su sonido, respaldada por una inteligencia artificial que entrené personalmente. Actualmente, la API está alojada en una instancia gratuita de Render, lo que limita su uso. Fue construida desde cero con HTML, CSS, JavaScript, Python y FastApi.
                        </p>
                        <div className="flex flex-row mt-2 md:mt-8 justify-end md:justify-start ">
                            <a href="https://apibirds.onrender.com" target="_blank" rel="noopener noreferrer" 
                                className="flex justify-center align-center md:w-24 md:h-10 mr-2 md:mr-4 rounded-full bg-gray-100 border md:border-gray-100 border-black text-black text-sm 
                                transition hover:scale-110 hover:bg-gray-100/50 hover:border-black hover:border">
                                <span className="inline-flex items-center p-2 md:p-2">
                                    <svg className="size-4 md:mr-2 " xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                    </svg>
                                    <span className="hidden sm:block">Ver</span>
                                </span>
                            </a>
                            <a href="https://github.com/SantiagoGomezfpv/ApiBirds" target="_blank" rel="noopener noreferrer" 
                                className="flex justify-center align-center md:w-24 md:h-10 rounded-full bg-black border md:border-black border-gray-100 text-gray-100 text-sm
                                transition hover:scale-110 hover:bg-black/50 hover:border-gray-100/50">
                                <span className="inline-flex items-center p-2 md:p-2">
                                    <svg className="size-4 md:mr-2 " viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                        <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                                    </svg>
                                    <span className="hidden sm:block">Código</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group relative block h-[23vh] w-[80vw] md:h-[60vh] md:w-[25vw] mb-7 md:m-10" onMouseEnter={handleHoverIot} onMouseLeave={handleHoverIot}>
                <div className={`relative flex h-full transform rounded-3xl shadow-2xl shadow-colorMor items-end border-2 border-colorMor bg-gradient-to-r from-colorMor/60 to-transparent transition-transform ${isHoveredIot ? '-translate-x-2 -translate-y-2' : ''} flex flex-col justify-center items-center`}>
                    <div className={`p-4 !pt-0 transition-opacity ${isHoveredIot ? 'group-hover:absolute group-hover:opacity-0' : ''} sm:p-6 lg:p-8`}>
                        <img className="size-[15vh] md:size-[40vh]" src={ProyectoIot} alt="" />
                        <h2 className="md:mt-4 text-xl font-medium sm:text-2xl">Domótica IoT</h2>
                    </div>
                    <div className={`absolute p-4 opacity-0 transition-opacity ${isHoveredIot ? 'group-hover:relative group-hover:opacity-100' : ''} sm:p-6 lg:p-8`}>
                        <h3 className="md:mt-4 text-xg font-medium sm:text-2xl">Domótica IoT</h3>
                        <p className="md:mt-4 text-xs sm:text-base">
                        Plataforma complementaria a un proyecto electrónico basado en ESP32 y sensores, permitiendo el monitoreo en tiempo real de una casa. Ofrece datos reales, gráficos interactivos y la capacidad de controlar actuadores. Desarrollada desde cero utilizando HTML, CSS, JavaScript y Firebase.
                        </p>
                        <div className="flex flex-row md:mt-8 justify-end md:justify-start ">
                            <a href="https://domotica-iot-e77b4.web.app" target="_blank" rel="noopener noreferrer" 
                                className="flex justify-center align-center md:w-24 md:h-10 mr-2 md:mr-4 rounded-full bg-gray-100 border md:border-gray-100 border-black text-black text-sm 
                                transition hover:scale-110 hover:bg-gray-100/50 hover:border-black hover:border">
                                <span className="inline-flex items-center p-2 md:p-2">
                                    <svg className="size-4 md:mr-2 " xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                    </svg>
                                    <span className="hidden sm:block">Ver</span>
                                </span>
                            </a>
                            <a href="https://github.com/SantiagoGomezfpv/Domotica" target="_blank" rel="noopener noreferrer" 
                                className="flex justify-center align-center md:w-24 md:h-10 rounded-full bg-black border md:border-black border-gray-100 text-gray-100 text-sm
                                transition hover:scale-110 hover:bg-black/50 hover:border-gray-100/50">
                                <span className="inline-flex items-center p-2 md:p-2">
                                    <svg className="size-4 md:mr-2 " viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                        <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                                    </svg>
                                    <span className="hidden sm:block">Código</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group relative block h-[23vh] w-[80vw] md:h-[60vh] md:w-[25vw] mb-7 md:m-10" onMouseEnter={handleHoverDrones} onMouseLeave={handleHoverDrones}>
                <div className={`relative flex h-full transform rounded-3xl shadow-2xl shadow-colorMor items-end border-2 border-colorMor bg-gradient-to-r from-colorMor/60 to-transparent transition-transform ${isHoveredDrones ? '-translate-x-2 -translate-y-2' : ''} flex flex-col justify-center items-center`}>
                    <div className={`p-4 !pt-0 transition-opacity ${isHoveredDrones ? 'group-hover:absolute group-hover:opacity-0' : ''} sm:p-6 lg:p-8`}>
                        <img className="size-[15vh] md:size-[40vh]" src={ProyectoDrones} alt="" />
                        <h2 className="md:mt-4 text-xl font-medium sm:text-2xl">Ghost Detector</h2>
                    </div>
                    <div className={`absolute p-4 opacity-0 transition-opacity ${isHoveredDrones ? 'group-hover:relative group-hover:opacity-100' : ''} sm:p-6 lg:p-8`}>
                        <h3 className="md:mt-4 text-lg font-medium sm:text-2xl">Ghost Detector</h3>
                        <p className="md:mt-4 text-xs sm:text-base">
                        Aplicación complementaria a un proyecto electrónico que detecta señales de drones mediante radiofrecuencia y las muestra en un mapa en tiempo real. Esta solución única permite la detección de drones y sus pilotos de manera efectiva. Creada desde cero con HTML, CSS, JavaScript y Python.
                        </p>
                        <p className="mt-2 md:mt-8 font-bold text-xs sm:text-base">Debido a que comercializo el sistema, el proyecto está bajo confidencialidad</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { FlipCard };
