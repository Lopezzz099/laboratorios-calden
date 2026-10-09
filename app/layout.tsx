import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, Literata } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { getSiteUrl, site } from "@/lib/site";

// Atkinson Hyperlegible Next: diseñada para lectura con baja visión.
const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-atkinson",
  display: "swap",
});

// Literata: serif pensada para lectura prolongada en pantalla.
const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: `${site.nombre} · Sitio de demostración`, template: `%s · ${site.nombre}` },
  description: site.descripcion,
  applicationName: site.nombre,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.nombre,
    title: site.nombre,
    description: site.descripcion,
  },
};

export const viewport: Viewport = {
  themeColor: "#fcf9fa",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" data-scroll-behavior="smooth" className={`${atkinson.variable} ${literata.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenido"
          className="fixed left-4 top-4 z-(--z-saltar) -translate-y-24 rounded-full border-2 border-fondo bg-baya-900 px-5 py-3 font-semibold text-fondo focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
