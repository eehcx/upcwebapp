"use client";

import * as React from "react";
import {
	ArrowUpRight,
	CalendarDays,
	Clock,
	Cpu,
	FileText,
	Film,
	Flame,
	FlaskConical,
	GraduationCap,
	Laptop,
	MapPin,
	Radio,
	Wrench,
	type LucideIcon,
} from "lucide-react";
import { cn } from "@/shared/lib";

export interface DegreeHeroItem {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	duration: string;
	modality: string;
	image: string;
	pdf?: string;
}

interface Props {
	degrees?: DegreeHeroItem[];
	images?: { src: string; alt?: string }[];
}

export const DEGREE_META: Record<
	string,
	{
		icon: LucideIcon;
		areaTag: string;
		order: number;
	}
> = {
	"ingenieria-en-mecatronica": {
		icon: Cpu,
		areaTag: "Automatización y Robótica",
		order: 1,
	},
	"ingenieria-en-biotecnologia": {
		icon: FlaskConical,
		areaTag: "Bioprocesos y Sustentabilidad",
		order: 2,
	},
	ingenieria_en_tecnologias_de_la_informacion_e_innovacion_digital: {
		icon: Laptop,
		areaTag: "Software, IA y Ciencia de Datos",
		order: 3,
	},
	"ingenieria-en-animacion-y-efectos-visuales": {
		icon: Film,
		areaTag: "Arte Digital, 3D y VFX",
		order: 4,
	},
	ingenieria_en_sistemas_electronicos: {
		icon: Radio,
		areaTag: "Sistemas Embebidos e IoT",
		order: 5,
	},
	"ingenieria-en-mecanica-automotriz": {
		icon: Wrench,
		areaTag: "Ingeniería y Diagnóstico Automotriz",
		order: 6,
	},
	"ingenieria-en-geofisica-petrolera": {
		icon: Flame,
		areaTag: "Exploración y Ciencias de la Tierra",
		order: 7,
	},
};

const DEFAULT_DEGREES: DegreeHeroItem[] = [
	{
		slug: "ingenieria-en-mecatronica",
		title: "Ingeniería en Mecatrónica",
		subtitle: "Mecatrónica",
		description:
			"Optimiza procesos de producción e integra robótica, control automático y manufactura avanzada.",
		duration: "10 cuatrimestres",
		modality: "Presencial",
		image: "mecatronica.webp",
		pdf: "Mecatronica.pdf",
	},
	{
		slug: "ingenieria-en-biotecnologia",
		title: "Ingeniería en Biotecnología",
		subtitle: "Biotecnología",
		description:
			"Diseña, desarrolla e innova bioprocesos y productos sustentables para los sectores productivo y ambiental.",
		duration: "10 cuatrimestres",
		modality: "Presencial",
		image: "biotecnologia.webp",
		pdf: "Biotecnologia.pdf",
	},
	{
		slug: "ingenieria_en_tecnologias_de_la_informacion_e_innovacion_digital",
		title: "Ingeniería en Tecnologías de la Información e Innovación Digital",
		subtitle: "TI e Innovación Digital",
		description:
			"Desarrolla soluciones de software e integra inteligencia artificial, ciencia de datos, seguridad informática e IoT.",
		duration: "10 cuatrimestres",
		modality: "Presencial",
		image: "software.webp",
		pdf: "plan-estudios-ti-innovacion-digital-2024.pdf",
	},
	{
		slug: "ingenieria-en-animacion-y-efectos-visuales",
		title: "Ingeniería en Animación y Efectos Visuales",
		subtitle: "Animación y Efectos Visuales",
		description:
			"Forma especialistas en modelado 3D, animación digital, producción multimedia y efectos visuales de vanguardia.",
		duration: "10 cuatrimestres",
		modality: "Presencial",
		image: "animacion.webp",
		pdf: "Animación.pdf",
	},
	{
		slug: "ingenieria_en_sistemas_electronicos",
		title: "Ingeniería en Sistemas Electrónicos",
		subtitle: "Sistemas Electrónicos",
		description:
			"Diseña e implementa sistemas electrónicos y redes de comunicaciones mediante control digital, embebidos e IoT.",
		duration: "10 cuatrimestres",
		modality: "Presencial",
		image: "electronica.webp",
		pdf: "plan-estudios-sistemas-electronicos-2024.pdf",
	},
	{
		slug: "ingenieria-en-mecanica-automotriz",
		title: "Ingeniería en Mecánica Automotriz",
		subtitle: "Mecánica Automotriz",
		description:
			"Especialización en diseño, diagnóstico electrónico, mantenimiento e innovación de sistemas automotrices modernos.",
		duration: "10 cuatrimestres",
		modality: "Presencial",
		image: "mecanica.webp",
		pdf: "Mecanica_automotriz.pdf",
	},
	{
		slug: "ingenieria-en-geofisica-petrolera",
		title: "Ingeniería en Geofísica Petrolera",
		subtitle: "Geofísica Petrolera",
		description:
			"Estudia los campos físicos terrestres para explorar, identificar y evaluar recursos energéticos del subsuelo.",
		duration: "10 cuatrimestres",
		modality: "Presencial",
		image: "geofisica.webp",
		pdf: "Geofisica_Petrolera.pdf",
	},
];

export const MainCarousel: React.FC<Props> = ({ degrees }) => {
	const sortedDegrees = React.useMemo(() => {
		const source = degrees && degrees.length > 0 ? degrees : DEFAULT_DEGREES;
		return [...source].sort((a, b) => {
			const orderA = DEGREE_META[a.slug]?.order ?? 99;
			const orderB = DEGREE_META[b.slug]?.order ?? 99;
			return orderA - orderB;
		});
	}, [degrees]);

	const [activeSlug, setActiveSlug] = React.useState<string>(
		sortedDegrees[0]?.slug ?? "ingenieria-en-mecatronica",
	);

	return (
		<div className="relative overflow-hidden border-b border-upc-border bg-upc-canvas">
			{/* Ambient architectural background glow (Crimson #C12329 + Steel Teal #276D8E from logo) */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_8%,rgba(193,35,41,0.08),transparent_36%),radial-gradient(circle_at_12%_58%,rgba(39,109,142,0.06),transparent_34%)]"
			/>


			{/* ===================================================================== */}
			{/* BLOQUE 2: ACORDEÓN HORIZONTAL EXPANDIBLE DE LAS 7 INGENIERÍAS         */}
			{/* ===================================================================== */}
			<section
				id="carreras"
				aria-labelledby="hero-carreras-heading"
				className="relative mx-auto max-w-7xl border-t border-upc-border px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8 lg:pb-20"
			>
				{/* Subcabecera de los desglosables */}
				<div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
					<div>
						<p className="text-[11px] font-bold uppercase tracking-[0.16em] text-upc-red">
							Oferta Educativa · 7 Programas de Ingeniería
						</p>
						<h2
							id="hero-carreras-heading"
							className="mt-1 text-2xl font-extrabold tracking-tight text-upc-ink sm:text-3xl"
						>
							Explora nuestras carreras
						</h2>
					</div>

					<div className="flex flex-wrap items-center gap-4">
						<p className="text-xs text-upc-stone sm:text-sm">
							Pasa el cursor o toca una carrera para desplegar su información
						</p>
						<a
							href="/calendario"
							className="inline-flex items-center gap-1.5 rounded-lg border border-upc-border bg-upc-surface px-3 py-1.5 text-xs font-semibold text-upc-ink shadow-sm transition-colors hover:border-upc-red-border hover:text-upc-red"
						>
							<CalendarDays className="h-3.5 w-3.5 text-upc-steel" aria-hidden="true" />
							<span>Calendario Escolar</span>
						</a>
					</div>
				</div>

				{/* Hover-Expanding Horizontal Accordion */}
				<div
					role="region"
					aria-label="Programas de ingeniería de la UPC"
					className="flex flex-col gap-3 lg:h-[470px] lg:flex-row"
				>
					{sortedDegrees.map((degree, index) => {
						const meta = DEGREE_META[degree.slug] ?? {
							icon: GraduationCap,
							areaTag: "Ingeniería UPC",
							order: index + 1,
						};
						const Icon = meta.icon;
						const isExpanded = activeSlug === degree.slug;
						const numberLabel = String(index + 1).padStart(2, "0");

						return (
							<article
								key={degree.slug}
								onMouseEnter={() => setActiveSlug(degree.slug)}
								onFocusCapture={() => setActiveSlug(degree.slug)}
								onClick={() => setActiveSlug(degree.slug)}
								className={cn(
									"group relative isolate min-w-0 overflow-hidden rounded-2xl border transition-all duration-500 ease-out",
									isExpanded
										? "min-h-[360px] border-upc-red bg-upc-dark shadow-xl lg:min-h-0 lg:flex-[4.6]"
										: "min-h-[76px] cursor-pointer border-zinc-700 bg-upc-dark shadow-sm hover:border-upc-red/80 lg:min-h-0 lg:flex-1",
								)}
							>
								{/* Background Image with Cinematic Scale */}
								<img
									src={`/images/${degree.image}`}
									alt={degree.title}
									loading={index < 2 ? "eager" : "lazy"}
									draggable="false"
									className={cn(
										"pointer-events-none absolute inset-0 -z-20 h-full w-full select-none object-cover transition-all duration-700 ease-out",
										isExpanded
											? "scale-100 opacity-100"
											: "scale-110 opacity-45 group-hover:opacity-65",
									)}
								/>

								{/* Multi-stop Dark Gray Scrim (immune to tailwind-merge via-* conflicts) */}
								<div
									aria-hidden="true"
									style={{
										background: isExpanded
											? "linear-gradient(to top, rgba(36, 36, 40, 0.96) 0%, rgba(46, 46, 52, 0.82) 42%, rgba(63, 63, 70, 0.30) 72%, rgba(63, 63, 70, 0.05) 100%)"
											: "linear-gradient(to top, rgba(36, 36, 40, 0.95) 0%, rgba(48, 48, 54, 0.82) 55%, rgba(63, 63, 70, 0.55) 100%)",
									}}
									className="pointer-events-none absolute inset-0 -z-10 transition-all duration-500"
								/>

								{/* Subtle top crimson accent line when expanded */}
								{isExpanded && (
									<div
										aria-hidden="true"
										className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C12329] via-[#F87171] to-[#C12329]"
									/>
								)}

								{/* Interior Panel Content */}
								<div
									className={cn(
										"flex h-full min-w-0 flex-col justify-between text-white",
										isExpanded ? "p-5 sm:p-6" : "p-3.5 sm:p-4 lg:px-3 lg:py-5",
									)}
								>
									{/* Top Bar: Number + Icon + Duration Pill */}
									<div className="flex items-center justify-between gap-2">
										<div
											className={cn(
												"flex min-w-0 items-center gap-2",
												!isExpanded && "lg:w-full lg:justify-center",
											)}
										>
											<span
												className={cn(
													"inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-extrabold tabular-nums transition-colors duration-300",
													isExpanded
														? "border-upc-red bg-upc-red text-white shadow-sm"
														: "border-white/30 bg-zinc-800/75 text-white shadow-sm backdrop-blur-sm group-hover:border-upc-red group-hover:bg-upc-red",
												)}
											>
												{numberLabel}
											</span>

											<span
												className={cn(
													"inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F87171]/45 bg-zinc-900/75 text-upc-red-on-dark backdrop-blur-sm transition-opacity duration-300",
													isExpanded ? "opacity-100" : "lg:hidden",
												)}
											>
												<Icon className="h-4 w-4" aria-hidden="true" />
											</span>

											{!isExpanded && (
												<span className="truncate text-sm font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] sm:text-base lg:hidden">
													{degree.subtitle}
												</span>
											)}
										</div>

										{isExpanded ? (
											<span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-zinc-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
												<Clock className="h-3.5 w-3.5 text-upc-red-on-dark" aria-hidden="true" />
												<span>
													{degree.duration} · {degree.modality}
												</span>
											</span>
										) : (
											<ArrowUpRight
												className="h-4 w-4 shrink-0 text-upc-red-on-dark lg:hidden"
												aria-hidden="true"
											/>
										)}
									</div>

									{/* Collapsed Desktop State: Vertical Title + Bottom Icon */}
									{!isExpanded && (
										<div className="hidden flex-1 flex-col items-center justify-end gap-4 pb-1 lg:flex">
											<p className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-sm font-extrabold tracking-wider text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] transition-colors group-hover:text-upc-red-on-dark">
												{degree.subtitle}
											</p>
											<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-zinc-800/75 text-upc-red-on-dark shadow-sm backdrop-blur-sm transition-colors duration-200 group-hover:border-upc-red group-hover:bg-upc-red group-hover:text-white">
												<Icon className="h-4 w-4" aria-hidden="true" />
											</span>
										</div>
									)}

									{/* Expanded State: Full Career Showcase + Actions Stacked Cleanly */}
									{isExpanded && (
										<div className="mt-auto flex w-full min-w-0 flex-col gap-4 pt-8">
											<div className="min-w-0 space-y-2">
												<div className="flex flex-wrap items-center gap-2">
													<span className="inline-flex items-center rounded-full bg-upc-red px-3 py-0.5 text-[11px] font-bold text-white shadow-sm">
														{meta.areaTag}
													</span>
													<span className="inline-flex items-center gap-1 text-xs font-medium text-white/90">
														<MapPin className="h-3.5 w-3.5 shrink-0 text-upc-red-on-dark" aria-hidden="true" />
														<span>Campus UPC · Tabasco</span>
													</span>
												</div>

												<h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl">
													{degree.title}
												</h3>

												<p className="line-clamp-3 max-w-lg text-xs leading-relaxed text-white/90 sm:text-sm">
													{degree.description}
												</p>
											</div>

											<div className="flex flex-wrap items-center gap-2.5 pt-1">
												<a
													href={`/carreras/${degree.slug}`}
													onClick={(e) => e.stopPropagation()}
													className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-upc-red px-4 text-xs font-bold text-white shadow-md transition-colors hover:bg-upc-red-hover sm:text-sm"
												>
													<span>Explorar carrera</span>
													<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
												</a>

												{degree.pdf && (
													<a
														href={`/docs/${degree.pdf}`}
														target="_blank"
														rel="noopener noreferrer"
														onClick={(e) => e.stopPropagation()}
														className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl border border-white/25 bg-zinc-900/75 px-3.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:border-upc-red-on-dark/60 hover:bg-zinc-900"
													>
														<FileText className="h-3.5 w-3.5 shrink-0 text-upc-red-on-dark" aria-hidden="true" />
														<span>Mapa curricular</span>
													</a>
												)}
											</div>
										</div>
									)}
								</div>
							</article>
						);
					})}
				</div>
			</section>
		</div>
	);
};
