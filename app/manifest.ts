import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Joffre Andres Veloz Pazmiño - Portafolio",
    short_name: "Joffre Veloz",
    description:
      "Portafolio profesional de Joffre Andres Veloz Pazmiño, CEO & Founder de FasteryDev, LLC. Desarrollador Full Stack especializado en Next.js, React y tecnologías modernas.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icons/fastery.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["portfolio", "developer", "technology"],
    lang: "es",
    dir: "ltr",
  };
}
