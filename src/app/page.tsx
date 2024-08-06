"use client";
import { ContactarJoffre } from "@/components/drawer-demo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BriefcaseBusinessIcon, FolderOpenIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const test = () => {
    toast("¡Hola! 👋");
  };

  useEffect(() => {
    test();
    
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Hacia abajo
        setIsVisible(false);
      } else {
        // Hacia arriba
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para móviles o desplazamiento negativo
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function Badge(props: any) {
    return (
      <a
        {...props}
        target="_blank"
        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      />
    );
  }

  return (
    <div className="px-4 py-5 max-w-[59rem] mx-auto">
      <div
        className={`transition-opacity duration-500 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <Card className="px-4 py-3 bg-muted rounded-3xl flex space-x-4">
          <div className="pl-2">
            <HomeIcon className="w-6 h-6" />
          </div>
          {/* <div className="pl-2">
            <FolderOpenIcon className="w-6 h-6" />
          </div> */}
        </Card>
      </div>
      <div className="py-5 flex my-auto">
        <Avatar className="w-16 h-16 m-2">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/52367350"
            alt="@shadcn"
          />
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>
        <div className="my-auto p-2">
          <div className="text-xl font-bold">Joffre Veloz</div>
          <div className="text-muted-foreground">
            Gerente de FASTERY DEV S.A.S.
          </div>
        </div>
      </div>
      <div className="text-xl font-bold pb-2">¡Hola, Soy Joffre Veloz!</div>
      <p className="text-muted-foreground">
        Soy un apasionado de la tecnología y el desarrollo de software, con un
        fuerte interés en aprender continuamente y compartir mis conocimientos.
        Actualmente, me desempeño como Gerente en mi propia empresa, FASTERY DEV
        S.A.S., donde lidero el desarrollo y la gestión de nuevos proyectos.
        Además, soy miembro activo de la comunidad de{" "}
        <Badge href="https://gdg.community.dev/gdg-guayaquil/">
          <img
            alt="GDG Ecuador logomark"
            src="/icons/gdg-logo.png"
            className="!mr-1"
            width="16"
            height="16"
          />
          GDG Guayaquil
        </Badge>{" "}
        donde se comparte conocimiento con otros profesionales y se intercambian
        experiencias en el campo de la tecnología.
        <br />
        <br />
        Cuento con 4 años de experiencia en el desarrollo de software, con
        especialización en arquitectura de microservicios. Soy experto en el
        desarrollo de aplicaciones utilizando{" "}
        <Badge href="https://flutter.dev/">
          <img
            alt="Flutter logomark"
            src="/icons/flutter-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Flutter
        </Badge>{" "}
        así como en la creación de soluciones backend con{" "}
        <Badge href="https://nestjs.com/">
          <img
            alt="Nest.js logomark"
            src="/icons/nest-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Nest.js
        </Badge>{" "}
        y frontend con{" "}
        <Badge href="https://nextjs.org">
          <img
            alt="Next.js logomark"
            src="/icons/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>{" "}
        .
      </p>

      <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src="/photos/expo.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src="/photos/vuelo2.JPEG"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-bottom sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src="/photos/ioextended.JPEG"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src="/photos/yo.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src="/photos/expo2.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src="/photos/expo1.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="mx-auto justify-center flex py-4">
        <ContactarJoffre />
      </div>
      <footer className="pb-2">
        <hr className="my-3 border-gray-300 sm:mx-auto lg:my-2.5" />
        <div className="text-center text-xs justify-between md:flex px-4">
          <div>FASTERY-DEV S.A.S.</div>
          <div>Privacidad | Legal | Cookies</div>
          <div>v1.0.8</div>
        </div>
      </footer>
    </div>
  );
}
