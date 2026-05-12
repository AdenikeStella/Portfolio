export default function Profile() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden px-5 md:px-15 pt-30 md:pt-40 md:pb-25" style={{ borderTop: 'solid 1px var(--faint)' }}>
            <div className="flex md:flex-row flex-col justify-between gap-10 md:gap-0">
                <div className="flex flex-col gap-4 w-full">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 text-[#0057FF] text-xs md:text-[13px] font-mono tracking-[4px] uppercase " style={{ fontFamily: 'var(--font-dm-mono)' }}>
                        <span className="w-8 h-px bg-[#0057FF]" />
                        About Me
                    </div>

                    <div className="flex mt-0">
                        <h1 className="text-2xl md:text-7xl font-extrabold text-white" style={{ fontFamily: 'var(--font-syne)' }}>I build <br /> interfaces<br />that<span className="font-normal text-2xl md:text-7xl text-[#0057ff] " style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic' }}> work.</span>
                        </h1>
                    </div>

                    <span className="flex text-[13px] md:text-base max-w-195 mt-32 mb-15 font-medium" style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--muted)', lineHeight: '1.8' }}>
                        Frontend developer with hands-on experience across large-scale, multi-role web platforms. I've contributed to every layer of Carteefy's product from authentication flows to complex data tables, multi-step forms, and admin dashboards.
                    </span>

                    <span className="flex text-[13px] md:text-base max-w-195 mt-32 mb-15 font-medium" style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--muted)', lineHeight: '1.8' }}>
                        I work best in collaborative teams, moving fast without cutting corners. Currently completing my B.Sc. in Computer Science & Software Engineering.
                    </span>

                    <div className="flex gap-2 mt-10">
                        <button className="bg-[#061435] text-[rgba(240,240,248,0.38)] hover:text-[#0057FF] border border-blue-800 px-6 py-2 rounded-md  hover:border hover:border-[#0057FF] transition-colors text-sm font-light" style={{ fontFamily: 'var(--font-dm-mono)'}}>
                            Next.JS
                        </button>
                        <button className="bg-[#061435] text-[rgba(240,240,248,0.38)] hover:text-[#0057FF] border border-blue-800 px-6 py-2 rounded-md  hover:border hover:border-[#0057FF] transition-colors text-sm font-light" style={{ fontFamily: 'var(--font-dm-mono)'}}>
                            REACT
                        </button>
                        <button className="bg-[#061435] text-[rgba(240,240,248,0.38)] hover:text-[#0057FF] border border-blue-800 px-6 py-2 rounded-md  hover:border hover:border-[#0057FF] transition-colors text-sm font-light" style={{ fontFamily: 'var(--font-dm-mono)'}}>
                            TYPESCRIPT
                        </button>
                        <button className="bg-[#061435] text-[rgba(240,240,248,0.38)] hover:text-[#0057FF] border border-blue-800 px-6 py-2 rounded-md  hover:border hover:border-[#0057FF] transition-colors text-sm font-light" style={{ fontFamily: 'var(--font-dm-mono)'}}>
                            TAILWIND CSS
                        </button>
                        <button className="bg-[#061435] text-[rgba(240,240,248,0.38)] hover:text-[#0057FF] border border-blue-800 px-6 py-2 rounded-md  hover:border hover:border-[#0057FF] transition-colors text-sm font-light" style={{ fontFamily: 'var(--font-dm-mono)'}}>
                            REST APIS
                        </button>
                        <button className="bg-[#061435] text-[rgba(240,240,248,0.38)] hover:text-[#0057FF] border border-blue-800 px-6 py-2 rounded-md  hover:border hover:border-[#0057FF] transition-colors text-sm font-light" style={{ fontFamily: 'var(--font-dm-mono)'}}>
                            GIT
                        </button>
                        <button className="bg-[#061435] text-[rgba(240,240,248,0.38)] hover:text-[#0057FF] border border-blue-800 px-6 py-2 rounded-md  hover:border hover:border-[#0057FF] transition-colors text-sm font-light" style={{ fontFamily: 'var(--font-dm-mono)'}}>
                            FIGMA
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}