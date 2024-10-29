import React from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

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
        value: "#8592f2", // Change to a color that stands out against white
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
        out_mode: "out",
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
    <div style={{ position: "relative", width: "100%", height: "100vh", backgroundColor: "#ffffff" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }}
      />
      <h1 style={{ position: "relative", zIndex: 1, color: "#000" }}>Hello, World!</h1>
    </div>
  );
};

export default ParticlesBackground;
