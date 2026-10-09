"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import type { DivIcon, Map as MapaLeaflet, Marker } from "leaflet";
import { ubicaciones, type TipoUbicacion, type Ubicacion } from "@/lib/locations";
import { aviso } from "@/lib/ui";

type Estado = "cargando" | "listo" | "error";

const tipos: TipoUbicacion[] = ["Planta de producción", "Centro de distribución", "Oficina"];
const TITULOS_GRUPO: Record<TipoUbicacion, string> = {
  "Planta de producción": "Planta de producción",
  "Centro de distribución": "Centros de distribución",
  Oficina: "Oficinas",
};
const letra: Record<TipoUbicacion, string> = {
  "Planta de producción": "P",
  "Centro de distribución": "D",
  Oficina: "O",
};

type Modulo = typeof import("leaflet");

function crearIcono(L: Modulo, u: Ubicacion, activo: boolean): DivIcon {
  return L.divIcon({
    className: "",
    html: `<div class="marcador-calden" data-activo="${activo}" aria-hidden="true">${letra[u.tipo]}</div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -22],
  });
}

function reducirMovimiento(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Lista + mapa. La lista funciona sola: si Leaflet o los mosaicos de
 * OpenStreetMap no cargan, se sigue pudiendo elegir una sede y leer sus datos.
 */
export function PlantsMap() {
  const [seleccion, setSeleccion] = useState<string>(ubicaciones[0].id);
  const [estado, setEstado] = useState<Estado>("cargando");
  const [mosaicosFallan, setMosaicosFallan] = useState(false);
  const contenedor = useRef<HTMLDivElement>(null);
  const mapa = useRef<MapaLeaflet | null>(null);
  const leaflet = useRef<Modulo | null>(null);
  const marcadores = useRef<Map<string, Marker>>(new Map());

  // Carga de Leaflet con import() dinámico, solo en el cliente.
  useEffect(() => {
    let cancelado = false;
    const marcadoresActuales = marcadores.current;

    (async () => {
      try {
        const L = (await import("leaflet")).default as unknown as Modulo;
        if (cancelado || !contenedor.current) return;
        leaflet.current = L;

        const m = L.map(contenedor.current, { scrollWheelZoom: false, zoomControl: true }).setView([-33.4, -62.2], 5);
        const capa = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Colaboradores de OpenStreetMap</a>',
        }).addTo(m);
        capa.on("tileerror", () => setMosaicosFallan(true));

        for (const u of ubicaciones) {
          const marcador = L.marker([u.lat, u.lng], {
            icon: crearIcono(L, u, u.id === ubicaciones[0].id),
            title: u.nombre,
            keyboard: true,
          }).addTo(m);
          marcador.bindPopup(`<strong>${u.nombre}</strong><br>${u.ciudad}`);
          marcador.on("click", () => setSeleccion(u.id));
          marcadoresActuales.set(u.id, marcador);
        }

        mapa.current = m;
        setEstado("listo");
      } catch {
        if (!cancelado) setEstado("error");
      }
    })();

    return () => {
      cancelado = true;
      mapa.current?.remove();
      mapa.current = null;
      marcadoresActuales.clear();
    };
  }, []);

  // La lista controla el mapa.
  useEffect(() => {
    const L = leaflet.current;
    const m = mapa.current;
    if (estado !== "listo" || !L || !m) return;
    for (const u of ubicaciones) marcadores.current.get(u.id)?.setIcon(crearIcono(L, u, u.id === seleccion));
    const actual = ubicaciones.find((u) => u.id === seleccion);
    if (!actual) return;
    const animar = !reducirMovimiento();
    m.flyTo([actual.lat, actual.lng], 10, { animate: animar, duration: animar ? 1 : 0 });
    marcadores.current.get(actual.id)?.openPopup();
  }, [seleccion, estado]);

  const elegida = ubicaciones.find((u) => u.id === seleccion) ?? ubicaciones[0];

  return (
    <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[1fr_1.5fr] lg:grid-rows-[auto_1fr]">
      {/* En pantallas chicas el mapa va primero y queda fijo mientras se recorre la lista. */}
      <div className="sticky top-16 z-10 order-1 -mx-gutter bg-fondo px-gutter pb-3 pt-3 lg:static lg:col-start-2 lg:row-start-1 lg:mx-0 lg:p-0">
        <div
          ref={contenedor}
          role="region"
          aria-label="Mapa de plantas, centros de distribución y oficinas"
          className="relative isolate z-0 h-56 overflow-hidden rounded-card border-2 border-linea bg-superficie sm:h-72 lg:h-[34rem]"
        />
        <div aria-live="polite" className="mt-3 space-y-3 empty:mt-0">
          {estado === "cargando" ? <p className="text-tinta-suave">Cargando el mapa…</p> : null}
          {estado === "error" ? (
            <p className={aviso.error}>
              No pudimos cargar el mapa. Podés seguir usando la lista: abajo están los datos de cada sede.
            </p>
          ) : null}
          {mosaicosFallan ? (
            <p className={aviso.error}>
              Algunas partes del mapa no se cargaron. Puede ser un problema de conexión. La lista sigue funcionando.
            </p>
          ) : null}
        </div>
      </div>

      <div className="order-2 lg:col-start-2 lg:row-start-2">
        <article className="rounded-card border-2 border-baya-700 bg-fondo p-6" aria-labelledby="sede-elegida">
          <h3 id="sede-elegida" className="text-xl">
            {elegida.nombre}
          </h3>
          <p className="mt-1 font-semibold text-baya-700">{elegida.tipo}</p>
          <p className="mt-3">{elegida.descripcion}</p>
          <p className="mt-3 text-tinta-suave">
            {elegida.ciudad}. {elegida.direccion}.
          </p>
        </article>
        <p className="mt-4 text-sm text-tinta-suave">
          Ubicaciones de ejemplo, aproximadas a cada ciudad. El mapa se carga desde OpenStreetMap solo en esta página.
        </p>
      </div>

      <div className="order-3 lg:col-start-1 lg:row-span-2 lg:row-start-1">
        <h2 className="text-xl">Elegí una sede</h2>
        <p className="mt-2 text-tinta-suave">Al elegir una, el mapa se acerca a su ubicación.</p>
        <div className="mt-6 space-y-8">
          {tipos.map((tipo) => {
            const items = ubicaciones.filter((u) => u.tipo === tipo);
            return (
              <div key={tipo}>
                <h3 className="font-display text-lg font-semibold">{TITULOS_GRUPO[tipo]}</h3>
                <ul className="mt-2 border-t border-linea">
                  {items.map((u) => {
                    const activo = u.id === seleccion;
                    return (
                      <li key={u.id} className="border-b border-linea">
                        <button
                          type="button"
                          aria-pressed={activo}
                          onClick={() => setSeleccion(u.id)}
                          className={`flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 px-3 py-3 text-left ${
                            activo ? "bg-baya-100 font-semibold" : "bg-fondo hover:bg-superficie"
                          }`}
                        >
                          <span>
                            <span className="block">{u.nombre}</span>
                            <span className="block text-sm font-normal text-tinta-suave">{u.ciudad}</span>
                          </span>
                          {activo ? <span className="text-sm font-semibold text-baya-700">Elegida</span> : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
