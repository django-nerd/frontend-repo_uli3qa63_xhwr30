export default function CTA() {
  return (
    <section id="about" className="bg-black text-white py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built for the city. Designed for forever.</h2>
        <p className="mt-4 text-white/70">
          Every KOVA piece balances minimal forms with functional details. Premium fabrics, precision cuts, and engineered comfort.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#collection" className="rounded-full bg-white text-black px-6 py-3 font-medium hover:opacity-90 transition">Shop the drop</a>
          <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition">Visit a store</a>
        </div>
      </div>
    </section>
  )
}
