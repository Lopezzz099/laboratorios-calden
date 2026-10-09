"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { boton } from "@/lib/ui";
import { enlaceProfesionales, estaActivo, navPrincipal, navSecundaria, site } from "@/lib/site";

const ID_MENU = "menu-movil";

function IconoMenu({ abierto }: { abierto: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      {abierto ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

const claseEnlaceEscritorio =
  "relative flex min-h-11 items-center px-3 text-base font-medium no-underline after:absolute after:inset-x-3 after:bottom-1.5 after:h-[3px] after:rounded-full after:bg-current after:transition-opacity";

export function Header() {
  const pathname = usePathname();
  const esInicio = pathname === "/";
  const [abierto, setAbierto] = useState(false);
  const [rutaAnterior, setRutaAnterior] = useState(pathname);
  const [arriba, setArriba] = useState(true);
  const botonMenu = useRef<HTMLButtonElement>(null);
  const botonCerrar = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const estabaAbierto = useRef(false);

  // Se cierra al cambiar de ruta (se ajusta durante el render, sin efecto).
  if (rutaAnterior !== pathname) {
    setRutaAnterior(pathname);
    setAbierto(false);
  }

  const cerrar = useCallback(() => setAbierto(false), []);

  // Transparencia sobre el hero: solo en escritorio y mientras no se scrollea.
  useEffect(() => {
    const alScroll = () => setArriba(window.scrollY < 24);
    alScroll();
    window.addEventListener("scroll", alScroll, { passive: true });
    return () => window.removeEventListener("scroll", alScroll);
  }, []);

  // Escape, bloqueo de scroll, trampa de foco y cierre al pasar a escritorio.
  useEffect(() => {
    if (!abierto) {
      if (estabaAbierto.current) botonMenu.current?.focus();
      estabaAbierto.current = false;
      return;
    }
    estabaAbierto.current = true;
    botonCerrar.current?.focus();
    document.documentElement.style.overflow = "hidden";

    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        cerrar();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const foco = panel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (foco.length === 0) return;
      const primero = foco[0];
      const ultimo = foco[foco.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 70rem)");
    const alCambiarAncho = () => {
      if (mq.matches) cerrar();
    };

    document.addEventListener("keydown", alTeclear);
    mq.addEventListener("change", alCambiarAncho);
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", alTeclear);
      mq.removeEventListener("change", alCambiarAncho);
    };
  }, [abierto, cerrar]);

  const sobreHero = esInicio && arriba;
  const activoFarma = estaActivo(pathname, "/farmacovigilancia");

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-(--z-header) border-b transition-colors duration-300",
          "border-linea bg-fondo text-tinta",
          sobreHero ? "lg:border-fondo/0 lg:bg-baya-900/0 lg:text-fondo" : "",
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-[84rem] items-stretch justify-between gap-3 pl-gutter lg:h-20 lg:pr-gutter">
          <Link href="/" className="flex items-center rounded-sm" aria-label={`${site.nombre}, ir al inicio`}>
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden lg:flex lg:items-center">
            <ul className="flex items-center gap-1">
              {navPrincipal.map((item) => {
                const activo = estaActivo(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={activo ? "page" : undefined}
                      className={`${claseEnlaceEscritorio} ${
                        activo ? "font-semibold after:opacity-100" : "after:opacity-0 hover:after:opacity-60"
                      }`}
                    >
                      {item.etiqueta}
                    </Link>
                  </li>
                );
              })}
              <li className="hidden xl:block">
                <Link
                  href="/farmacovigilancia"
                  aria-current={activoFarma ? "page" : undefined}
                  className={`${claseEnlaceEscritorio} ${
                    activoFarma ? "font-semibold after:opacity-100" : "after:opacity-0 hover:after:opacity-60"
                  }`}
                >
                  Efectos adversos
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-stretch gap-2 lg:gap-3">
            <div className="flex items-center max-[22.5rem]:hidden lg:ml-4 lg:border-l lg:border-current/25 lg:pl-5">
              <Link
                href={enlaceProfesionales.href}
                aria-current={estaActivo(pathname, enlaceProfesionales.href) ? "page" : undefined}
                className={boton("primario", "compacto", sobreHero ? "lg:bg-fondo lg:border-fondo lg:text-baya-900 lg:hover:bg-ocre-200 lg:hover:border-ocre-200" : "")}
              >
                <span className="lg:hidden">Profesionales</span>
                <span className="hidden lg:inline">{enlaceProfesionales.etiqueta}</span>
              </Link>
            </div>
            <button
              ref={botonMenu}
              type="button"
              className="flex w-16 flex-col items-center justify-center gap-0.5 border-l border-linea bg-fondo text-tinta lg:hidden"
              aria-expanded={abierto}
              aria-controls={ID_MENU}
              onClick={() => setAbierto((v) => !v)}
            >
              <IconoMenu abierto={false} />
              <span className="text-sm font-semibold leading-none">Menú</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fondo oscuro detrás del panel */}
      <div
        aria-hidden="true"
        onClick={cerrar}
        className={[
          "fixed inset-0 z-(--z-menu-fondo) bg-tinta/70 transition-opacity duration-300 lg:hidden",
          abierto ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Panel lateral que entra desde la derecha */}
      <div
        id={ID_MENU}
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        inert={!abierto}
        className={[
          "fixed bottom-0 right-0 top-0 z-(--z-menu) flex w-[min(24rem,92vw)] flex-col overflow-y-auto bg-fondo text-tinta shadow-panel transition-transform duration-300 ease-salida lg:hidden",
          abierto ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-16 shrink-0 items-stretch justify-between border-b border-linea pl-6">
          <p className="flex items-center font-display text-lg font-semibold">Menú</p>
          <button
            ref={botonCerrar}
            type="button"
            onClick={cerrar}
            className="flex w-[4.25rem] flex-col items-center justify-center gap-0.5 border-l border-linea bg-fondo text-tinta"
          >
            <IconoMenu abierto />
            <span className="text-sm font-semibold leading-none">Cerrar</span>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-8 px-6 py-6">
          <Link href={enlaceProfesionales.href} className={boton("primario", "lg", "w-full")}>
            {enlaceProfesionales.etiqueta}
          </Link>

          <nav aria-label="Principal, móvil">
            <ul className="flex flex-col">
              {navPrincipal.map((item) => {
                const activo = estaActivo(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-linea first:border-t">
                    <Link
                      href={item.href}
                      aria-current={activo ? "page" : undefined}
                      className={[
                        "flex min-h-14 items-center justify-between gap-3 px-3 text-lg no-underline",
                        activo ? "bg-baya-100 font-semibold text-baya-900" : "font-medium text-tinta",
                      ].join(" ")}
                    >
                      {item.etiqueta}
                      {activo ? <span className="text-sm font-semibold">Estás acá</span> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-label="Más información">
            <p className="mb-2 font-display text-lg font-semibold">Más información</p>
            <ul className="flex flex-col">
              {navSecundaria.map((item) => {
                const activo = estaActivo(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={activo ? "page" : undefined}
                      className={[
                        "flex min-h-12 items-center px-3 text-base no-underline",
                        activo ? "bg-baya-100 font-semibold text-baya-900" : "text-tinta-suave",
                      ].join(" ")}
                    >
                      {item.etiqueta}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="border-t border-linea px-6 py-4 text-sm text-tinta-suave">
          Sitio de demostración. Empresa y productos ficticios.
        </p>
      </div>
    </>
  );
}
