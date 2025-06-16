'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function MaintenancePage() {
  const socialLinks = [
    { icon: <FaGithub className="w-6 h-6" />, url: 'https://github.com/biplobmolla', label: 'GitHub' },
    { icon: <FaLinkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/biplobmolla/', label: 'LinkedIn' },
    { icon: <FaFacebook className="w-6 h-6" />, url: 'https://www.facebook.com/Biplobmolla123/', label: 'Facebook' },
    { icon: <FaTwitter className="w-6 h-6" />, url: 'https://x.com/biplobmolla01', label: 'Twitter' },
    { icon: <FaEnvelope className="w-6 h-6" />, url: 'mailto:ahmedtamim317@gmail.com', label: 'Email' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🚧 Website Under Maintenance 🚧
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We&apos;re currently working on something awesome! Please check back soon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-300"
              >
                {link.icon}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 text-gray-300"
          >
            <p>Contact us at: <a href="mailto:ahmedtamim317@gmail.com" className="text-white hover:underline">ahmedtamim317@gmail.com</a></p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 