'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [navMenu, setNavMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target as Node);
      if (clickedOutsideMenu) {
        setNavMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="w-full fixed top-0 left-0 right-0 h-16 flex items-center bg-[rgba(6,6,15,0.8)] border-b border-[rgba(240,240,248,0.08)] z-100 px-10 backdrop-blur-[20px]">
<div className="flex justify-between items-center w-full px-6">
{/* Logo */}
      <div className="flex items-center gap-1 font-sans text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-syne)' }}>
        A<span className="bg-[#0057FF] w-2 h-2 flex" />Stella
      </div>

      {/* Nav */}
      <nav className=" items-center gap-8 md:flex hidden" style={{ fontFamily: 'var(--font-dm-mono)' }}>
        <Link href="/#about" className="text-xl text-[rgba(240,240,248,0.38)] uppercase tracking-widest hover:text-white transition-colors">
          About
        </Link>
        <Link href="/#work" className="text-xl text-[rgba(240,240,248,0.38)] uppercase tracking-widest hover:text-white transition-colors">
          Work
        </Link>
        <Link href="/#hire" className="text-xl text-[#0057FF] uppercase tracking-widest border border-[rgba(0,87,255,0.25)] px-5 py-2 rounded whitespace-nowrap hover:bg-[#0057FF] hover:text-white transition-colors">
          Hire Me
        </Link>
      </nav>

      {/* mobile menu button */}
      <nav className="flex md:hidden" style={{ fontFamily: 'var(--font-dm-mono)' }}>
        <button className=" text-white focus:outline-none" onClick={() => setNavMenu(!navMenu)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {
        navMenu && (
          <div ref={menuRef} className="absolute top-16 right-0 w-48 bg-[rgba(6,6,15,0.8)] border border-[rgba(240,240,248,0.08)] rounded-md py-2 flex flex-col items-start px-4 backdrop-blur-[20px]">
          <Link href="/#about" className="text-lg text-[rgba(240,240,248,0.38)] uppercase tracking-widest hover:text-white transition-colors">
          About
        </Link>
        <Link href="/#work" className="text-lg text-[rgba(240,240,248,0.38)] uppercase tracking-widest hover:text-white transition-colors">
          Work
        </Link>
        <Link href="/#hire" className="text-lg text-[#0057FF] uppercase tracking-widest border border-[rgba(0,87,255,0.25)] px-5 py-2 rounded whitespace-nowrap hover:bg-[#0057FF] hover:text-white transition-colors">
          Hire Me
        </Link>
          </div>
        )
      }
      </nav>
      
</div>
      

    </header>
  );
}