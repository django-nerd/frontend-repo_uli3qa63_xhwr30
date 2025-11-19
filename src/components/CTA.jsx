import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="about" className="bg-black text-white py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight"
        >
          Built for the city. Designed for forever.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/70"
        >
          Every KOVA piece balances minimal forms with functional details. Premium fabrics, precision cuts, and engineered comfort.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <motion.a href="#collection" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-white text-black px-6 py-3 font-medium">Shop the drop</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-full border border-white/20 px-6 py-3 font-medium">Visit a store</motion.a>
        </div>
      </div>
    </section>
  )
}
