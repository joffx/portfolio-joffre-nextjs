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

  return {
    ip: headers().get("x-real-ip") ?? "Unknown",
    userAgent: userAgent,
    device: `${result.device.model || "Unknown"} (${result.os.name || "Unknown"})`,
  };
};
