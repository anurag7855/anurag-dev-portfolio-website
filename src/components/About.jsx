import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { socialLinks } from '../data/socialLinks';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="max-w-sm w-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg"
                alt="ANURAG SATNAMI- Full Stack Developer"
                className="rounded-xl w-full h-[400px] object-cover shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
                width={400}
                height={400}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 shadow-xl border border-white/20">
              <p className="text-lightestText mb-4">
                I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end development. My journey in web development started with a curiosity about how things work on the internet, which led me to dive deep into various technologies and frameworks.
              </p>
              <p className="text-lightestText mb-4">
                I specialize in building responsive web applications using modern technologies like React, Node.js, and various databases. I'm always eager to learn new technologies and improve my skills.
              </p>
              <p className="text-lightestText mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community through blog posts and mentoring.
              </p>
              
              <div className="flex gap-4 mt-4">
                {socialLinks.map(({ id, name, icon, url }) => {
                  const IconComponent = {
                    FaGithub,
                    FaLinkedin,
                    FaTwitter,
                    FaInstagram
                  }[icon];

                  return (
                    <a
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-lightestText hover:text-primary transition-colors duration-300"
                      aria-label={name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
