"use client"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center grid-bg">
      <div className="absolute w-[600px] h-[600px] bg-cyan-500 blur-[120px] opacity-20 rounded-full"></div>
      <div className="relative text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold leading-tight gradient-text"
        >
          Biodiversity Intelligence Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-400"
        >
          Real-time monitoring, predictive analytics, and global ecosystem intelligence.
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-cyan-400 text-black rounded-xl glow hover-3d">
            Launch Dashboard
          </button>
          <button className="px-8 py-4 glass rounded-xl hover-3d">
            Explore Species
          </button>
        </motion.div>
      </div>
    </main>
  )
}