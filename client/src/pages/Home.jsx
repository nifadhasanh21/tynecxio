
import ScrollProgress from "../components/ScrollProgress.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Section from "../components/Section.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import PackageCard from "../components/PackageCard.jsx";
import FAQItem from "../components/FAQItem.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { 
  FaBullseye, 
  FaBolt, 
  FaHandshake, 
  FaGlobe, 
  FaCogs, 
  FaRocket, 
  FaGem, 
  FaBolt as FaLightning, 
  FaCrown, 
  FaMagic, 
  FaStar, 
  FaCrosshairs, 
  FaCompass, 
  FaAtom,
  FaPaintBrush,
  FaLaptopCode,
  FaShoppingCart,
  FaMobileAlt,
  FaPalette,
  FaChartLine
} from "react-icons/fa";



const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

export default function Home() {
  const highlights = [
    "UI/UX for web & mobile products",
    "Modern websites & web applications",
    "E-commerce store development",
    "Branding, graphics & identity",
    "Mobile app interface design",
    "Digital marketing & growth strategy"
  ];

 const services = [
  {
    title: "UI/UX Design for Web & Mobile Apps",
    bullets: [
      "User research, user flows & wireframes",
      "Modern interface design for SaaS, dashboards & tools",
      "Mobile app UI for Android / iOS",
      "Prototypes & usability-focused layouts"
    ],
    outcome: "Clean, intuitive, user-friendly digital products.",
    icon: <FaPaintBrush style={{ color: "#8B5CF6", fontSize: "24px" }} />
  },
  {
    title: "Website & Web Application Development",
    bullets: [
      "Business & portfolio websites",
      "Landing pages for startups & launches",
      "Custom frontend development",
      "Fast, secure, responsive, SEO-friendly builds"
    ],
    outcome: "Professional online presence that builds trust.",
    icon: <FaLaptopCode style={{ color: "#EC4899", fontSize: "24px" }} />
  },
  {
    title: "E-Commerce Website & Online Store Development",
    bullets: [
      "Modern product-first storefront design",
      "Secure checkout & payment integrations",
      "Conversion-optimized product pages",
      "Basic analytics & inventory setup"
    ],
    outcome: "A store ready to sell from day one.",
    icon: <FaShoppingCart style={{ color: "#F59E0B", fontSize: "24px" }} />
  },
  {
    title: "Mobile App UI Design",
    bullets: [
      "Screens, flows, and user journeys",
      "Clean, modern, consistent layouts",
      "Handoff-ready designs for developers"
    ],
    outcome: "App interfaces users love to interact with.",
    icon: <FaMobileAlt style={{ color: "#10B981", fontSize: "24px" }} />
  },
  {
    title: "Brand Identity & Graphic Design",
    bullets: [
      "Logo + identity system",
      "Color palette & typography",
      "Social media & web graphics",
      "Marketing visuals & brand assets"
    ],
    outcome: "A brand look that feels professional and memorable.",
    icon: <FaPalette style={{ color: "#F97316", fontSize: "24px" }} />
  },
  {
    title: "Modern Digital Marketing & Growth Support",
    bullets: [
      "Launch & growth strategy",
      "Content & campaign direction",
      "Basic ad strategy & funnel guidance",
      "Consultation & performance review"
    ],
    outcome: "Visibility, awareness, and smarter scaling.",
    icon: <FaChartLine style={{ color: "#EF4444", fontSize: "24px" }} />
  }
];
  // Package for services

  const packages = [
    {
      name: "🌐 Website Design Package",
      tagline: "Brand + Website + Starter Marketing",
      includes: [
        "Custom website design (up to 5 pages)",
        "Mobile & tablet responsive layout",
        "Clean UI with conversion-focused sections",
        "Basic on-page SEO structure",
        "Contact form & CTA integration",
        "Speed & performance optimization",
        "Deployment support"
      ],
      buttonText: "Build My Website",
      badge: "Most Popular",
      discount: "65% OFF"
    },
    {
      name: "🎨 UI/UX Design Package",
      tagline: "Design experiences users love to use",
      includes: [
        "User research & journey mapping",
        "Wireframes & user flows",
        "Modern UI design system",
        "Up to 20 screens/pages",
        "Developer-ready handoff (Figma)",
        "Responsive design for web & mobile",
        "Usability testing & design improvements in design"
      ],
      buttonText: "Start UI/UX Design",
      badge: "UI/UX",
      discount: "65% OFF"
    },
    {
      name: "🛒 E-Commerce Store Package",
      tagline: "Everything you need to start selling online",
      includes: [
        "Custom e-commerce storefront design",
        "Product & category page layouts",
        "Cart & checkout flow",
        "Payment gateway integration",
        "Basic product upload setup",
        "SEO-friendly structure",
        "Analytics & tracking setup"
      ],
      buttonText: "Launch My Store",
      badge: "E-Commerce",
      discount: "65% OFF"
    },
    {
      name: "📱 Mobile App UI Package",
      tagline: "App UI that feels smooth, modern, and intuitive",
      includes: [
        "App user flow & screen planning",
        "Up to 25 mobile app screens",
        "iOS & Android–ready UI design",
        "Design system (colors, typography, icons)",
        "Clickable prototype",
        "Handoff for developers"
      ],
      buttonText: "Design My App",
      badge: "Mobile",
      discount: "65% OFF"
    },
    {
      name: "🎯 Graphic Design Package",
      tagline: "Visuals that strengthen your brand identity",
      includes: [
        "Logo design or refinement",
        "Brand color & typography system",
        "Social media post templates",
        "Marketing & promo graphics",
        "Brand strategy consulting",
        "Brand guideline PDF",
        "Revisions & final export"
      ],
      buttonText: "Create My Brand",
      badge: "Design",
      discount: "65% OFF"
    },
    {
      name: "🚀 Digital Marketing Package",
      tagline: "Monthly growth-focused digital marketing support",
      includes: [
        "Paid ads management (Google & Meta)",
        "SEO strategy & optimization",
        "Content & campaign planning",
        "Landing page & funnel optimization",
        "Performance tracking & reporting",
        "Monthly strategy & growth consultation"
      ],
      buttonText: "Start Growth Plan",
      badge: "Growth",
      discount: "65% OFF"
    }
  ];

  const faqs = [
    { q: "Do you work with international clients?", a: "Yes — we work globally via remote collaboration." },
    { q: "Do I need all content before starting?", a: "No — we help structure and guide content." },
    { q: "Do you offer revisions?", a: "Yes — each project includes review rounds." },
    { q: "Do you provide post-launch support?", a: "Yes — plus optional ongoing plans." }
  ];

  return (
    <div className="grain">
      <ScrollProgress />
      <Navbar />

      {/* Header */}
      {/* HERO */}
      <header id="home" className="hero">
        {/* Animated Gradient Blobs */}
        <div className="heroFX" aria-hidden="true">
          <motion.div
            className="blob one"
            animate={{ x: [0, 30, -10, 0], y: [0, 10, 30, 0], scale: [1, 1.05, 0.98, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="blob two"
            animate={{ x: [0, -25, 10, 0], y: [0, 25, -10, 0], scale: [1, 1.06, 1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="blob three"
            animate={{ x: [0, 18, -18, 0], y: [0, -12, 16, 0], scale: [1, 1.04, 1, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container heroWrap">
          {/* LEFT */}
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div 
              className="badge" 
              variants={fadeUp}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                overflow: "hidden"
              }}
            >
              {/* Premium animated icon - FaRocket */}
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  display: "inline-flex",
                  fontSize: "20px",
                  color: "#8B5CF6"
                }}
              >
                <FaRocket />
              </motion.div>
              
              {/* Animated text with sliding effect */}
              <motion.div
                style={{
                  display: "flex",
                  gap: "8px",
                  overflow: "hidden"
                }}
              >
                {["Design", "Development", "Growth"].map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.15,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "#8B5CF6",
                      transition: { duration: 0.2 }
                    }}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      fontWeight: 500
                    }}
                  >
                    {item}
                    {index < 2 && (
                      <motion.span
                        animate={{ 
                          opacity: [1, 0.5, 1],
                          x: [0, 2, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                        style={{ marginLeft: "8px" }}
                      >
                        •
                      </motion.span>
                    )}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.h1 className="h1" style={{ marginTop: 18 }} variants={fadeUp}>
              Design, Build & Grow —<br />
              Digital Experiences That<br />
              Help Brands Succeed
            </motion.h1>

            <motion.p className="p" variants={fadeUp}>
              We help startups, founders, and businesses create high-performing websites, mobile app interfaces,
              e-commerce platforms, and brand identities — combining clean design, smart technology, and growth-focused
              digital marketing.
            </motion.p>

            <motion.div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }} variants={fadeUp}>
              <MagneticButton className="primary" href="#contact">
                Book a Free Discovery Call
              </MagneticButton>

              <MagneticButton href="#packages" shine={false}>
                View Our Packages ↓
              </MagneticButton>
            </motion.div>

            <motion.div
              className="grid grid2 heroHighlights"
              style={{ marginTop: 22 }}
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {highlights.map((h) => (
                <motion.div key={h} className="card soft lift" style={{ padding: 16 }} variants={fadeUp}>
                  <div className="small" style={{ color: "var(--accent)", fontWeight: 900 }}>✓</div>
                  <div style={{ fontWeight: 900 }}>{h}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="card lift heroCard"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <div style={{ fontWeight: 950, fontSize: 20 }}>Get a Free Strategy Call</div>
            <p className="p">Tell us what you’re building. We’ll reply with a clear plan and next steps.</p>

            <MagneticButton className="primary wide" href="#contact">
              Get Started
            </MagneticButton>

            <div className="hr" style={{ margin: "14px 0" }}></div>
            <div
              style={{
                padding: "8px 18px",
                fontSize: "13px",
                color: "#1a1a2e",
                fontWeight: "500",
                letterSpacing: "0.3px",
                borderRadius: "999px",
                background: "linear-gradient(180deg, rgba(124, 58, 237, 0.12), rgba(124, 58, 237, 0.06))",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 0 20px rgba(124, 58, 237, 0.15)",
                marginBottom: "10px",
              }}
            >
              Trusted by startups, entrepreneurs, and growing businesses worldwide.
            </div>

            <div className="logoRow" style={{ marginTop: "6px" }}>
              <img src="/tynecxio-logo.png" alt="Client 1" />
            </div>
          </motion.div>
        </div>
      </header>


      {/* SERVICES */}
      <Section
        id="services"
        title={<span className="section-title-frame">What We Do</span>}
        subtitle="We’re a product-focused digital studio that blends design, development, and marketing to build meaningful, conversion-focused digital experiences."
      >
        <motion.div
          className="grid grid3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="card lift"
          style={{ marginTop: 18 }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <b>Not sure which service fits your idea?</b>
          <div className="p">Tell us about your project — we’ll guide you to the right plan.</div>
          <MagneticButton className="primary" href="#contact">
            Tell Us About Your Project
          </MagneticButton>
        </motion.div>
      </Section>

      <Section id="about" title="Why Work With TynecXio?" subtitle="">
        <motion.div
          className="grid grid2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="card soft lift" variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 900 }}>
              <FaBullseye style={{ fontSize: "20px", transform: "translateY(2px)" }} />
              <div>Design with business & conversion in mind</div>
            </div>
          </motion.div>

          <motion.div className="card soft lift" variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 900 }}>
              <FaBolt style={{ fontSize: "20px", transform: "translateY(2px)" }} />
              <div>Startup-friendly process and timelines</div>
            </div>
          </motion.div>

          <motion.div className="card soft lift" variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 900 }}>
              <FaHandshake style={{ fontSize: "20px", transform: "translateY(2px)" }} />
              <div>Clear communication & transparent pricing</div>
            </div>
          </motion.div>

          <motion.div className="card soft lift" variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 900 }}>
              <FaGlobe style={{ fontSize: "20px", transform: "translateY(2px)" }} />
              <div>Remote-friendly, international-ready workflow</div>
            </div>
          </motion.div>

          <motion.div className="card soft lift" variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 900 }}>
              <FaCogs style={{ fontSize: "20px", transform: "translateY(2px)" }} />
              <div>Strategy + Design + Development + Growth in one place</div>
            </div>
          </motion.div>
        </motion.div>
      </Section>




      {/* PACKAGES */}
      <Section id="packages" title="📦 Package System" subtitle="">
        <motion.div
          className="grid grid3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {packages.map((p) => (
            <motion.div key={p.name} variants={fadeUp}>
              <PackageCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* PORTFOLIO */}
      <Section id="portfolio" title="Recent Work & Focus Areas" subtitle="We love working on:">
        <motion.div
          className="grid grid2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "SaaS dashboards & tools",
            "Startup landing pages",
            "Founder & personal brand sites",
            "Service-business websites",
            "Mobile app UI & prototypes"
          ].map((x) => (
            <motion.div key={x} className="card soft lift" style={{ fontWeight: 900 }} variants={fadeUp}>
              {x}
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <MagneticButton className="primary" href="#contact" style={{ marginTop: 18 }}>
            Request Portfolio Samples
          </MagneticButton>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="">
        <motion.div
          className="grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((f) => (
            <motion.div key={f.q} variants={fadeUp}>
              <FAQItem {...f} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FINAL CTA / CONTACT */}
      <Section
        id="contact"
        title="Ready to Build Something Great?"
        subtitle="Tell us about your idea — we’ll come back with a clear plan and proposal."
      >
        <div className="grid grid2 contactGrid" style={{ alignItems: "stretch", gap: 22 }}>
          {/* LEFT */}
          <motion.div
            className="card lift contactLeft"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 style={{ fontWeight: 950, fontSize: 26, margin: 0 }}>Let’s Build Something Meaningful</h3>

            <p className="p" style={{ marginTop: 12 }}>
              Whether you’re launching a startup, redesigning your brand, or scaling an existing product — we help you move
              fast with clarity and confidence.
            </p>

            <div className="contactPoints">
              <div><FaBolt /> Fast turnaround & startup-friendly process</div>
              <div><FaBullseye /> Design focused on conversion & growth</div>
              <div><FaGlobe /> Remote collaboration, global clients</div>
              <div><FaHandshake /> Clear communication & honest pricing</div>
            </div>


            <div className="contactMini">
              <div className="miniStep">1. Discovery Call</div>
              <div className="miniStep">2. Strategy & Design</div>
              <div className="miniStep">3. Build & Launch</div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
            <ContactForm />
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
