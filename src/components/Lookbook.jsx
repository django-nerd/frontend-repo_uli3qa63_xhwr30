import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1640&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1640&auto=format&fit=crop',
]

export default function Lookbook() {
  return (
    <section id="lookbook" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Lookbook</h2>
            <p className="text-white/60 mt-2">Movement through space — a study in form and fabric.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((src, i) => (
            <motion.div key={i} initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img src={src} alt="look" className="h-full w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
