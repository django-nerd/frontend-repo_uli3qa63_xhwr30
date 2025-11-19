import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Modular Hoodie', price: '$98', img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1640&auto=format&fit=crop' },
  { id: 2, name: 'KOVA Cargo', price: '$110', img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1640&auto=format&fit=crop' },
  { id: 3, name: 'Monochrome Tee', price: '$42', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1640&auto=format&fit=crop' },
  { id: 4, name: 'Utility Jacket', price: '$160', img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1640&auto=format&fit=crop' },
  { id: 5, name: 'Studio Sweat', price: '$88', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1640&auto=format&fit=crop' },
  { id: 6, name: 'Track Pants', price: '$95', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1640&auto=format&fit=crop' },
]

export default function Collection() {
  return (
    <section id="collection" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Core Collection</h2>
            <p className="text-white/60 mt-2">Seasonless staples engineered for everyday movement.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-white/20 px-5 py-2 hover:bg-white/10 transition">View all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-white/60 text-sm">{p.price}</p>
                </div>
                <button className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">Add</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
