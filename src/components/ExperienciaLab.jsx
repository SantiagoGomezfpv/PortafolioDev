// "use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import PagPyg from '../assets/PaginaPyg.png';
import CursoReact  from '../assets/CursoReact.png';
import AppPyg from '../assets/AppPyg.png';
import ArticuloInvest from '../assets/ArticuloInv.png';

const content = [
    {
        title: "Pygmalion",
        description:
            <div className="min-h-[12rem]  md:min-h-[12rem] text-left">
                <p>Responsable de proporcionar soluciones a requerimientos electrónicos y de desarrollo web, contribuyendo en diferentes proyectos. Entre estos proyectos se incluye la creación de "Software Scoring V2", un software desarrollado con React para el conteo de puntos en competencias de robótica. También participé en el desarrollo de la página web de la empresa, construida desde cero utilizando Wordpress.</p>
                <a href="https://pygmalion.tech" target="_blank" rel="noopener noreferrer" 
                    className="flex justify-center align-center w-20 md:h-10 mt-4 rounded-full bg-gray-100 border border-gray-100 text-black text-sm 
                    transition hover:scale-110 hover:bg-gray-100/50 hover:border-black hover:border">
                    <span className="inline-flex items-center p-1 md:p-2">
                        <svg className="size-5 md:mr-2" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg>
                        <span >Ver</span>
                    </span>
                </a>
                <div className="md:hidden flex flex-col  items-center justify-center">
                    <img
                        src={PagPyg}
                        alt="linear board demo"
                        />
                    <p> Enero-Actualmente /2024</p>
                </div>
            </div>,
        content: (
            <div className="h-full w-full bg-transparent flex flex-col items-center justify-center text-white">
                <img
                    src={PagPyg}
                    alt="linear board demo"
                    />
                <p className="text-xl md:text-2xl text-colorMor">Profesional de ingeniería</p>
                <p> Enero-Actualmente /2024</p>
            </div>
        ),
    },
    {
        title: "ITM (Freelance)",
        description:
            <div className=" min-h-[12rem] text-left">
                <p> Responsable del desarrollo del contenido y ejecución del curso como formador junior en el componente tecnológico de la ruta formativa REACT JS.</p>
                <div className="md:hidden flex flex-col  items-center justify-center">
                    <img
                        src={CursoReact}
                        alt="linear board demo"
                        />
                    <p> Agosto-Diciembre /2023</p>
                </div>
            </div>,
        content: (
            <div className="h-full w-full bg-transparent flex flex-col items-center justify-center text-white">
                <img
                    src={CursoReact}
                    alt="linear board demo"
                    />
                <p className="text-xl md:text-2xl text-colorMor">Facilitador de Reat js</p>
                <p> Agosto-Diciembre /2023</p>
            </div>
        ),
    },
    {
        title: "Pygmalion",
        description:
            <div className=" min-h-[12rem] text-left">
                <p>Responsable de proporcionar soluciones a requerimientos electrónicos y de desarrollo web. Durante este período, participé en varios proyectos, destacando la publicación en la Play Store de una aplicación llamada Innobot BT Controller, que ha acumulado más de 100 descargas y se utiliza para el control inalámbrico de robots.</p>
                <a href="https://play.google.com/store/apps/details?id=appinventor.ai_santiago_energitelco.AppPygmalion&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" 
                    className="flex justify-center align-center w-20 md:h-10 mt-4 rounded-full bg-gray-100 border border-gray-100 text-black text-sm 
                    transition hover:scale-110 hover:bg-gray-100/50 hover:border-black hover:border">
                    <span className="inline-flex items-center p-1 md:p-2">
                        <svg className="size-5 md:mr-2" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg>
                        <span >Ver</span>
                    </span>
                </a>
                <div className="md:hidden flex flex-col  items-center justify-center">
                    <img
                        src={AppPyg}
                        alt="linear board demo"
                        />
                    <p> Mayo-Agosto/2023</p>
                </div>
            </div>,
        content: (
            <div className="h-full w-full bg-transparent flex flex-col items-center justify-center text-white">
                <img
                    src={AppPyg}
                    alt="linear board demo"
                    />
                <p className="text-xl md:text-2xl text-colorMor">Profesional de ingeniería</p>
                <p> Mayo-Agosto/2023</p>
            </div>
        ),
    },
    {
        title: "ITM (Freelance)",
        description:
            <div className="h-[12rem] text-left">
                <p> Responsable del análisis y curación de datos, generación de gráficas, así como de otro material de visualización, utilizando Python. Para el proyecto de Minciencias 80740-475-2020, titulado "Sistemas Inteligentes para el Monitoreo de Cultivos Agrícolas Permanentes y Transitorios". Durante este periodo, se contribuyó al proyecto de investigación que resultó en la publicación de un artículo titulado "Spectral Library of Maize Leaves under Nitrogen Deficiency Stress", el cual ha acumulado más de 2099 vistas y una vez citado.</p>
                <a href="https://www.mdpi.com/2306-5729/8/1/2" target="_blank" rel="noopener noreferrer" 
                    className="flex justify-center align-center w-20 md:h-10 mt-4 rounded-full bg-gray-100 border border-gray-100 text-black text-sm 
                    transition hover:scale-110 hover:bg-gray-100/50 hover:border-black hover:border">
                    <span className="inline-flex items-center p-1 md:p-2">
                        <svg className="size-5 md:mr-2" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-link">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg>
                        <span >Ver</span>
                    </span>
                </a>
                <div className="md:hidden flex flex-col  items-center justify-center">
                    <img src={ArticuloInvest} alt="linear board demo"/>
                    <p className="text-xl md:text-2xl text-colorMor">Analista de datos Python</p>
                    <p> Agosto- Diciembre/ 2022</p>
                    <p> Mayo- Septiembre / 2023</p>
                </div>
            </div>,
        content: (
            <div className="h-full w-full bg-transparent flex flex-col items-center justify-center text-white">
                <img src={ArticuloInvest} alt="linear board demo"/>
                <p className="text-xl md:text-2xl text-colorMor">Analista de datos Python</p>
                <p> Agosto 2022 - Septiembre 2023</p>
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
    <div className="p-0">
        <StickyScroll content={content} />
    </div>
    );
}
