import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Particulas from "./components/Particle";

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
    
      <div className="flex overflow-hidden justify-center items-center p-2 min-h-[100vh] text-white ">
        <Particulas />
        <div>
          <h1>Hola, soy</h1>
          <p>Soy ... 🤯</p>
        </div>
      </div>
      
      <div className="overflow-hidden flex">
        <div className="overflow-hidden ">
          <div
            id="skills"
            ref={scroller}
            className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-neutral-900 relative h-screen"
          >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
   
            <section
              ref={skills}
              className=" skill-set px-12 w-screen h-full ns-horizontal-section__item flex items-center z-50"
            >
              Proyectos
            </section>
            <section
              ref={skills}
              className=" skill-set px-12 w-screen h-full ns-horizontal-section__item flex items-center z-50"
            >
            Experiencia laboral
            </section>
            <section
              ref={skills}
              className=" skill-set px-12 w-screen h-full ns-horizontal-section__item flex items-center z-50"
            >
              Estudios
            </section>
          </div>
        </div>
      </div> 
      
      <div className="flex justify-center items-center p-2 min-h-[100vh] text-white">
      <div>
        <h1>Sobre mí</h1>
        <p>ssss</p>
      </div>
    </div>
    </>
  );
}

export default App;