export default function PackageCard({ name, tagline, includes, timeline, price, buttonText, badge }) {
  // Calculate discount percentage (you'll need to pass this as a prop or calculate)
  const discountPercentage = "65% OFF"; // Example - you'll need to pass this dynamically

  // Add this color mapping object
  const badgeColors = {
    'Most Popular': { background: '#FF6B6B', shadow: '0 4px 15px rgba(255, 107, 107, 0.3)' },
    'UI/UX': { background: '#4ECDC4', shadow: '0 4px 15px rgba(78, 205, 196, 0.3)' },
    'E-Commerce': { background: '#FFB347', shadow: '0 4px 15px rgba(255, 179, 71, 0.3)' },
    'Mobile': { background: '#A06BFF', shadow: '0 4px 15px rgba(160, 107, 255, 0.3)' },
    'Design': { background: '#3B9E8E', shadow: '0 4px 15px rgba(59, 158, 142, 0.3)' },
    'Growth': { background: '#FF8C69', shadow: '0 4px 15px rgba(255, 140, 105, 0.3)' }
  };

  // Get the color for this badge, default to Most Popular if not found
  const badgeStyle = badgeColors[badge] || badgeColors['Most Popular'];

  return (
    <div className="card lift package-card">
      {/* Badge moved to top */}
      {badge && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span 
            className="badge featured" 
            style={{
              background: badgeStyle.background,
              boxShadow: badgeStyle.shadow
            }}
          >
            {badge}
          </span>
          <span className="discount-badge">{discountPercentage}</span>
        </div>
      )}

      {/* Title and tagline */}
      <div>
        <div style={{ fontWeight: 900, fontSize: 20 }}>{name}</div>
        <div className="small" style={{ color: "rgba(229, 231, 235, 0.7)", marginTop: 4 }}>{tagline}</div>
      </div>

      {/* Features list */}
      <ul className="list" style={{ marginTop: 16, marginBottom: 16 }}>
        {includes.map((x, i) => <li key={i}>{x}</li>)}
      </ul>

      {/* CTA Button */}
      <a className="btn primary" href="#contact" style={{ marginTop: 8, width: "100%" }}>
        {buttonText} →
      </a>
    </div>
  );
}