import * as React from "react";
import { ArrowUpRight, ChevronRight, Clock, Mail, MessagesSquare, Phone, Search, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/shared/lib";
import { FAQ_CATEGORIES, FAQ_CONTACT, type FaqItem } from "./faq.data";

const FOCUS_RING =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upc-red focus-visible:ring-offset-2";

/** Minúsculas y sin acentos, para que "admision" encuentre "Admisión". */
const normalize = (text: string) =>
	text
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "")
		.toLowerCase();

const searchableText = (item: FaqItem) =>
	normalize([item.question, ...item.answer, ...(item.list ?? [])].join(" "));

const FaqAnswer: React.FC<{ item: FaqItem }> = ({ item }) => (
	<div className="space-y-3 text-base leading-relaxed text-upc-body">
		{item.answer.map((p) => (
			<p key={p}>{p}</p>
		))}
		{item.list && (
			<ul className="list-disc space-y-1 pl-5 marker:text-upc-red">
				{item.list.map((li) => (
					<li key={li}>{li}</li>
				))}
			</ul>
		)}
		{item.links && (
			<div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
				{item.links.map((link) => {
					const external = link.href.startsWith("http");
					return (
						<a
							key={link.href}
							href={link.href}
							{...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
							className={cn(
								"inline-flex items-center gap-1 rounded text-sm font-semibold text-upc-red hover:underline",
								FOCUS_RING,
							)}
						>
							{link.label}
							<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
						</a>
					);
				})}
			</div>
		)}
	</div>
);

const FaqAccordion: React.FC<{ items: FaqItem[]; defaultOpen?: string; staggered?: boolean }> = ({
	items,
	defaultOpen,
	staggered,
}) => (
	<Accordion
		type="single"
		collapsible
		defaultValue={defaultOpen}
		className="w-full overflow-hidden rounded-2xl border border-upc-border bg-upc-surface"
	>
		{items.map((item, i) => (
			<AccordionItem
				key={item.id}
				value={item.id}
				className={cn(
					"border-upc-border last:border-b-0",
					// Entrada escalonada de las preguntas al montar la pestaña
					staggered &&
						"motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:fill-mode-both motion-safe:duration-300",
				)}
				style={staggered ? { animationDelay: `${120 + i * 50}ms` } : undefined}
			>
				<AccordionTrigger
					className={cn(
						"gap-4 px-5 py-4 text-base font-semibold text-upc-ink hover:no-underline hover:text-upc-red data-[state=open]:text-upc-red",
						FOCUS_RING,
						"focus-visible:ring-inset focus-visible:ring-offset-0",
					)}
				>
					{item.question}
				</AccordionTrigger>
				<AccordionContent className="px-5 pb-5">
					<FaqAnswer item={item} />
				</AccordionContent>
			</AccordionItem>
		))}
	</Accordion>
);

const ContactCard: React.FC = () => (
	<aside className="rounded-2xl border border-upc-red-border bg-upc-red-soft p-6 text-center">
		<MessagesSquare className="mx-auto h-12 w-12 text-upc-red" aria-hidden="true" />
		<h2 className="mt-4 text-lg font-bold text-upc-ink">¿Aún tienes dudas?</h2>
		<p className="mt-2 text-sm leading-relaxed text-upc-body">
			Escríbenos o llámanos y te respondemos a la brevedad.
		</p>
		<a
			href={`mailto:${FAQ_CONTACT.email}`}
			className={cn(
				"mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-upc-red px-5 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-upc-red-hover",
				FOCUS_RING,
			)}
		>
			<Mail className="h-4 w-4" aria-hidden="true" />
			Escríbenos
		</a>
		<ul className="mt-5 space-y-2 text-left text-sm text-upc-body">
			<li className="flex items-center gap-2">
				<Mail className="h-4 w-4 shrink-0 text-upc-red" aria-hidden="true" />
				<a
					href={`mailto:${FAQ_CONTACT.email}`}
					className={cn("break-all rounded hover:text-upc-red", FOCUS_RING)}
				>
					{FAQ_CONTACT.email}
				</a>
			</li>
			<li className="flex items-center gap-2">
				<Phone className="h-4 w-4 shrink-0 text-upc-red" aria-hidden="true" />
				<a href={`tel:+52${FAQ_CONTACT.phone}`} className={cn("rounded hover:text-upc-red", FOCUS_RING)}>
					{FAQ_CONTACT.phoneLabel}
				</a>
			</li>
			<li className="flex items-center gap-2">
				<Clock className="h-4 w-4 shrink-0 text-upc-red" aria-hidden="true" />
				{FAQ_CONTACT.schedule}
			</li>
		</ul>
	</aside>
);

/**
 * Preguntas frecuentes: pestañas verticales por categoría (shadcn studio faq-component-08),
 * buscador con filtrado real (faq-component-06) y tarjeta de contacto (faq-component-09).
 * La pestaña inicial puede venir en el hash (#admision) para enlazar a una categoría.
 */
export const FaqSection: React.FC = () => {
	const [query, setQuery] = React.useState("");
	const [tab, setTab] = React.useState(FAQ_CATEGORIES[0].id);
	// 1 = la nueva pestaña está después de la anterior (abajo/derecha), -1 = antes
	const [direction, setDirection] = React.useState<1 | -1>(1);
	const tabRef = React.useRef(tab);

	const selectTab = React.useCallback((value: string) => {
		// Radix avisa dos veces por clic (mousedown y focus); la segunda no debe recalcular la dirección
		if (value === tabRef.current) return;
		const indexOf = (id: string) => FAQ_CATEGORIES.findIndex((c) => c.id === id);
		setDirection(indexOf(value) >= indexOf(tabRef.current) ? 1 : -1);
		tabRef.current = value;
		setTab(value);
	}, []);

	React.useEffect(() => {
		const syncFromHash = () => {
			const fromHash = window.location.hash.slice(1);
			if (FAQ_CATEGORIES.some((c) => c.id === fromHash)) {
				selectTab(fromHash);
				setQuery("");
			}
		};
		syncFromHash();
		window.addEventListener("hashchange", syncFromHash);
		return () => window.removeEventListener("hashchange", syncFromHash);
	}, [selectTab]);

	const changeTab = (value: string) => {
		selectTab(value);
		history.replaceState(null, "", `#${value}`);
	};

	const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
	const results = React.useMemo(
		() =>
			terms.length === 0
				? []
				: FAQ_CATEGORIES.map((c) => ({
						...c,
						items: c.items.filter((item) => {
							const text = searchableText(item);
							return terms.every((t) => text.includes(t));
						}),
					})).filter((c) => c.items.length > 0),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[terms.join(" ")],
	);
	const resultCount = results.reduce((n, c) => n + c.items.length, 0);
	const searching = terms.length > 0;

	return (
		<section aria-labelledby="faq-heading" className="bg-upc-canvas">
			<div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24">
				<header className="rounded-3xl border border-upc-border bg-upc-surface px-6 py-10 text-center sm:px-10 sm:py-12">
					<p className="text-sm font-bold uppercase tracking-wider text-upc-red">Preguntas frecuentes</p>
					<h1
						id="faq-heading"
						className="mt-3 text-balance text-3xl font-bold tracking-tight text-upc-ink sm:text-4xl lg:text-5xl"
					>
						¿Tienes dudas? Aquí te ayudamos
					</h1>
					<p className="mx-auto mt-4 max-w-2xl text-base text-upc-body sm:text-lg">
						Respuestas sobre admisión, trámites, carreras y estadías en la Universidad Politécnica del
						Centro.
					</p>
					<div className="relative mx-auto mt-8 max-w-xl">
						<label htmlFor="faq-search" className="sr-only">
							Buscar una pregunta
						</label>
						<Search
							className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-upc-stone"
							aria-hidden="true"
						/>
						<Input
							id="faq-search"
							type="search"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Busca tu pregunta…"
							autoComplete="off"
							className="h-12 rounded-xl border-upc-border bg-upc-canvas pl-12 pr-12 text-base shadow-none focus-visible:ring-2 focus-visible:ring-upc-red md:text-base [&::-webkit-search-cancel-button]:hidden"
						/>
						{query && (
							<button
								type="button"
								onClick={() => setQuery("")}
								aria-label="Borrar búsqueda"
								className={cn(
									"absolute right-1 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-upc-stone hover:text-upc-red",
									FOCUS_RING,
								)}
							>
								<X className="h-5 w-5" aria-hidden="true" />
							</button>
						)}
					</div>
					<p className="sr-only" aria-live="polite">
						{searching ? `${resultCount} resultados para ${query}` : ""}
					</p>
				</header>

				<div className="mt-10 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10">
					<div className="lg:col-span-9">
						{searching ? (
							<div className="space-y-8 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200">
								<p className="text-sm font-semibold text-upc-body">
									{resultCount === 0
										? `Sin resultados para “${query.trim()}”.`
										: `${resultCount} ${resultCount === 1 ? "resultado" : "resultados"} para “${query.trim()}”`}
								</p>
								{resultCount === 0 && (
									<p className="text-base text-upc-body">
										Prueba con otras palabras o escríbenos: con gusto te respondemos.
									</p>
								)}
								{results.map((c) => (
									<div key={c.id}>
										<h2 className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-upc-steel">
											<c.icon className="h-4 w-4" aria-hidden="true" />
											{c.label}
										</h2>
										<FaqAccordion items={c.items} />
									</div>
								))}
							</div>
						) : (
							<Tabs value={tab} onValueChange={changeTab} orientation="vertical">
								<div className="grid grid-cols-1 gap-8 md:grid-cols-12">
									<TabsList
										aria-label="Categorías de preguntas"
										className="-mx-4 flex h-auto w-auto justify-start gap-2 overflow-x-auto bg-transparent px-4 pb-1 [scrollbar-width:none] md:col-span-4 md:mx-0 md:h-max md:flex-col md:items-stretch md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
									>
										{FAQ_CATEGORIES.map((c) => (
											<TabsTrigger
												key={c.id}
												value={c.id}
												className={cn(
													"group min-h-11 shrink-0 gap-2.5 rounded-xl border border-upc-border bg-upc-surface px-4 py-2.5 text-sm font-semibold text-upc-ink shadow-none transition-colors duration-200 hover:border-upc-red-border hover:text-upc-red md:justify-start md:px-5 md:text-base",
													"data-[state=active]:border-upc-red-border data-[state=active]:bg-upc-red-soft data-[state=active]:text-upc-red data-[state=active]:shadow-none",
													FOCUS_RING,
												)}
											>
												<c.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
												<span className="flex-1 text-left">{c.label}</span>
												<span
													aria-hidden="true"
													className="hidden text-xs font-medium text-upc-stone md:inline"
												>
													{c.items.length}
												</span>
												<ChevronRight
													className="hidden h-4 w-4 transition-transform duration-200 group-data-[state=active]:translate-x-1 md:block"
													aria-hidden="true"
												/>
											</TabsTrigger>
										))}
									</TabsList>

									<div className="md:col-span-8">
										{FAQ_CATEGORIES.map((c) => (
											<TabsContent
												key={c.id}
												value={c.id}
												className={cn(
													"mt-0 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 motion-safe:ease-out",
													direction === 1
														? "motion-safe:slide-in-from-right-4 md:motion-safe:slide-in-from-right-0 md:motion-safe:slide-in-from-bottom-4"
														: "motion-safe:slide-in-from-left-4 md:motion-safe:slide-in-from-left-0 md:motion-safe:slide-in-from-top-4",
												)}
											>
												<FaqAccordion items={c.items} defaultOpen={c.items[0]?.id} staggered />
											</TabsContent>
										))}
									</div>
								</div>
							</Tabs>
						)}
					</div>

					<div className="lg:col-span-3">
						<ContactCard />
					</div>
				</div>
			</div>
		</section>
	);
};
