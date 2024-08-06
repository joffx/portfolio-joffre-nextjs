"use server";

import { headers } from "next/headers";

export const getDataUser = async (): Promise<{
  ip: string;
  userAgent: string;
}> => {
  return {
    ip: headers().get("x-real-ip") ?? "Unknown",
    userAgent: headers().get("user-agent") ?? "Unknown",
  };
};
