import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/ui/Section";
import { Flecha } from "@/components/ui/Flecha";
import { NewsCard } from "@/components/news/NewsCard";
import { areas } from "@/lib/areas";
import { areasConProductosPublicos } from "@/lib/products";
import { cifras } from "@/lib/company";
import { noticias } from "@/lib/news";
import { boton, enlace } from "@/lib/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.nombre} · Sitio de demostración de un laboratorio farmacéutico` },
  description:
    "Laboratorios Caldén es una empresa ficticia con sede en Buenos Aires. Sitio de demostración: investigación, calidad, productos de venta libre y zona de profesionales.",
  alternates: { canonical: "/" },
};

const valor = [
  {
    titulo: "Investigamos",
    texto: "Un equipo científico trabaja con universidades argentinas en 24 programas, cada uno en una etapa distinta.",
    href: "/investigacion",
    enlace: "Ver cómo investigamos",
  },
  {
    titulo: "Fabricamos",
    texto: "Una planta en Pilar produce cada lote con procedimientos escritos y una revisión en cada paso.",
    href: "/calidad",
    enlace: "Ver cómo controlamos",
  },
  {
    titulo: "Escuchamos",
    texto: "Si usaste un producto nuestro y notaste algo, podés contárnoslo. Cada reporte lo lee una persona.",
    href: "/farmacovigilancia",
    enlace: "Reportar un efecto adverso",
  },
];

export default function Inicio() {
  const conPublicos = areasConProductosPublicos();
  const destacadas = [...noticias].sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 3);

  return (
    <>
      <Hero />

      <Section titulo="valor-titulo">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 id="valor-titulo" className="text-3xl">
              Lo que hacemos, sin vueltas
            </h2>
            <p className="mt-5 max-w-sm text-tinta-suave">
              Investigamos, fabricamos y escuchamos. Cada línea te lleva al detalle.
            </p>
          </div>
          <ul className="divide-y divide-linea border-y border-linea">
            {valor.map((v) => (
              <li key={v.titulo} className="grid gap-3 py-8 sm:grid-cols-[13rem_1fr] sm:gap-10">
                <h3 className="text-xl">{v.titulo}</h3>
                <div>
                  <p>{v.texto}</p>
                  <p className="mt-4">
                    <Link href={v.href} className={`${enlace} inline-flex min-h-11 items-center gap-2 font-semibold`}>
                      {v.enlace}
                      <Flecha />
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tono="suave" titulo="areas-titulo">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 id="areas-titulo" className="text-3xl">
              Áreas terapéuticas
            </h2>
            <p className="mt-5 max-w-md text-tinta-suave">
              Trabajamos en seis áreas. Los productos de venta libre y de bienestar están a la vista. El resto del
              portafolio está en la zona de profesionales, como corresponde a los productos bajo receta.
            </p>
            <p className="mt-8">
              <Link href="/productos" className={boton("primario", "lg")}>
                Ver productos
              </Link>
            </p>
          </div>
          <ul className="border-t border-linea">
            {areas.map((a) => {
              const publica = conPublicos.has(a.slug);
              return (
                <li key={a.slug} className="border-b border-linea">
                  <Link
                    href={publica ? `/productos?area=${a.slug}` : "/profesionales"}
                    className="group flex min-h-24 items-center justify-between gap-6 px-1 py-5 no-underline hover:bg-fondo sm:px-4"
                  >
                    <span>
                      <span className="block font-display text-xl font-semibold">{a.nombre}</span>
                      <span className="mt-1 block text-tinta-suave">{a.resumen}</span>
                      {!publica ? (
                        <span className="mt-2 block text-sm font-semibold text-baya-700">Zona de profesionales</span>
                      ) : null}
                    </span>
                    <Flecha className="size-6 shrink-0 text-baya-700 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <Section tono="oscuro" titulo="cifras-titulo">
        <h2 id="cifras-titulo" className="max-w-2xl text-2xl">
          La compañía en cuatro datos
        </h2>
        <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {cifras.map((c) => (
            <div key={c.etiqueta} className="flex flex-col border-t-2 border-ocre-300 pt-5">
              <dt className="order-2 mt-2 text-base">{c.etiqueta}</dt>
              <dd className="order-1 font-display text-4xl font-semibold tabular-nums">{c.valor}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-sm">Cifras de ejemplo, inventadas para esta demostración.</p>
      </Section>

      <Section titulo="noticias-titulo">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="noticias-titulo" className="text-3xl">
            Noticias
          </h2>
          <Link href="/noticias" className={`${enlace} inline-flex min-h-11 items-center gap-2 font-semibold`}>
            Ver todas las noticias
            <Flecha />
          </Link>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <NewsCard noticia={destacadas[0]} destacada />
          <div className="flex flex-col gap-10 divide-y divide-linea">
            {destacadas.slice(1).map((n) => (
              <div key={n.slug} className="pt-10 first:pt-0">
                <NewsCard noticia={n} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tono="suave" titulo="accion-titulo">
        <h2 id="accion-titulo" className="sr-only">
          Accesos rápidos
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-card border-2 border-baya-700 bg-fondo p-6 lg:p-9">
            <h3 className="text-xl">¿Usaste un producto y notaste algo?</h3>
            <p className="mt-4 text-tinta-suave">
              Contanos qué pasó. El formulario tarda unos minutos y no hace falta tener todos los datos. En este sitio
              de demostración no se envía nada.
            </p>
            <p className="mt-auto pt-8">
              <Link href="/farmacovigilancia" className={boton("primario")}>
                Reportar un efecto adverso
              </Link>
            </p>
          </div>
          <div className="flex flex-col rounded-card border-2 border-baya-700 bg-fondo p-6 lg:p-9">
            <h3 className="text-xl">¿Sos profesional de la salud?</h3>
            <p className="mt-4 text-tinta-suave">
              El portafolio completo y el material científico están en una zona aparte. Pedimos una confirmación simple
              antes de mostrarlos.
            </p>
            <p className="mt-auto pt-8">
              <Link href="/profesionales" className={boton("secundario")}>
                Ir a la zona de profesionales
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
