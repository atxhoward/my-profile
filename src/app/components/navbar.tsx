"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
];

export function Navbar({ brand }: { brand: string }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(255,251,245,1)] shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8">
        <Link href="/" className={`font-display text-lg font-semibold tracking-tight transition-colors duration-200 sm:text-xl text-[var(--color-blue)]`}>
          {brand}
        </Link>
        <nav className="flex items-center gap-3 text-xs font-semibold text-muted sm:gap-4 sm:text-sm md:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${isActive ? "text-[var(--color-blue)]" : "text-muted hover:text-text"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
