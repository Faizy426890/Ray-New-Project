"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Sparkles, Music, Waves } from "lucide-react"
import { useState, useEffect, useRef } from "react" 
import ContactSection from "../components/contact-section"

export default function About() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const nextTextTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Text content for typing animation
  const textContent = [
    "Vedal Foster, born in Memphis Tennessee in the 90s. Hip hop and R&B were my muse growing up, inspiring me to express myself through poetry and sound. At age 7, watching my uncle record freestyles with his friends on a jukebox, I witnessed creation in its purest form—they had me in the mix. In that moment, I was validated. I wanted to rap! My inspirations span from Master P and No Limit, Triple Six Mafia, Project Pat, Playa Fly, to T.I, Lil Wayne, The Hotboys, Mobb Deep, DMX, and The LOX. The music educated me, showing me I could tell my side of the story too. My goal in music isn't profit or fame—it's my birthright, and I must obey. Soon many will understand the messages and the correlation to the spirals of life. I am now aligned to the purpose of my creations.",
  ]

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Clear intervals when component unmounts or becomes invisible
  useEffect(() => {
    if (!isVisible) {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
      }
      if (nextTextTimeoutRef.current) {
        clearTimeout(nextTextTimeoutRef.current)
        nextTextTimeoutRef.current = null
      }
      setIsTyping(false)
    }
  }, [isVisible])

  // Letter-by-letter typing effect - only when visible
  useEffect(() => {
    if (!isVisible || currentTextIndex >= textContent.length) return

    setIsTyping(true)
    const text = textContent[currentTextIndex]

    const startIndex = charIndex === 0 ? 0 : charIndex
    setDisplayedText(text.slice(0, startIndex))

    typingIntervalRef.current = setInterval(() => {
      setCharIndex((prevIndex) => {
        const newIndex = prevIndex + 1
        if (newIndex <= text.length) {
          setDisplayedText(text.slice(0, newIndex))

          if (newIndex === text.length) {
            setIsTyping(false)

            nextTextTimeoutRef.current = setTimeout(() => {
              setCurrentTextIndex((prev) => (prev + 1) % textContent.length)
              setCharIndex(0)
            }, 2000)

            if (typingIntervalRef.current) {
              clearInterval(typingIntervalRef.current)
              typingIntervalRef.current = null
            }
          }

          return newIndex
        }
        return prevIndex
      })
    }, 10)

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
      }
      if (nextTextTimeoutRef.current) {
        clearTimeout(nextTextTimeoutRef.current)
        nextTextTimeoutRef.current = null
      }
    }
  }, [currentTextIndex, isVisible])

  // Reset animation when becoming visible again
  useEffect(() => {
    if (isVisible && displayedText === "" && charIndex === 0) {
      setCurrentTextIndex(0)
    }
  }, [isVisible])

  // Word-by-word animation for "Uno Vee"
  const nameWords = ["UNO", "VEE"]
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

  return ( 
     <>
    <section
      ref={sectionRef}
      id="bio"
      className="relative py-24 px-6 md:px-12 overflow-hidden min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse at top, #0a1628 0%, #020817 50%, #000000 100%),
          linear-gradient(90deg, rgba(15, 23, 42, 0.4) 1px, transparent 1px),
          linear-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px)
        `,
        backgroundSize: `100% 100%, 40px 40px, 40px 40px`,
        backgroundPosition: `0 0, 0 0, 0 0`,
      }}
    >
      {/* Magical Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Mystical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Magical Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-500/30 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-500/30 rounded-lg"
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Word Animation */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950/80 border border-blue-500/30 mb-8 backdrop-blur-sm shadow-lg shadow-blue-500/20"
            variants={fadeInUp}
          >
            <Waves className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-200 font-semibold tracking-wide">SOULHOP ARTIST</span>
            <Music className="w-5 h-5 text-cyan-400" />
          </motion.div>

          <div className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <motion.div variants={fadeInUp} className="text-white mb-2">
              About
            </motion.div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {nameWords.map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={wordVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="italic font-light bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content with Typing Animation */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.div
              className="relative p-8 rounded-3xl bg-slate-950/40 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-500/10"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10" />
              
              {/* Animated border glow */}
              <motion.div 
                className="absolute inset-0 rounded-3xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.1)',
                    '0 0 40px rgba(59, 130, 246, 0.2)',
                    '0 0 20px rgba(34, 211, 238, 0.1)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                {/* Origin Story */}
                <motion.div className="mb-8" variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <motion.div 
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {currentTextIndex === 0 ? "The Journey" : "The Artist"}
                  </h3>
                  <div className="text-xl text-slate-200 leading-relaxed font-light min-h-[200px]">
                    {displayedText}
                    {isTyping && isVisible && (
                      <motion.span
                        className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    )}
                  </div>
                </motion.div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-8" />

                {/* Stats */}
                <motion.div className="grid grid-cols-2 gap-6" variants={fadeInUp}>
                  <motion.div 
                    className="text-center p-4 rounded-xl bg-slate-950/60 border border-blue-500/20 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-1">Memphis</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide">Born 90s</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-xl bg-slate-950/60 border border-blue-500/20 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-1">Soulhop</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide">Genre</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Eye-Catching Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-[500px] h-[500px] rounded-full border-2 border-cyan-400/20"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div
                className="absolute w-[400px] h-[400px] rounded-full border border-blue-400/20"
                animate={{ 
                  rotate: -360,
                  scale: [1.1, 1, 1.1],
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </div>

            {/* Main Professional Image Container */}
            <div className="relative z-10">
              {/* Mystical Glowing Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-600/30 rounded-full blur-3xl scale-110"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1.1, 1.2, 1.1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Professional Border Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 p-1"
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-slate-950" />
              </motion.div>

              {/* Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-900/50 shadow-2xl shadow-cyan-500/30">
                <Image
                  src="https://res.cloudinary.com/diml90c1y/image/upload/v1770927909/WhatsApp_Image_2026-02-12_at_20.56.54_blvooz.jpg"
                  alt="Uno Vee - Soulhop Artist Portrait"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Mystical Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent" />

                {/* Sparkle Effects */}
                <motion.div
                  className="absolute top-4 right-4 text-cyan-400"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 text-blue-400"
                  animate={{
                    scale: [1, 1.4, 1],
                    rotate: [360, 180, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Star className="w-5 h-5 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-8 text-indigo-400"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <Music className="w-4 h-4 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                </motion.div>
              </div>

              {/* Professional Name Badge */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-8 py-4 bg-gradient-to-r from-slate-950/95 to-blue-950/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(34, 211, 238, 0.4)',
                }}
              >
                <div className="text-center">
                  <span className="text-white font-bold text-xl tracking-wide bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Uno Vee
                  </span>
                </div>
              </motion.div>

              {/* Floating Achievement Badges */}
              <motion.div
                className="absolute -top-4 -left-4 px-3 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-lg shadow-cyan-500/50"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                animate={{ 
                  y: [-5, 5, -5],
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                }}
              >
                BIRTHRIGHT
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 px-3 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-lg shadow-blue-500/50"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                animate={{ 
                  y: [5, -5, 5],
                }}
                transition={{ 
                  y: { duration: 2.5, repeat: Infinity },
                }}
              >
                MEMPHIS
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-8 px-3 py-2 bg-indigo-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-lg shadow-indigo-500/50"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                animate={{ 
                  x: [-3, 3, -3],
                }}
                transition={{ 
                  x: { duration: 3, repeat: Infinity },
                }}
              >
                ALIGNED
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section> 
   </>
  )
}