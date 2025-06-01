import { EXPERIENCES } from "../index";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            {/* Year */}
            <motion.div
              className="w-full lg:w-1/4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fadeInLeft}
            >
              <p className="mb-2 text-sm text-slate-400">{experience.year}</p>
            </motion.div>

            {/* Details */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              variants={fadeInRight}
            >
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">{experience.company}</span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block mr-2 mb-2 px-2 py-1 bg-stone-900 text-stone-200 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
