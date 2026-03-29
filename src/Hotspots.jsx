import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Hotspots() {
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/hotspots")
      .then(res => res.json())
      .then(data => setHotspots(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <h1 className="text-4xl font-bold mb-5">🌍 Biodiversity Hotspots</h1>

      <MapContainer center={[20, 0]} zoom={2} style={{ height: "80vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hotspots.map((spot, index) => (
          <Marker
            key={index}
            position={[spot.location.lat, spot.location.lng]}
          >
            <Popup>
              <strong>{spot.name}</strong><br />
              Severity: {spot.severity}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}