import { useState } from 'react';

export default function Candidature() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6">
      <div className="bg-[#0f0f0f] border border-white/5 p-10 rounded-3xl max-w-lg w-full">
        <h1 className="text-3xl font-black text-amber-500 mb-2 italic">CANDIDATURE STAFF</h1>
        <p className="text-gray-500 mb-8 text-sm text-right">Discord Login Richiesto</p>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <input type="text" placeholder="Nome In-Game" className="w-full bg-black border border-white/10 p-4 rounded-xl focus:border-amber-500 outline-none" required />
          <textarea placeholder="Perché dovremmo sceglierti?" className="w-full bg-black border border-white/10 p-4 rounded-xl h-32 focus:border-amber-500 outline-none" required></textarea>
          <button className="w-full bg-amber-500 text-black py-4 rounded-xl font-black uppercase hover:bg-amber-400 transition">Invia Candidatura</button>
        </form>
        
        {sent && <p className="mt-4 text-green-500 text-center font-bold">Inviata! Controlla l'Admin Panel.</p>}
      </div>
    </div>
  );
}