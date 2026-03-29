import { useEffect, useState } from "react";

export default function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/analytics")
      .then(res => res.json())
      .then(data => setData(data[0]))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">📊 Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl">Total Species</h2>
          <p className="text-3xl font-bold mt-2">{data.totalSpecies}</p>
        </div>

        <div className="bg-red-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl">Endangered</h2>
          <p className="text-3xl font-bold mt-2">{data.endangered}</p>
        </div>

        <div className="bg-yellow-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl">Vulnerable</h2>
          <p className="text-3xl font-bold mt-2">{data.vulnerable}</p>
        </div>

      </div>
    </div>
  );
}