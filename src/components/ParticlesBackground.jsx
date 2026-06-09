import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        fullScreen: false,

        particles: {
          number: {
            value: 40,
          },

          color: {
            value: "#FFD700",
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: 2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          links: {
            enable: true,
            color: "#FFD700",
            opacity: 0.15,
            distance: 150,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
        },
      }}
      className="absolute inset-0"
    />
  );
}