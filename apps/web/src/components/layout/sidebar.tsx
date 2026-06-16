"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    label: "Overview",
    href: "/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9" />
      </svg>
    ),
  },
  {
    label: "Tickets",
    href: "/tickets",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M2 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M5 6h6M5 8.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Customers",
    href: "/customers",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2.5 13c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/settings",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const LogoIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M7 1.5C4 1.5 2 3.5 2 6c0 1.2.5 2.3 1.3 3.1L2.5 12l2.8-1.3A5 5 0 007 11c3 0 5-2 5-5s-2-4.5-5-4.5z"
      fill="white"
      opacity="0.95"
    />
  </svg>
);

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinkClass = (href: string) =>
    [
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
      isActive(href)
        ? "bg-[oklch(0.28_0.025_264)] text-[oklch(0.97_0.004_264)]"
        : "text-[oklch(0.68_0.022_264)] hover:bg-[oklch(0.22_0.018_264)] hover:text-[oklch(0.9_0.006_264)]",
    ].join(" ");

  return (
    <>
      {/* ── Desktop sidebar ─────────────────────────────────────────── */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 h-screen sticky top-0 bg-nav border-r border-[oklch(0.28_0.02_264)] overflow-y-auto">
        <div className="flex flex-col h-full px-4 py-6 gap-6">
          <div className="flex items-center gap-2.5 px-2">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <LogoIcon size={14} />
            </div>
            <span className="text-sm font-semibold text-[oklch(0.97_0.004_264)] tracking-tight">
              SupportDesk AI
            </span>
          </div>

          <nav className="flex flex-col gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={navLinkClass(item.href)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-[oklch(0.28_0.02_264)]">
            <p className="px-2 text-[11px] text-[oklch(0.48_0.015_264)] leading-5">
              SupportDesk AI &middot; v0.1
            </p>
          </div>
        </div>
      </aside>

      {/* ── Mobile top bar ──────────────────────────────────────────── */}
      <header className="lg:hidden flex items-center gap-3 px-4 h-14 border-b border-wire bg-nav sticky top-0 z-10">
        <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center shrink-0">
          <LogoIcon size={12} />
        </div>
        <span className="text-sm font-semibold text-[oklch(0.97_0.004_264)]">
          SupportDesk AI
        </span>
        <button
          className="ml-auto p-2 -mr-1 rounded-md text-[oklch(0.68_0.022_264)] hover:text-[oklch(0.9_0.006_264)] hover:bg-[oklch(0.22_0.018_264)] transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* ── Mobile nav drawer ───────────────────────────────────────── */}
      <div
        id="mobile-nav"
        className={[
          "lg:hidden fixed inset-0 z-50 transition-all duration-300",
          mobileOpen ? "visible" : "invisible pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Backdrop */}
        <div
          className={[
            "absolute inset-0 bg-black/50 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={[
            "absolute top-0 left-0 h-full w-64 bg-nav flex flex-col overflow-y-auto",
            "shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
        >
          <div className="flex flex-col h-full px-4 py-6 gap-6">
            {/* Logo + close */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <LogoIcon size={14} />
                </div>
                <span className="text-sm font-semibold text-[oklch(0.97_0.004_264)] tracking-tight">
                  SupportDesk AI
                </span>
              </div>
              <button
                className="p-1.5 -mr-1.5 rounded-md text-[oklch(0.68_0.022_264)] hover:text-[oklch(0.9_0.006_264)] hover:bg-[oklch(0.22_0.018_264)] transition-colors"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-0.5" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={navLinkClass(item.href)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-4 border-t border-[oklch(0.28_0.02_264)]">
              <p className="px-2 text-[11px] text-[oklch(0.48_0.015_264)] leading-5">
                SupportDesk AI &middot; v0.1
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
