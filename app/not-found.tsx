import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { boton } from "@/lib/ui";

export const metadata: Metadata = { title: "Página no encontrada" };

export default function NoEncontrada() {
  return (
    <Section className="pt-40">
      <div className="max-w-2xl">
        <h1 className="text-3xl">No encontramos esa página</h1>
        <p className="mt-5 text-lg text-tinta-suave">
          La dirección puede estar mal escrita o la página ya no existe. Probá volver al inicio o ver los productos.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className={boton("primario", "lg")}>
            Ir al inicio
          </Link>
          <Link href="/productos" className={boton("secundario", "lg")}>
            Ver productos
          </Link>
        </div>
      </div>
    </Section>
  );
}
