"use client"
import StatsCard from "../../components/StatsCard"
import { motion } from "framer-motion"

export default function Dashboard() {
  return (
    <div className="p-12">
      <h1 className="text-5xl gradient-text mb-10">Intelligence Dashboard</h1>
      <div className="grid grid-cols-4 gap-6">
        {["10,245", "312", "89", "142"].map((val, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }}>
            <StatsCard title={`Metric ${i+1}`} value={val} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10 h-[400px] glass rounded-2xl flex items-center justify-center">
        Advanced Analytics Visualization
      </div>
    </div>
  )
}