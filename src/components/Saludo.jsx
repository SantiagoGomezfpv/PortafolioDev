import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import CV from "../assets/CVG_Santiago_Ingles.pdf";

export function TypewriterEffectSmoothDemo() {
    const words = [
        {text: "Hey,",},
        {text: "soy",},
        {text: "Santiago.", className: "text-colorMor dark:text-colorMor",},
    ];
    return (
        <div className="flex flex-col items-start justify-center w-full md:h-[40rem] md:w-[40rem] text-2xl text-wrap">
            <a href="https://www.linkedin.com/in/santiago-gómez-ortega" target="_blank" rel="noopener noreferrer"  className="flex flex-col items-end justify-center w-full">
                <span className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#7862f8_50%,#000000_100%)]' />
                    <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-2 text-xs font-medium text-gray-50 backdrop-blur-3xl'>
                        Disponible para trabajar
                    </div>
                </span>
            </a>
                
            <TypewriterEffectSmooth words={words} />
            <p className="text-xl md:text-2xl"> <span className="text-colorMor">Ingeniero Electrónico</span> de Medellín, Colombia. Mi enfoque principal es el desarrollo web 
                <span className="text-colorMor"> Front-End</span>. Decidí fusionar mi habilidad técnica con mi creatividad para crear experiencias 
                web atractivas y funcionales para los usuarios.</p>

            <div className="flex flex-row mt-6 md:mt-12 space-y-0 space-x-2 ">
                <div className="group relative flex justify-center">
                    <a href="mailto:santiagogomezfpv@gmail.com" target="_blank" rel="noopener noreferrer" 
                        className="flex justify-center align-center md:w-32 h-10 rounded-full bg-black border border-black text-gray-100 text-sm 
                        transition hover:scale-110 hover:bg-black/50 hover:border-gray-100/50">
                        <span className="inline-flex items-center p-2 md:p-2">
                            <svg className="size-5 md:mr-2 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" /><path d="M3 6l9 6l9 -6" /><path d="M15 18h6" /><path d="M18 15l3 3l-3 3" />
                            </svg>
                            <span className="hidden sm:block">Contáctame</span>
                        </span>
                    </a>
                    <span class=" hidden sm:block absolute top-14 scale-0 transition-all rounded-full bg-colorMor/30 px-4 py-2 text-xs text-white group-hover:scale-100 ">
                        santiagogomezfpv@gmail.com
                    </span>
                </div>

                <a href="https://www.linkedin.com/in/santiago-gómez-ortega" target="_blank" rel="noopener noreferrer" 
                    className="flex justify-center align-center md:w-32 h-10 rounded-full bg-gray-100 border border-gray-100 text-black text-sm 
                    transition hover:scale-110 hover:bg-gray-100/90 hover:border-black hover:border">
                    <span className="inline-flex items-center p-2 md:p-2">
                        <svg className="size-5 md:mr-2 " width="256" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                            <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                        </svg>
                        <span className="hidden sm:block">LinkedIn</span>
                    </span>
                </a>

                <a href="https://github.com/SantiagoGomezfpv" target="_blank" rel="noopener noreferrer" 
                    className="flex justify-center align-center md:w-32 h-10 rounded-full bg-black border border-black text-gray-100 text-sm
                    transition hover:scale-110 hover:bg-black/50 hover:border-gray-100/50">
                    <span className="inline-flex items-center p-2 md:p-2">
                        <svg className="size-5 md:mr-2 " viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                        </svg>
                        <span className="hidden sm:block">GitHub</span>
                    </span>
                </a>
                <a href={CV} target="_blank" rel="noopener noreferrer" 
                    className="flex justify-center align-center md:w-32 h-10 rounded-full bg-gray-100 border border-gray-100 text-black text-sm 
                    transition hover:scale-110 hover:bg-gray-100/90 hover:border-black hover:border">
                    <span className="inline-flex items-center p-2 md:p-2">
                        <svg className="size-5 md:mr-2 " xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-cv">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" />
                        </svg>
                        <span className="hidden sm:block">Hoja de vida</span>
                    </span>
                </a>
            </div>
        </div>
    );
}
