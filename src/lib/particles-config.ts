import type { ISourceOptions } from "@tsparticles/engine";

export const particlesConfig: ISourceOptions = {
  fullScreen: false,
  fpsLimit: 60,
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
      },
    },
    color: {
      value: ["#06b6d4", "#a855f7", "#ec4899"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.1, max: 0.4 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#06b6d4",
      opacity: 0.08,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.2,
        },
      },
    },
  },
  detectRetina: true,
};
