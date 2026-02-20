import { motion } from "motion/react";

const techCategories = [
  {
    id: "01",
    title: "AUTOMATIONS",
    accentColor: "#9C83FF",
    items: [
      { name: "N8N", detail: "workflow engine" },
      { name: "MAKE", detail: "integration platform" },
    ],
  },
  {
    id: "02",
    title: "VECTOR DB & RETRIEVAL",
    accentColor: "#FF9051",
    items: [
      { name: "Pinecone", detail: "vector search" },
      { name: "Supabase", detail: "postgres + pgvector" },
      { name: "Redis", detail: "in-memory cache" },
    ],
  },
  {
    id: "03",
    title: "PROGRAMMING",
    accentColor: "#9C83FF",
    items: [
      { name: "Python", detail: "AI frameworks" },
      { name: "Java", detail: "backend" },
      { name: "TypeScript", detail: "full-stack" },
    ],
  },
];

function Technologies() {
  return (
    <div id="technologies" className="relative text-white mt-[150px] pb-5 px-4">
      <div className="flex flex-col justify-center items-center">
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
          <h1 className="font-extrabold text-[42px] tracking-wider">TECHNOLOGIES</h1>
          <span className="tracking-[5px] text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            MY CURRENT STACK FOR AI &amp; AUTOMATIONS
          </span>
        </motion.div>

        {/* Category panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[900px]">
          {techCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.12 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-xl overflow-hidden border border-[#9C83FF]/18 hover:border-[#9C83FF]/40 hover:shadow-[0_0_30px_rgba(156,131,255,0.1)] transition-all duration-400 group"
            >
              {/* Panel title bar */}
              <div className="px-4 py-3 bg-[#0f0f0f] border-b border-[#9C83FF]/12 flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#9C83FF]/35">{cat.id}</span>
                <span
                  className="font-mono text-[10px] font-bold tracking-[3px]"
                  style={{ color: cat.accentColor }}
                >
                  {cat.title}
                </span>
              </div>

              {/* Tech items */}
              <div className="flex-1 bg-[#0a0a0a]/85 p-5 space-y-3">
                {cat.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + techIndex * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between cursor-default group/item"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#9C83FF]/50" />
                      <span className="font-mono text-[14px] font-semibold text-white/85 group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-[#9C83FF] group-hover/item:to-[#FF9051] transition-all duration-300">
                        {tech.name}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[#9C83FF]/28 group-hover/item:text-[#9C83FF]/55 transition-colors duration-300">
                      {tech.detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
