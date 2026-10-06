import StatCounter from "./StatCounter";

export type ProofItem = { value: string; label: string; countUp?: boolean };

// Row of headline numbers ("500+ placements" etc.). Numbers count up when scrolled into view.
export default function ProofStrip({ items }: { items: ProofItem[] }) {
  return (
    <div className="stats-bar">
      <div className="stats-grid">
        {items.map((item) => (
          <div key={item.label}>
            <StatCounter value={item.value} countUp={item.countUp} />
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
