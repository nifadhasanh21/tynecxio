export default function ServiceCard({ title, bullets, outcome, icon }) {
  return (
    <div className="card lift">
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        {icon && <div style={{ fontSize: "28px", lineHeight: 1 }}>{icon}</div>}
        <div style={{ fontWeight: 800, fontSize: "18px" }}>{title}</div>
      </div>
      <ul className="list">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="small" style={{ marginTop: 12 }}>
        <b>Outcome:</b> {outcome}
      </div>
    </div>
  );
}