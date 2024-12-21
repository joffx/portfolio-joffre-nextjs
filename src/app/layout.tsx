import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joffre Andres Veloz Pazmiño 🧑‍💻",
  description: "Joffre Andres Veloz Pazmiño 🧑‍💻",
  authors: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["dark"]}
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative h-screen w-screen">
            <GridPattern
              width={40}
              height={40}
              x={0}
              y={0}
              // strokeDasharray={"4 2"}
              className={cn(
                "absolute inset-0 h-screen w-screen",
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
              )}
            />
            {children}
          </div>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
