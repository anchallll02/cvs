import React from "react";

const features = [
  { icon: "🛡️", title: "VAPT & Network Security", desc: "Comprehensive security assessment and penetration testing." },
  { icon: "⚡", title: "Security Architecture", desc: "Designing robust and scalable enterprise security frameworks." },
  { icon: "🧠", title: "SOC & SIEM", desc: "Implementing intelligent monitoring and incident response solutions." }
];

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "20+", label: "Enterprise Clients" },
  { value: "10+", label: "Awards & Recognitions" },
  { value: "15+", label: "Years Experience" }
];

const workflow = [
  { step: "01", title: "Assessment", desc: "Identify vulnerabilities and security gaps in enterprise systems." },
  { step: "02", title: "Design", desc: "Develop security architecture and policies tailored to the organization." },
  { step: "03", title: "Implementation", desc: "Deploy SOC, SIEM, and other security solutions efficiently." },
  { step: "04", title: "Advisory & Training", desc: "Continuous guidance, awareness, and capacity building." }
];

const About = () => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Inter, system-ui, sans-serif;
          background: #050b18;
          color: #fff;
        }

        section {
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        h2 {
          font-size: 48px;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        h2 span {
          color: #38bdf8;
        }

        p {
          color: #cbd5e1;
          line-height: 1.6;
        }

        /* ===== HERO ===== */
        .hero {
          background-image:
            linear-gradient(
              180deg,
              rgba(5,11,24,0.9),
              rgba(5,11,24,0.75)
            ),
            url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .feature-grid {
          margin-top: 70px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 28px;
        }

        .feature-card {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          padding: 34px;
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.12);
          transition: transform .4s ease, box-shadow .4s ease;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.12),
            rgba(255,255,255,0.04)
          );
        }

        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url("https://images.unsplash.com/photo-1591696205602-5e6c364a0191?auto=format&fit=crop&w=600&q=60") no-repeat center;
          background-size: cover;
          opacity: 0.08;
          border-radius: 22px;
        }

        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(56,189,248,0.25);
        }

        .icon {
          font-size: 42px;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .feature-card h3, .feature-card p {
          position: relative;
          z-index: 2;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 34px;
        }

        .stat {
          padding: 44px 24px;
          text-align: center;
          border-radius: 24px;
          background: radial-gradient(
            circle at top,
            rgba(56,189,248,0.25),
            rgba(255,255,255,0.02)
          );
          border: 1px solid rgba(255,255,255,0.12);
        }

        .stat h3 {
          font-size: 46px;
          color: #38bdf8;
          margin-bottom: 10px;
        }

        .workflow {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 70px;
          align-items: center;
        }

        .workflow-left {
          position: relative;
          padding-left: 34px;
        }

        .workflow-left::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(#38bdf8, transparent);
        }

        .workflow-step {
          margin-bottom: 36px;
        }

        .workflow-step span {
          font-size: 13px;
          color: #38bdf8;
          letter-spacing: 1px;
        }

        .workflow-step h4 {
          font-size: 22px;
          margin: 6px 0 10px;
        }

        .workflow-right {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }

        .workflow-card {
          background: rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .cta {
          background:
            radial-gradient(circle at 20% 0%, rgba(56,189,248,0.35), transparent 40%),
            radial-gradient(circle at 80% 100%, rgba(56,189,248,0.25), transparent 40%),
            #050b18;
          text-align: center;
          border-radius: 40px;
        }

        .cta h2 {
          margin-bottom: 16px;
        }

        .cta button {
          margin-top: 30px;
          padding: 16px 44px;
          font-size: 16px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: #38bdf8;
          color: #000;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          h2 { font-size: 38px; }
          .workflow { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h2>
            Ankit Rai <span>| Founder & Director</span>
          </h2>
          <p>
            Codevirus Security Pvt. Ltd. | Expertise in VAPT, Network Security, Security Architecture, SOC & SIEM, Enterprise Cybersecurity Advisory.
          </p>

          <div className="feature-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section>
        <div className="container stats">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section>
        <div className="container workflow">
          <div className="workflow-left">
            <h2>
              Professional <span>Journey</span>
            </h2>

            {workflow.map((w, i) => (
              <div className="workflow-step" key={i}>
                <span>STEP {w.step}</span>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="workflow-right">
            {workflow.map((w, i) => (
              <div className="workflow-card" key={i}>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Recognition & Expertise</h2>
        <p>
          National award recipient, trainer, and speaker for government institutions, IITs/NITs, universities, and corporate organizations.
        </p>
        <button>Connect Now</button>
      </section>
    </>
  );
};

export default About;
