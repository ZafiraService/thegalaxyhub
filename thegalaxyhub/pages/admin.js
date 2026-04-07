import { useState } from 'react';
import { FileText, Hammer, Check, X } from 'lucide-react';

export default function Admin() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0f0f0f] border-r border-white/5 p-6 space-y-4">
        <h2 className="text-amber-500 font-black mb-10 italic text-xl">GALAXY ADMIN</h2>
        <button onClick={() => setView('candidature')} className="w-full text-left p-3 hover:bg-amber-500/10 rounded-lg flex items-center gap-2 tracking-widest uppercase text-xs font-bold"><FileText size={18}/> Candidature</button>
        <button onClick={() => setView('unban')} className="w-full text-left p-3 hover:bg-amber-500/10 rounded-lg flex items-center gap-2 tracking-widest uppercase text-xs font-bold"><Hammer size={18}/> Appelli Ban</button>
      </div>

      {/* Content */}
      <div className="flex-1 p-12">
        {view === 'candidature' && (
          <div>
            <h2 className="text-3xl font-black mb-8 italic">REVISIONE CANDIDATURE</h2>
            <div className="bg-[#0f0f0f] p-6 rounded-2xl border border-white/5 flex justify-between items-center">
              <div>
                <p className="text-amber-500 font-bold">User: Player123</p>
                <p className="text-gray-400 text-sm italic font-serif">"Vorrei diventare staff perché..."</p>
              </div>
              <div className="flex gap-4">
                <button className="p-2 bg-green-600 rounded-lg"><Check /></button>
                <button className="p-2 bg-red-600 rounded-lg"><X /></button>
              </div>
            </div>
          </div>
        )}
        
        {view === 'unban' && (
          <h2 className="text-3xl font-black italic">APPELLI UNBAN (0 Pendenti)</h2>
        )}
      </div>
    </div>
  );
}