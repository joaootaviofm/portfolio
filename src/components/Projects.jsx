import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: "0x01",
      status: "IN_DEV",
      projectName: "Business Process Automation Suite",
      description: `Modular suite of advanced automations for business operations:\n\n→ Employee Onboarding — auto-creates accounts, assigns tasks, notifies IT\n→ Financial Reconciliation Bot — AI-powered ERP cross-check, flags discrepancies\n→ Customer Support Escalation — sentiment analysis, auto-assigns via Slack/WhatsApp\n→ Executive Summary Generator — daily KPI reports via OpenAI → Notion/Drive\n\nSecurity: PostgreSQL/Supabase audit logs, retry logic, GDPR/LGPD compliant`,
    },
    {
      id: "0x02",
      status: "ACTIVE",
      projectName: "Ecommerce Automation Suite",
      description: `Comprehensive automation for ecommerce:\n\n→ RAG 24/7 AI Support integrated with product catalog\n→ Cart Recovery — abandoned cart detection + personalized email sequences\n→ AI Upsell & Follow-up — tailored product recommendations\n→ Weekly Insights — automated buyer analytics and sales reports`,
    },
    {
      id: "0x03",
      status: "ACTIVE",
      projectName: "BarberBot 24/7 Smart Assistant",
      description: `AI-powered WhatsApp assistant for barbershops:\n\n→ Automates customer service, FAQs, and appointment booking\n→ Sends reminders, operates 24/7 without manual input\n→ Integrated with Google Calendar and scheduling spreadsheets`,
    },
    {
      id: "0x04",
      status: "ACTIVE",
      projectName: "Restaurant Ordering Bot",
      description: `AI-driven WhatsApp ordering system:\n\n→ Customers order via WhatsApp with instant confirmation\n→ Real-time tracking via Google Sheets or POS integration\n→ Reduces errors, minimizes phone traffic, improves UX`,
    },
    {
      id: "0x05",
      status: "ACTIVE",
      projectName: "Real Estate Lead Qualifier",
      description: `AI assistant for real estate agencies:\n\n→ Qualifies leads via WhatsApp or web chat\n→ Auto-updates CRM with buyer/renter preferences\n→ Schedules viewings and follow-ups automatically`,
    },
  ];

  const statusStyle = (status) =>
    status === "IN_DEV"
      ? "text-yellow-400 border-yellow-400/35 bg-yellow-400/5"
      : "text-emerald-400 border-emerald-400/35 bg-emerald-400/5";

  return (
    <div
      id="projects"
      className="mt-[150px] relative z-10 text-white flex flex-col justify-center items-center px-4"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12"
      >
        <span className="font-mono text-[#9C83FF]/45 text-[11px] mb-2 tracking-widest">
          // section_04
        </span>
        <h1 className="text-[42px] font-extrabold tracking-wider">PROJECTS</h1>
        <span className="tracking-[5px] text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          REAL AND IN-PROGRESS SYSTEMS
        </span>
      </motion.div>

      {/* Project grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-[1000px]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 * index }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className={`rounded-xl overflow-hidden border border-[#9C83FF]/18 hover:border-[#9C83FF]/40 hover:shadow-[0_0_35px_rgba(156,131,255,0.12)] transition-all duration-350 ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            {/* Terminal title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0f0f0f] border-b border-[#9C83FF]/12">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/55" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/55" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/55" />
                <span className="ml-3 font-mono text-[10px] text-[#9C83FF]/38">
                  {project.id}_
                  {project.projectName
                    .toLowerCase()
                    .replace(/\s/g, "_")
                    .replace(/[^a-z_]/g, "")
                    .slice(0, 22)}
                  .sh
                </span>
              </div>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 rounded border ${statusStyle(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </div>

            {/* Card content */}
            <div className="bg-[#0a0a0a]/85 p-6">
              <h3 className="font-poppins font-extrabold text-[16px] md:text-[18px] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/65">
                {project.projectName}
              </h3>
              <p className="font-mono text-[11px] md:text-[12px] text-[#666] whitespace-pre-line leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
