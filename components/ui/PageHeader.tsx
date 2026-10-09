import Link from "next/link";
import type { ReactNode } from "react";
import { contenedor, enlace } from "@/lib/ui";

type Migas = { href: string; etiqueta: string }[];

type Props = {
  titulo: string;
  bajada?: string;
  migas?: Migas;
  children?: ReactNode;
};

/** Cabecera de las páginas interiores. El único h1 de cada página. */
export function PageHeader({ titulo, bajada, migas, children }: Props) {
  return (
    <div className="border-b border-linea bg-superficie pb-10 pt-24 lg:pb-12 lg:pt-32">
      <div className={contenedor}>
        {migas && migas.length > 0 ? (
          <nav aria-label="Ruta de navegación" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li>
                <Link href="/" className={enlace}>
                  Inicio
                </Link>
              </li>
              {migas.map((m) => (
                <li key={m.href} className="flex items-center gap-x-2">
                  <span aria-hidden="true">/</span>
                  <Link href={m.href} className={enlace}>
                    {m.etiqueta}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <h1 className="max-w-4xl text-3xl">{titulo}</h1>
        {bajada ? <p className="mt-5 max-w-3xl text-lg text-tinta-suave">{bajada}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </div>
  );
}
