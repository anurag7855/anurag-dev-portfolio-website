import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { id: 2, name: 'CSS', icon: FaCss3, color: 'text-blue-500' },
    { id: 3, name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { id: 4, name: 'React', icon: FaReact, color: 'text-blue-400' },
    { id: 5, name: 'Node.js', icon: FaNode, color: 'text-green-500' },
    { id: 6, name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { id: 7, name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { id: 8, name: 'SQL', icon: FaDatabase, color: 'text-purple-500' },
    { id: 9, name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { id: 10, name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  ];

  return (
    <div name="skills" className="w-full min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map(({ id, name, icon: Icon, color }) => (
            <motion.div
              key={id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-tertiary hover:scale-105 transition-transform duration-300"
            >
              <Icon className={`text-5xl ${color}`} />
              <p className="text-lightText">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
