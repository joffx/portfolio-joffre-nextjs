"use client";
import Link from "next/link";
import {
  GlobeIcon,
  HomeIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Card } from "../ui/card";

export default function NavbarHome() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <Card className="m-3 px-6 py-3 bg-background/80 backdrop-blur-md rounded-3xl w-full max-w-sm">
        <div className="flex items-center justify-between">
          {/* Izquierda - Home */}
          <Link
            href="/"
            aria-label="Home"
            className="transition hover:text-primary"
          >
            <HomeIcon size={24} />
          </Link>

          {/* Derecha - otros íconos */}
          <div className="flex gap-6">
            <Link
              href="https://www.fastery.dev/"
              target="_blank"
              aria-label="Website"
              className="transition hover:text-primary"
            >
              <GlobeIcon size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/joffre.veloz/"
              target="_blank"
              aria-label="Instagram"
              className="transition hover:text-primary"
            >
              <InstagramIcon size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joffre-veloz"
              target="_blank"
              aria-label="LinkedIn"
              className="transition hover:text-primary"
            >
              <LinkedinIcon size={24} />
            </Link>
          </div>
        </div>
      </Card>
    </nav>
  );
}
