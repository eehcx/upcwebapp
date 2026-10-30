import * as React from "react";
import { cn } from "@/shared/lib";
import { CHAPTERS } from "./conocenos.data";

/**
 * Índice de capítulos fijo bajo la cabecera: resalta el capítulo visible (scroll spy)
 * y muestra el progreso de lectura del artículo. Enlaces nativos con ancla, así funciona sin JS.
 */
export const ChapterNav: React.FC = () => {
	const [active, setActive] = React.useState<string>(CHAPTERS[0].id);
	const barRef = React.useRef<HTMLDivElement>(null);
	const listRef = React.useRef<HTMLOListElement>(null);

	// Scroll spy: el capítulo activo es el que cruza la franja superior de la ventana
	React.useEffect(() => {
		const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
			(el): el is HTMLElement => !!el,
		);
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setActive(entry.target.id);
				}
			},
			{ rootMargin: "-30% 0px -65% 0px" },
		);
		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);

	// Progreso de lectura desde el primer capítulo hasta el final del último
	React.useEffect(() => {
		const first = document.getElementById(CHAPTERS[0].id);
		const last = document.getElementById(CHAPTERS[CHAPTERS.length - 1].id);
		const bar = barRef.current;
		if (!first || !last || !bar) return;
		let frame = 0;
		const update = () => {
			const start = first.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.3;
			const end = last.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
			const progress = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
			bar.style.transform = `scaleX(${progress})`;
		};
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	// En móvil, mantiene visible el capítulo activo dentro de la tira deslizable
	React.useEffect(() => {
		const list = listRef.current;
		const item = list?.querySelector<HTMLElement>(`[data-chapter="${active}"]`);
		if (!list || !item || list.scrollWidth <= list.clientWidth) return;
		list.scrollTo({ left: item.offsetLeft - list.clientWidth / 2 + item.offsetWidth / 2, behavior: "smooth" });
	}, [active]);

	return (
		<nav
			aria-label="Capítulos de la página"
			className="sticky top-16 z-40 border-b border-upc-ink/10 lg:top-20 bg-upc-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-upc-canvas/90"
		>
			<ol
				ref={listRef}
				className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 lg:justify-between lg:px-8 [&::-webkit-scrollbar]:hidden"
			>
				{CHAPTERS.map((c) => {
					const isActive = c.id === active;
					return (
						<li key={c.id} data-chapter={c.id} className="shrink-0">
							<a
								href={`#${c.id}`}
								aria-current={isActive ? "location" : undefined}
								className={cn(
									"group flex min-h-12 items-center gap-2 rounded px-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upc-red",
									isActive ? "text-upc-red" : "text-upc-body hover:text-upc-ink",
								)}
							>
								<span className="font-display text-xs italic tabular-nums">{c.number}</span>
								<span className={cn("font-semibold", isActive && "underline decoration-2 underline-offset-[6px]")}>
									{c.label}
								</span>
							</a>
						</li>
					);
				})}
			</ol>
			<div aria-hidden="true" className="h-0.5 w-full bg-upc-ink/5">
				<div ref={barRef} className="h-full origin-left scale-x-0 bg-upc-red" />
			</div>
		</nav>
	);
};
