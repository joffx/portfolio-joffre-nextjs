import * as React from "react";
import { BriefcaseBusinessIcon, MailIcon, PhoneCallIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function ContactarJoffre() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="flex" variant={"secondary"}>
          <BriefcaseBusinessIcon className="w-6 h-6 my-auto" />
          <span className="my-auto">Contactar a Joffre</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Hablemos de tu empresa</DrawerTitle>
            <DrawerDescription>
              Tu idea es lo más importante, cuéntame y juntos la haremos
              realidad
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-0 space-y-4">
            <ul className="flex items-center space-x-4 list-none p-0">
              <li>
                <PhoneCallIcon className="w-5 h-5" />
              </li>
              <li className="w-1 h-1 bg-gray-500 rounded-full"></li>
              <li className="text-sm font-semibold">+593 98 646 3997</li>
            </ul>
            <ul className="flex items-center space-x-4 list-none p-0">
              <li>
                <MailIcon className="w-5 h-5" />
              </li>
              <li className="w-1 h-1 bg-gray-500 rounded-full"></li>
              <li className="text-sm font-semibold">
                joffre.veloz@fastery.dev
              </li>
            </ul>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" className="mb-4">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
