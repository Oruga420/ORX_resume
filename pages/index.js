import Head from "next/head";
import { useCallback } from "react";

const summary =
  "Senior AI Solutions Architect and Full Stack Engineer with extensive experience bridging the gap between web application engineering and modern LLM-based systems. Proven track record of architecting over 120 GenAI applications and shipping production-grade agentic workflows using Next.js, Node.js, and Cloud Infrastructure (GCP, AWS, Vercel). Expert in driving AI adoption (from 47% to 97% at Assent) and delivering over $1M in operational savings through automation. Passionate about mentoring teams, engaging in tech communities, and building scalable, secure RAG pipelines.";

const expertise = [
  "Project Management",
  "Proficient Troubleshooting",
  "Scrum & Agile Methodologies",
  "Software Development Lifecycle",
  "Team Leadership & Supervision",
  "Web Application",
  "Design & Development",
  "Technical Process Improvement",
];

const experiences = [
  {
    company: "Assent",
    title: "AI Solutions Architect",
    date: "Feb 2025 - Present",
    bullets: [
      "Architecting and deploying an enterprise GenAI stack using OpenAI, Anthropic, and Gemini models with live RAG connections into compliance data.",
      "Designed and shipped agentic workflows and custom MCP servers that replace repetitive operational tasks.",
      "Replaced over 20,000 man-hours with AI automations, generating over $1 million in savings.",
      "Drove internal AI adoption from 47% to 97% by creating tools that integrate seamlessly into daily environments.",
      "Established security patterns and documentation to keep prototypes production-safe without losing control of cost.",
    ],
    location: null,
  },
  {
    company: "Sesh | Ai Solutions",
    title: "AI Solutions Architect & Founder",
    date: "Nov 2021 - Present",
    bullets: [
      "Designed the architecture for over 120 GenAI applications and built 90+ chatbots solving day-to-day problems for 30+ clients.",
      "Leads a community of 100+ people, delivering webinars and talks for groups like Latinas in Tech and Somos Latinos in Tech Ottawa.",
      "Developed AI-ready websites and marketing landing pages using Next.js/React wired into automation backends for immediate data conversion.",
    ],
    location: null,
  },
  {
    company: "Online Business Systems",
    title: "Salesforce Consultant",
    date: "Jun 2024 - Nov 2024",
    bullets: [
      "Configured AI assistants and copilot experiences, defining use cases and wiring data access safely for multiple clients.",
      "Managed end-to-end setups for engagement programs and automations, ensuring sales and marketing alignment.",
    ],
    location: null,
  },
  {
    company: "Globalization Partners",
    title: "Salesforce Manager & AI Lead",
    date: "Nov 2018 - Nov 2023",
    bullets: [
      "Transitioned from Platform Manager to leading the internal AI stream, building 'GIA' (internal chatbot) and GenAI-powered workflows for Jira ticket handling.",
      "Managed a Salesforce org with 1,000+ licenses, overseeing complex integrations and business-critical capabilities across the company.",
      "Applied strong project management and Agile methodologies to keep experiments aligned with outcomes.",
    ],
    location: null,
  },
];

const education = [
  {
    school: "Ingenieria en Sistemas",
    place: "Universidad Marista de MAcrida",
    years: "2004 - 2007",
  },
];

const skills = [
  { label: "Core Stack", value: "Next.js, Node.js, React, TypeScript, Python" },
  {
    label: "AI & ML",
    value: "OpenAI API, Anthropic, Gemini, RAG, Vector Stores, Embeddings, Agentic Workflows, LangChain, MCP Servers",
  },
  { label: "Cloud & Infra", value: "GCP, AWS, Vercel, Docker, CI/CD Pipelines" },
  { label: "Platforms", value: "Salesforce (Agentforce, Apex), Zapier" },
  { label: "Quality", value: "QA Engineering, Automated Testing" },
];

const contact = [
  { label: "Email", value: "alex@seshwithfriends.org", href: "mailto:alex@seshwithfriends.org" },
  { label: "Phone", value: "+1 437 243 3693", href: "tel:+14372433693" },
  { label: "LinkedIn", value: "linkedin.com/in/amorac", href: "https://www.linkedin.com/in/amorac/" },
  { label: "Website", value: "eloruga.com", href: "http://www.eloruga.com" },
  { label: "GitHub", value: "github.com/Oruga420", href: "https://github.com/Oruga420" },
];

const certifications = [
  "Salesforce Certified AI Associate (x3)",
  "Salesforce Certified Administrator (SCA)",
];

export default function Home() {
  const handlePrint = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Alejandro De La Mora | AI Solutions Architect</title>
        <meta
          name="description"
          content="Portfolio summary for Alejandro De La Mora - AI Solutions Architect & Full Stack Engineer."
        />
      </Head>
      <main className="page">
        <div className="bubble" aria-hidden />
        <div className="bubble" aria-hidden />
        <div className="bubble" aria-hidden />

        <header className="header">
          <div>
            <h1 className="title">Alejandro De La Mora</h1>
            <div className="role">AI Solutions Architect & Full Stack Engineer</div>
            <div className="summary">{summary}</div>
          </div>
          <div className="contact">
            <div className="contact-label">Contact</div>
            {contact.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <span style={{ width: 70, display: "inline-block", opacity: 0.8 }}>{item.label}:</span>
                <span>{item.value}</span>
              </a>
            ))}
          </div>
        </header>

        <section className="section">
          <div className="section-title">Areas of Expertise</div>
          <div className="chips">
            {expertise.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title">Work Experience</div>
          <div className="timeline">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.title}`} className="card">
                <h3>
                  {exp.title} | {exp.company}
                </h3>
                <div className="meta">
                  <span>{exp.date}</span>
                  {exp.location ? <span>{exp.location}</span> : null}
                </div>
                <ul>
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title">Education</div>
          <div className="edu-grid">
            {education.map((edu) => (
              <div key={edu.school} className="edu">
                <h4>{edu.school}</h4>
                <div>{edu.place}</div>
                <div style={{ color: "#3f536f", marginTop: 4 }}>{edu.years}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title">Technical Skills</div>
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.label} className="skill-box">
                <strong>{skill.label}: </strong>
                <span>{skill.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title">Certifications</div>
          <div className="chips">
            {certifications.map((cert) => (
              <span key={cert} className="chip">
                {cert}
              </span>
            ))}
          </div>
        </section>

        <div className="actions">
          <button className="btn" onClick={handlePrint}>
            Download as PDF
          </button>
        </div>
      </main>
    </>
  );
}
