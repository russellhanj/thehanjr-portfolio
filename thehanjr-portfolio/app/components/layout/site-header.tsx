"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/container";

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={clsx(
        "md:hidden border-b relative z-20",
        isDark
          ? "bg-artBg border-artSurface text-artText-primary"
          : "bg-bg/80 border-gray-100 text-text-primary"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Brand */}
        <Link
          href="/"
          className={clsx(
            "text-sm font-semibold tracking-[0.3em] uppercase",
            isDark ? "text-artText-primary" : "text-text-primary"
          )}
          onClick={closeMenu}
        >
          thehanjr
        </Link>

        {/* Hamburger */}
        <motion.button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="relative h-8 w-8 flex items-center justify-center rounded-full border border-current"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <span
            className={clsx(
              "block h-[1px] w-4 transition-all",
              isDark ? "bg-artText-primary" : "bg-text-primary"
            )}
          />
          <span
            className={clsx(
              "block h-[1px] w-4 absolute transition-all",
              isDark ? "bg-artText-primary" : "bg-text-primary"
            )}
            style={{ transform: "translateY(4px)" }}
          />
        </motion.button>
      </Container>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={clsx(
              "absolute inset-x-0 top-full border-t",
              isDark
                ? "bg-artBg border-artSurface text-artText-secondary"
                : "bg-bg border-gray-100 text-text-secondary"
            )}
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-3 text-sm">
                <Link
                  href="/work"
                  onClick={closeMenu}
                  className={clsx(
                    "py-1 transition-colors",
                    isDark
                      ? "hover:text-artText-primary"
                      : "hover:text-text-primary"
                  )}
                >
                  Work
                </Link>
                <Link
                  href="/featured"
                  onClick={closeMenu}
                  className={clsx(
                    "py-1 transition-colors",
                    isDark
                      ? "hover:text-artText-primary"
                      : "hover:text-text-primary"
                  )}
                >
                  Featured
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className={clsx(
                    "py-1 transition-colors",
                    isDark
                      ? "hover:text-artText-primary"
                      : "hover:text-text-primary"
                  )}
                >
                  About
                </Link>

                {/* Divider */}
                <div
                  className={clsx(
                    "my-2 h-px",
                    isDark ? "bg-artSurface" : "bg-gray-100"
                  )}
                />

                {/* Book a session at the bottom of the list */}
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className={clsx(
                    "mt-1 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium transition-colors",
                    isDark
                      ? "bg-artSurface text-artText-primary hover:bg-artSurfaceMuted"
                      : "bg-text-primary text-bg hover:bg-gray-900"
                  )}
                >
                  Book a session
                </Link>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
