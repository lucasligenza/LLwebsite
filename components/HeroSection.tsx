'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50"
    >
      {/* Enhanced background patterns */}
      <div className="absolute inset-0">
        {/* Animated gradient circles */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-100 to-transparent rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-green-100 to-transparent rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'linear-gradient(to right, #2B8A3E 1px, transparent 1px), linear-gradient(to bottom, #2B8A3E 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="text-center z-10 max-w-3xl mx-auto px-4"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-gray-800 mb-4"
        >
          Lucas <span className="text-green-700">Ligenza</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-gray-600 mb-4"
        >
          Computer Science Student at Penn State University
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-600 mb-8"
        >
          Machine Learning Engineer | Software Developer | HackPSU Co-Executive Director
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <motion.a
            href="mailto:LQL5443@psu.edu"
            whileHover={{ scale: 1.05 }}
            className="text-gray-600 hover:text-green-700 transition-colors"
          >
            LQL5443@psu.edu
          </motion.a>
          <span className="text-gray-400">|</span>
          <motion.a
            href="https://linkedin.com/in/lucasligenza"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="text-gray-600 hover:text-green-700 transition-colors"
          >
            LinkedIn
          </motion.a>
          <span className="text-gray-400">|</span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-gray-600"
          >
            484.408.7858
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <a 
            href="#experience" 
            className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
} 
