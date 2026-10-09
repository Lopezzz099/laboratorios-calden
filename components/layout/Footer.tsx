import Link from "next/link";
import { Logo } from "./Logo";
import { PreferenciasCookies } from "./CookieNotice";
import { enlaceClaro } from "@/lib/ui";
import { enlaceProfesionales, navLegal, navPrincipal, navSecundaria, site } from "@/lib/site";

export function Footer() {
  return (
    <footer data-tono="oscuro" className="bg-baya-900 text-fondo">
      <div className="mx-auto grid max-w-[84rem] gap-12 px-gutter py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:gap-20">
        <div>
          <Link href="/" aria-label={`${site.nombre}, ir al inicio`} className="inline-block rounded-sm">
            <Logo />
          </Link>
          <p className="mt-5 max-w-sm text-base">
            Laboratorio farmacéutico con sede en {site.ciudad}. Investigamos, fabricamos y distribuimos con controles
            que se pueden explicar.
          </p>
          <p className="mt-5 text-base">
            <a className={enlaceClaro} href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <br />
            <span>{site.telefono}</span>
          </p>
        </div>

        <nav aria-label="Pie, secciones">
          <h2 className="font-display text-lg font-semibold">Secciones</h2>
          <ul className="mt-4 space-y-1">
            {navPrincipal.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className={`${enlaceClaro} inline-flex min-h-11 items-center`}>
                  {i.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Pie, más información">
          <h2 className="font-display text-lg font-semibold">Más información</h2>
          <ul className="mt-4 space-y-1">
            {navSecundaria.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className={`${enlaceClaro} inline-flex min-h-11 items-center`}>
                  {i.etiqueta}
                </Link>
              </li>
            ))}
            <li>
              <Link href={enlaceProfesionales.href} className={`${enlaceClaro} inline-flex min-h-11 items-center`}>
                {enlaceProfesionales.etiqueta}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-fondo/25">
        <div className="mx-auto max-w-[84rem] px-gutter py-8">
          <p className="max-w-4xl text-base">
            <strong className="font-semibold">Sitio de demostración.</strong> Laboratorios Caldén, sus productos, las
            personas y los datos que aparecen son ficticios. La información de este sitio no es consejo médico: ante una
            duda sobre tu salud, consultá a un profesional.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <p>© 2026 {site.nombre} (ficticio)</p>
            <ul className="flex flex-wrap gap-x-6">
              {navLegal.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className={`${enlaceClaro} inline-flex min-h-11 items-center`}>
                    {i.etiqueta}
                  </Link>
                </li>
              ))}
              <li>
                <PreferenciasCookies className={`${enlaceClaro} inline-flex min-h-11 cursor-pointer items-center`} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
