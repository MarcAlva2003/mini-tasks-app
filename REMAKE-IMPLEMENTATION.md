# REMAKE - Plan de Implementación

## Decisiones de Diseño

| Aspecto | Decisión |
|---|---|
| **Color acento** | Morado suave — Primario: `#A78BFA`, Secundario: `#8B5CF6` |
| **Paleta de fondos** | Grises oscuros (no negro puro): `#0F0F14`, `#1A1A24`, `#252535` |
| **Paleta de texto** | Grises claros (no blanco puro): `#E2E2E8`, `#A0A0B0` |
| **Fuente títulos** | Poppins (geométrica, moderna) |
| **Fuente cuerpo** | Inter (ultra legible) |
| **UI Library** | Shadcn UI (reemplaza MUI) |
| **Animaciones** | Framer Motion |
| **About Me** | Timeline interactiva vertical |
| **Hero visual** | Formas geométricas 3D animadas con CSS transforms |

---

## Dependencias entre fases

```
Fase 1 (Setup)
  ├── Fase 2 (Header)
  ├── Fase 3 (Hero)
  ├── Fase 4 (Projects)
  ├── Fase 5 (Skills)
  ├── Fase 6 (About Me)
  └── Fase 7 (Contact)
        └── Fase 8 (Cleanup) ← espera a que terminen TODAS las fases 2-7
```

---

## ~~Fase 1 — Setup: Instalar Shadcn UI, Framer Motion y configurar fundamentos~~ COMPLETADA

### Tareas

1. Instalar dependencias: `shadcn/ui`, `framer-motion`, `tailwindcss-animate`
2. Configurar Shadcn UI (init con estilo "new-york", dark mode)
3. Actualizar `src/app/text.tsx`: reemplazar MUI ThemeProvider por el sistema de temas de Shadcn/Tailwind
4. Configurar fuentes en `text.tsx`: Poppins para headings, Inter para body text
5. Definir nueva paleta de colores en `tailwind.config.ts` y CSS variables:
   - Fondos: `#0F0F14`, `#1A1A24`, `#252535`
   - Texto: `#E2E2E8`, `#A0A0B0`
   - Acento: `#A78BFA` (primario), `#8B5CF6` (secundario)
6. Eliminar dependencias de MUI (`@mui/material`, `@emotion/react`, `@emotion/styled`)
7. Limpiar o eliminar `src/themes/ThemeContext.tsx`

### Archivos afectados

- `package.json`
- `tailwind.config.ts`
- `src/app/globals.css`
- `src/app/text.tsx`
- `src/app/layout.tsx`
- `src/themes/ThemeContext.tsx`

---

## ~~Fase 2 — Header: Nueva distribución y animaciones~~ COMPLETADA

### Requisitos (del REMAKE.md)

- Desktop: logo (izquierda) | nav links (centro) | botón Contact (derecha)
- Nav items: gris claro por defecto, blanco al hover
- Underline animado: línea que crece de izquierda a derecha al hover, color acento morado
- Botón Contact separado de los links, con estilo diferenciado, scrollea a `#contact`
- Mobile: se mantiene la estructura actual, adaptada a los nuevos colores

### Animaciones

| Elemento | Animación | Implementación |
|---|---|---|
| Underline nav | Crece de izquierda a derecha al hover | `motion.div` con `layoutId` (shared layout animation) |
| Botón Contact | Scale + fill al hover | `whileHover={{ scale: 1.05 }}` + transición de background |
| Header fondo | Glassmorphism sutil | `backdrop-blur-md` + `bg-opacity` con Tailwind |

### Archivos afectados

- `src/components/header/header.component.tsx`
- `src/components/header/header-desktop-navigation.component.tsx`
- `src/components/header/header-mobile-navigation.component.tsx`
- `src/constants/nav-items.ts` (sacar Contact de la lista de nav items)

---

## ~~Fase 3 — Hero: Formas 3D y texto impactante~~ COMPLETADA

### Requisitos (del REMAKE.md)

- Quitar foto de perfil
- Nombre, título y frase de valor como elementos principales
- Download CV más grande y prominente
- Ilustración abstracta que represente el estilo como developer

### Diseño

- **Columna izquierda:** Texto con jerarquía clara
  - "ÁLVAREZ MARCOS" grande y bold (Poppins)
  - "FRONTEND DEVELOPER" con efecto de reveal letra por letra
  - Frase de valor con fade-in tras el título
  - Botón "Download CV" primario con gradiente morado y glow
  - Botón "Projects" secundario/outlined
- **Columna derecha (o fondo):** Formas geométricas 3D flotantes
  - Cubos, esferas, toroides con colores del gradiente morado
  - Rotación y flotación suave infinita
  - CSS 3D transforms + `perspective`

### Animaciones

| Elemento | Animación | Implementación |
|---|---|---|
| Título | Reveal palabra por palabra | `motion.span` con stagger children |
| Subtítulo/frase | Fade-in con delay | `motion.p` con `initial={{ opacity: 0 }}` y delay |
| Formas 3D | Rotación + flotación infinita | `animate={{ rotateX, rotateY, y }}` con `repeat: Infinity` y duraciones distintas por forma |
| Fondo | Gradient mesh sutil | Gradientes radiales animados con CSS o Framer Motion |
| Scroll indicator | Bounce infinito | `animate={{ y: [0, 10, 0] }}` con `repeat: Infinity` |
| Botón Download CV | Glow al hover | `whileHover` con `boxShadow` animado morado |
| Sección entera | Entrada inicial | `motion.div` con `initial={{ opacity: 0, y: 30 }}` |

### Archivos afectados

- `src/components/portfolio/introduction/introduction.component.tsx`

### Reemplazos

- MUI `Button` → Shadcn `Button` o botón custom con Tailwind + gradiente
- Color `#90caf9` → acento morado `#A78BFA`

---

## ~~Fase 4 — Projects: Cards con efecto destello y zoom~~ COMPLETADA

### Requisitos (del REMAKE.md)

- Mantener grid layout
- Adaptar cards al nuevo diseño
- Efecto hover: destello que sigue al cursor sobre la card
- Efecto zoom en la imagen de la card

### Diseño

- Grid: 2 columnas mobile, 3 columnas desktop (se mantiene)
- Card:
  - Background: `#1A1A24` con borde sutil `#2A2A3A`
  - Rounded corners generosos
  - Technology pills: background sutil morado/gris (reemplaza MUI `Chip`)
  - Icon buttons custom (reemplaza MUI `IconButton`)

### Animaciones

| Elemento | Animación | Implementación |
|---|---|---|
| Spotlight/destello | Gradiente radial que sigue al cursor | `onMouseMove` → CSS variables `--mouse-x`, `--mouse-y` → `radial-gradient` overlay |
| Imagen | Zoom al hover | `motion.div` con `whileHover={{ scale: 1.05 }}` + `overflow-hidden` |
| Cards entrada | Aparecen escalonadas | `motion.div` con `whileInView={{ opacity: 1, y: 0 }}` + stagger |
| Card hover | Elevación y glow | `shadow-lg shadow-purple-500/10` + border glow transition |
| Título sección | Reveal al scrollear | `whileInView` fade-in + slide-up |

### Archivos afectados

- `src/components/portfolio/projects-section/projects-section.component.tsx`
- `src/components/portfolio/projects-section/project-card.component.tsx`
- `src/components/portfolio/projects-section/projects-section.styles.css` (eliminar CSS muerto)

### Reemplazos

- MUI `Chip` → pills custom Tailwind
- MUI `IconButton` → botones icon custom

---

## ~~Fase 5 — Skills: Circular progress con glassmorphism~~ COMPLETADA

### Requisitos (del REMAKE.md)

- Mantener agrupación por secciones con pills
- Eliminar collapsable/accordion
- Cada skill es una card con circular ProgressBar SVG
- Círculo se llena al entrar en viewport
- Centro: logo de la tecnología; hover: muestra porcentaje
- Estilo Glassmorphism o Neumorphism sutil
- Trazo fino para fondo, grueso con gradiente para progreso

### Diseño

- **Pills de categoría:** fondo transparente con borde, activa con gradiente morado, indicator deslizante con `layoutId`
- **Skill Card (glassmorphism):**
  - `backdrop-blur-md`, `bg-white/5`, border sutil `border-white/10`
  - Circular progress SVG:
    - Círculo de fondo: `stroke-width: 2`, color gris oscuro
    - Círculo de progreso: `stroke-width: 4`, gradiente `linear-gradient(45deg, #8B5CF6, #A78BFA)`
    - Animación con `stroke-dasharray` y `stroke-dashoffset`
  - Centro: ícono de la tecnología (de `react-icons`)
  - Hover: crossfade ícono ↔ porcentaje numérico
- **Grid:** 3 columnas mobile, 4-5 columnas desktop

### Animaciones

| Elemento | Animación | Implementación |
|---|---|---|
| Circular progress | Llenado al entrar en viewport | `motion.circle` animando `strokeDashoffset` + `useInView` |
| Cards entrada | Escalonada al scrollear | `whileInView` con stagger |
| Hover card | Crossfade ícono ↔ porcentaje | `AnimatePresence` con `motion.div` fade |
| Pill activa | Indicator deslizante | `motion.div` con `layoutId="active-pill"` |
| Pill cambio | Transición suave | `layout` prop en items |

### Archivos afectados

- `src/components/portfolio/skills/skills.component.tsx`
- `src/components/portfolio/skills/skill-card.component,.tsx` → renombrar a `skill-card.component.tsx`
- `src/components/portfolio/skills/skill-section.component.tsx`
- `src/components/portfolio/skills/skills.ts` (agregar campo `icon` a `ISkill`)
- `src/components/portfolio/skills/skills.context.tsx` (eliminar, ya no hay accordion)

### Reemplazos

- MUI `Collapse` → eliminado
- MUI `IconButton` → eliminado
- MUI `LinearProgress` → SVG circular custom
- MUI `Chip` → pills custom Tailwind

---

## ~~Fase 6 — About Me: Timeline interactiva~~ COMPLETADA

### Requisitos (del REMAKE.md)

- Demasiado texto y poco atractivo actualmente
- Necesita ser más visual y no mostrar todo el texto de entrada

### Diseño

- **Timeline vertical:**
  - Línea central (desktop) / izquierda (mobile) con gradiente morado
  - Nodos: círculos brillantes con glow morado pulsante
  - Cards alternando izquierda/derecha en desktop, todas a la derecha en mobile
  - Cards con glassmorphism sutil (consistente con skills)
- **Contenido:** Reestructurar los 3 bloques actuales como hitos:
  1. "Technical Stack & Experience"
  2. "Goals & Aspirations"
  3. "Soft Skills & Approach"
- **Datos:** Extraer a archivo separado `about-me.ts`

### Animaciones

| Elemento | Animación | Implementación |
|---|---|---|
| Línea timeline | Crece hacia abajo con scroll | `useScroll` + `useTransform` → `scaleY` de `motion.div` |
| Nodos/círculos | Aparecen con scale cuando la línea llega | `motion.div` con `whileInView={{ scale: 1 }}` + delay sincronizado |
| Cards izquierda | Slide-in desde la izquierda | `whileInView={{ x: 0, opacity: 1 }}` desde `initial={{ x: -50 }}` |
| Cards derecha | Slide-in desde la derecha | `whileInView={{ x: 0, opacity: 1 }}` desde `initial={{ x: 50 }}` |
| Punto activo | Pulso suave | `animate={{ scale: [1, 1.2, 1] }}` con `repeat: Infinity` |
| Stagger | Nodos aparecen secuencialmente | `transition={{ delay: index * 0.2 }}` |

### Archivos afectados

- `src/components/portfolio/about-me/about-me.component.tsx`
- `src/components/portfolio/about-me/about-me.ts` (nuevo, extraer datos)

### Eliminar

- GIF estático (`intro-animation.gif`)
- Uso de `layout="responsive"` deprecado
- Color hardcodeado `#90caf9`

---

## ~~Fase 7 — Contact: Adaptar al nuevo diseño~~ COMPLETADA

### Requisitos (del REMAKE.md)

- Está bastante bien, solo adaptar a los nuevos estilos

### Cambios

- Reemplazar MUI `TextField` → Shadcn `Input` / `Textarea` o inputs custom Tailwind
- Reemplazar MUI `Button` → Shadcn `Button` o botón custom con gradiente morado
- Inputs: fondo oscuro `#1A1A24`, borde sutil, focus con borde morado y glow
- Renombrar componente `SectionComponent` → `ContactSection`
- Mantener lógica de `react-hook-form` y Formspree

### Animaciones

| Elemento | Animación | Implementación |
|---|---|---|
| Sección entrada | Fade-in + slide-up | `motion.section` con `whileInView` |
| Inputs focus | Glow animado en borde | CSS `transition` en `border-color` + `box-shadow` |
| Botón submit | Scale al hover/tap | `whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.98 }}` |
| Mensajes success/error | Entrada y salida suave | `AnimatePresence` + `motion.div` con fade |
| Links sociales | Scale + color al hover | `whileHover={{ scale: 1.1 }}` + transición a morado |

### Archivos afectados

- `src/components/portfolio/contact/contact-section.component.tsx`
- `src/components/portfolio/contact/contac.services.ts` → renombrar a `contact.services.ts`

### Reemplazos

- MUI `TextField` → inputs custom o Shadcn
- MUI `Button` → botón custom o Shadcn

---

## ~~Fase 8 — Cleanup: Limpieza final y verificación~~ COMPLETADA

### Tareas

1. Verificar que no queden imports de MUI en ningún archivo
2. Desinstalar paquetes MUI: `@mui/material`, `@emotion/react`, `@emotion/styled`
3. Fix filename: `skill-card.component,.tsx` → `skill-card.component.tsx` (actualizar imports)
4. Renombrar `contac.services.ts` → `contact.services.ts` (actualizar imports)
5. Eliminar CSS muerto (`projects-section.styles.css` si ya no se usa)
6. Eliminar `ThemeContext.tsx` si fue reemplazado completamente
7. Test responsive en todos los breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
8. Verificar performance: animaciones Framer Motion sin layout shifts
9. `yarn build` — sin errores de compilación
10. `yarn lint` — sin errores de ESLint

---

## Resumen de reemplazos MUI → Nuevo

| MUI Component | Usado en | Reemplazo |
|---|---|---|
| `Button` | Introduction, Contact | Shadcn Button / custom Tailwind + gradiente |
| `TextField` | Contact | Shadcn Input + Textarea / custom Tailwind |
| `Chip` | Skills, Projects | Pills custom Tailwind |
| `IconButton` | Skills, Projects | Botones icon custom Tailwind |
| `Collapse` | Skills | Eliminado (cambio de diseño) |
| `LinearProgress` | Skills | SVG circular custom |
| `CssBaseline` | text.tsx | CSS reset en `globals.css` |
| `ThemeProvider` | text.tsx | Shadcn/Tailwind dark mode |

## Resumen de animaciones por sección

| Sección | Animaciones principales |
|---|---|
| **Header** | Underline grow on hover, botón Contact scale, glassmorphism blur |
| **Hero** | Text stagger reveal, formas 3D rotación infinita, gradient mesh, scroll bounce, botón glow |
| **Projects** | Spotlight/destello sigue cursor, imagen zoom hover, cards stagger entrance, card elevation hover |
| **Skills** | Circular progress fill on scroll, crossfade ícono↔porcentaje, pill indicator deslizante, cards stagger |
| **About Me** | Timeline line grows con scroll, nodos scale-in, cards slide-in alternadas, punto glow pulsante |
| **Contact** | Input focus glow, botón scale hover/tap, mensajes AnimatePresence, links scale hover |
