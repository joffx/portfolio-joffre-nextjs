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

  // Aquí se extrae y formatea la información del dispositivo
  const device = result.device.model || `${result.os.name || "Unknown"} ${result.os.version || ""}`;

  return {
    ip: headers().get("x-real-ip") ?? "Unknown",
    userAgent: userAgent,
    device: device,
  };
};
