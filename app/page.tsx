"use client";
import { ContactarJoffre } from "@/components/drawer-demo";
import NavbarHome from "@/components/home/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    <div className="min-h-screen px-2">
      {/* <div className="min-h-screen bg-transparent bg-grid-pattern bg-grid"> */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="px-4 py-5 max-w-[59rem] mx-auto">
          <NavbarHome />
          <div className="py-5 flex my-auto pt-16">
            {/* <div className="py-5 flex my-auto"> */}
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
                CEO & Founder at @FasteryDev | Full Stack Developer | Product
                Strategy | Digital Innovation
              </div>
            </div>
          </div>
          <p className="text-justify text-muted-foreground">
            Apasionado por la tecnología, la innovación y el desarrollo de
            software. Soy Fundador y CEO de FasteryDev, LLC (EE. UU.) y de
            FASTERYSOLUTIONS S.A.S (Ecuador), donde lidero la visión de
            producto, la estrategia empresarial y la creación de soluciones
            digitales que impulsan el crecimiento.
            <br />
            <br />
            Con más de 3 años de experiencia en desarrollo de software, me
            especializo en arquitectura de microservicios, gestión de productos
            digitales y el desarrollo de aplicaciones modernas utilizando
            <Badge href="https://flutter.dev/">
              <Image
                alt="Flutter logomark"
                src="/icons/flutter-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Flutter
            </Badge>
            ,{" "}
            <Badge href="https://nestjs.com/">
              <Image
                alt="Nest.js logomark"
                src="/icons/nest-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Nest.js
            </Badge>{" "}
            y{" "}
            <Badge href="https://nextjs.org">
              <Image
                alt="Next.js logomark"
                src="/icons/next-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Next.js
            </Badge>
            .
            <br />
            <br />
            Además, participo activamente en comunidades como
            <Badge href="https://gdg.community.dev/gdg-guayaquil/">
              <Image
                alt="GDG Ecuador logomark"
                src="/icons/gdg-logo.png"
                className="!mr-1"
                width="16"
                height="16"
              />
              GDG Ecuador
            </Badge>
            y
            <Badge href="https://gdg.community.dev/gdg-guayaquil/">
              <Image
                alt="GDG Ecuador logomark"
                src="/icons/gdg-logo.png"
                className="!mr-1"
                width="16"
                height="16"
              />
              GDG Guayaquil
            </Badge>
            , compartiendo conocimientos y construyendo redes con otros
            profesionales de la industria.
            <br />
            <br />
            Editado: 23/09/2025
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
          <footer className="pb-2">
            <hr className="my-3 border-gray-300 sm:mx-auto lg:my-2.5" />
            <div className="grid xl:grid-cols-3 grid-cols-1 text-xs gap-1 items-center">
              <div className=" grid grid-cols-1 order-2 xl:order-1 text-center xl:text-start">
                <Link
                  href="https://fastery.dev"
                  target="_blank"
                  className=" items-center gap-2 hover:opacity-80 transition"
                >
                  <span className="text-xs font-medium">Powered by</span>
                  <Image
                    className="mx-auto xl:mx-0"
                    src="/logo-fastery.svg"
                    alt="logo-fastery"
                    width={95}
                    height={25}
                  />
                </Link>
              </div>
              <div className="text-center order-1 xl:order-2">
                Privacidad | Legal | Cookies
              </div>
              <div className="order-3 xl:order-3 text-center xl:text-end">
                v1.3.0
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
