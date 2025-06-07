// import passwordGen from "../assets/passwordgenerator.png";
import soon from "../assets/soon.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      projectName: "Business Process Automation Suite (In Development)",
      description: `A modular suite of advanced automations for business operations, integrating multiple tools and APIs to streamline workflows across departments. Includes:\n\nEmployee Onboarding Workflow\n- Trigger: New hire in HR system\n- Auto-creates accounts (email, Slack, Notion), assigns tasks, schedules meetings, sends welcome messages, notifies IT, and logs all actions.\n- Tools: HR Software, Google Workspace, Notion, Slack, Email, WhatsApp\n\nFinancial Reconciliation Bot\n- Trigger: End of month\n- Pulls payment info from Stripe, PayPal, Bank API; cross-checks with ERP; flags inconsistencies; notifies finance; generates reports; AI summarizes discrepancies.\n- Tools: Stripe, ERP, Google Sheets, Email, Slack, OpenAI, n8n\n\nCustomer Support Escalation System\n- Trigger: Negative feedback or unresolved ticket\n- Uses AI sentiment analysis, escalates urgent cases, auto-assigns agents, notifies via Slack/WhatsApp, updates CRM.\n- Tools: Zendesk, OpenAI, Slack, WhatsApp, CRM, n8n\n\nExecutive Summary Generator\n- Trigger: Daily/Weekly cron\n- Pulls KPIs from multiple sources, uses GPT to summarize, auto-formats into PDF/Notion, sends to leadership.\n- Tools: n8n, APIs, OpenAI, Google Drive, Notion, Slack, Email\n\nSecurity & Logging\n- All workflows log actions in PostgreSQL/Supabase\n- Error handling with retry logic and notifications\n- Full audit trail for compliance (GDPR, LGPD, ISO)`
    },
    {
      projectName: "Ecommerce Automation Suite",
      description:
        `A comprehensive automation solution for ecommerce businesses:\n- RAG 24/7 AI Support: Instantly answers customer questions, reduces support costs, and integrates with your product catalog.\n- Remarketing Email Triggering & Cart Recovery: Detects abandoned carts and sends personalized emails, recovering lost sales (e.g., 100 carts/month, 5% conversion = R$500+ saved).\n- AI Upsell & Personalized Follow-up: Recommends products and sends tailored follow-ups to increase order value and retention.\n- Weekly Insights & Audience Analytics: Automated reports on sales, trends, and buyer demographics (e.g., "Men aged 25-50 buy this on weekends").`,
    },
    {
      projectName: "BarberBot 24/7 Smart Assistant",
      description:
        `AI-powered virtual assistant for barbershops, built with n8n:\n- Automates WhatsApp customer service, answers FAQs, books appointments, and sends reminders.\n- Operates 24/7, reducing manual workload and increasing client satisfaction.\n- Fully integrated with Google Calendar and scheduling spreadsheets for accurate, efficient time management.`,
    },
    {
      projectName: "Restaurant Ordering Bot",
      description:
        `AI-driven WhatsApp ordering system for restaurants:\n- Customers order via WhatsApp, select menu items, and receive instant confirmation with estimated delivery time.\n- Integrates with Google Sheets or POS systems for real-time order tracking and kitchen management.\n- Reduces phone traffic, minimizes errors, and improves customer experience with automated, friendly communication.`,
    },
    {
      projectName: "Real Estate Lead Qualifier",
      description:
        `AI assistant for real estate agencies:\n- Qualifies incoming leads via WhatsApp or web chat, asks key questions, and captures buyer/renter preferences.\n- Automatically updates CRM or spreadsheets with qualified leads.\n- Schedules viewings and follow-ups, saving agents hours each week and increasing conversion rates.`,
    },
  ];

  return (
    <div
      id="projects"
      className="mt-[150px] font-inter relative z-10 text-white flex flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[45px] font-extrabold"
      >
        PROJECTS
      </motion.h1>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          REAL AND IN-PROGRESS SYSTEMS I'M WORKING ON
        </span>
      </motion.p>
      <div className="mt-[30px] grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-20 items-stretch">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`h-full min-h-[320px] flex flex-col justify-between items-center bg-white/5 hover:bg-white/20 hover:shadow-xl hover:shadow-white/40 hover:scale-105 rounded-xl transition-all duration-300 p-6 md:p-8 max-w-[500px] mx-auto ${index === 0 ? 'lg:col-span-2' : ''}`}
          >
            <div className="w-full flex flex-col items-center">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 * index }}
                viewport={{ once: true }}
                className="cursor-default font-extrabold text-center text-[18px] md:text-[22px] mb-4"
              >
                {project.projectName}
              </motion.h1>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 * index }}
                viewport={{ once: true }}
                className="cursor-default text-justify max-w-[420px] font-medium text-[13px] md:text-[15px] text-[#d1d1d1] whitespace-pre-line"
              >
                {project.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
