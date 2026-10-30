import * as React from "react";
import { ArrowRight, ArrowUpRight, Clock, GraduationCap, MapPin, Pause, Play } from "lucide-react";
import { cn } from "@/shared/lib";
import { DEGREE_META, type DegreeHeroItem } from "./MainCarousel";

interface Props {
	degrees: DegreeHeroItem[];
}

const ROTATE_MS = 6000;

const FOCUS_RING =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upc-red focus-visible:ring-offset-2";

/** Orden aleatorio del resto de carreras (sin `current`), para no repetir dentro de una vuelta. */
const shuffledQueue = (length: number, current: number) => {
	const queue = Array.from({ length }, (_, i) => i).filter((i) => i !== current);
	for (let i = queue.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[queue[i], queue[j]] = [queue[j], queue[i]];
	}
	return queue;
};

/**
 * Hero "Elige tu ingeniería".
 * Tabs accesibles que cambian foto, área y enlace de cada carrera. Rotan solas en orden
 * aleatorio (las 7 antes de repetir) y se pausan con hover, foco, pestaña oculta o fuera
 * de pantalla. Elegir una carrera detiene la rotación; con reduced motion no arranca.
 */
export const HeroCareers: React.FC<Props> = ({ degrees }) => {
	const items = React.useMemo(
		() =>
			[...degrees].sort(
				(a, b) => (DEGREE_META[a.slug]?.order ?? 99) - (DEGREE_META[b.slug]?.order ?? 99),
			),
		[degrees],
	);
	const [active, setActive] = React.useState(0);
	const [playing, setPlaying] = React.useState(true);
	const [hovered, setHovered] = React.useState(false);
	const [focused, setFocused] = React.useState(false);
	const [hidden, setHidden] = React.useState(false);

	const sectionRef = React.useRef<HTMLElement>(null);
	const stripRef = React.useRef<HTMLDivElement>(null);
	const tabsRef = React.useRef<(HTMLButtonElement | null)[]>([]);
	const queueRef = React.useRef<number[]>([]);

	const running = playing && !hovered && !focused && !hidden && items.length > 1;

	// Sin rotación si el usuario pide movimiento reducido
	React.useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
	}, []);

	// Pausa cuando el hero sale de pantalla o la pestaña queda oculta
	React.useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		let offscreen = false;
		const update = () => setHidden(offscreen || document.visibilityState === "hidden");
		const observer = new IntersectionObserver(([entry]) => {
			offscreen = !entry.isIntersecting;
			update();
		});
		observer.observe(section);
		document.addEventListener("visibilitychange", update);
		return () => {
			observer.disconnect();
			document.removeEventListener("visibilitychange", update);
		};
	}, []);

	// Avance aleatorio. Se reinicia con cada cambio, así la barra de progreso y el timer van juntos.
	React.useEffect(() => {
		if (!running) return;
		const timer = window.setTimeout(() => {
			if (queueRef.current.length === 0) {
				queueRef.current = shuffledQueue(items.length, active);
			}
			setActive(queueRef.current.shift()!);
		}, ROTATE_MS);
		return () => window.clearTimeout(timer);
	}, [running, active, items.length]);

	// Mantiene visible la pestaña activa en la tira deslizable de móvil, sin mover la página
	React.useEffect(() => {
		const strip = stripRef.current;
		const tab = tabsRef.current[active];
		if (!strip || !tab || strip.scrollWidth <= strip.clientWidth) return;
		const left = tab.offsetLeft - strip.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2;
		strip.scrollTo({ left, behavior: "smooth" });
	}, [active]);

	const select = (i: number) => {
		setActive(i);
		setPlaying(false);
		queueRef.current = []; // la próxima vuelta parte de la carrera elegida
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		const keys: Record<string, number> = {
			ArrowRight: active + 1,
			ArrowDown: active + 1,
			ArrowLeft: active - 1,
			ArrowUp: active - 1,
			Home: 0,
			End: items.length - 1,
		};
		if (!(e.key in keys)) return;
		e.preventDefault();
		const next = (keys[e.key] + items.length) % items.length;
		select(next);
		tabsRef.current[next]?.focus();
	};

	const current = items[active];
	if (!current) return null;
	const meta = DEGREE_META[current.slug];

	return (
		<section
			ref={sectionRef}
			aria-labelledby="hero-careers-heading"
			aria-roledescription="carrusel"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onFocus={() => setFocused(true)}
			onBlur={(e) => {
				if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
			}}
			className="relative overflow-hidden border-b border-upc-border bg-upc-canvas"
		>
			<div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-5 sm:px-6 sm:pb-16 sm:pt-8 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-10 lg:px-8 lg:pb-20 lg:pt-10">
				<div className="flex flex-col gap-6 lg:col-span-6">
					<p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-upc-red-border bg-upc-red-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-upc-red">
						<span className="h-2 w-2 rounded-full bg-upc-red" aria-hidden="true" />
						Admisiones abiertas
					</p>

					<h1
						id="hero-careers-heading"
						className="text-4xl font-bold leading-[1.1] tracking-tight text-upc-ink sm:text-5xl"
					>
						Estudia Ingeniería en{" "}
						<span
							key={current.slug}
							className="block text-upc-red motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500"
						>
							{current.subtitle}
						</span>
					</h1>

					<div
						id="hero-careers-panel"
						role="tabpanel"
						aria-labelledby={`hero-tab-${current.slug}`}
						aria-live={running ? "off" : "polite"}
						className="space-y-4"
					>
						<p
							key={`${current.slug}-tag`}
							className="text-sm font-semibold uppercase tracking-wider text-upc-steel motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500"
						>
							{meta?.areaTag ?? "Ingeniería UPC"}
						</p>
						<p
							key={`${current.slug}-desc`}
							className="min-h-[5.25rem] max-w-xl text-base leading-relaxed text-upc-body motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 sm:text-lg"
						>
							{current.description}
						</p>
						<ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-upc-ink">
							<li className="inline-flex items-center gap-1.5">
								<Clock className="h-4 w-4 text-upc-red" aria-hidden="true" />
								10 cuatrimestres
							</li>
							<li className="inline-flex items-center gap-1.5">
								<MapPin className="h-4 w-4 text-upc-red" aria-hidden="true" />
								{current.modality}
							</li>
						</ul>
					</div>

					<div className="flex flex-wrap gap-3.5 pt-1">
						<a
							href="/admision"
							className={cn(
								"group inline-flex min-h-12 items-center gap-2 rounded-xl bg-upc-red px-6 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-upc-red-hover",
								FOCUS_RING,
							)}
						>
							<GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
							<span>Quiero inscribirme</span>
							<ArrowRight
								className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
								aria-hidden="true"
							/>
						</a>
						<a
							href={`/carreras/${current.slug}`}
							className={cn(
								"inline-flex min-h-12 items-center gap-2 rounded-xl border border-upc-border bg-upc-surface px-5 text-sm font-semibold text-upc-ink transition-colors duration-200 hover:border-upc-red-border hover:text-upc-red",
								FOCUS_RING,
							)}
						>
							<span>Conocer {current.subtitle}</span>
							<ArrowUpRight className="h-4 w-4 text-upc-red" aria-hidden="true" />
						</a>
					</div>
				</div>

				<div className="relative max-lg:order-last lg:col-span-6">
					<div
						aria-hidden="true"
						className="absolute -right-4 -top-4 h-2/3 w-2/3 rounded-3xl rounded-tr-[4rem] bg-upc-red/90 max-sm:hidden"
					/>
					<div className="relative aspect-[4/3] overflow-hidden rounded-3xl rounded-tr-[4rem] bg-upc-muted shadow-xl">
						{items.map((d, i) => (
							<img
								key={d.slug}
								src={`/images/${d.image}`}
								alt={i === active ? `Estudiantes de ${d.title}` : ""}
								aria-hidden={i !== active}
								loading={i === 0 ? "eager" : "lazy"}
								decoding="async"
								className={cn(
									"absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
									i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
								)}
							/>
						))}
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
							<p className="text-sm font-semibold text-white">{current.title}</p>
						</div>
					</div>
				</div>

				<div className="min-w-0 lg:col-span-12">
					<div className="mb-3 flex items-center justify-between gap-4">
						<p id="hero-careers-label" className="text-sm font-semibold text-upc-body">
							Elige una ingeniería
						</p>
						<button
							type="button"
							onClick={() => setPlaying((p) => !p)}
							aria-label={playing ? "Pausar el cambio automático de carreras" : "Reanudar el cambio automático de carreras"}
							className={cn(
								"inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-upc-border bg-upc-surface text-upc-ink transition-colors hover:border-upc-red-border hover:text-upc-red",
								FOCUS_RING,
							)}
						>
							{playing ? (
								<Pause className="h-4 w-4" aria-hidden="true" />
							) : (
								<Play className="h-4 w-4" aria-hidden="true" />
							)}
						</button>
					</div>
					<div
						ref={stripRef}
						role="tablist"
						aria-labelledby="hero-careers-label"
						onKeyDown={handleKeyDown}
						className="-mx-4 flex gap-2.5 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
					>
						{items.map((d, i) => {
							const Icon = DEGREE_META[d.slug]?.icon ?? GraduationCap;
							const selected = i === active;
							return (
								<button
									key={d.slug}
									ref={(el) => {
										tabsRef.current[i] = el;
									}}
									id={`hero-tab-${d.slug}`}
									type="button"
									role="tab"
									aria-selected={selected}
									aria-controls="hero-careers-panel"
									tabIndex={selected ? 0 : -1}
									onClick={() => select(i)}
									className={cn(
										"relative inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 overflow-hidden rounded-full border px-4 text-sm font-semibold transition-colors duration-200",
										FOCUS_RING,
										selected
											? "border-upc-red bg-upc-red text-white shadow-sm"
											: "border-upc-border bg-upc-surface text-upc-ink hover:border-upc-red-border hover:text-upc-red",
									)}
								>
									<Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
									{d.subtitle}
									{/* Barra de progreso: se monta con cada ciclo del timer, así ambos arrancan juntos */}
									{selected && running && (
										<span
											aria-hidden="true"
											className="hero-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-white/70"
											style={{ animationDuration: `${ROTATE_MS}ms` }}
										/>
									)}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
