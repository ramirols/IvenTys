"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectFade } from "swiper/modules"
import { Boxes, Activity, Warehouse, Cpu } from "lucide-react"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const slides = [
    {
        Icon: Boxes,
        badge: "Inventario Inteligente",
        title: "Controla tu inventario",
        highlights: ["en tiempo real", "sin errores"],
        description:
            "Gestiona productos, almacenes y movimientos desde un solo lugar con precisión total.",
    },
    {
        Icon: Warehouse,
        badge: "Multi-Almacén",
        title: "Organización total",
        highlights: ["sin complicaciones", "100% centralizada"],
        description:
            "Supervisa múltiples almacenes y evita pérdidas con información clara y centralizada.",
    },
    {
        Icon: Activity,
        badge: "Movimientos en Vivo",
        title: "Cada entrada y salida",
        highlights: ["al instante", "con historial completo"],
        description:
            "Registra movimientos en tiempo real y toma decisiones basadas en datos actualizados.",
    },
]

function TypeHighlight({ words }) {
    const [text] = useTypewriter({
        words,
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 40,
        delaySpeed: 1500,
    })

    return (
        <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {text}
            <Cursor cursorColor="#22d3ee" />
        </h2>
    )
}

export default function Slider() {
    return (
        <section className="relative w-full overflow-hidden bg-zinc-950 text-white" id="slider-section">
            {/* Fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />

            <motion.div
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-cyan-500/50"
            />

            <motion.div
                className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full border border-secondary/50"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(34,211,238,0.12),transparent_60%)]" />

            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                speed={900}
                loop
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true }}
                className="h-[85vh] md:h-[750px]"
            >
                {slides.map((slide, index) => {
                    const Icon = slide.Icon

                    return (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <div className="relative h-full flex items-center justify-center px-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={isActive ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.8 }}
                                        className="text-center max-w-4xl"
                                    >
                                        {/* Badge minimal */}
                                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                            <Icon size={16} className="text-cyan-400" />
                                            <span className="text-xs tracking-widest text-white/60 font-medium uppercase">
                                                {slide.badge}
                                            </span>
                                        </div>

                                        {/* Título */}
                                        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
                                            {slide.title}
                                        </h1>

                                        {/* Typewriter dinámico SOLO cuando está activo */}
                                        <div className="flex justify-center mb-8 min-h-[40px]">
                                            {isActive && (
                                                <TypeHighlight
                                                    key={index}
                                                    words={slide.highlights}
                                                />
                                            )}
                                        </div>

                                        {/* Descripción más ligera */}
                                        <p className="max-w-2xl mx-auto text-lg text-white/50 mb-12 leading-relaxed">
                                            {slide.description}
                                        </p>

                                        {/* Botones minimal premium */}
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link href="/register">
                                                <Button
                                                    size="lg"
                                                    className="|text-black font-semibold px-10 shadow-lg shadow-cyan-500/20 transition-all"
                                                >
                                                    Comenzar
                                                </Button>
                                            </Link>

                                            <Link href="/login">
                                                <Button
                                                    size="lg"
                                                    variant="ghost"
                                                    className="text-white/70 hover:text-white hover:bg-white/5 px-10"
                                                >
                                                    Iniciar Sesión
                                                </Button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            {/* Sello de Tecnología - Bottom Left */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-16 left-6 md:left-12 z-20"
            >
                <div className="group flex items-center gap-3 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-default">
                    <div className="relative">
                        <Cpu size={16} className="text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
                        {/* Efecto de brillo detrás del icono */}
                        <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full" />
                    </div>

                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold leading-none mb-1">
                            Con tecnología de
                        </span>
                        <span className="text-sm font-semibold tracking-wide text-white/80 group-hover:text-cyan-300 transition-colors">
                            VelyonSoft
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}