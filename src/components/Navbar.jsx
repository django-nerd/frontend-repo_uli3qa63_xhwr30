import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-white text-black font-bold flex items-center justify-center">K</div>
          <span className="text-white text-lg tracking-[0.3em] font-semibold">KOVA</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#collection" className="hover:text-white transition">Collection</a>
          <a href="#lookbook" className="hover:text-white transition">Lookbook</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <button className="ml-4 inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium hover:opacity-90 transition">Shop Now</button>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 space-y-3 text-white/80">
            <a href="#collection" className="block">Collection</a>
            <a href="#lookbook" className="block">Lookbook</a>
            <a href="#about" className="block">About</a>
            <a href="#contact" className="block">Contact</a>
            <button className="w-full inline-flex items-center justify-center rounded-full bg-white text-black px-4 py-2 font-medium">Shop Now</button>
          </div>
        </div>
      )}
    </header>
  )
}
