import SpeciesCard from "../../components/SpeciesCard"

export default function SpeciesPage() {
  return (
    <div className="p-10 grid grid-cols-3 gap-6">
      <SpeciesCard name="Tiger" status="Endangered" />
      <SpeciesCard name="Panda" status="Vulnerable" />
      <SpeciesCard name="Elephant" status="Endangered" />
    </div>
  )
}