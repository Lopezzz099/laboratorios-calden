"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

type Props = { src: string; poster: string };

type ConexionConAhorro = { connection?: { saveData?: boolean } };

/**
 * Video de fondo del hero. La foto de respaldo la pone el servidor; el video
 * solo se monta si la persona no pidió reducir el movimiento ni activó el
 * ahorro de datos.
 */
const CONSULTA = "(prefers-reduced-motion: reduce)";

function suscribir(avisar: () => void) {
  const mq = window.matchMedia(CONSULTA);
  mq.addEventListener("change", avisar);
  return () => mq.removeEventListener("change", avisar);
}

function puedeReproducir(): boolean {
  const ahorro = (navigator as Navigator & ConexionConAhorro).connection?.saveData === true;
  return !window.matchMedia(CONSULTA).matches && !ahorro;
}

export function HeroVideo({ src, poster }: Props) {
  // En el servidor siempre es false: el HTML inicial solo trae la foto.
  const activo = useSyncExternalStore(suscribir, puedeReproducir, () => false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = video.current;
    if (!activo || !el) return;
    // React no refleja `muted` como atributo en el HTML del servidor: se asigna como propiedad.
    el.muted = true;
    el.defaultMuted = true;
    // Si el navegador no deja reproducir (pestaña en segundo plano, por ejemplo),
    // queda la foto de respaldo y se reintenta cuando la pestaña se vuelve visible.
    const intentar = () => {
      if (!document.hidden && el.paused) el.play().catch(() => undefined);
    };
    intentar();
    document.addEventListener("visibilitychange", intentar);
    return () => document.removeEventListener("visibilitychange", intentar);
  }, [activo]);

  if (!activo) return null;

  return (
    <video
      ref={video}
      className="absolute inset-0 size-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
