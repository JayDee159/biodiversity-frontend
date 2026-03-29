"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 px-8 py-4 rounded-full glass flex gap-8 shadow-lg z-50"
    >
      <Link href="/" className="gradient-text font-bold">BioMonitor</Link>
      <Link href="/dashboard" className="text-gray-300 hover:text-cyan-400 transition">Dashboard</Link>
      <Link href="/species" className="text-gray-300 hover:text-cyan-400 transition">Species</Link>
      <Link href="/map" className="text-gray-300 hover:text-cyan-400 transition">Map</Link>
    </motion.nav>
  )
}