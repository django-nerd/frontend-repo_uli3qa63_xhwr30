import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const cur = window.scrollY
      const delta = cur - last
      if (cur < 10) {
        setHidden(false)
      } else if (delta > 4) {
        setHidden(true)
      } else if (delta < -4) {
        setHidden(false)
      }
      last = cur
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <motion.div style={{ scaleX: progress }} className="origin-left h-0.5 bg-white/40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 cursor-default">
          <div className="h-8 w-8 rounded-full bg-white text-black font-bold flex items-center justify-center">K</div>
          <span className="text-white text-lg tracking-[0.3em] font-semibold">KOVA</span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {[
            { href: '#collection', label: 'Collection' },
            { href: '#lookbook', label: 'Lookbook' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              className="relative hover:text-white transition">
              {item.label}
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 -bottom-1 h-px w-full bg-white/60"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <motion.a
            href="#collection"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="ml-4 relative group inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium overflow-hidden">
            <span className="relative z-10">Shop Now</span>
            <motion.span
              aria-hidden
              className="absolute inset-y-0 left-[-40%] w-1/2 bg-gradient-to-r from-white/0 via-white/60 to-white/0"
              initial={{ x: '-100%' }}
              animate={{ x: ['-120%', '160%'] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            />
          </motion.a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 space-y-3 text-white/80">
            <a href="#collection" className="block">Collection</a>
            <a href="#lookbook" className="block">Lookbook</a>
            <a href="#about" className="block">About</a>
            <a href="#contact" className="block">Contact</a>
            <button className="w-full inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 font-medium">Shop Now</button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
