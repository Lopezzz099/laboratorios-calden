"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { areas, getArea, type AreaSlug } from "@/lib/areas";
import type { Forma, Producto } from "@/lib/products";
import { boton, campo, etiqueta } from "@/lib/ui";
import { Flecha } from "@/components/ui/Flecha";

type Props = { productos: Producto[]; formas: Forma[] };

function normalizar(t: string): string {
  return t
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

export function ProductCatalog({ productos, formas }: Props) {
  const params = useSearchParams();
  const areasConProductos = useMemo(
    () => areas.filter((a) => productos.some((p) => p.area === a.slug)),
    [productos],
  );

  const [busqueda, setBusqueda] = useState(() => params.get("q") ?? "");
  const [area, setArea] = useState<AreaSlug | "">(() => {
    const inicial = params.get("area");
    return areasConProductos.find((a) => a.slug === inicial)?.slug ?? "";
  });
  const [forma, setForma] = useState<Forma | "">(() => {
    const inicial = params.get("forma");
    return formas.find((f) => f === inicial) ?? "";
  });

  // La URL refleja los filtros, así se pueden compartir y volver con el botón Atrás.
  useEffect(() => {
    const url = new URL(window.location.href);
    const sincronizar = (clave: string, valor: string) => {
      if (valor) url.searchParams.set(clave, valor);
      else url.searchParams.delete(clave);
    };
    sincronizar("q", busqueda.trim());
    sincronizar("area", area);
    sincronizar("forma", forma);
    window.history.replaceState(window.history.state, "", url);
  }, [busqueda, area, forma]);

  const filtrados = useMemo(() => {
    const q = normalizar(busqueda);
    return productos.filter((p) => {
      if (area && p.area !== area) return false;
      if (forma && p.forma !== forma) return false;
      if (!q) return true;
      const texto = normalizar(`${p.nombre} ${getArea(p.area)?.nombre ?? ""} ${p.forma} ${p.presentacion}`);
      return texto.includes(q);
    });
  }, [productos, busqueda, area, forma]);

  const hayFiltros = busqueda !== "" || area !== "" || forma !== "";
  const limpiar = () => {
    setBusqueda("");
    setArea("");
    setForma("");
  };

  return (
    <div>
      <form
        role="search"
        aria-label="Buscar productos"
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-6 md:grid-cols-[1.4fr_1fr_1fr]"
      >
        <div>
          <label htmlFor="buscar" className={campo.etiqueta}>
            Buscar por nombre
          </label>
          <input
            id="buscar"
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Por ejemplo, Aldivia…"
            autoComplete="off"
            className={campo.control}
          />
        </div>
        <div>
          <label htmlFor="area" className={campo.etiqueta}>
            Área terapéutica
          </label>
          <select
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value as AreaSlug | "")}
            className={campo.control}
          >
            <option value="">Todas las áreas</option>
            {areasConProductos.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="forma" className={campo.etiqueta}>
            Forma farmacéutica
          </label>
          <select
            id="forma"
            value={forma}
            onChange={(e) => setForma(e.target.value as Forma | "")}
            className={campo.control}
          >
            <option value="">Todas las formas</option>
            {formas.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p role="status" aria-live="polite" className="text-tinta-suave">
          {filtrados.length === productos.length
            ? `Mostrando los ${productos.length} productos`
            : `Mostrando ${filtrados.length} de ${productos.length} productos`}
        </p>
        {hayFiltros ? (
          <button type="button" onClick={limpiar} className={boton("secundario")}>
            Limpiar filtros
          </button>
        ) : null}
      </div>

      {filtrados.length === 0 ? (
        <div className="mt-8 rounded-card border-2 border-linea bg-superficie p-8">
          <h2 className="text-xl">No encontramos productos con esos filtros</h2>
          <p className="mt-3 max-w-xl text-tinta-suave">
            Probá con otra palabra o quitá algún filtro. Si buscás un producto bajo receta, está en la zona de
            profesionales.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button type="button" onClick={limpiar} className={boton("primario")}>
              Limpiar filtros
            </button>
            <Link href="/profesionales" className={boton("secundario")}>
              Ir a la zona de profesionales
            </Link>
          </div>
        </div>
      ) : (
        <ul className="mt-8 grid border-t border-linea lg:grid-cols-2 lg:gap-x-12">
          {filtrados.map((p) => (
            <li key={p.slug} className="border-b border-linea">
              <Link
                href={`/productos/${p.slug}`}
                className="group flex min-h-28 items-center justify-between gap-6 py-6 no-underline"
              >
                <span>
                  <span className="block font-display text-xl font-semibold group-hover:underline group-hover:underline-offset-4">
                    {p.nombre}
                  </span>
                  <span className="mt-1 block text-tinta-suave">
                    {getArea(p.area)?.nombre} · {p.forma}
                  </span>
                  <span className="mt-1 block text-sm text-tinta-suave">{p.presentacion}</span>
                  <span className={`${etiqueta} mt-3`}>{p.categoria}</span>
                </span>
                <Flecha className="size-6 shrink-0 text-baya-700 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
