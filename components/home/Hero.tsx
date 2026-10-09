import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "./HeroVideo";
import { boton, contenedor } from "@/lib/ui";

export function Hero() {
  return (
    <section
      data-tono="oscuro"
      aria-labelledby="hero-titulo"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-baya-900 text-fondo"
    >
      <Image
        src="/images/hero.jpg"
        alt="Laboratorio luminoso con estantes de frascos de vidrio y mesadas de trabajo."
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_82%]"
      />
      <HeroVideo src="/video/hero.mp4" poster="/images/hero.jpg" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-baya-900 via-baya-900/80 to-baya-900/45" />

      <div className={`${contenedor} relative pb-16 pt-40 sm:pb-24`}>
        <h1 id="hero-titulo" className="max-w-4xl text-4xl">
          Medicamentos hechos con cuidado, controlados paso a paso.
        </h1>
        <p className="mt-6 max-w-2xl text-lg">
          Somos Laboratorios Caldén. Investigamos, fabricamos y distribuimos desde Buenos Aires. Acá podés ver qué
          hacemos, cómo controlamos cada lote y cómo escribirnos.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/productos" className={boton("claro", "lg")}>
            Ver productos
          </Link>
          <Link href="/farmacovigilancia" className={boton("claroContorno", "lg")}>
            Reportar un efecto adverso
          </Link>
        </div>
        <p className="mt-12 max-w-2xl border-t border-fondo/30 pt-5 text-sm">
          Sitio de demostración: la compañía y los productos son ficticios.
        </p>
      </div>
    </section>
  );
}
