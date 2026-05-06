export default function Stats() {
    return (
        <section style={{ borderTop: 'solid 1px var(--faint)' }}>
            <div className="grid grid-cols-2 md:grid-cols-4">

                <div className="flex flex-col gap-2 py-8 px-6 md:py-10 md:px-14"
                    style={{ borderRight: '1px solid var(--faint)' }}>
                    <span className="flex items-baseline text-[40px] md:text-[52px] font-extrabold"
                        style={{ fontFamily: 'var(--font-syne)' }}>
                        2<span style={{ color: 'var(--blue)' }}>+</span>
                    </span>
                    <span className="text-xs md:text-sm"
                        style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm-mono)' }}>
                        Years Building
                    </span>
                </div>

                <div className="flex flex-col gap-2 py-8 px-6 md:py-10 md:px-14"
                    style={{ borderRight: '1px solid var(--faint)' }}>
                    <span className="text-[40px] md:text-[52px] font-extrabold"
                        style={{ fontFamily: 'var(--font-syne)' }}>3</span>
                    <span className="text-xs md:text-sm"
                        style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm-mono)' }}>
                        Live Projects
                    </span>
                </div>

                <div className="flex flex-col gap-2 py-8 px-6 md:py-10 md:px-14"
                    style={{ borderTop: '1px solid var(--faint)', borderRight: '1px solid var(--faint)' }}
                // borderTop only on mobile for the second row
                >
                    <span className="flex items-baseline text-[40px] md:text-[52px] font-extrabold"
                        style={{ fontFamily: 'var(--font-syne)' }}>
                        10<span style={{ color: 'var(--blue)' }}>+</span>
                    </span>
                    <span className="text-xs md:text-sm"
                        style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm-mono)' }}>
                        Modules Shipped
                    </span>
                </div>

                <div className="flex flex-col gap-2 py-8 px-6 md:py-10 md:px-14"
                    style={{ borderTop: '1px solid var(--faint)' }}>
                    <span className="text-[40px] md:text-[52px] font-extrabold"
                        style={{ fontFamily: 'var(--font-syne)' }}>1</span>
                    <span className="text-xs md:text-sm"
                        style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm-mono)' }}>
                        Stack: Next.js
                    </span>
                </div>

            </div>
        </section>
    )
}