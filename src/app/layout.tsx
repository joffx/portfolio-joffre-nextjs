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
  description: "Desarrollador de software con experiencia en tecnología y soluciones innovadoras.",
  authors: [
    { name: "Joffre Andres Veloz Pazmiño", url: "https://joffre.fastery.dev" },
  ],
  keywords: [
    "Desarrollo Web",
    "Next.js",
    "JavaScript",
    "React",
    "Tecnología",
  ],
  applicationName: "Joffre's Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: "#000000",
  colorScheme: "dark",
  creator: "Joffre Andres Veloz Pazmiño",
  publisher: "Joffre Andres Veloz Pazmiño",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    title: "Joffre Andres Veloz Pazmiño 🧑‍💻",
    description: "Portafolio de Joffre Andres Veloz Pazmiño",
    url: "https://joffre.fastery.dev",
    siteName: "Joffre's Portfolio",
    images: [
      {
        url: "https://joffre.fastery.dev/imagen-og.jpg",
        width: 1200,
        height: 630,
        alt: "Joffre Andres Veloz Pazmiño",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tu_usuario",
    creator: "@tu_usuario",
    title: "Joffre Andres Veloz Pazmiño 🧑‍💻",
    description: "Portafolio de Joffre Andres Veloz Pazmiño",
    images: ["https://joffre.fastery.dev/imagen-twitter.jpg"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://joffre.fastery.dev",
    languages: {
      es: "https://joffre.fastery.dev/es",
      en: "https://joffre.fastery.dev/en",
    },
  },
  category: "Technology",
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
