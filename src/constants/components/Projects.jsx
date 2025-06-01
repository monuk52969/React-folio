import { PROJECTS } from "../index";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-16 flex flex-wrap lg:justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-lg p-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={fadeLeft}
          >

            {/* Image Section with hover zoom */}
            <motion.div
              className="w-full lg:w-1/4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded-lg object-cover"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              variants={fadeRight}
            >
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              {/* Technologies with hover effect */}
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300 transition-all hover:bg-stone-700 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
