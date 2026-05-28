import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden px-5 md:px-15 pt-30 md:py-30 py-5" id="home">

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(var(--faint) 1px, transparent 1px), linear-gradient(90deg, var(--faint) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow top right */}
      <div className="absolute w-225 h-225 -top-50 -right-50 pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(0,87,255,0.12) 0%, transparent 65%)` }} />

      {/* Glow bottom left */}
      <div className="absolute w-125 h-125 bottom-0 left-25 pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(0,87,255,0.07) 0%, transparent 65%)` }} />

      {/* Content */}
      <div className="relative z-10 max-w-275 gap-5 flex flex-col">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-[#0057FF] text-xs md:text-[13px] font-mono tracking-[4px] uppercase " style={{ fontFamily: 'var(--font-dm-mono)' }}>
          <span className="w-8 h-px bg-[#0057FF]" />
          Available for remote roles
        </div>
        {/* name */}
        <div className="flex flex-col mt-0">
          <h1 className="flex text-4xl md:text-9xl font-extrabold text-white" style={{ fontFamily: 'var(--font-syne)' }}>Adenike</h1>
          <span className="font-normal text-4xl md:text-9xl text-[#0057ff] " style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic' }}> Stella.</span>
        </div>

        {/* title */}
        <h2 className="flex text-2xl md:text-4xl mb-14" style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic',  color: 'var(--muted)' }}>Frontend Developer — Lagos, Nigeria</h2>


        {/* description */}
        <span className="flex text-[12px] md:text-[15px] max-w-135 mt-32 mb-15 font-medium" style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--muted)', lineHeight: '1.8' }}>
          I build clean, scalable web interfaces for real products. <br /> Currently shipping features on Carteefy — a multi-role <br /> eCommerce SaaS — across vendor, affiliate, and admin dashboards.
        </span>

        <div className="flex justify-between mt-10">
          <div className="flex items-center gap-5 mx-auto">
            <Link href="/#work" className="cursor-pointer py-2 md:py-4 md:px-8 px-2 uppercase text-white rounded-sm inline-block text-xs md:text-[13px]
    " style={{
                fontFamily: 'var(--font-dm-mono)', 
                letterSpacing: '2px',
                background: 'var(--blue)',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
              View My Work
            </Link >
            <Link href="/#contact" className=" cursor-pointer py-2 md:py-4 md:px-8 px-2 uppercase text-white rounded-sm inline-block text-xs md:text-[13px]
    " style={{
                fontFamily: 'var(--font-dm-mono)', 
                letterSpacing: '2px',
                background: 'var(--blue)',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
              Get In Touch →
            </Link >
          </div>
        </div>


      </div>
    </section>
  )
}