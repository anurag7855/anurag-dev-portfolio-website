import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-darkBg py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-lightestText">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+917855059740"
              className="flex items-center gap-2 text-lightestText hover:text-primary transition-colors duration-300"
            >
              <FaPhone className="text-lg" />
              <span>+91 7855059740</span>
            </a>
            <a
              href="mailto:asartist20@gmail.com"
              className="flex items-center gap-2 text-lightestText hover:text-primary transition-colors duration-300"
            >
              <FaEnvelope className="text-lg" />
              <span>asartist20@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
