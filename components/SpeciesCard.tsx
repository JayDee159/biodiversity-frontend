type Props = { name: string; status: string }

export default function SpeciesCard({ name, status }: Props) {
  return (
    <div className="glass p-6 rounded-2xl hover-3d">
      <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl mb-5"></div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-red-400 mt-1">{status}</p>
    </div>
  )
}