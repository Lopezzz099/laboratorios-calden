import type { ReactNode } from "react";
import { contenedor, superficie } from "@/lib/ui";

type Props = {
  tono?: keyof typeof superficie;
  id?: string;
  /** Id del título que nombra la sección (para lectores de pantalla). */
  titulo?: string;
  className?: string;
  contenedorClassName?: string;
  children: ReactNode;
};

export function Section({ tono = "claro", id, titulo, className, contenedorClassName, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={titulo}
      data-tono={tono === "oscuro" ? "oscuro" : undefined}
      className={`py-seccion ${superficie[tono]} ${className ?? ""}`}
    >
      <div className={`${contenedor} ${contenedorClassName ?? ""}`}>{children}</div>
    </section>
  );
}

type TituloProps = {
  id: string;
  children: ReactNode;
  nivel?: 2 | 3;
  className?: string;
};

export function TituloSeccion({ id, children, nivel = 2, className }: TituloProps) {
  const Tag = nivel === 2 ? "h2" : "h3";
  return (
    <Tag id={id} className={`text-2xl ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
