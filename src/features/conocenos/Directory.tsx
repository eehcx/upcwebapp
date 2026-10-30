import * as React from "react";
import { Mail, Phone, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/shared/lib";
import { DIRECTORY, SWITCHBOARD, type DirectoryEntry } from "./conocenos.data";

const FOCUS_RING =
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upc-red focus-visible:ring-offset-2";

const normalize = (text: string) =>
	text
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "")
		.toLowerCase();

const ALL = "todas";
const FILTERS = [{ id: ALL, label: "Todas" }, ...DIRECTORY.map((a) => ({ id: a.id, label: a.label }))];

const EntryRow: React.FC<{ entry: DirectoryEntry; index: number }> = ({ entry, index }) => (
	<li
		className="grid gap-x-6 gap-y-1 border-t border-upc-ink/10 py-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:fill-mode-both motion-safe:duration-300 sm:grid-cols-12 sm:items-baseline"
		style={{ animationDelay: `${Math.min(index, 10) * 30}ms` }}
	>
		<p className="text-xs font-bold uppercase tracking-[0.14em] text-upc-red sm:col-span-4">{entry.role}</p>
		<p className="font-display text-xl text-upc-ink sm:col-span-4">{entry.name}</p>
		<div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-upc-body sm:col-span-4 sm:justify-end">
			{entry.ext && (
				<span className="inline-flex items-center gap-1.5 tabular-nums">
					<Phone className="h-3.5 w-3.5 text-upc-stone" aria-hidden="true" />
					Ext. {entry.ext}
				</span>
			)}
			<a
				href={`mailto:${entry.email}`}
				className={cn("inline-flex items-center gap-1.5 rounded break-all hover:text-upc-red", FOCUS_RING)}
			>
				<Mail className="h-3.5 w-3.5 shrink-0 text-upc-stone" aria-hidden="true" />
				{entry.email}
			</a>
		</div>
	</li>
);

/** Directorio institucional: filtro por área (inspirado en shadcn studio team-section-12) y buscador. */
export const Directory: React.FC = () => {
	const [area, setArea] = React.useState(ALL);
	const [query, setQuery] = React.useState("");

	const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
	const groups = DIRECTORY.filter((a) => area === ALL || a.id === area)
		.map((a) => ({
			...a,
			entries: a.entries.filter((e) => {
				const text = normalize(`${e.role} ${e.name} ${e.email} ${e.ext ?? ""} ${a.label}`);
				return terms.every((t) => text.includes(t));
			}),
		}))
		.filter((a) => a.entries.length > 0);
	const count = groups.reduce((n, g) => n + g.entries.length, 0);

	return (
		<div>
			<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
				<div role="group" aria-label="Filtrar por área" className="flex flex-wrap gap-2">
					{FILTERS.map((f) => (
						<button
							key={f.id}
							type="button"
							aria-pressed={area === f.id}
							onClick={() => setArea(f.id)}
							className={cn(
								"min-h-11 cursor-pointer rounded-full border px-4 text-sm font-semibold transition-colors duration-200",
								FOCUS_RING,
								area === f.id
									? "border-upc-ink bg-upc-ink text-white"
									: "border-upc-ink/15 bg-transparent text-upc-ink hover:border-upc-ink/40",
							)}
						>
							{f.label}
						</button>
					))}
				</div>
				<div className="relative w-full lg:max-w-xs">
					<label htmlFor="directory-search" className="sr-only">
						Buscar en el directorio
					</label>
					<Search
						className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-upc-stone"
						aria-hidden="true"
					/>
					<Input
						id="directory-search"
						type="search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Área, nombre o correo"
						autoComplete="off"
						className="h-11 rounded-full border-upc-ink/15 bg-transparent pl-10 pr-10 text-base shadow-none focus-visible:ring-2 focus-visible:ring-upc-red md:text-sm [&::-webkit-search-cancel-button]:hidden"
					/>
					{query && (
						<button
							type="button"
							onClick={() => setQuery("")}
							aria-label="Borrar búsqueda"
							className={cn(
								"absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-upc-stone hover:text-upc-red",
								FOCUS_RING,
							)}
						>
							<X className="h-4 w-4" aria-hidden="true" />
						</button>
					)}
				</div>
			</div>

			<p className="sr-only" aria-live="polite">
				{`${count} ${count === 1 ? "contacto" : "contactos"}`}
			</p>

			<div className="mt-10 space-y-12">
				{groups.map((g) => (
					<section key={`${g.id}-${area}`} aria-labelledby={`dir-${g.id}`}>
						<h3
							id={`dir-${g.id}`}
							className="mb-2 flex items-baseline justify-between font-display text-2xl italic text-upc-ink"
						>
							{g.label}
							<span className="font-sans text-xs not-italic tracking-wider text-upc-stone">
								{g.entries.length}
							</span>
						</h3>
						<ul className="border-b border-upc-ink/10">
							{g.entries.map((e, i) => (
								<EntryRow key={e.email} entry={e} index={i} />
							))}
						</ul>
					</section>
				))}
				{count === 0 && (
					<p className="border-t border-upc-ink/10 pt-6 text-base text-upc-body">
						Sin resultados. Llama al conmutador{" "}
						<a href={`tel:${SWITCHBOARD.tel}`} className="font-semibold text-upc-red hover:underline">
							{SWITCHBOARD.label}
						</a>{" "}
						y te canalizamos.
					</p>
				)}
			</div>
		</div>
	);
};
