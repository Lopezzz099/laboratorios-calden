import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.nombre}: sitio de demostración de un laboratorio farmacéutico ficticio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#4a1230",
          color: "#fbf6f8",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="88" height="88" viewBox="0 0 40 40" fill="none" stroke="#fbf6f8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 3.5c9.6 6 11.6 18.2 0 33-11.6-14.8-9.6-27 0-33Z" />
            <path d="M20 12v24" />
            <path d="m20 21 5.2-4.2M20 27.5l-5-4" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 40, lineHeight: 1.1 }}>
            <span style={{ fontSize: 64, fontWeight: 700 }}>Caldén</span>
            <span>Laboratorios</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>Medicamentos hechos con cuidado, controlados paso a paso.</div>
          <div style={{ fontSize: 30, color: "#f0c978" }}>Sitio de demostración · empresa ficticia</div>
        </div>
      </div>
    ),
    size,
  );
}
