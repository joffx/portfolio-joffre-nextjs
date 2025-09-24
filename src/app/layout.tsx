import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Joffre Andres Veloz Pazmiño 🧑‍💻 | Desarrollador de Software",
  description:
    "Soy Joffre Andres Veloz Pazmiño, desarrollador de software especializado en crear soluciones digitales innovadoras con Next.js, React y tecnologías modernas.",
  authors: [
    { name: "Joffre Andres Veloz Pazmiño", url: "https://joffre.fastery.dev" },
  ],
  keywords: [
    "Joffre Andres Veloz Pazmiño",
    "Desarrollador de Software",
    "Full Stack Developer",
    "Next.js",
    "React",
    "JavaScript",
    "Innovación Digital",
    "Portafolio",
  ],
  applicationName: "Portafolio de Joffre Andres Veloz Pazmiño",
  creator: "Joffre Andres Veloz Pazmiño",
  publisher: "Joffre Andres Veloz Pazmiño",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    title: "Joffre Andres Veloz Pazmiño 🧑‍💻 | Desarrollador de Software",
    description:
      "Portafolio profesional de Joffre Andres Veloz Pazmiño: desarrollo web, software a medida e innovación digital.",
    url: "https://joffre.fastery.dev",
    siteName: "Joffre Andres Veloz Pazmiño",
    images: [
      {
        url: "https://joffre.fastery.dev/imagen-og.jpg",
        width: 1200,
        height: 630,
        alt: "Joffre Andres Veloz Pazmiño",
      },
    ],
    locale: "es_ES",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    site: "@joffredev", // aquí pondrías tu user real si tienes
    creator: "@joffredev",
    title: "Joffre Andres Veloz Pazmiño 🧑‍💻 | Desarrollador de Software",
    description:
      "Desarrollador de software especializado en soluciones digitales modernas y escalables.",
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
  category: "Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={["dark"]}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative h-screen w-screen">
            <GridPattern
              width={40}
              height={40}
              x={0}
              y={0}
              className={cn(
                "absolute inset-0 h-screen w-screen",
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
              )}
            />
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </div>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
