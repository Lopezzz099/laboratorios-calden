import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { metadatos } from "@/lib/seo";
import { aviso } from "@/lib/ui";

export const metadata = metadatos({
  titulo: "Términos de uso",
  descripcion: "Términos de uso de ejemplo de un sitio de demostración.",
  ruta: "/terminos",
});

export default function Terminos() {
  return (
    <>
      <PageHeader titulo="Términos de uso" bajada="Texto de ejemplo para un sitio de demostración. No es un documento legal.">
        <div className={`${aviso.info} max-w-3xl`}>
          <p>Laboratorios Caldén es una empresa ficticia. Todo lo que ves en este sitio es inventado.</p>
        </div>
      </PageHeader>
      <Section>
        <div className="prosa">
          <h2>Qué es este sitio</h2>
          <p>
            Es una demostración de diseño y desarrollo web. La compañía, los productos, las personas, las noticias, las
            vacantes, las cifras y las ubicaciones son ficticios.
          </p>

          <h2>No es consejo médico</h2>
          <p>
            Nada de lo que se publica acá es consejo médico, diagnóstico ni tratamiento. Los productos no existen. Ante
            cualquier duda sobre tu salud, consultá a un profesional.
          </p>

          <h2>Zona de profesionales</h2>
          <p>
            La confirmación “Soy profesional de la salud” es una simulación. No verifica matrículas ni identidades, y no
            protege el contenido, que es de ejemplo.
          </p>

          <h2>Formularios</h2>
          <p>
            Los formularios no envían información. Evitá escribir datos reales de salud o personales.
          </p>

          <h2>Imágenes y video</h2>
          <p>
            Las fotos y el video provienen de Pexels y se usan bajo la licencia de Pexels. Los autores figuran en el
            README del proyecto.
          </p>

          <h2>Cambios</h2>
          <p>Este texto puede cambiar sin aviso, porque es un ejemplo.</p>
        </div>
      </Section>
    </>
  );
}
