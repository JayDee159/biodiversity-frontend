type Props = { title: string; value: string }

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="glass p-6 rounded-2xl hover-3d">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-3xl font-bold gradient-text mt-2">{value}</h2>
    </div>
  )
}