import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} className="py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs text-white/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> New Drop
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            KOVA
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Minimal silhouettes. Bold presence. Streetwear engineered for movement and made to last.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#collection" className="rounded-full bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition">Explore Collection</a>
            <a href="#lookbook" className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition">Lookbook</a>
          </div>
        </motion.div>

        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} className="relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1640&auto=format&fit=crop" alt="KOVA streetwear" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block">
            <div className="rounded-2xl bg-white text-black px-4 py-3 text-sm font-medium shadow-xl">Core Capsule 01</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
