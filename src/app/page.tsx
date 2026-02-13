"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"
import MusicSection from "./components/Music-Section"
import ContactSection from "./components/contact-section" 
import AboutSection from "./components/About"
import HeroSection from "./components/Hero-section" 
import MyMusic from "./components/Music"
import OutNowSection from "./components/outnow-section"
import { useState, useEffect } from "react"   
import SocialMedia from "./components/Links"
import SocialSection from "./components/Social" 
import About from "./components/about-us"
import { Mail, Send, MapPin, Clock, Crown, Diamond, Mic } from "lucide-react"


export default function BlacRubyPortfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  // Function to handle navigation and close sidebar
  const handleNavClick = (sectionId: string) => {
    setIsSidebarOpen(false)
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  } 


  // Word-by-word animation for "Jae Kush"
  const nameWords = ["Yung", ""]
  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  // Lighter animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Sidebar animation variants
  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-white text-white font-sans overflow-hidden relative">
      {/* Checkered Background Pattern */}
     <HeroSection/>  
   

      {/* Mobile Sidebar */}
   

      {/* Professional Glassy Navbar */}
     
      {/* <OutNowSection/>  */}
        <section className="relative z-10 py-20 px-6 md:px-12 bg-gradient-to-b from-black to-black overflow-hidden">
  {/* Background and Floating Elements */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Purple gradient blobs - shifted to right */}
    <div className="absolute top-1/4 right-1/5 w-64 sm:w-80 md:w-96 lg:w-[400px] h-64 sm:h-80 md:h-96 lg:h-[400px] bg-cyan-950 rounded-full blur-3xl opacity-40" />
    <div className="absolute bottom-1/4 right-1/5 w-48 sm:w-64 md:w-80 lg:w-[300px] h-48 sm:h-64 md:h-80 lg:h-[300px] bg-cyan-950 rounded-full blur-3xl opacity-30" />

    {/* Floating elements - no pointer blocking */}
    <motion.div
      className="absolute top-10 sm:top-16 md:top-20 right-8 sm:right-10 md:right-20 text-cyan-900/80"
      variants={floatingVariants}
      animate="animate"
    >
      <Crown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
    </motion.div>
    <motion.div
      className="absolute top-1/3 right-8 sm:right-10 md:right-20 text-purple-950"
      variants={floatingVariants}
      animate="animate"
      transition={{ delay: 1 }}
    >
      <Diamond className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
    </motion.div>
    <motion.div
      className="absolute bottom-16 sm:bottom-24 md:bottom-32 right-1/5 text-purple-950"
      variants={floatingVariants}
      animate="animate"
      transition={{ delay: 2 }}
    >
      <Mic className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    </motion.div>

    {/* Subtle grid overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(88,28,135,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(88,28,135,0.05)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] md:bg-[size:60px_60px]" />
  </div>

  {/* Content Section */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <motion.div
      className="relative text-2xl md:text-3xl italic font-medium text-white/90 leading-relaxed"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
    >
      <span className="absolute right-0 top-0 text-6xl text-blue-400 opacity-50 -translate-x-8">"</span>
      <p className="px-10">
        Supporters expect me to go hard with my grind and never let up — what makes me different is my story,
        dedication, and my drive to lead my brand to the top.
      </p>
      <span className="absolute right-0 bottom-0 text-6xl text-blue-400 opacity-50 translate-x-8">"</span>
    </motion.div>

    <motion.p
      className="mt-8 text-lg font-semibold text-blue-400"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
    >
      — UNO VEE
    </motion.p>

    {/* Clickable Buttons (Fixed z-index) */}
    <motion.div
      className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
    >
      <Button
        className="bg-gradient-to-r cursor-pointer from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105"
        onClick={() =>
          window.open("https://www.instagram.com/yung_ravage?igsh=bnh0OXd2OXcyd3d2", "_blank")
        }
      >
        Follow for updates
      </Button>
      <Button
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
        onClick={() =>
          window.open("https://www.instagram.com/yung_ravage?igsh=bnh0OXd2OXcyd3d2", "_blank")
        }
      >
        Follow on Instagram
      </Button>
    </motion.div>
  </div>
</section>  

    <About/> 
  <AboutSection/>   
  <MyMusic/>

  
      {/* Contact Section with ID for scroll navigation */}
      <div id="contact-section">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 text-center text-white/60 text-sm border-t border-white/10 bg-slate-950">
        <p>&copy; {new Date().getFullYear()} Yung . All rights reserved.</p>
        <p className="mt-2">Designed by {"<3"}BlazeTech Solutions</p>
      </footer>
    </div>
  )
}