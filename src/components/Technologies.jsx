import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const techCategories = [
  {
    title: "AUTOMATIONS",
    technologies: [
      {
        name: "N8N",
        description: "Experienced with the best practices to increase performance"
      },
      {
        name: "MAKE",
        description: ""
      }
    ]
  },
  {
    title: "VECTOR DATABASES & KNOWLEDGE RETRIEVAL",
    technologies: [
      {
        name: "Pinecone",
        description: ""
      },
      {
        name: "Supabase",
        description: ""
      },
      {
        name: "Redis",
        description: ""
      }
    ]
  },
  {
    title: "PROGRAMMING LANGUAGES",
    technologies: [
      {
        name: "Python",
        description: "AI Frameworks"
      },
      {
        name: "Java",
        description: ""
      },
      {
        name: "Typescript",
        description: ""
      }
    ]
  }
];

function Technologies() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div id="technologies" className="relative text-white font-inter mt-[150px] pb-5">
      <div className="flex flex-col justify-center items-center z-10">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="font-extrabold text-[45px]"
        >
          TECHNOLOGIES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            MY CURRENT STACK FOR AI & AUTOMATIONS
          </span>
        </motion.p>
        <div className="md:max-w-screen max-w-[350px] flex flex-col bg-white/10 p-10 md:p-14 justify-center items-center rounded-lg backdrop-blur-sm border border-white/20 gap-10 mt-[30px] w-full md:w-auto">
          {/* AUTOMATIONS ROW */}
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-xl font-bold text-purple-400 mb-2">AUTOMATIONS</h2>
            <div className="flex flex-row justify-between items-start w-full">
              <div className="flex flex-col">
                <span className="text-lg font-bold">N8N</span>
                <span className="text-sm text-gray-300 max-w-[250px]">Experienced with the best practices to increase performance</span>
              </div>
              <span className="text-lg font-bold">MAKE</span>
            </div>
          </div>
          {/* VECTOR DATABASES & KNOWLEDGE RETRIEVAL ROW */}
          <div className="w-full flex flex-col gap-2 mt-2">
            <h2 className="text-xl font-bold mb-2" style={{color: 'orange'}}>VECTOR DATABASES & KNOWLEDGE RETRIEVAL</h2>
            <div className="flex flex-row gap-8 md:gap-16 lg:gap-24 xl:gap-32">
              <span className="text-lg font-semibold">Pinecone</span>
              <span className="text-lg font-semibold">Supabase</span>
              <span className="text-lg font-semibold">Redis</span>
            </div>
          </div>
          {/* PROGRAMMING LANGUAGES ROW */}
          <div className="w-full flex flex-col gap-2 mt-2">
            <h2 className="text-xl font-bold mb-2 text-pink-300">PROGRAMMING LANGUAGES</h2>
            <div className="flex flex-row gap-8 md:gap-16 lg:gap-24 xl:gap-32 items-end">
              <div className="flex flex-col items-center">
                <span className="text-lg font-semibold">Python</span>
                <span className="text-xs text-gray-400">AI Frameworks</span>
              </div>
              <span className="text-lg font-semibold">Java</span>
              <span className="text-lg font-semibold">Typescript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
