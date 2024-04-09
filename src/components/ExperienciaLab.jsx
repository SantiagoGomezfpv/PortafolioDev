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
                <p> Se desarrollo la pagina web utilizandfo Wordpress </p>
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
                <p> Enero-Actualmente /2024</p>
            </div>
        ),
    },
    {
        title: "ITM (Freelance)",
        description:
            <div className=" min-h-[12rem] text-left">
                <p> Formador junior en el componente tecnológico de la ruta formativa REACT JS </p>
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
                <p> Agosto-Diciembre /2023</p>
            </div>
        ),
    },
    {
        title: "Pygmalion",
        description:
            <div className=" min-h-[12rem] text-left">
                <p> Se desarrollo la Aplicacion movil Innobot BT Controller 100+ descargas, adicionalmente se avanzo en el desarrollo de una veersion nueva de software scoring</p>
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
                <p> Mayo-Agosto/2023</p>
            </div>
        ),
    },
    {
        title: "ITM (Freelance)",
        description:
            <div className=" min-h-[12rem] text-left">
                <p> PROYECTO MINCIENCIAS 80740-475-2020 DENOMINADO SISTEMAS INTELIGENTES PARA EL MONITOREO DE CULTIVOS AGRÍCOLAS PERMANENTES Y TRANSITORIOS.</p>
                <div className="md:hidden flex flex-col  items-center justify-center">
                    <img
                        src={ArticuloInvest}
                        alt="linear board demo"
                        />
                    <p> Agosto- Diciembre/ 2022</p>
                    <p> Mayo- Septiembre / 2023</p>
                </div>
            </div>,
        content: (
            <div className="h-full w-full bg-transparent flex flex-col items-center justify-center text-white">
                <img
                    src={ArticuloInvest}
                    alt="linear board demo"
                    />
                <p> Agosto- Diciembre/ 2022</p>
                <p> Mayo- Septiembre / 2023</p>
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
