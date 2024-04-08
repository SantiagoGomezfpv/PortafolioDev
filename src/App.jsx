import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Presentacion from "./components/Particle";
import { StickyScrollRevealDemo } from "./components/ExperienciaLab";
import { SparklesPreview } from "./components/TitulosParticula";
import {AnimatedTooltipPreview} from "./components/FrontTecno"
import {InfiniteMovingCardsDemo} from "./components/EstudiosLoop"
import {TypewriterEffectSmoothDemo} from "./components/Saludo"
import { FlipCard } from "./components/CardProyecto";


import Flecha from "./assets/Flecha2.png";
import Foto1 from "./assets/Foto1.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.skill-set');

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        // snap: 1 / (skillSet.length - 1),
        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <>
      <div className="flex overflow-hidden justify-center items-center p-2 min-h-[100vh] text-gray-100 ">
        <Presentacion/>
        <div className="flex flex-row justify-center items-start z-50">
          <TypewriterEffectSmoothDemo />
          <img className="w-1/3 ml-12 mt-[20vh]" src={Foto1} alt="Santi" />
        </div>
      </div>
      
      <div className="overflow-hidden flex">
        <div className="overflow-hidden ">
          <div
            id="skills"
            ref={scroller}
            className=" flex overflow-x-hidden text-gray-100 w-[400vw] m-0 bg-black relative h-screen"
          >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <section
              ref={skills}
              className="skill-set px-12 w-screen h-full ns-horizontal-section__item flex flex-col justify-center items-center z-50">
              <SparklesPreview frase="Proyectos" />
              <FlipCard/>
            </section>
            <section
              ref={skills}
              className="skill-set px-12 w-screen h-full ns-horizontal-section__item flex flex-row justify-center items-center z-50">
              <div>
                <SparklesPreview frase="Experiencia laboral" />
                <StickyScrollRevealDemo />
              </div>
              <div className="h-4/5">
                <h2 className="text-5xl font-bold leading-[1.6] text-gray-100 mt-16 mb-32">+1<span className="text-2xl font-normal">Año.</span></h2>
                <img className="w-36" src={Flecha} alt="Baja" />
              </div>
            </section>
            <section
              ref={skills}
              className="skill-set px-12 w-screen h-full ns-horizontal-section__item flex flex-row justify-center items-center z-50">
              <div>
                <SparklesPreview frase="Tecnologías" />
                <AnimatedTooltipPreview />
              </div>
              <div>
                <SparklesPreview frase="Estudios" />
                <InfiniteMovingCardsDemo />
              </div>
            </section>
          </div>
        </div>
      </div> 
      <div className="flex justify-center items-center p-2 min-h-[100vh] text-gray-100">
        <div>
          <h1>Sobre mí</h1>
          <p>ssss</p>
        </div>
      </div>
    </>
  );
}

export default App;