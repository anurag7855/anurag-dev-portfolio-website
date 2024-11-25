import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3',
      github: 'https://github.com',
      demo: 'https://demo.com',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates. Built using React, Firebase, and Material-UI.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3',
      github: 'https://github.com',
      demo: 'https://demo.com',
      tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description:
        'A responsive dashboard that aggregates social media metrics and provides analytical insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
      github: 'https://github.com',
      demo: 'https://demo.com',
      tech: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
    },
  ];

  return (
    <div name="projects" className="w-full min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, image, github, demo, tech }) => (
            <motion.div
              key={id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-xl overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-lightText mb-2">{title}</h3>
                <p className="text-lightestText mb-4">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm text-secondary border border-secondary rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightText hover:text-secondary transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightText hover:text-secondary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
