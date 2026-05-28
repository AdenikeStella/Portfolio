import { GitBranch, Mail } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-screen flex flex-col overflow-hidden px-5 md:px-15 pt-30 md:pt-40 md:pb-25" style={{ borderTop: 'solid 1px var(--faint)' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
                <div className="flex flex-col gap-20 px-4">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 text-[#0057FF] text-xs md:text-[13px] font-mono tracking-[4px] uppercase " style={{ fontFamily: 'var(--font-dm-mono)' }}>
                        <span className="w-8 h-px bg-[#0057FF]" />
                        Contact
                    </div>

                    {/* Contact information */}
                    <div className="flex mt-0 mb-7.5">
                        <h1 className=" font-extrabold text-white" style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(48px, 5vw, 80px)', letterSpacing: '-3px', lineHeight: '0.95' }}>Let's  <br /> work<br /><span className="font-normal text-2xl md:text-7xl text-[#0057ff] " style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic' }}> together.</span>
                        </h1>
                    </div>

                    <span className="flex text-[15px] md:text-base max-w-195 mb-10 font-medium text-(--muted)" style={{ fontFamily: 'var(--font-dm-mono)', lineHeight: '1.8' }}>
                        I'm open to junior frontend developer roles, either remote, full-time or contract. If you're building something interesting, I'd love to hear about it.
                    </span>

                    <button className="bg-[#0057FF] text-white px-9 py-4 rounded-md hover:bg-[#0041c4] transition-colors text-[13px] font-medium w-max" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                        <a href="mailto:turtonadenike@gmail.com" className="text-white no-underline">
                            SAY HELLO →
                        </a>
                    </button>
                </div>

                {/* Contact form */}
                <div className="relative flex flex-col gap-5 items-center justify-center mt-3 px-5">
                    {/* email */}
                    <Link href="mailto:turtonadenike@gmail.com" className="flex flex-row justify-between items-center border rounded-md border-(--faint) text-sm gap-4 py-4.5 px-6 w-full text-(--muted)  hover:text-white hover:border-[#0057FF] hover:bg-[#0057ff26] transition-colors" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                        <span className="flex flex-row gap-5 justify-start items-center">
                            <Mail className="w-5 h-5" />
                            <p>Email</p>
                        </span>

                        <span className="flex flex-1 justify-end text-xs items-center" style={{ color: 'var(--blue)' }}>
                            turtonadenike@gmail.com
                        </span>
                    </Link>

                    {/* github */}
                    <Link href="https://github.com/adenikestella" className="flex flex-row justify-between items-center border rounded-md border-(--faint) text-sm gap-4 py-4.5 px-6 w-full text-(--muted)  hover:text-white hover:border-[#0057FF] hover:bg-[#0057ff26] transition-colors" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                        <span className="flex flex-row gap-5 justify-start items-center">
                            <GitBranch className="w-5 h-5" />
                            <p>Github</p>
                        </span>

                        <span className="flex flex-1 justify-end text-xs items-center" style={{ color: 'var(--blue)' }}>
                            AdenikeStella
                        </span>
                    </Link>

                    {/* linkedIn */}
                    <Link href="https://www.linkedin.com/in/adenike-turton-33a6b7a6" className="flex flex-row justify-between items-center border rounded-md border-(--faint) text-sm gap-4 py-4.5 px-6 w-full text-(--muted)  hover:text-white hover:border-[#0057FF] hover:bg-[#0057ff26] transition-colors" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                        <span className="flex flex-row gap-5 justify-start items-center">
                            <FaLinkedinIn />
                            <p>LinkedIn</p>
                        </span>

                        <span className="flex flex-1 justify-end text-xs items-center" style={{ color: 'var(--blue)', letterSpacing: '1px' }}>
                            Adenike Turton
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    )
}