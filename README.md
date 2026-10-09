# Laboratorios Caldén

Sitio de demostración de un laboratorio farmacéutico **ficticio** con sede en Buenos Aires.
La compañía, los productos, las personas, las cifras, las noticias, las vacantes y las ubicaciones son inventados.
Nada de lo que se publica es consejo médico.

Hecho con Next.js (App Router), React, TypeScript y Tailwind CSS 4. Se despliega en Vercel, en la raíz del dominio.

## Cómo correrlo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Antes de cada push:

```bash
npx tsc --noEmit
npm run build
```

## Variables de entorno

Ninguna es obligatoria. Están listadas en `.env.example`.

| Variable | Para qué sirve |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (sin barra final) para metadatos, `sitemap.xml` y `robots.txt`. |
| `VERCEL_PROJECT_PRODUCTION_URL` | La define Vercel sola. Se usa si falta la anterior. |

Sin ninguna de las dos, se usa `http://localhost:3000`.

## Estructura

```
app/                     Rutas (App Router). Cada página exporta sus metadatos.
  globals.css            Tokens de diseño en @theme: color OKLCH, tipografías, escala fluida, puntos de corte
  layout.tsx             Fuentes (next/font), header, pie, aviso de cookies
  sitemap.ts, robots.ts  Generados con las convenciones de Next
  opengraph-image.tsx    Imagen Open Graph
components/
  layout/                Header (menú móvil lateral), pie, aviso de cookies, logo
  home/                  Hero y video de fondo
  products/              Catálogo con filtros y aviso de demostración
  professionals/         Confirmación "Soy profesional de la salud"
  forms/                 Campos accesibles, validación, formularios de farmacovigilancia y postulación
  plants/                Mapa Leaflet + lista
  news/, ui/             Piezas compartidas
lib/                     Datos tipados (productos, áreas, noticias, vacantes, ubicaciones, compañía),
                         clases de UI centralizadas (ui.ts), sitio y SEO
public/images, video     Fotos y video de Pexels
```

Son componentes de servidor salvo donde hace falta el navegador (`'use client'`): menú móvil, video del hero,
catálogo con filtros, confirmación de profesionales, formularios, mapa y aviso de cookies.

## Decisiones del rubro

- **Dos zonas.** Los productos de venta libre y de bienestar son públicos (`/productos`). El portafolio bajo receta
  está en `/profesionales`, detrás de una confirmación de demostración. En un sitio real, los medicamentos de venta
  bajo receta no se publicitan al público general. La confirmación no es una medida de seguridad: no hay cuentas,
  no se verifica nada y no se guarda nada.
- **Productos.** Nombres comerciales inventados. Cada ficha muestra nombre, área, forma, presentación y un texto neutro.
  No hay principios activos, indicaciones, dosis ni promesas de eficacia.
- **Sin certificaciones ni registros.** La única mención regulatoria es genérica ("cumplimos las buenas prácticas de
  manufactura") y está marcada como contenido de ejemplo.
- **Formularios.** Farmacovigilancia y postulación validan en el navegador, no envían nada y no guardan nada, ni en
  servidor ni en el navegador.
- **Cookies.** El aviso tiene "Rechazar" y "Aceptar" con el mismo peso. Solo guarda esa elección en `localStorage`.
  No se carga nada de terceros por defecto.
- **Mapa.** `/plantas` carga Leaflet con `import()` dinámico y mosaicos de OpenStreetMap. Es el único recurso de
  terceros del sitio y solo se pide en esa página (figura en la política de privacidad). La lista funciona sin mapa.

## Accesibilidad

- Tipografías: Atkinson Hyperlegible Next (cuerpo, pensada para baja visión) y Literata (títulos).
- Cuerpo de 18 a 20 px. Contraste medido de los pares de texto de la paleta: de 7,8:1 a 16,7:1 (AAA en cuerpo).
- Foco visible, objetivos táctiles de 44 px, enlace para saltar al contenido, `prefers-reduced-motion` y ahorro de
  datos respetados (el video del hero no se reproduce).
- Formularios con etiquetas visibles, errores junto al campo y foco al primer error.
- El enlace de la sección actual se marca con `aria-current="page"` también en páginas interiores.

## Créditos de imágenes y video

Todo viene de [Pexels](https://www.pexels.com/license/) (uso libre, sin atribución obligatoria).

| Archivo | Autor | ID en Pexels |
| --- | --- | --- |
| `images/hero.jpg` | Nishant Aneja | 11703173 |
| `video/hero.mp4` (720p) | Roberto Zepeda | video 13532394 |
| `images/investigacion.jpg` | Thirdman | 8940364 |
| `images/trabajo.jpg` | Jonathan Borba | 15831822 |
| `images/herbolario.jpg` | Yan Krukau | 5480057 |
| `images/manufactura.jpg` | Elements Interactive | 37466061 |
| `images/sustentabilidad.jpg` | Okan Demircan | 33233705 |
| `images/alianzas.jpg` | Mikhail Nilov | 9243565 |

## Despliegue

Se publica en Vercel conectando este repositorio desde la cuenta de quien lo despliega. No usa `output: 'export'`
ni `basePath`, no hay workflows de despliegue y no requiere variables de entorno.
