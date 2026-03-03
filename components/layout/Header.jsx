"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-6 left-0 w-full z-50 px-6 transition-all duration-500">

            <div className="max-w-7xl mx-auto">

                <div
                    className={`
            relative flex items-center justify-between
            px-6 ${scrolled ? "py-3" : "py-4"}
            rounded-2xl
            transition-all duration-500 ease-out
            ${scrolled
                            ? `
                  bg-white/70
                  backdrop-blur-xl
                  border border-zinc-200/40
                `
                            : "bg-transparent border-transparent"
                        }
          `}
                >

                    {/* Logo */}
                    <Link
                        href="/"
                        className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-zinc-900" : "text-white"
                            }`}
                    >
                        IvenTys
                    </Link>

                    {/* Desktop Nav */}
                    <nav
                        className={`
              hidden md:flex items-center gap-8 text-sm font-medium
              transition-colors duration-300
              ${scrolled ? "text-zinc-600" : "text-white/70"}
            `}
                    >
                        {["Beneficios", "Módulos", "Planes", "Contacto"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`
                  transition-colors duration-300
                  ${scrolled
                                        ? "hover:text-zinc-900"
                                        : "hover:text-white"
                                    }
                `}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link href="/login">
                            <Button
                                variant="ghost"
                                className={`
                  rounded-xl
                  transition-colors duration-300
                  ${scrolled
                                        ? "text-zinc-700 hover:bg-zinc-100"
                                        : "text-white hover:bg-white/10"
                                    }
                `}
                            >
                                Iniciar sesión
                            </Button>
                        </Link>

                        <Link href="/register">
                            <Button
                                className={`
                  rounded-xl
                  transition-all duration-300
                  ${scrolled
                                        ? "bg-zinc-900 text-white hover:bg-zinc-800"
                                        : "bg-white text-black hover:bg-white/90"
                                    }
                `}
                            >
                                Comenzar
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className={`md:hidden transition-colors duration-300 ${scrolled ? "text-zinc-900" : "text-white"
                            }`}
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="
                md:hidden mt-4
                rounded-2xl
                bg-white/80
                backdrop-blur-xl
                border border-zinc-200/40
                p-6 space-y-4
              "
                        >
                            {["Beneficios", "Módulos", "Planes", "Contacto"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setOpen(false)}
                                    className="block text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}

                            <div className="pt-4 border-t border-zinc-200/40 space-y-3">
                                <Link href="/login">
                                    <Button
                                        variant="ghost"
                                        className={`
      rounded-xl
      transition-colors duration-300
      ${scrolled
                                                ? "text-zinc-700 hover:bg-zinc-100"
                                                : "text-white hover:!text-white hover:!bg-white/15"
                                            }
    `}
                                    >
                                        Iniciar sesión
                                    </Button>
                                </Link>
                                <Link href="/register">
                                    <Button className="w-full bg-zinc-900 text-white hover:bg-zinc-800">
                                        Comenzar
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </header>
    )
}