export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center gap-9 min-h-20 px-5 md:px-10 py-10 w-full" style={{ borderTop: 'solid 1px var(--faint)' }}>

            <span className="flex text-[13px] text-center justify-end" style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--muted)' }}>
                &copy; {new Date().getFullYear()} Adenike Stella. All rights reserved.
            </span>

            <span className="text-[13px] text-center" style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--muted)' }}>
                Built by Adenike Stella. View the source code on <a href="https://github.com/adenikestella/portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    GitHub
                </a>.
            </span>

            <div className="flex justify-start items-center gap-1 font-sans text-xl font-extrabold text-white" style={{ fontFamily: 'var(--font-syne)' }}>
                A<span className="bg-[#0057FF] w-2 h-2 flex" />Stella
            </div>

            


        </footer>
    )
}