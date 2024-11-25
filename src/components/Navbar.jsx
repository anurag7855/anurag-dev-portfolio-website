import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-primary z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 cursor-pointer font-['Orbitron']">
            Anurag Dev
          </h1>
        </motion.div>

        <div className="hidden md:flex">
          <ul className="flex gap-8">
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                className="nav-link capitalize"
              >
                <Link
                  to={link}
                  smooth
                  duration={300}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden text-lightText"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <motion.ul
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-primary gap-8"
        >
          {links.map(({ id, link }) => (
            <li key={id} className="nav-link text-2xl capitalize">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={300}
                spy={true}
                exact="true"
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
