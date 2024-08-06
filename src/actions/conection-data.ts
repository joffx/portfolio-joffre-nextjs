"use server";

import { headers } from "next/headers";
import UAParser from 'ua-parser-js';

export const getDataUser = async (): Promise<{
  ip: string;
  userAgent: string;
  device: string;
}> => {
  const userAgent = headers().get("user-agent") ?? "Unknown";
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  // Formatear el dispositivo y el sistema operativo
  const device = result.device.model ? result.device.model : "Unknown Device";
  const os = result.os.name ? `${result.os.name} ${result.os.version || ""}` : "Unknown OS";

  return {
    ip: headers().get("x-real-ip") ?? "Unknown",
    userAgent: userAgent,
    device: `${device} (${os})`,
  };
};
