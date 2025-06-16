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
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🚧 Website Under Maintenance 🚧
          </motion.h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're currently working on something awesome! Please check back soon.
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
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {link.icon}
                </motion.span>
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 text-gray-300"
          >
            <p className="text-lg">
              Contact us at:{' '}
              <motion.a 
                href="mailto:ahmedtamim317@gmail.com" 
                className="text-white hover:text-purple-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ahmedtamim317@gmail.com
              </motion.a>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 