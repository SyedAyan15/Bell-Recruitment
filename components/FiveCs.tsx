// The 5C framework (Compensation, Commute, Culture, Career, Competence) as five cards.
// The wording of each question differs between employer and candidate pages, so pages
// pass their own text; the names and icons are fixed here.
const C_ICONS: Record<string, string> = {
  Compensation: "fa-sterling-sign",
  Commute: "fa-route",
  Culture: "fa-people-group",
  Career: "fa-arrow-trend-up",
  Competence: "fa-award",
};

export type FiveCItem = { name: keyof typeof C_ICONS | string; text: string };

export default function FiveCs({ items }: { items: FiveCItem[] }) {
  return (
    <div className="five-cs">
      {items.map((c) => (
        <div className="five-c" key={c.name}>
          <div className="five-c-icon">
            <i className={`fas ${C_ICONS[c.name] ?? "fa-check"}`} aria-hidden="true" />
          </div>
          <h3>{c.name}</h3>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
}
