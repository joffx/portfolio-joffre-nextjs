"use client";
import { ContactarJoffre } from "@/components/drawer-demo";
import NavbarHome from "@/components/home/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookmarkIcon,
  BriefcaseBusinessIcon,
  Code2Icon,
  ExternalLinkIcon,
  FolderOpenIcon,
  HomeIcon,
  PackageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const showToasts = async () => {
  setTimeout(() => {
    toast(`👋 ¡Hola! Bienvenido a mi portafolio 🌟`);
  }, 5000);
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    showToasts();
  }, []);

  function Badge(props: any) {
    return (
      <a
        {...props}
        target="_blank"
        className="inline-flex items-center rounded-xl border border-neutral-200 bg-black px-2 py-1 mx-1 text-sm leading-4  no-underline dark:border-neutral-700 dark:bg-black text-white font-semibold "
      />
    );
  }

  return (
    <div className="min-h-screen">
      {/* <div className="min-h-screen bg-transparent bg-grid-pattern bg-grid"> */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="px-4 py-5 max-w-[59rem] mx-auto">
          <NavbarHome />
          <div className="py-5 flex my-auto pt-16">
            <Avatar className="w-16 h-16 m-2">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/52367350"
                alt="Joffre Andres Veloz"
              />
              <AvatarFallback>JV</AvatarFallback>
            </Avatar>
            <div className="my-auto p-2">
              <div className="text-2xl font-semibold">Joffre Andres Veloz</div>
              <div className="text-muted-foreground xl:text-base text-sm">
                Full Stack Developer | CEO de Fastery.dev | Innovación y
                Estrategias en Desarrollo de Software
              </div>
            </div>
          </div>
          <p className="text-justify text-muted-foreground">
            Soy un apasionado de la tecnología y el desarrollo de software, con
            un fuerte interés en aprender continuamente y compartir mis
            conocimientos. Actualmente, me desempeño como Gerente en la empresa,
            FASTERYSOLUTIONS S.A.S
            {/* <Badge href="https://fastery.dev/">
              <img
                alt="GDG Ecuador logomark"
                src="/icons/fastery.png"
                className="!mr-1"
                width="16"
                height="16"
              />
              Fastery.dev
            </Badge> */}
            , donde lidero el desarrollo y la gestión de nuevos proyectos.
            Además, soy miembro activo de la comunidad de
            <Badge href="https://gdg.community.dev/gdg-guayaquil/">
              <img
                alt="GDG Ecuador logomark"
                src="/icons/gdg-logo.png"
                className="!mr-1"
                width="16"
                height="16"
              />
              GDG Guayaquil
            </Badge>
            donde se comparte conocimiento con otros profesionales y se
            intercambian experiencias en el campo de la tecnología.
            <br />
            <br />
            Cuento con +3 años de experiencia en el desarrollo de software, con
            especialización en arquitectura de microservicios. Soy experto en el
            desarrollo de aplicaciones utilizando
            <Badge href="https://flutter.dev/">
              <img
                alt="Flutter logomark"
                src="/icons/flutter-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Flutter
            </Badge>
            así como en la creación de soluciones backend con
            <Badge href="https://nestjs.com/">
              <img
                alt="Nest.js logomark"
                src="/icons/nest-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Nest.js
            </Badge>
            y frontend con
            <Badge href="https://nextjs.org">
              <img
                alt="Next.js logomark"
                src="/icons/next-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Next.js
            </Badge>
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
          <div className="mx-auto justify-center flex pb-4">
            <ContactarJoffre />
          </div>
          <div>
            <div className="flex font-semibold text-xl my-auto">
              <BookmarkIcon className="w-6 h-6 mr-2 my-auto" />
              <span className="my-auto">Ultimos Proyectos</span>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
              <Card className="p-4 my-3 bg-muted mb-auto">
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-3 mb-auto">
                  <Image
                    className="rounded-md w-full"
                    src="/port/grupocazacargo.png"
                    width={200}
                    height={200}
                    alt="grupocazacargo"
                  />
                  <div>
                    <span className="flex my-1">
                      <Image
                        src="/port/logo1.webp"
                        width={35}
                        height={35}
                        alt="logo1"
                        className="mr-2 my-auto"
                      />
                      <span
                        className="font-bold my-auto text-lg"
                        style={{ color: "#1d4e9e" }}
                      >
                        Grupo Cazacargo
                      </span>
                    </span>
                    <p className="text-muted-foreground text-sm pt-1">
                      Plataforma empresarial para la gestión de carga y
                      seguimiento de envíos.
                    </p>
                    <div className="flex justify-end">
                      <Link
                        href="https://sistema.grupocazacargo.com"
                        target="_blank"
                      >
                        <Button variant={"outline"} size={"icon"}>
                          <ExternalLinkIcon className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-4 my-3 bg-muted mb-auto">
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-3 mb-auto">
                  <Image
                    className="rounded-md w-full"
                    src="/port/reg1.png"
                    width={200}
                    height={200}
                    alt="reg1"
                  />
                  <div>
                    <span className="flex my-1">
                      <Image
                        src="/port/log_reg.webp"
                        width={125}
                        height={125}
                        alt="log_reg"
                        className="mr-2 my-auto"
                      />
                    </span>
                    <p className="text-muted-foreground text-sm pt-1">
                      Plataforma para punto de ventas para venta de
                      muntiservicios.
                    </p>
                    <div className="flex justify-end">
                      <Link href="https://www.recargaloya.com" target="_blank">
                        <Button variant={"outline"} size={"icon"}>
                          <ExternalLinkIcon className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="mx-auto justify-center flex py-4">
            <Link href="https://www.fastery.dev" target="_blank">
              <Button variant={"secondary"} size={"lg"}>
                <FolderOpenIcon className="w-6 h-6 my-auto" />
                <span>Ver más proyectos</span>
              </Button>
            </Link>
          </div>
          <footer className="pb-2">
            <hr className="my-3 border-gray-300 sm:mx-auto lg:my-2.5" />
            <div className="grid xl:grid-cols-3 grid-cols-1 text-xs gap-1">
              <div className="italic grid grid-cols-1 order-2 xl:order-1 text-center xl:text-start">
                <Link href="https://fastery.dev" target="_blank">
                  <div>Developed by</div>
                  <div>Fastery.dev</div>
                </Link>
              </div>
              <div className="text-center order-1 xl:order-2">
                Privacidad | Legal | Cookies
              </div>
              <div className="order-3 xl:order-3 text-center xl:text-end">
                v1.2.8
              </div>
            </div>
          </footer>
          <div className="justify-center  flex">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
