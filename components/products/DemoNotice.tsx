import { aviso } from "@/lib/ui";

/** Aclaración obligatoria en la sección de productos. */
export function DemoNotice({ className }: { className?: string }) {
  return (
    <aside aria-label="Aviso sobre este sitio" className={`${aviso.info} ${className ?? ""}`}>
      <p>
        <strong className="font-semibold">Sitio de demostración.</strong> Estos productos, sus nombres y sus datos son
        ficticios. La información no es consejo médico: ante cualquier duda sobre tu salud, consultá a un profesional.
      </p>
    </aside>
  );
}
