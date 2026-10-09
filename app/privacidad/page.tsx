import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { metadatos } from "@/lib/seo";
import { aviso } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Política de privacidad",
  descripcion: "Política de privacidad de ejemplo de un sitio de demostración.",
  ruta: "/privacidad",
});

export default function Privacidad() {
  return (
    <>
      <PageHeader titulo="Política de privacidad" bajada="Texto de ejemplo para un sitio de demostración. No es un documento legal.">
        <div className={`${aviso.info} max-w-3xl`}>
          <p>Laboratorios Caldén es una empresa ficticia. Este texto sirve para mostrar cómo se vería una política clara.</p>
        </div>
      </PageHeader>
      <Section>
        <div className="prosa">
          <h2>Qué datos recibimos</h2>
          <p>
            Ninguno. Los formularios de este sitio (reporte de efectos adversos y postulación a vacantes) son de
            demostración: validan lo que escribís en tu dispositivo y no lo envían a ningún servidor. Tampoco guardamos
            esos datos en tu navegador.
          </p>

          <h2>Qué guardamos en tu navegador</h2>
          <p>
            Solo la elección que hagas en el aviso de cookies, para no volver a preguntarte. No contiene datos
            personales. Podés borrarla desde “Preferencias de cookies”, en el pie de página.
          </p>

          <h2 id="cookies">Cookies</h2>
          <p>
            Este sitio no usa cookies de terceros ni herramientas de medición. Si en el futuro las sumáramos, se
            activarían solo después de que aceptes. “Aceptar” y “Rechazar” tienen el mismo peso.
          </p>

          <h2>Servicios de terceros</h2>
          <p>
            La página de plantas y oficinas muestra un mapa de OpenStreetMap. Al abrir esa página, tu navegador pide los
            mosaicos del mapa a los servidores de OpenStreetMap, que pueden registrar tu dirección IP según su propia
            política. Ninguna otra página carga recursos de terceros.
          </p>

          <h2>Tus derechos</h2>
          <p>
            En un sitio real, tendrías derecho a conocer, corregir y eliminar tus datos personales. Como acá no
            recibimos ninguno, no hay nada que pedir.
          </p>

          <h2>Contacto</h2>
          <p>Para consultas sobre este texto de ejemplo: privacidad@laboratorioscalden.example.</p>
        </div>
      </Section>
    </>
  );
}
