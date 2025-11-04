import { useState, useEffect } from "react";
import { nav } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? "backdrop-blur bg-slate-900/70 border-b border-white/10" : ""}`}>
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-wide">M<span className="text-accent">.</span></a>
          <button className="md:hidden btn-ghost" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
          <ul className="hidden md:flex items-center gap-6">
            {nav.map(i => (
              <li key={i.href}><a className="hover:text-white/90" href={i.href}>{i.label}</a></li>
            ))}
            <li>
              <a href="#contact" className="btn-primary">Let’s talk</a>
            </li>
          </ul>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-3">
              {nav.map(i => (
                <li key={i.href}><a onClick={()=>setOpen(false)} className="block py-2" href={i.href}>{i.label}</a></li>
              ))}
              <li><a onClick={()=>setOpen(false)} href="#contact" className="btn-primary w-full justify-center">Let’s talk</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
