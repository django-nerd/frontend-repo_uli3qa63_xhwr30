import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 80])
  const overlay = useTransform(scrollY, [0, 300], [0, 0.2])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white">
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 pointer-events-none" />

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
          <motion.h1
            initial={{ letterSpacing: '0.05em' }}
            animate={{ letterSpacing: ['0.05em', '0em'] }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            KOVA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg text-white/70 max-w-xl"
          >
            Minimal silhouettes. Bold presence. Streetwear engineered for movement and made to last.
          </motion.p>
          <div className="mt-8 flex items-center gap-3">
            <motion.a href="#collection" whileHover={{ x: 2 }} className="rounded-full bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition">Explore Collection</motion.a>
            <motion.a href="#lookbook" whileHover={{ x: 2 }} className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition">Lookbook</motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} className="relative">
          <motion.div style={{ y }} className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1640&auto=format&fit=crop" alt="KOVA streetwear" className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block">
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="rounded-2xl bg-white text-black px-4 py-3 text-sm font-medium shadow-xl">Core Capsule 01</motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
