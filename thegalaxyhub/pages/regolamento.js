import Head from 'next/head';

export default function Regolamento() {
  const regole = [
    { t: "Rispetto", d: "Rispetta tutti i membri della galassia." },
    { t: "No Spam", d: "Non intasare i canali con messaggi inutili." },
    { t: "Fair Play", d: "Minacce di Dox e DDoS Attack portano al ban immediato." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">
      <h1 className="text-4xl font-black text-amber-500 mb-10 uppercase italic">Regolamento TheGalaxyHub</h1>
      <div className="space-y-6 max-w-3xl">
        {regole.map((r, i) => (
          <div key={i} className="bg-[#0f0f0f] p-6 rounded-2xl border border-white/5">
            <h3 className="text-amber-500 font-bold underline mb-2">{r.t}</h3>
            <p className="text-gray-400">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}