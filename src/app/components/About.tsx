"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Music, Heart, Sparkles, Award, Users, TrendingUp } from "lucide-react"

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  }

  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Full Background Theme Image with Advanced Overlays */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://res-console.cloudinary.com/diml90c1y/thumbnails/v1/image/upload/v1770927919/V2hdHNBcHBfSW1hZ2VfMjAyNi0wMi0xMl9hdF8yMC41Ni41M18xX25tN2Zldw==/drilldownh')",
            filter: "brightness(0.8) contrast(1.2)"
          }}
        />
        
        {/* Multiple Dark Gradient Overlays - Updated to blue/cyan */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />
      </div>

      {/* Animated Blue/Cyan Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/3 -right-32 w-[700px] h-[700px] bg-cyan-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-1/4 w-[650px] h-[650px] bg-blue-700/15 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Hero Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 max-w-4xl mx-auto">
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/30 backdrop-blur-xl">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Authentic Artist</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              The Journey of{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Uno Vee
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-900/20 rounded-lg blur-2xl -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              A Story of Inspiration, Expression, and Purpose
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: Bio Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="group relative backdrop-blur-2xl bg-gradient-to-br from-black/80 to-blue-950/20 border border-blue-500/30 rounded-3xl p-8 md:p-10 hover:border-blue-500/60 transition-all duration-500 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/0 via-cyan-600/50 to-blue-600/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30">
                    <Music className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">The Origin Story</h2>
                </div>

                <div className="space-y-5 text-gray-200 leading-relaxed">
                  <p className="text-base md:text-lg">
                    I witnessed them create something that sounds good and displays expression in that moment I was 
                    validated—I wanted to rap! Growing up, my inspirations were Master P and the No Limit Soldiers, 
                    Triple Six Mafia, Project Pat, Playa Fly, T.I, Lil Wayne, The Hotboys, Mobb Deep, DMX, the Lox... 
                    the list can go on.
                  </p>

                  <div className="relative p-5 rounded-2xl bg-blue-900/20 border border-blue-500/20">
                    <Heart className="absolute top-3 left-3 w-5 h-5 text-blue-400/50" />
                    <p className="text-base md:text-lg pl-8">
                      The music educated me in a way where I felt as though I could tell my side of the story too! 
                      So I began to write my first rap. My uncle challenged me to write my first song and rap it to 
                      him on beat—then the rest is history.
                    </p>
                  </div>

                  <p className="text-base md:text-lg">
                    My goal in music moving forward is raising coherence to the frequency I naturally have. I do not 
                    do this for profit. I do not do this for fame. I do this because it was my birthright and I must 
                    obey.
                  </p>

                  <div className="relative p-5 rounded-2xl bg-cyan-900/20 border border-cyan-500/20">
                    <Sparkles className="absolute top-3 left-3 w-5 h-5 text-cyan-400/50" />
                    <p className="text-base md:text-lg pl-8">
                      <span className="text-cyan-300 font-semibold block mb-2">
                        "Soon many will understand the messages and the correlation to the spirals of life."
                      </span>
                      I am now aligned to the purpose of my creations. I am beyond grateful for the acknowledgments 
                      from everyone. If you have come across my work, you are eternally welcome. Always.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-500/20">
                  <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    Musical Influences
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Master P & No Limit",
                      "Triple Six Mafia",
                      "Project Pat",
                      "Playa Fly",
                      "T.I & Lil Wayne",
                      "The Hotboys",
                      "Mobb Deep",
                      "DMX & The Lox"
                    ].map((value, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-300 p-3 rounded-lg bg-blue-900/10 hover:bg-blue-900/20 transition-colors border border-blue-500/10 hover:border-blue-500/30"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full" />
                        <span className="text-sm font-medium">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Theme Image & Additional Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Main Theme Image */}
              <div className="group relative">
                <div className="relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: "url('https://res.cloudinary.com/diml90c1y/image/upload/v1770927919/WhatsApp_Image_2026-02-12_at_20.56.53_1_nm7few')"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 border-2 border-blue-500/40 rounded-3xl group-hover:border-cyan-400/60 transition-colors duration-500" />
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-cyan-700/30 to-blue-900/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2">The Artist</h3>
                    <p className="text-gray-300 text-sm">Aligned to Purpose</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, label: "Years Active", value: "10+", color: "blue" },
                  { icon: Music, label: "Projects", value: "50+", color: "cyan" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="relative backdrop-blur-2xl bg-gradient-to-br from-black/80 to-blue-950/20 border border-blue-500/30 rounded-2xl p-6 hover:border-cyan-500/60 transition-all duration-300 shadow-xl group"
                  >
                    <stat.icon className="w-8 h-8 text-blue-400 mb-3" />
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                    
                    {/* Glow on hover */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/0 via-cyan-600/50 to-blue-600/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Gallery Section */}
     

          {/* Enhanced Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Years Active", value: "10+", icon: TrendingUp },
              { label: "Projects", value: "50+", icon: Music },
              { label: "Global Reach", value: "1M+", icon: Users },
              { label: "Impact", value: "∞", icon: Heart },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative backdrop-blur-2xl bg-gradient-to-br from-black/80 to-blue-950/20 border border-blue-500/30 rounded-2xl p-6 text-center hover:border-cyan-500/60 transition-all duration-300 shadow-xl group"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-400 mt-2">{stat.label}</p>
                
                {/* Hover Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600/0 via-cyan-600/50 to-blue-600/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-blue-900/40 to-blue-950/30 border border-blue-500/50 rounded-3xl p-10 md:p-12 hover:border-cyan-400/70 transition-all duration-500 shadow-2xl group overflow-hidden">
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}
              />
              
              {/* Glow Effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-blue-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
              
              <div className="relative z-10">
                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  className="inline-block mb-4"
                >
                  <Sparkles className="w-12 h-12 text-blue-400 mx-auto" />
                </motion.div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Experience the Journey
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join Robert Bernard on a journey aligned to purpose. Discover music born from authenticity, 
                  expression, and the spirals of life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://youtube.com/@unovee?si=FqOf8pexTh1KWaX8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-500 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-600/50 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Music className="w-5 h-5" />
                      Listen Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/about"
                    className="px-8 py-4 backdrop-blur-xl bg-white/10 border-2 border-blue-500/50 hover:border-cyan-400/70 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Learn More
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}