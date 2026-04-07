import Head from 'next/head';
import { useSession, signIn, signOut } from "next-auth/react";
import { ShoppingBag, Zap, Shield, Globe, Gavel, FileText, Star, LogOut, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  const categories = [
    { title: "Gaming", icon: <Zap />, price: "9.99", desc: "Potenzia il tuo account al massimo.", link: "/shop/gaming" },
    { title: "Crypto", icon: <Globe />, price: "49.99", desc: "Servizi exchange sicuri e veloci.", link: "/shop/crypto" },
    { title: "Premium", icon: <Shield />, price: "19.99", desc: "Accesso VIP esclusivo alla galassia.", link: "/shop/premium" }
  ];

  const quickLinks = [
    { name: "Candidature", icon: <FileText size={18}/>, href: "/candidature" },
    { name: "Unban", icon: <Gavel size={18}/>, href: "/unban" },
    { name: "Vota", icon: <Star size={18}/>, href: "/vote" },
    { name: "Regolamento", icon: <Shield size={18}/>, href: "/regolamento" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30">
      <Head>
        <title>TheGalaxyHub | Hub Digitale d'Elite</title>
        <meta name="description" content="Servizi premium per la tua esperienza digitale" />
      </Head>

      {/* NAVBAR */}
      <nav className="p-4 md:p-6 flex justify-between items-center border-b border-white/5 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-amber-600 to-amber-300 rounded-full flex items-center justify-center text-black font-black italic shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            GH
          </div>
          <span className="font-black tracking-tighter text-2xl uppercase italic hidden sm:block">TheGalaxyHub</span>
        </div>

        <div className="flex items-center gap-6">
          {/* Menu rapido desktop */}
          <div className="hidden lg:flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-amber-500 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Button */}
          {session ? (
            <div className="flex items-center gap-3 bg-white/5 p-1 pr-4 rounded-full border border-white/10">
              <img src={session.user.image} alt="User" className="w-8 h-8 rounded-full border border-amber-500/50" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-amber-500 leading-none">BENTORNATO</span>
                <span className="text-xs font-black uppercase truncate max-w-[80px]">{session.user.name}</span>
              </div>
              <button onClick={() => signOut()} className="ml-2 text-gray-500 hover:text-red-500 transition">
                <LogOut size={16} />
              </button>
              {session.user.email === "support@thegalaxyhub" && (
                <Link href="/admin" className="text-amber-500 ml-2">
                   <LayoutDashboard size={16} />
                </Link>
              )}
            </div>
          ) : (
            <button 
              onClick={() => signIn('discord')}
              className="bg-amber-500 text-black px-6 py-2 rounded-full font-bold text-sm hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all active:scale-95 flex items-center gap-2"
            >
              ACCEDI CON DISCORD
            </button>
          )}
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto py-20 px-6">
        <section className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-600/10 blur-[120px] rounded-full -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black mb-6 bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent italic tracking-tighter">
              GALAXY HUB
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light italic leading-relaxed">
              L'eccellenza digitale a portata di click. Esplora, vota e unisciti alla nostra community d'élite.
            </p>
          </motion.div>

          {/* Quick Action Cards (Sollary Style) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {quickLinks.map((link, i) => (
              <Link href={link.href} key={i}>
                <div className="bg-[#0f0f0f] border border-white/5 p-4 rounded-2xl hover:border-amber-500/30 transition-all group hover:bg-amber-500/5 cursor-pointer">
                  <div className="text-amber-500 mb-2 flex justify-center group-hover:scale-110 transition">{link.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{link.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PRODUCT CATEGORIES */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-black uppercase italic tracking-widest text-amber-500">Shop Categories</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-amber-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }} 
                className="bg-[#0f0f0f] p-8 rounded-[2.5rem] border border-white/5 hover:border-amber-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 text-white/5 -mr-4 -mt-4">
                   {cat.icon}
                </div>
                
                <div className="text-amber-500 mb-6 bg-amber-500/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight italic">
                  {cat.title}
                </h3>
                <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                  {cat.desc}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-600 block uppercase font-bold">Starting at</span>
                    <span className="text-3xl font-black italic">€{cat.price}</span>
                  </div>
                  <Link href={cat.link}>
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-amber-500 group-hover:text-black transition-all shadow-xl">
                      <ShoppingBag size={24} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-white/5 mt-20 bg-black">
        <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-6 flex items-center justify-center">
          <img src="/favicon.ico" className="w-6 h-6 grayscale opacity-50" alt="logo" />
        </div>
        <p className="text-gray-600 text-xs font-bold tracking-[0.3em] uppercase mb-2">TheGalaxyHub — © 2026</p>
        <p className="text-[10px] text-gray-800 uppercase tracking-widest font-black">Powered by Vercel & Discord</p>
      </footer>
    </div>
  );
}