import React,{useCallback} from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  },[]);
  const particlesLoaded=useCallback(async (container) =>{
    await console.log(container)
  },[]);

  const options = {
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#fff", // Change to a color that stands out against white
      },
      shape: {
        type: "circle", // Keeping circle shape for simplicity
      },
      opacity: {
        value: 0.5, // Adjust opacity for better visibility
        random: false,
      },
      size: {
        value: 5, // Increased size for visibility
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        loaded={particlesLoaded}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: -1, // This ensures it stays in the background
        }}
      />
     
  );
};

export default ParticlesBackground;
