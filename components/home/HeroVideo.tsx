"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src: string; poster: string };

type ConexionConAhorro = { connection?: { saveData?: boolean } };

/**
 * Video de fondo del hero. La foto de respaldo la pone el servidor; el video
 * solo se monta si la persona no pidió reducir el movimiento ni activó el
 * ahorro de datos.
 */
export function HeroVideo({ src, poster }: Props) {
  const [activo, setActivo] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ahorro = (navigator as Navigator & ConexionConAhorro).connection?.saveData === true;
    setActivo(!reducir.matches && !ahorro);
    const alCambiar = () => {
      if (reducir.matches) setActivo(false);
    };
    reducir.addEventListener("change", alCambiar);
    return () => reducir.removeEventListener("change", alCambiar);
  }, []);

  useEffect(() => {
    const el = video.current;
    if (!activo || !el) return;
    // React no refleja `muted` como atributo en el HTML del servidor: se asigna como propiedad.
    el.muted = true;
    el.defaultMuted = true;
    el.play().catch(() => setActivo(false));
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
