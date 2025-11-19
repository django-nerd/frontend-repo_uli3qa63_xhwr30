import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    let last = performance.now()
    const speed = 40 // px per second
    const tick = (now) => {
      const dt = (now - last) / 1000
      last = now
      el.scrollLeft += speed * dt
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-white/10 bg-black">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="flex gap-10 whitespace-nowrap overflow-x-scroll scrollbar-hide py-6"
          style={{ scrollBehavior: 'auto' }}
        >
          {doubled.map((item, i) => (
            <motion.span
              key={i}
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="text-white/60 text-sm uppercase tracking-[0.4em]"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  )
}
