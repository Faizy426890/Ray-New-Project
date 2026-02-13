"use client"

import type React from "react"
import { Music, Play, Clock, Eye } from "lucide-react"

interface Track {
  id: string
  number: number
  title: string
  genre: string
  duration: string
  plays: string
  description: string
  thumbnail: string
  url: string
}

const tracks: Track[] = [
  {
    id: "beyond-ceiling",
    number: 1,
    title: "Beyond the Ceiling",
    genre: "Hip-Hop",
    duration: "3:42",
    plays: "15.2K",
    description: "A cosmic journey through raw emotions and stellar beats. This track showcases the artist's ability to blend street narratives with otherworldly production, creating a unique sonic experience that transcends boundaries.",
    thumbnail: "https://img.youtube.com/vi/jOJUOtPQkxk/maxresdefault.jpg",
    url: "https://youtu.be/jOJUOtPQkxk?si=QxQWp5L6TtbsBLOV",
  },
  {
    id: "aint-what-it-seems",
    number: 2,
    title: "Ain't What It Seems",
    genre: "Hip-Hop",
    duration: "2:58",
    plays: "22.8K",
    description: "Unapologetic and fierce, this track embodies the raw energy that defines the artist's sound. With hard-hitting lyrics and an infectious beat, it's a statement of authenticity and artistic vision.",
    thumbnail: "https://img.youtube.com/vi/CtEY7KVKFo4/maxresdefault.jpg",
    url: "https://youtu.be/CtEY7KVKFo4?si=_BkhLd7JJ7KA0EKb",
  },
  {
    id: "hello-america",
    number: 3,
    title: "Hello Low America",
    genre: "Hip-Hop",
    duration: "4:15",
    plays: "31.5K",
    description: "A declaration of serious intent and unwavering dedication. This track perfectly captures the essence of the grind mentality, delivering powerful verses over a hypnotic beat that demands attention.",
    thumbnail: "https://img.youtube.com/vi/B_MF-rkYvm0/maxresdefault.jpg",
    url: "https://youtu.be/B_MF-rkYvm0?si=fkcVBriZyWvUj-tm",
  },
]

const OutNowSection: React.FC = () => {
  const handleTrackClick = (url: string, title: string) => {
    console.log(`[v0] Opening track: ${title}`)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-950/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-blue-950/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            <Music className="text-cyan-400" size={20} />
            <span className="text-cyan-200 font-semibold tracking-wider uppercase text-sm">Latest Releases</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-150"></div>
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-20">
          <h1 className="text-8xl font-bold mb-4">
            <span className="text-white">OUT </span>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]">
              NOW
            </span>
          </h1>
          <p className="text-blue-300/80 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Experience the latest from Yung's musical journey.
            <br />
            Each track tells a story of dedication, passion, and street elegance.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className="group relative bg-gradient-to-br from-white/5 via-blue-950/15 to-black backdrop-blur-3xl border border-cyan-500/20 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(6,182,212,0.3)]"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
              onClick={() => handleTrackClick(track.url, track.title)}
            >
              {/* Track Number Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/90 to-blue-500/90 backdrop-blur-md border-2 border-white/30 flex items-center justify-center font-bold text-white text-lg shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                  {track.number}
                </div>
              </div>

              {/* Genre Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="px-3 py-1.5 rounded-full bg-cyan-950/60 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  {track.genre}
                </div>
              </div>

              {/* Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-cyan-500/95 backdrop-blur-md border-3 border-white/60 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.7)] transform group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} className="text-white ml-1.5" fill="white" />
                  </div>
                </div>

                {/* Music Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Music className="text-cyan-300" size={24} />
                </div>
              </div>

              {/* Track Info */}
              <div className="p-6">
                {/* Stats Row */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Clock size={14} />
                    <span className="font-medium">{track.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-400">
                    <Eye size={14} />
                    <span className="font-medium">{track.plays}</span>
                  </div>
                </div>

                {/* Track Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300 leading-tight">
                  {track.title}
                </h3>

                {/* Description */}
                <p className="text-blue-300/70 text-sm leading-relaxed mb-6 line-clamp-3">
                  {track.description}
                </p>

                {/* Listen Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleTrackClick(track.url, track.title)
                  }}
                  className="w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 backdrop-blur-md border relative overflow-hidden bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 border-cyan-400/40 text-cyan-300 hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-cyan-500/30 hover:border-cyan-400/60 hover:text-white shadow-[0_8px_24px_rgba(6,182,212,0.2)] hover:shadow-[0_8px_32px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  <span className="relative z-10 tracking-wider flex items-center justify-center gap-2">
                    <Play size={16} />
                    LISTEN ON YOUTUBE
                  </span>

                  {/* Shine effect */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                </button>
              </div>

              {/* Magical glow effects */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl -z-10 bg-cyan-500"></div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 border border-cyan-500/50"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default OutNowSection