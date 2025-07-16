import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // ✅ Ensures it stays behind everything
        },
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          opacity: {
            value: 0.08,
            random: true,
          },
          size: {
            value: 2,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            outModes: { default: "bounce" },
          },
        },
      }}
    />
  );
}
