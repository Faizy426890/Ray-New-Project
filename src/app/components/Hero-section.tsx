"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background - Memphis Vibes */}
      <div className="absolute inset-0 z-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-black" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]"
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }} />
        
        {/* Noise texture for depth */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat'
             }} />
        
        {/* Diagonal light beam */}
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[1200px] bg-gradient-to-br from-cyan-400/5 via-blue-500/5 to-transparent rotate-45 blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left Side - Artist Identity */}
          <div className="space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-2xl border border-cyan-400/20 shadow-xl shadow-cyan-500/10">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-cyan-400 text-sm font-bold tracking-wide">MEMPHIS, TN</span>
              </div>
              <div className="w-px h-5 bg-cyan-400/30"></div>
              <span className="text-white/90 text-sm font-semibold">90s Hip-Hop Legacy</span>
            </div>

            {/* Artist Name */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                  <span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-cyan-100 bg-clip-text text-transparent drop-shadow-2xl"
                        style={{
                          fontFamily: "'Archivo Black', sans-serif",
                          letterSpacing: '-0.02em'
                        }}>
                    UNO
                  </span>
                  <span className="block bg-gradient-to-r from-white via-cyan-50 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl mt-2"
                        style={{
                          fontFamily: "'Archivo Black', sans-serif",
                          letterSpacing: '-0.02em'
                        }}>
                    VEE
                  </span>
                </h1>
                <p className="text-xl text-cyan-300/80 font-semibold tracking-wide"
                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Vedal Foster
                </p>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-wide uppercase"
                  style={{ 
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '0.05em'
                  }}>
                Poetry in Motion • Sound & Soul
              </h2>
            </div>

            {/* Bio Section */}
            <div className="group relative backdrop-blur-2xl bg-gradient-to-br from-white/5 via-cyan-500/5 to-blue-500/5 rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400/30 transition-all duration-500">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative">
                <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-6 tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  The Journey
                </h3>
                <div className="space-y-4 text-white/90 leading-relaxed text-base"
                     style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="text-lg font-semibold">Born in Memphis, Tennessee in the 90s — where hip-hop and R&B weren't just music, they were life.</p>
                  <p>Growing up, these sounds became my muse, inspiring me to express myself through poetry and sound from age 7.</p>
                  <p>I watched my uncle recording freestyles with his friends on a jukebox, and they put me in the mix. That moment sparked everything.</p>
                  <p className="text-cyan-300/90 font-semibold italic">Music isn't just what I do — it's who I am.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA - Elegant Gradient Button */}
              <button className="group relative px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_100%] animate-gradient" />
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                </div>
                
                <div className="relative flex items-center justify-center gap-2.5 font-semibold text-base text-white tracking-wide"
                     style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Book Performance
                </div>
              </button>

              {/* Secondary CTA - Refined Border Button */}
              <button className="group relative px-10 py-4 rounded-full overflow-hidden backdrop-blur-xl bg-white/[0.03] border border-cyan-400/30 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/60 hover:bg-white/[0.06] active:scale-[0.98]">
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Soft inner glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-md" />
                </div>
                
                <div className="relative flex items-center justify-center gap-2.5 font-semibold text-base text-white/90 group-hover:text-white tracking-wide transition-colors duration-300"
                     style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <svg className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Freestyle
                </div>
              </button>
            </div>

            <style jsx>{`
              @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-gradient {
                animation: gradient 3s ease infinite;
              }
            `}</style>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="group relative backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-5 border border-cyan-400/20 shadow-xl hover:border-cyan-400/40 hover:shadow-cyan-400/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text mb-1"
                       style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    30+
                  </div>
                  <div className="text-white/70 text-sm font-bold uppercase tracking-wider"
                       style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Years
                  </div>
                </div>
              </div>

              <div className="group relative backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-5 border border-blue-400/20 shadow-xl hover:border-blue-400/40 hover:shadow-blue-400/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text mb-1"
                       style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    MEM
                  </div>
                  <div className="text-white/70 text-sm font-bold uppercase tracking-wider"
                       style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Born
                  </div>
                </div>
              </div>

              <div className="group relative backdrop-blur-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl p-5 border border-indigo-400/20 shadow-xl hover:border-indigo-400/40 hover:shadow-indigo-400/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text mb-1"
                       style={{ fontFamily: "'Archivo Black', sans-serif" }}>
                    90s
                  </div>
                  <div className="text-white/70 text-sm font-bold uppercase tracking-wider"
                       style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Era
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Artist Image */}
          <div className="relative lg:h-[700px] h-[500px]">
            {/* Main Image Container */}
            <div className="group relative h-full rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-400/20 shadow-2xl shadow-cyan-500/20 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-cyan-400/30">
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/diml90c1y/image/upload/v1770927909/WhatsApp_Image_2026-02-12_at_20.56.54_blvooz.jpg')`
                }}
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-transparent to-blue-900/30" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-transparent blur-2xl group-hover:w-40 group-hover:h-40 transition-all duration-500" />
              
              {/* Performance Badge */}
              <div className="absolute top-6 right-6 backdrop-blur-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl px-5 py-3 border border-cyan-400/30 shadow-xl shadow-cyan-500/20">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
                    <div className="relative w-3 h-3 bg-cyan-400 rounded-full" />
                  </div>
                  <span className="text-cyan-300 text-sm font-black tracking-wider"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    AVAILABLE
                  </span>
                </div>
              </div>

              {/* Bottom Info Card */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-2xl bg-gradient-to-r from-black/60 via-black/50 to-black/60 rounded-2xl p-6 border border-cyan-400/20 shadow-2xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                  <div>
                    <div className="text-white font-black text-xl tracking-tight"
                         style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Memphis Original
                    </div>
                    <div className="text-cyan-300/80 text-sm font-semibold"
                         style={{ fontFamily: "'Inter', sans-serif" }}>
                      Hip-Hop • R&B • Poetry
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Border Effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-50 -z-10 animate-pulse" 
                 style={{ animationDuration: '3s' }} />
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl opacity-40 -z-20" />
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
}