import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success", msg: "Message sent successfully!" });
      e.currentTarget.reset();
    } catch (err) {
      console.log("EmailJS Error:", err);
      setStatus({ type: "error", msg: "Email failed. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card lift">
      <div style={{ fontWeight: 950, fontSize: 22, marginBottom: 6 }}>Send a message</div>
      <div className="small" style={{ marginBottom: 14 }}>We reply within 24–48 hours.</div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <input name="name" placeholder="Name *" required />
        <input name="email" type="email" placeholder="Email *" required />
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
        <select name="service" required defaultValue="General / Not sure">
          <option value="General / Not sure">General / Not sure</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Website / Web App Development">Website / Web App Development</option>
          <option value="E-Commerce Store">E-Commerce Store</option>
          <option value="Mobile App UI">Mobile App UI</option>
          <option value="Brand Identity & Graphics">Brand Identity & Graphics</option>
          <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
        </select>

        <select name="budget" defaultValue="$350 - $600">
          <option value="$350 - $600">$350 - $600</option>
          <option value="$400 - $900">$400 - $900</option>
          <option value="$900+">$900+</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Project details *"
        required
        style={{ marginTop: 12, minHeight: 140 }}
      />

      <button className="btn primary wide" type="submit" disabled={loading} style={{ marginTop: 12 }}>
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status.msg && (
        <div
          className="card"
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 14,
            background: status.type === "error" ? "rgba(255,80,80,0.12)" : "rgba(80,255,160,0.12)",
            border: status.type === "error" ? "1px solid rgba(255,80,80,0.25)" : "1px solid rgba(80,255,160,0.25)"
          }}
        >
          <b>{status.type === "error" ? "Error:" : "Success:"}</b> {status.msg}
        </div>
      )}
    </form>
  );
}
