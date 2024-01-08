'use client';
import { useState } from 'react';
import Image from 'next/image';
import web from '../web3.png';
import { FaUser, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CustomButton from '../components/button-container';
import Link from 'next/link';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
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

  return (
    <section
      className="pt-40 "
      style={{
        backgroundImage: `url(${web.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className=" pt-10 ml-10 max-w-md p-8 bg-[#042019] border rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center ">Login</h2>
        <form>
          <div className="mb-4 relative">
            <label htmlFor="username" className="block text-gray-600">
              <FaUser className="absolute left-2 top-2 mt-1" />
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              className="w-full p-2 pl-10 border rounded-md text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-600">
              <FaLock className="absolute left-2 top-2 mt-1" />
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                name="password"
                className="w-full p-2 pl-10 border rounded-md text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute left-2 top-2 cursor-pointer text-gray-600 mt-1"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaLock /> : <FaLock />}
              </button>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center ">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <p>Forgot Password?</p>
            </div>
            <motion.div variants={linkVariants} className=" w-32 mx-auto mt-8">
              <CustomButton showRightIcon={true} text="Log In" />
            </motion.div>

            <div className="flex justify-center mt-5">
              <p>Already have an account?</p>
              <Link href="/signup">Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
