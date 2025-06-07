// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function About() {
  return (
    <div className="font-inter mt-[150px] z-10 relative pb-7">
      <div
        id="about"
        className="z-20 flex flex-col items-center justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-extrabold text-white text-[45px]"
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            LEARN MORE
          </span>
        </motion.p>
        <div className="mt-5 flex flex-col gap-5 text-center justify-center items-center text-white text-[17px] font-medium">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-[300px] md:max-w-[700px]"
          >
            My name is João Otávio, I'm 20 years old and specialize in building intelligent automation systems using AI.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
            className="max-w-[300px] md:max-w-[700px]"
          >
            I help businesses automate repetitive tasks, integrate LLMs into their operations, and build scalable systems using tools like n8n, OpenAI, LangChain, and custom APIs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="max-w-[300px] md:max-w-[700px]"
          >
            My mission is to turn inefficiency into opportunity while constantly evolving as a developer. I'm passionate about combining code, logic, and AI to create real-world impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            viewport={{ once: true }}
            className="max-w-[300px] md:max-w-[700px] font-semibold"
          >
            ⚡ I'm results-driven, adaptable, and obsessed with making things smarter and faster.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;
