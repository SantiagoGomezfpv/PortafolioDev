import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

const Presentacion = () => {
    
    const ParticlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);

    return (
        <div>
            <Particles
                options={particlesConfig}
                init={ParticlesInit}
            />
        </div>
    );
};

export default Presentacion;
