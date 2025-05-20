'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-green-700 hover:text-green-600 transition-colors">
            LL
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#experience" className="text-gray-800 hover:text-green-600 transition-colors">Experience</Link>
            <Link href="#projects" className="text-gray-800 hover:text-green-600 transition-colors">Projects</Link>
            <Link href="#contact" className="text-gray-800 hover:text-green-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 
