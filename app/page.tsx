"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Cloud,
  Database,
  ExternalLink,
  GraduationCap,
  Layers3,
  LineChart,
  Mail,
  Radar,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.983 3.5C4.983 4.88 3.87 6 2.495 6A2.503 2.503 0 0 1 0 3.5C0 2.12 1.116 1 2.495 1c1.374 0 2.488 1.12 2.488 2.5ZM.5 8h3.99v12.5H.5V8Zm6.38 0h3.823v1.707h.055c.532-1.01 1.832-2.077 3.77-2.077 4.03 0 4.772 2.655 4.772 6.108v6.762h-3.99v-5.995c0-1.43-.027-3.269-1.992-3.269-1.995 0-2.301 1.558-2.301 3.164v6.1H6.88V8Z" />
    </svg>
  );
}

function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 9.396 7.862 10.918.575.106.786-.25.786-.556 0-.274-.01-1-.016-1.962-3.199.695-3.875-1.542-3.875-1.542-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.079-.699.079-.699 1.154.081 1.761 1.185 1.761 1.185 1.026 1.758 2.693 1.25 3.35.956.104-.743.402-1.25.73-1.538-2.553-.29-5.238-1.277-5.238-5.685 0-1.256.45-2.284 1.185-3.089-.119-.29-.513-1.458.112-3.041 0 0 .967-.309 3.17 1.18A10.95 10.95 0 0 1 12 6.03c.974.004 1.955.132 2.872.387 2.201-1.49 3.167-1.18 3.167-1.18.627 1.583.233 2.75.114 3.041.738.805 1.183 1.833 1.183 3.09 0 4.418-2.69 5.392-5.252 5.676.413.355.781 1.056.781 2.129 0 1.538-.014 2.778-.014 3.156 0 .309.207.668.793.555C20.211 21.392 23.5 17.082 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
    </svg>
  );
}

const stats = [
  { value: "35K+", label: "Daily records processed in reporting workflows" },
  { value: "30%+", label: "Reporting discrepancies reduced through validation" },
  { value: "40%", label: "Research throughput improvement via automation" },
  { value: "4+", label: "High-impact AI and analytics projects showcased" },
];

const capabilities = [
  {
    icon: Database,
    title: "Data Engineering & Pipelines",
    description:
      "Building robust data flows with Python, SQL, ETL design, APIs, and scalable processing patterns for analytics-ready systems.",
    bullets: [
      "Python and SQL-based pipeline development",
      "REST API ingestion and multi-source integration",
      "Data profiling, cleansing, and validation",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & Generative AI",
    description:
      "Applying ML, deep learning, and synthetic data techniques to solve analytics, prediction, and privacy-preserving modeling challenges.",
    bullets: [
      "XGBoost, LSTM, TensorFlow, Keras",
      "GANs, VAEs, SDV, Gaussian Copula",
      "Predictive modeling and experimental evaluation",
    ],
  },
  {
    icon: LineChart,
    title: "Visualization & Decision Support",
    description:
      "Designing dashboards and visual analytics experiences that help stakeholders understand trends, KPIs, and operational risks in real time.",
    bullets: [
      "Power BI, Tableau, Plotly, Dash",
      "Interactive KPI and monitoring dashboards",
      "Storytelling through visual data products",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud, Big Data & Deployment",
    description:
      "Working across AWS, GCP, Azure ML, Spark, Docker, and workflow tooling to move analytics systems from experimentation to usable products.",
    bullets: [
      "AWS, BigQuery, Azure ML",
      "Apache Spark and Airflow workflows",
      "Dockerized analytics deployments",
    ],
  },
];

const experience = [
  {
    period: "Jan 2025 – Jun 2025",
    role: "Data Analyst",
    company: "Titanium Wireless",
    highlights: [
      "Engineered data pipelines using Python, SQL, and REST APIs for faster operational insights.",
      "Built interactive dashboards across Python, Tableau, and Salesforce Analytics Cloud.",
      "Supported reporting at scale with Apex-based monitoring over 35,000+ daily records.",
      "Reduced reporting discrepancies by over 30% through profiling, cleansing, and validation.",
    ],
  },
  {
    period: "Feb 2023 – Jun 2025",
    role: "Research Assistant",
    company: "University of West Florida",
    highlights: [
      "Led research in Generative AI, synthetic data modeling, and real-time fitness monitoring.",
      "Built end-to-end pipelines with Python, R, TensorFlow, and SQL to improve research throughput by 40%.",
      "Applied GANs, VAEs, Gaussian Copula, and SDV for high-fidelity synthetic datasets.",
      "Co-authored publications and supported NSF-aligned proposal and manuscript development.",
    ],
  },
  {
    period: "Dec 2021 – Jun 2022",
    role: ".NET Intern",
    company: "Wipro Limited",
    highlights: [
      "Supported enterprise web application development and debugging in Agile workflows.",
      "Optimized SQL queries and performance reporting for backend analysis.",
      "Collaborated across UI/UX, QA, and backend teams for reliable deployments.",
    ],
  },
];

const projects = [
  {
    title: "Trade Insights Engine",
    badge: "Featured Project 01",
    stack: "Python • SQL • Spark • AWS • Flask • Tableau",
    summary:
      "Built a big-data trade policy analytics system using Spark, SQL, AWS, and machine learning to predict trade flows, logistics efficiency, and supply chain disruptions.",
    metrics: [
      "20% improvement in predictive analytics outcomes",
      "Interactive dashboards and Flask APIs for real-time insights",
      "Automated ingestion from external trade data sources",
    ],
  },
  {
    title: "Synthetic Data Generation with CTGAN + Gaussian Copula",
    badge: "Featured Project 02",
    stack: "Python • SDV • CTGAN • Gaussian Copula • Scikit-learn",
    summary:
      "Designed and evaluated synthetic data generation pipelines for privacy-preserving analytics, validating statistical fidelity and downstream ML utility.",
    metrics: [
      "Compared CTGAN and enhanced SDV-based approaches",
      "Supported privacy-preserving data experimentation",
      "Maintained analytical performance and data integrity",
    ],
  },
  {
    title: "Supply Chain Optimization Engine",
    badge: "Featured Project 03",
    stack: "GPT-Neo • SDV • Python • Dash • Machine Learning",
    summary:
      "Combined synthetic data and machine learning to model shipping delays, supplier reliability, and disruption scenarios in an interactive analytics environment.",
    metrics: [
      "22% improvement in forecasting accuracy",
      "Dynamic risk and resilience planning dashboard",
      "Synthetic scenario simulation for supply chain decision support",
    ],
  },
  {
    title: "Real-time Fitness Monitoring",
    badge: "Featured Project 04",
    stack: "Python • MediaPipe • NumPy • Pandas • Computer Vision",
    summary:
      "Created a real-time computer vision system for motion tracking, posture classification, and exercise feedback using MediaPipe-based pose estimation.",
    metrics: [
      "Real-time exercise form detection",
      "Pose-driven feedback loop for better user accuracy",
      "Applied vision pipelines for performance monitoring",
    ],
  },
];

const publications = [
  "Integrating Unsupervised and Supervised ML Models for Synthetic Data Analysis from VAE, GAN, and Variable Clustering (2024)",
  "Real-time fitness monitoring with MediaPipe (2024)",
  "Hybrid intelligence for DDoS defense: Combining generative AI, resampling, and ensemble methods (2025)",
  "Generative AI: Comparing CTGAN and CTGAN with Gaussian Copula in Synthetic Data Generation (Conference / In Press)",
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "R", "SQL", "Scala", "SAS", "Apex", "C++"],
  },
  {
    title: "Analytics & ML",
    items: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Spark", "Airflow"],
  },
  {
    title: "Visualization",
    items: ["Power BI", "DAX", "Power Query", "Tableau", "Plotly", "Excel", "Seaborn"],
  },
  {
    title: "Cloud & Platforms",
    items: ["AWS", "BigQuery", "Azure ML", "Docker", "Git", "GitHub", "Salesforce"],
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}

function AnalyticsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_28%),linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.9),rgba(2,6,23,1))]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.25) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      <div className="absolute left-0 top-[32%] h-px w-full bg-gradient-to-r from-transparent via-fuchsia-300/20 to-transparent" />
      <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent" />
      <div className="absolute right-[14%] top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-300/15 to-transparent" />
      <motion.div
        animate={{ x: [0, 260, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[22%] h-[2px] w-48 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-40"
      />
      <motion.div
        animate={{ x: [320, 0, 320] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-[64%] h-[2px] w-56 bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent opacity-30"
      />
    </div>
  );
}

function MiniChartCard() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">Analytics Profile</div>
          <div className="mt-1 text-lg font-semibold text-white">Data + AI + Systems</div>
        </div>
        <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
          Active
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
          <span>Signal Growth</span>
          <span>Live View</span>
        </div>
        <div className="flex h-36 items-end gap-2">
          {[42, 58, 49, 66, 80, 74, 92, 88, 108, 116, 112, 128].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 10 }}
              animate={{ height: h }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="w-full rounded-t-xl bg-gradient-to-t from-cyan-500/50 via-sky-400/70 to-cyan-200/90 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "Pipelines", value: "Robust" },
          { label: "Models", value: "ML / AI" },
          { label: "Dashboards", value: "Realtime" },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">{item.label}</div>
            <div className="mt-1 text-sm font-semibold text-white">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HarshaFuturisticPortfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-cyan-400/30 selection:text-white">
      <div className="relative overflow-hidden">
        <AnalyticsBackground />

        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <a href="#top" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.16)]">
                <Radar className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[0.24em] text-slate-200">SRI SATYA HARSHA POLA</div>
                <div className="text-xs text-slate-400">Data Analyst • ML • AI Systems</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan-200">
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/srisatyaharshapola"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 transition hover:bg-cyan-400/20"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/SriHarsha606"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-200 transition hover:bg-fuchsia-400/20"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </nav>
          </div>
        </header>

        <section id="top" className="relative">
          <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                Futuristic Data Portfolio
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Data Analyst.
                <br />
                Machine Learning.
                <br />
                <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                  Intelligent Analytics Systems.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Transforming complex data into intelligent, scalable systems through analytics engineering,
                machine learning, generative AI, and real-time visualization.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:harsha.pola06@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
                >
                  Contact
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-b from-cyan-400/20 via-fuchsia-400/10 to-transparent blur-2xl" />
                <MiniChartCard />
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <section id="about" className="relative border-t border-white/6 bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="A data portfolio built to feel like a high-end analytics platform."
            description="This experience is positioned around more than dashboards. It combines analytics engineering, machine learning, synthetic data research, and production-style tooling into one cohesive technical identity."
          />

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-4 text-xs uppercase tracking-[0.28em] text-cyan-200">Profile Narrative</div>
              <div className="space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
                <p>
                  Sri Satya Harsha Pola is a data analytics and machine learning professional with a Master’s in
                  Data Science and hands-on experience across operational analytics, generative AI research,
                  synthetic data modeling, and visualization-driven decision support.
                </p>
                <p>
                  His work spans Python, SQL, Spark, cloud platforms, interactive dashboards, and research-backed
                  AI systems — giving him the ability to work across both exploratory analysis and scalable
                  analytics implementation.
                </p>
                <p>
                  The result is a profile that feels stronger than a traditional data analyst title alone: part data
                  engineer, part analyst, part ML practitioner, and highly effective at turning raw datasets into
                  usable intelligence.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Master’s in Data Science",
                  text: "University of West Florida with strong coursework across ML, AI, deep learning, big data, and regression modeling.",
                },
                {
                  icon: BarChart3,
                  title: "Industry + Research Blend",
                  text: "Combines business-facing dashboard work with research in synthetic data, computer vision, and applied AI systems.",
                },
                {
                  icon: TerminalSquare,
                  title: "Technical Range",
                  text: "Comfortable across Python, R, SQL, Spark, Power BI, Tableau, Docker, cloud platforms, and ML frameworks.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/7 to-white/[0.03] p-6 backdrop-blur-xl">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-white">{item.title}</div>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="relative border-t border-white/6 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Core strengths across analytics, ML, and scalable data workflows."
            description="The portfolio layout uses premium cards to present his profile as a full analytics stack contributor rather than limiting him to one narrow lane."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-cyan-400/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3 text-sm text-slate-200">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="relative border-t border-white/6 bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Industry execution backed by strong research depth."
            description="This section combines operational analytics experience with academic research work to show both practical delivery and advanced technical credibility."
          />

          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={item.role + item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/7 to-white/[0.03] p-7 backdrop-blur-xl"
              >
                <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">{item.period}</div>
                    <div className="mt-3 text-2xl font-semibold text-white">{item.role}</div>
                    <div className="mt-1 text-sm text-slate-400">{item.company}</div>
                  </div>
                  <div className="grid gap-3">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                        <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <span className="text-sm leading-7 text-slate-200">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative border-t border-white/6 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Advanced data and AI projects presented like flagship analytics products."
            description="These cards are designed to feel like premium product modules, emphasizing technical depth, measurable outcomes, and futuristic data storytelling."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-cyan-400/[0.04]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
                    {project.badge}
                  </div>
                  <ExternalLink className="h-5 w-5 text-slate-500 transition group-hover:text-cyan-200" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
                <div className="mt-3 text-sm text-fuchsia-200">{project.stack}</div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
                <div className="mt-6 space-y-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-start gap-3 text-sm text-slate-200">
                      <Layers3 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="relative border-t border-white/6 bg-slate-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Research & Publications"
            title="Academic credibility that strengthens the technical brand."
            description="Most analytics portfolios stop at dashboards. This one includes research output and publications, which elevates the profile immediately for technical and advanced analytics roles."
          />

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-fuchsia-200">
                <BookOpen className="h-3.5 w-3.5" />
                Publication Focus
              </div>
              <h3 className="text-2xl font-semibold text-white">Synthetic data, AI systems, and applied analytics research</h3>
              <p className="mt-5 text-sm leading-8 text-slate-300">
                The research section highlights a rare combination of publication-backed work in synthetic data,
                generative AI, computer vision, and cybersecurity-oriented machine learning. It adds serious depth
                to the overall portfolio identity.
              </p>
            </div>

            <div className="space-y-4">
              {publications.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/7 to-white/[0.03] p-5 backdrop-blur-xl">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative border-t border-white/6 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="A modern analytics stack grouped for clarity and visual polish."
            description="The skills area is structured like a premium tooling dashboard, balancing analyst readability with technical depth."
          />

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-white/6 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/12 via-slate-900 to-slate-950 p-8 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative z-10 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100">
                <Mail className="h-3.5 w-3.5" />
                Contact
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let’s build analytics that move decisions faster.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Open to data analyst, analytics engineering, business intelligence, and machine learning-oriented opportunities.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <a
                  href="mailto:harsha.pola06@gmail.com"
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left transition hover:border-cyan-300/20 hover:bg-cyan-400/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Email</div>
                      <div className="mt-1 text-base font-medium text-white">harsha.pola06@gmail.com</div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/srisatyaharshapola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left transition hover:border-cyan-300/20 hover:bg-cyan-400/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                      <LinkedInIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">LinkedIn</div>
                      <div className="mt-1 text-base font-medium text-white">Connect Professionally</div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/SriHarsha606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left transition hover:border-fuchsia-300/20 hover:bg-fuchsia-400/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-3 text-fuchsia-200">
                      <GitHubIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">GitHub</div>
                      <div className="mt-1 text-base font-medium text-white">Portfolio Repository</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:harsha.pola06@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/srisatyaharshapola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
                >
                  Visit LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
