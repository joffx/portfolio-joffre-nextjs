"use client";

import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import {
  BriefcaseIcon,
  CoffeeIcon,
  FolderOpenIcon,
  HandshakeIcon,
  HomeIcon,
  NewspaperIcon,
} from "lucide-react";
import { Card } from "../ui/card";

export default function NavbarHome() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        {/* <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 to-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60"> */}
        <div className="flex mx-auto justify-center items-center">
          <Card className="px-5 py-3 bg-muted rounded-3xl grid grid-cols-8 gap-6 m-3">
            <div>
              <HomeIcon className="w-6 h-6" />
            </div>
            <div>
              <FolderOpenIcon className="w-6 h-6" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>
              <CoffeeIcon className="w-6 h-6" />
            </div>
          </Card>
        </div>
      </nav>
    </>
  );
}
