import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Collection from './components/Collection'
import Lookbook from './components/Lookbook'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Marquee items={["KOVA", "CORE CAPSULE", "MONOCHROME", "UTILITY", "MOVEMENT", "KOVA"]} />
      <Collection />
      <Lookbook />
      <CTA />
      <footer id="contact" className="border-t border-white/10 bg-black text-white/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-white text-black font-bold flex items-center justify-center">K</div>
              <span className="text-white text-lg tracking-[0.3em] font-semibold">KOVA</span>
            </div>
            <p>Minimal streetwear made to move.</p>
          </div>
          <div>
            <p className="text-white mb-3">Shop</p>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Hoodies</a></li>
              <li><a href="#" className="hover:text-white">Tees</a></li>
              <li><a href="#" className="hover:text-white">Bottoms</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-3">Company</p>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white mb-3">Newsletter</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-full bg-white/10 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none" />
              <button className="rounded-full bg-white text-black px-4 py-2 font-medium">Join</button>
            </form>
          </div>
        </div>
        <div className="px-6 lg:px-8 py-6 border-t border-white/10 text-xs text-center">
          © {new Date().getFullYear()} KOVA. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
