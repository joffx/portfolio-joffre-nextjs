"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { FolderOpenIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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

  return (
    <div className="px-4 py-5">
      <div
        className={`transition-opacity duration-500 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <Card className="px-4 py-3 bg-muted rounded-3xl flex space-x-4">
          <div className="pl-2">
            <HomeIcon className="w-6 h-6" />
          </div>
          <div className="pl-2">
            <FolderOpenIcon className="w-6 h-6" />
          </div>
        </Card>
      </div>
      <div className="pt-4">
        <Avatar className="w-16 h-16 mb-2">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/52367350"
            alt="@shadcn"
          />
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-xl font-bold pb-2">¡Hola, Soy Joffre Veloz!</div>
      {/* <div className="text-justify text-muted-foreground">
        Mi nombre es Joffr Veloz y soy un desarrollador de software apasionado
        por el área del back-end, donde he trabajado con diferentes tecnologías
        y lenguajes de programación. Me gusta enfrentar nuevos retos y aprender
        constantemente de las mejores prácticas y tendencias del sector. Mi
        objetivo es crear soluciones eficientes, escalables y seguras que
        aporten valor a los usuarios y clientes.
      </div> */}
    
      
    </div>
  );
}
