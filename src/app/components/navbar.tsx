'use client';
import Link from 'next/link';
import { navElements } from '../constants/nav-elements';
import { gravitasOne } from '../fonts';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import CustomButton from './button-container';
import { useState } from 'react';
import useNav from '../hooks/useNav';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  open: {
    opacity: 1,
    display: 'flex',
  },
  closed: {
    opacity: 0,
    transition: {
      delayChildren: 0.8,
    },
    display: 'none',
  },
};

const mVariants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.2, staggerDirection: -1 },
  },
};

const linkVariants = {
  opened: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  closed: {
    opacity: 0,
    y: 50,

    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

function Navbar() {
  const [toggleNav, isOpen] = useNav();
  return (
    <nav className="bg-black container fixed top-0 left-[50%] translate-x-[-50%] my-0 mx-auto z-50 flex flex-col items-center justify-between py-2 px-8 md:px-16 ">
      <div className="flex flex-row items-center justify-between w-full pb-4">
        <p className={gravitasOne.className}>
          <Link className="text-bold text-xl" href="/">
            Rooted
          </Link>
        </p>

        <div className="hidden lg:flex items-center gap-4 font-light ">
          {navElements.map(({ link, name }) => (
            <p key={name}>
              <Link className="text-justify text-lg text-white" href={link}>
                {name}
              </Link>
            </p>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-justify text-[#F3E8EE] text-lg  w-full font-light">
            Log In
          </button>

          <CustomButton showRightIcon={true} text="Register" />
        </div>

        {isOpen ? (
          <MdClose
            className="inline-block lg:hidden text-4xl"
            onClick={toggleNav}
          />
        ) : (
          <FaBars
            className="inline-block lg:hidden text-2xl"
            onClick={toggleNav}
          />
        )}
      </div>

      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className="absolute opacity-0 top-16 z-10 flex flex-col justify-between items-center gap-4 lg:hidden bg-rootedpurple h-[92vh] w-screen p-14"
      >
        <motion.div
          variants={mVariants}
          className="flex flex-col items-center gap-4"
        >
          {navElements.map(({ link, name }) => (
            <motion.p key={name} variants={linkVariants}>
              <Link className="text-justify text-lg  text-black" href={link}>
                {name}
              </Link>
            </motion.p>
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          <motion.div variants={linkVariants}>
            <button className="text-justify text-lg text-secondary">
              Log in
            </button>
          </motion.div>

          <motion.div variants={linkVariants}>
            <CustomButton showRightIcon={true} text="Register" />
          </motion.div>
        </div>
      </motion.nav>
    </nav>
  );
}

export default Navbar;
