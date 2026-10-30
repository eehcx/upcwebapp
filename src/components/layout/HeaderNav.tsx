import type { ReactNode } from "react"
import { useState } from "react"
import {
  ArrowRight,
  Briefcase,
  CircleHelp,
  Compass,
  Contact,
  Cpu,
  ExternalLink,
  Film,
  Flame,
  FlaskConical,
  GraduationCap,
  Handshake,
  History,
  Landmark,
  Laptop,
  LibraryBig,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  Radio,
  Wrench,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IS } from "@/shared/data"
import { cn } from "@/shared/lib"

type NavLink = {
  label: string
  description?: string
  href: string
  icon?: ReactNode
  external?: boolean
}

type MenuGroup = {
  title: string
  links: NavLink[]
}

type FeaturedProgram = {
  title: string
  description: string
  image: string
  href: string
  ctaLabel: string
}

interface HeaderNavProps {
  currentPath: string
}

const featuredProgram: FeaturedProgram = {
  title: "Modelo Educativo UPC",
  description:
    "Formación basada en competencias en 10 cuatrimestres con estancias y estadías profesionales.",
  image: "/images/alumno_explicando.webp",
  href: "/modelo-educativo",
  ctaLabel: "Conocer el modelo",
}

const careerMenuGroups: MenuGroup[] = [
  {
    title: "Ingenierías",
    links: [
      {
        label: "Mecatrónica",
        description: "Robótica, control y automatización industrial",
        href: "/carreras/ingenieria-en-mecatronica",
        icon: <Cpu className="h-4 w-4" />,
      },
      {
        label: "Biotecnología",
        description: "Bioprocesos e innovación agroambiental",
        href: "/carreras/ingenieria-en-biotecnologia",
        icon: <FlaskConical className="h-4 w-4" />,
      },
      {
        label: "TI e Innovación Digital",
        description: "Software, IA y soluciones en la nube",
        href: "/carreras/ingenieria_en_tecnologias_de_la_informacion_e_innovacion_digital",
        icon: <Laptop className="h-4 w-4" />,
      },
      {
        label: "Animación y Efectos Visuales",
        description: "Producción 3D, VFX y medios interactivos",
        href: "/carreras/ingenieria-en-animacion-y-efectos-visuales",
        icon: <Film className="h-4 w-4" />,
      },
      {
        label: "Sistemas Electrónicos",
        description: "Sistemas embebidos, IoT y redes",
        href: "/carreras/ingenieria_en_sistemas_electronicos",
        icon: <Radio className="h-4 w-4" />,
      },
      {
        label: "Mecánica Automotriz",
        description: "Diseño y manufactura automotriz",
        href: "/carreras/ingenieria-en-mecanica-automotriz",
        icon: <Wrench className="h-4 w-4" />,
      },
      {
        label: "Geofísica Petrolera",
        description: "Exploración energética del subsuelo",
        href: "/carreras/ingenieria-en-geofisica-petrolera",
        icon: <Flame className="h-4 w-4" />,
      },
    ],
  },
]

const megaMenuColumns: MenuGroup[] = [
  {
    title: "Conócenos",
    links: [
      {
        label: "Mensaje del rector",
        description: "La voz de nuestra rectoría a la comunidad",
        href: "/conocenos#mensaje",
        icon: <MessageCircle className="h-4 w-4" />,
      },
      {
        label: "Historia",
        description: "De 2008 a hoy: fundación y evolución de la UPC",
        href: "/conocenos#historia",
        icon: <History className="h-4 w-4" />,
      },
      {
        label: "Misión, visión y valores",
        description: "Los 11 picos de la cola de Papillón",
        href: "/conocenos#mision-vision",
        icon: <Compass className="h-4 w-4" />,
      },
      {
        label: "Directorio",
        description: "Áreas, extensiones y correos institucionales",
        href: "/conocenos#directorio",
        icon: <Contact className="h-4 w-4" />,
      },
      {
        label: "Preguntas frecuentes",
        description: "Admisión, trámites, carreras y estadías",
        href: "/preguntas-frecuentes",
        icon: <CircleHelp className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Normatividad",
    links: [
      {
        label: "Leyes y Reglamentos",
        description: "Marco jurídico aplicable estatal y nacional",
        href: "/leyes-reglamentos",
        icon: <Scale className="h-4 w-4" />,
      },
      {
        label: "Información Financiera",
        description: "Estados contables y rendición de cuenta pública",
        href: "/informacion-financiera",
        icon: <Landmark className="h-4 w-4" />,
      },
      {
        label: "Convenios Vigentes",
        description: "Alianzas académicas, públicas y del sector productivo",
        href: "/docs/CONVENIOS PAGINA.pdf",
        external: true,
        icon: <Handshake className="h-4 w-4" />,
      },
    ],
  },
]

const directLinks: NavLink[] = [
  { label: "Vinculación", href: "/vinculacion" },
  { label: "Admisión", href: "/admision" },
  { label: "Boletines", href: "/boletines" },
  { label: "Calendario", href: "/calendario" },
]

const accessItems = IS as { name: string; href: string }[]

const isPathActive = (currentPath: string, targetHref: string) => {
  if (targetHref === "/") return currentPath === "/"
  return currentPath === targetHref || currentPath.startsWith(`${targetHref}/`)
}

const HeaderNavigation = ({ currentPath }: { currentPath: string }) => {
  const isCareersActive =
    currentPath.startsWith("/carreras") || currentPath === featuredProgram.href
  const isUniversityActive = megaMenuColumns.some((col) =>
    col.links.some((link) => !link.external && isPathActive(currentPath, link.href.split("#")[0]))
  )

  const navLinkClassName = (active: boolean) =>
    cn(
      navigationMenuTriggerStyle(),
      "bg-transparent text-sm font-medium transition-colors hover:!bg-transparent hover:text-[#111] focus:!bg-transparent focus:text-[#111]",
      active ? "font-semibold text-[#C12329]" : "text-neutral-600"
    )

  return (
    <div className="hidden flex-1 items-center justify-center lg:flex">
      <NavigationMenu aria-label="Navegación principal">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              aria-current={currentPath === "/" ? "page" : undefined}
              className={navLinkClassName(currentPath === "/")}
            >
              Inicio
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "bg-transparent text-sm font-medium transition-colors hover:!bg-transparent hover:text-[#111] focus:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:text-[#111]",
                isCareersActive ? "font-semibold text-[#C12329]" : "text-neutral-600"
              )}
            >
              Oferta Educativa
            </NavigationMenuTrigger>

            <NavigationMenuContent className="bg-[#f8f8f8] p-4 md:w-[50rem]">
              <div className="flex flex-row-reverse items-stretch gap-5">
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  {careerMenuGroups.map((group) => (
                    <div key={group.title} className="flex flex-col gap-2">
                      <div className="flex items-baseline justify-between border-b border-border/60 px-2 pb-2">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                            Programas Académicos
                          </p>
                          <p className="text-base font-semibold text-[#111]">
                            {group.title}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#ECECEC] px-2.5 py-0.5 text-[11px] font-medium text-neutral-600">
                          7 programas
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        {group.links.map((link) => {
                          const active = isPathActive(currentPath, link.href)
                          return (
                            <NavigationMenuLink
                              key={link.href}
                              href={link.href}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-[#ECECEC]/80 focus:bg-[#ECECEC]/80",
                                active && "bg-[#ECECEC]"
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                                  active
                                    ? "border-[#C12329] bg-[#C12329] text-white"
                                    : "border-[#C12329]/15 bg-[#C12329]/10 text-[#C12329] group-hover:border-[#C12329] group-hover:bg-[#C12329] group-hover:text-white"
                                )}
                              >
                                {link.icon}
                              </span>

                              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                                <span
                                  className={cn(
                                    "truncate text-sm font-semibold transition-colors",
                                    active
                                      ? "text-[#C12329]"
                                      : "text-[#111] group-hover:text-[#C12329]"
                                  )}
                                >
                                  {link.label}
                                </span>
                                {link.description && (
                                  <span className="line-clamp-1 text-xs leading-snug text-neutral-500">
                                    {link.description}
                                  </span>
                                )}
                              </span>
                            </NavigationMenuLink>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-60 shrink-0">
                  <NavigationMenuLink
                    href={featuredProgram.href}
                    aria-current={
                      isPathActive(currentPath, featuredProgram.href)
                        ? "page"
                        : undefined
                    }
                    className="group flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-white p-0 transition-shadow hover:shadow-md focus:bg-white"
                  >
                    <div>
                      <div className="overflow-hidden">
                        <img
                          src={featuredProgram.image}
                          loading="lazy"
                          width={240}
                          height={128}
                          alt={featuredProgram.title}
                          className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 p-3.5">
                        <span className="inline-flex w-fit items-center gap-1 rounded bg-[#C12329]/10 px-2 py-0.5 text-[11px] font-medium text-[#C12329]">
                          <GraduationCap className="h-3 w-3" />
                          Formación UPC
                        </span>
                        <p className="text-sm font-semibold text-[#111]">
                          {featuredProgram.title}
                        </p>
                        <p className="line-clamp-3 text-xs leading-relaxed text-neutral-600">
                          {featuredProgram.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 pt-0">
                      <span className="inline-flex h-8 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 text-xs font-medium text-[#111] transition-colors group-hover:border-[#C12329] group-hover:bg-[#C12329] group-hover:text-white">
                        {featuredProgram.ctaLabel}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </NavigationMenuLink>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "bg-transparent text-sm font-medium transition-colors hover:!bg-transparent hover:text-[#111] focus:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:text-[#111]",
                isUniversityActive ? "font-semibold text-[#C12329]" : "text-neutral-600"
              )}
            >
              Universidad
            </NavigationMenuTrigger>

            <NavigationMenuContent className="bg-[#f8f8f8] p-0 md:w-[38rem]">
              <div className="grid grid-cols-2 divide-x divide-border/60 p-4">
                {megaMenuColumns.map((column, colIdx) => (
                  <div
                    key={column.title}
                    className={cn(
                      "flex min-w-0 flex-col gap-1",
                      colIdx === 0 ? "pr-4" : "pl-4"
                    )}
                  >
                    <p className="px-2.5 pb-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      {column.title}
                    </p>

                    <div className="flex flex-col gap-1">
                      {column.links.map((link) => {
                        const active = !link.external && isPathActive(currentPath, link.href)
                        return (
                          <NavigationMenuLink
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-[#ECECEC]/80 focus:bg-[#ECECEC]/80",
                              active && "bg-[#ECECEC]"
                            )}
                          >
                            <span
                              className={cn(
                                "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                                active
                                  ? "border-[#C12329] bg-[#C12329] text-white"
                                  : "border-[#C12329]/15 bg-[#C12329]/10 text-[#C12329] group-hover:border-[#C12329] group-hover:bg-[#C12329] group-hover:text-white"
                              )}
                            >
                              {link.icon}
                            </span>

                            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                              <span
                                className={cn(
                                  "flex items-center gap-1.5 text-sm font-semibold transition-colors",
                                  active
                                    ? "text-[#C12329]"
                                    : "text-[#111] group-hover:text-[#C12329]"
                                )}
                              >
                                <span className="truncate">{link.label}</span>
                                {link.external && (
                                  <ExternalLink
                                    className="h-3 w-3 shrink-0 text-neutral-400 transition-colors group-hover:text-[#C12329]"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                              {link.description && (
                                <span className="line-clamp-2 text-xs leading-snug text-neutral-500">
                                  {link.description}
                                </span>
                              )}
                            </span>
                          </NavigationMenuLink>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-border/70 bg-[#ECECEC]/60 px-5 py-2.5 text-xs text-neutral-600">
                <span>Comprometidos con la transparencia institucional</span>
                <a
                  href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#C12329] hover:underline"
                >
                  <span>Plataforma Nacional de Transparencia</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {directLinks.map((item) => {
            const active = isPathActive(currentPath, item.href)
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={navLinkClassName(active)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

// Redes oficiales (fuente: "Redes Sociales.docx"). Facebook y LinkedIn vienen sin usuario exacto.
const socialLinks = [
  { label: "Instagram", handle: "@upctabasco", href: "https://www.instagram.com/upctabasco" },
  { label: "TikTok", handle: "@upctabasco", href: "https://www.tiktok.com/@upctabasco" },
  { label: "X", handle: "@UPCTabasco", href: "https://x.com/UPCTabasco" },
]

const contactInfo = {
  phoneLabel: "(993) 312 58 93",
  phone: "tel:+529933125893",
  email: "informes@updc.edu.mx",
}

const accessIcons = [GraduationCap, Briefcase, LibraryBig]

// Entrada escalonada de los bloques del menú móvil
const enter = (index: number) => ({
  className:
    "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-3 motion-safe:fill-mode-both motion-safe:duration-300",
  style: { animationDelay: `${80 + index * 40}ms` },
})

const mobileFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C12329] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f8f8]"

const mobileRow = (active: boolean) =>
  cn(
    "relative flex min-h-12 items-center rounded-lg px-4 text-base font-semibold transition-colors",
    mobileFocus,
    active
      ? "bg-white text-[#C12329] shadow-sm before:absolute before:inset-y-2.5 before:left-0 before:w-1 before:rounded-r before:bg-[#C12329]"
      : "text-[#111] hover:bg-[#ECECEC]"
  )

const HeaderNavigationMobile = ({
  currentPath,
  closeMenu,
}: {
  currentPath: string
  closeMenu: () => void
}) => {
  const careerLinks = careerMenuGroups.flatMap((group) => group.links)
  const isCareersActive =
    currentPath.startsWith("/carreras") || currentPath === featuredProgram.href
  const isUniversityActive = megaMenuColumns.some((col) =>
    col.links.some((link) => !link.external && isPathActive(currentPath, link.href.split("#")[0]))
  )
  // Abre de entrada la sección donde está la página actual
  const defaultSection = isCareersActive ? "oferta" : isUniversityActive ? "universidad" : undefined

  const sectionTrigger = (active: boolean) =>
    cn(
      "min-h-12 rounded-lg px-4 py-0 text-base font-semibold hover:bg-[#ECECEC] hover:no-underline data-[state=open]:bg-[#ECECEC] [&>svg]:h-5 [&>svg]:w-5",
      mobileFocus,
      active ? "text-[#C12329]" : "text-[#111]"
    )

  return (
    <nav className="flex flex-col gap-6 px-4 pb-8 pt-4" aria-label="Navegación móvil">
      {/* Admisión destacada: es el objetivo principal de un aspirante */}
      <div
        {...enter(0)}
        className={cn(
          "rounded-2xl bg-[#C12329] p-5 text-white shadow-lg shadow-[#C12329]/20",
          enter(0).className
        )}
      >
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Admisiones abiertas
        </p>
        <p className="mt-2 text-sm leading-snug text-white/90">
          Conoce requisitos, fechas y el proceso de nuevo ingreso.
        </p>
        <a
          href="/admision"
          onClick={closeMenu}
          aria-current={isPathActive(currentPath, "/admision") ? "page" : undefined}
          className="mt-4 flex min-h-12 items-center justify-between rounded-xl bg-white px-4 text-sm font-bold text-[#C12329] transition-colors hover:bg-[#FDF2F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#C12329]"
        >
          Quiero inscribirme
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div {...enter(1)} className={cn("flex flex-col gap-1", enter(1).className)}>
        <a
          href="/"
          onClick={closeMenu}
          aria-current={currentPath === "/" ? "page" : undefined}
          className={mobileRow(currentPath === "/")}
        >
          Inicio
        </a>

        <Accordion type="single" collapsible defaultValue={defaultSection} className="flex flex-col gap-1">
          <AccordionItem value="oferta" className="border-none">
            <AccordionTrigger className={sectionTrigger(isCareersActive)}>
              Oferta educativa
            </AccordionTrigger>
            <AccordionContent className="px-1 pb-2 pt-3">
              <ul className="grid grid-cols-2 gap-2">
                {careerLinks.map((link) => {
                  const active = isPathActive(currentPath, link.href)
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex h-full min-h-14 items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium leading-tight transition-colors",
                          mobileFocus,
                          active
                            ? "border-[#C12329] bg-[#FDF2F2] text-[#C12329]"
                            : "border-border bg-white text-[#111] hover:border-[#C12329]/40"
                        )}
                      >
                        <span className="shrink-0 text-[#C12329]" aria-hidden="true">
                          {link.icon}
                        </span>
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <a
                href={featuredProgram.href}
                onClick={closeMenu}
                className={cn(
                  "mt-3 flex min-h-12 items-center justify-between rounded-xl px-3 text-sm font-semibold text-[#111] hover:bg-[#ECECEC]",
                  mobileFocus
                )}
              >
                {featuredProgram.title}
                <ArrowRight className="h-4 w-4 text-[#C12329]" aria-hidden="true" />
              </a>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="universidad" className="border-none">
            <AccordionTrigger className={sectionTrigger(isUniversityActive)}>
              Universidad
            </AccordionTrigger>
            <AccordionContent className="space-y-4 px-1 pb-2 pt-3">
              {megaMenuColumns.map((column) => (
                <div key={column.title}>
                  <p className="px-3 pb-1 text-xs font-bold uppercase tracking-wider text-neutral-600">
                    {column.title}
                  </p>
                  <ul>
                    {column.links.map((link) => {
                      const active = !link.external && isPathActive(currentPath, link.href)
                      return (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            onClick={closeMenu}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                              "flex min-h-12 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
                              mobileFocus,
                              active ? "bg-white text-[#C12329]" : "text-[#111] hover:bg-[#ECECEC]"
                            )}
                          >
                            <span className="shrink-0 text-[#C12329]" aria-hidden="true">
                              {link.icon}
                            </span>
                            <span className="flex-1">{link.label}</span>
                            {link.external && (
                              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-neutral-500" aria-hidden="true" />
                            )}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {directLinks
          .filter((item) => item.href !== "/admision")
          .map((item) => {
            const active = isPathActive(currentPath, item.href)
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={mobileRow(active)}
              >
                {item.label}
              </a>
            )
          })}
      </div>

      <div {...enter(2)} className={enter(2).className}>
        <p className="px-1 pb-2 text-xs font-bold uppercase tracking-wider text-neutral-600">
          Accesos SIIUPC
        </p>
        <ul className="grid grid-cols-3 gap-2">
          {accessItems.map((item, i) => {
            const Icon = accessIcons[i] ?? ExternalLink
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className={cn(
                    "flex min-h-[4.5rem] flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-white px-1 text-center text-xs font-semibold text-[#111] transition-colors hover:border-[#C12329]/40",
                    mobileFocus
                  )}
                >
                  <Icon className="h-5 w-5 text-[#C12329]" aria-hidden="true" />
                  {item.name}
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div {...enter(3)} className={cn("space-y-1 border-t border-border pt-5", enter(3).className)}>
        <a href={contactInfo.phone} className={cn("flex min-h-11 items-center gap-3 rounded-lg px-1 text-sm text-neutral-700 hover:text-[#C12329]", mobileFocus)}>
          <Phone className="h-4 w-4 text-[#C12329]" aria-hidden="true" />
          {contactInfo.phoneLabel}
        </a>
        <a href={`mailto:${contactInfo.email}`} className={cn("flex min-h-11 items-center gap-3 rounded-lg px-1 text-sm text-neutral-700 hover:text-[#C12329]", mobileFocus)}>
          <Mail className="h-4 w-4 text-[#C12329]" aria-hidden="true" />
          {contactInfo.email}
        </a>
        <a href="/preguntas-frecuentes" onClick={closeMenu} className={cn("flex min-h-11 items-center gap-3 rounded-lg px-1 text-sm text-neutral-700 hover:text-[#C12329]", mobileFocus)}>
          <CircleHelp className="h-4 w-4 text-[#C12329]" aria-hidden="true" />
          Preguntas frecuentes
        </a>
        <ul className="flex flex-wrap gap-2 pt-3" aria-label="Redes sociales">
          {socialLinks.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} ${social.handle} (se abre en una pestaña nueva)`}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border border-border bg-white px-4 text-xs font-semibold text-[#111] transition-colors hover:border-[#C12329] hover:text-[#C12329]",
                  mobileFocus
                )}
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const HeaderNav = ({ currentPath }: HeaderNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#f8f8f8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f8f8f8]/80">
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="/"
          onClick={closeMenu}
          aria-label="Universidad Politécnica del Centro - Inicio"
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src="/logolema.png"
            alt="Universidad Politécnica del Centro"
            className="h-10 w-auto lg:h-12"
            draggable="false"
          />
        </a>

        <HeaderNavigation currentPath={currentPath} />

        <div className="hidden items-center lg:flex">
          <NavigationMenu
            aria-label="Accesos a sistemas SIIUPC"
            viewportWrapperClassName="left-auto right-0 translate-x-0"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-[#ECECEC] text-sm font-medium text-[#111] hover:bg-[#e2e2e2] focus:bg-[#e2e2e2] data-[state=open]:bg-[#e2e2e2]">
                  SIIUPC
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-[#f8f8f8]">
                  <ul className="grid w-52 gap-1 p-2">
                    {accessItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex select-none items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-600 no-underline outline-none transition-colors hover:bg-[#ECECEC] hover:text-[#111] focus:bg-[#ECECEC] focus:text-[#111]"
                        >
                          <span>{item.name}</span>
                          <ExternalLink
                            className="h-3.5 w-3.5 opacity-70"
                            aria-hidden="true"
                          />
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <div className="flex items-center lg:hidden">
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-[#ECECEC] hover:text-[#111]"
                aria-label="Abrir menú"
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          </div>

          <SheetContent
            side="right"
            className="w-[88%] max-w-sm gap-0 overflow-y-auto bg-[#f8f8f8] p-0 [&>button:last-child]:z-20 [&>button:last-child]:right-3 [&>button:last-child]:top-3 [&>button:last-child]:inline-flex [&>button:last-child]:h-11 [&>button:last-child]:w-11 [&>button:last-child]:items-center [&>button:last-child]:justify-center [&>button:last-child]:rounded-full [&>button:last-child]:opacity-100 [&>button:last-child]:hover:bg-[#ECECEC] [&>button:last-child>svg]:h-5 [&>button:last-child>svg]:w-5"
          >
            <SheetHeader className="sticky top-0 z-10 border-b border-border bg-[#f8f8f8]/95 px-5 py-4 text-left backdrop-blur">
              <SheetTitle asChild>
                <a
                  href="/"
                  onClick={closeMenu}
                  aria-label="Universidad Politécnica del Centro - Inicio"
                  className="flex min-h-11 w-fit items-center gap-3"
                >
                  <img
                    src="/logolema.png"
                    alt="Universidad Politécnica del Centro"
                    className="h-10 w-auto"
                    draggable="false"
                  />
                </a>
              </SheetTitle>

              <SheetDescription className="sr-only">
                Menú de navegación principal
              </SheetDescription>
            </SheetHeader>

            <HeaderNavigationMobile
              currentPath={currentPath}
              closeMenu={closeMenu}
            />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default HeaderNav
