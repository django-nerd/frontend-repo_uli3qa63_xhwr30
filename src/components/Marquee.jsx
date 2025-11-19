import { useEffect, useRef } from 'react'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const scroll = () => {
      el.scrollLeft += 1
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
      requestAnimationFrame(scroll)
    }
    const id = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(id)
  }, [])

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-white/10 bg-black">
      <div ref={ref} className="flex gap-8 whitespace-nowrap overflow-x-scroll scrollbar-hide py-6" style={{ scrollBehavior: 'auto' }}>
        {doubled.map((item, i) => (
          <span key={i} className="text-white/60 text-sm uppercase tracking-widest">{item}</span>
        ))}
      </div>
    </div>
  )
}
