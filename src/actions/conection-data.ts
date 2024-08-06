"use server";

import { headers } from "next/headers";
import UAParser from 'ua-parser-js';

export const getDataUser = async (): Promise<{
  ip: string;
  userAgent: string;
  device: string;
}> => {
  const userAgent = headers().get("user-agent") ?? "";
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  // Formatear el dispositivo y el sistema operativo
  const device = result.device.model ? result.device.model : "";
  const os = result.os.name ? `${result.os.name} ${result.os.version || ""}` : "";

  return {
    ip: headers().get("x-real-ip") ?? "",
    userAgent: userAgent,
    device: `${device} (${os})`,
  };
};
