"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
    Github,
    Twitter,
    Linkedin,
    Mail,
    Boxes,
    ShieldCheck,
} from "lucide-react"

import { BsWhatsapp } from "react-icons/bs";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-zinc-950 text-white overflow-hidden">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.08),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-20">

                {/* TOP SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-12"
                >

                    {/* Brand */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500">
                                <Boxes size={18} />
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                IvenTys
                            </span>
                        </div>

                        <p className="text-white/60 text-sm leading-relaxed">
                            Plataforma inteligente para la gestión moderna de inventarios.
                            Precisión, control y eficiencia en tiempo real.
                        </p>

                        <div className="flex gap-2 flex-wrap">
                            <Badge className="bg-white/10 text-white border-white/10">
                                SaaS
                            </Badge>
                            <Badge className="bg-white/10 text-white border-white/10">
                                Tiempo real
                            </Badge>
                            <Badge className="bg-white/10 text-white border-white/10">
                                Multi-almacén
                            </Badge>
                        </div>
                    </div>

                    {/* Producto */}
                    <div>
                        <h4 className="font-semibold mb-5 text-white">Producto</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <FooterLink href="#beneficios">Beneficios</FooterLink>
                            <FooterLink href="#modulos">Módulos</FooterLink>
                            <FooterLink href="#planes">Planes</FooterLink>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-semibold mb-5 text-white">Contacto</h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <FooterLink href="https://wa.me/+51997676432" target="_blank">WhatsApp</FooterLink>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="space-y-5 flex flex-col">
                        <h4 className="font-semibold text-white">Empieza hoy</h4>

                        <p className="text-sm text-white/60">
                            Controla tu inventario sin errores y en tiempo real.
                        </p>

                        <Link className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition px-4 py-2 rounded-xl" href="/register">
                            Crear cuenta gratis
                        </Link>

                        <div className="flex items-center gap-2 text-xs text-white/50">
                            <ShieldCheck size={14} />
                            Sin tarjeta requerida
                        </div>
                    </div>

                </motion.div>

                {/* Divider */}
                <div className="my-16 border-t border-white/10" />

                {/* BOTTOM SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6"
                >

                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} IvenTys. Todos los derechos reservados.
                    </p>

                    <div className="flex flex-row justify-between gap-2">
                        <p>Con tecnología de: </p>
                        <a className="font-bold">VelyonSoft</a>
                    </div>

                </motion.div>

            </div>
        </footer>
    )
}

/* ---------- COMPONENTES AUXILIARES ---------- */

function FooterLink({ href, children, target = "_self" }) {
    return (
        <li>
            <Link
                href={href}
                className="group relative inline-block transition-colors duration-300 hover:text-white"
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
                {children}

                {/* Underline animada */}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
            </Link>
        </li>
    )
}

function SocialIcon({ href, children }) {
    return (
        <Link
            href={href}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 
                 hover:text-white hover:bg-gradient-to-br 
                 hover:from-cyan-500 hover:to-purple-500 
                 hover:border-transparent
                 transition-all duration-300"
        >
            {children}
        </Link>
    )
}