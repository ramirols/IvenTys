"use client"

import Slider from "@/components/Slider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  Warehouse,
  ArrowUpDown,
  ShieldCheck,
  BarChart3,
  Users,
  Cloud,
  CheckCircle,
  Building2,
  ArrowLeftRight,
  Star,
  ChevronRight
} from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">

      <Slider />

      {/* ================= BENEFICIOS PRO ================= */}
      <section className="py-32 bg-muted/30 relative overflow-hidden" id="beneficios">
        <div className="container mx-auto px-6">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <Badge variant="outline" className="mb-4">
              Beneficios
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Todo lo que tu negocio necesita para crecer
            </h2>

            <p className="text-muted-foreground text-lg">
              Automatiza procesos, reduce errores y toma decisiones con información clara y en tiempo real.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: Package,
                title: "Gestión de Productos",
                desc: "Organiza tu catálogo con control de stock, categorías y precios actualizados al instante.",
              },
              {
                icon: Warehouse,
                title: "Control de Almacenes",
                desc: "Administra múltiples almacenes y visualiza disponibilidad en tiempo real.",
              },
              {
                icon: ArrowUpDown,
                title: "Movimientos Inteligentes",
                desc: "Registra entradas y salidas con trazabilidad completa y sin errores manuales.",
              },
              {
                icon: BarChart3,
                title: "Dashboard Estratégico",
                desc: "Analiza métricas clave y toma decisiones basadas en datos reales.",
              },
            ].map((item, i) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full border border-border/50 bg-background/70 backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/5 group-hover:border-primary/30">
                    <CardContent className="p-8 flex flex-col gap-6">

                      {/* Icono */}
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Texto */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      {/* Línea decorativa */}
                      <div className="mt-auto h-[2px] w-10 bg-primary/30 group-hover:w-16 transition-all duration-300 rounded-full" />
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

          </div>
        </div>
      </section>

      {/* ================= COMO FUNCIONA PRO ================= */}
      <section className="py-32 bg-muted/40 relative overflow-hidden">
        <div className="container mx-auto px-6">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <Badge className="mb-4">Cómo Funciona</Badge>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Empieza en solo 3 pasos simples
            </h2>

            <p className="text-muted-foreground text-lg">
              Configura tu sistema en minutos y comienza a controlar tu inventario
              con total claridad y precisión.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-24">

            <div className="grid md:grid-cols-3 gap-16 relative">

              {[
                {
                  icon: Building2,
                  title: "Crea tu empresa",
                  desc: "Configura tu negocio en segundos. Define moneda, almacenes y preferencias iniciales.",
                },
                {
                  icon: Package,
                  title: "Registra tus productos",
                  desc: "Agrega productos con stock, precios y categorías. Todo organizado desde el primer día.",
                },
                {
                  icon: ArrowLeftRight,
                  title: "Controla movimientos",
                  desc: "Gestiona entradas y salidas en tiempo real con reportes claros y actualizados.",
                },
              ].map((item, i) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="relative text-center"
                  >
                    {/* Línea conectora SOLO entre íconos */}
                    {i !== 2 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-border via-border/70 to-transparent" />
                    )}

                    {/* Círculo */}
                    <div className="relative z-10 flex justify-center mb-10">
                      <div className="w-20 h-20 rounded-full bg-background border border-border shadow-md flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="space-y-4 px-6">
                      <span className="text-sm font-semibold text-primary tracking-wide">
                        Paso {i + 1}
                      </span>

                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODULOS PRO ================= */}
      <section className="py-32 bg-muted/20 relative overflow-hidden" id="modulos">
        <div className="container mx-auto px-6">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <Badge variant="secondary" className="mb-4">
              Módulos
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Sistema completo y escalable
            </h2>

            <p className="text-muted-foreground text-lg">
              Diseñado para crecer contigo. Activa solo lo que necesitas y expande tu operación sin límites.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                icon: Users,
                title: "Control de Usuarios",
                desc: "Administra roles y permisos con seguridad avanzada. Define quién puede ver, editar o gestionar cada módulo.",
                tag: "Roles & Permisos",
              },
              {
                icon: ShieldCheck,
                title: "Multi Empresa",
                desc: "Gestiona múltiples empresas desde una sola cuenta con datos completamente aislados y seguros.",
                tag: "Escalable",
              },
              {
                icon: Cloud,
                title: "100% en la Nube",
                desc: "Accede desde cualquier lugar, en cualquier momento. Sin instalaciones, sin complicaciones.",
                tag: "Cloud Ready",
              },
            ].map((item, i) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="h-full border border-border/60 bg-background/80 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/5">
                    <CardContent className="p-8 flex flex-col gap-6">

                      {/* Top */}
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>

                        <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>

                      {/* Text */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {item.desc}
                        </p>
                      </div>

                      {/* Decorative line */}
                      <div className="mt-auto h-[2px] w-12 bg-primary/30 group-hover:w-20 transition-all duration-300 rounded-full" />
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}

          </div>
        </div>
      </section>

      {/* ================= PLANES PRO ================= */}
      <section className="py-32 bg-muted/30 relative overflow-hidden" id="planes">
        <div className="container mx-auto px-6">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <Badge className="mb-4">Planes</Badge>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Invierte en el crecimiento de tu negocio
            </h2>

            <p className="text-muted-foreground text-lg">
              Planes simples, sin complicaciones y diseñados para adaptarse a cada etapa de tu empresa.
            </p>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {[
              {
                name: "Basic",
                price: "S/59",
                desc: "Ideal para pequeños negocios que recién comienzan.",
                features: [
                  "1 Empresa",
                  "Hasta 2 usuarios",
                  "Gestión de productos",
                  "Soporte por email",
                ],
              },
              {
                name: "Pro",
                price: "S/99",
                popular: true,
                desc: "La mejor opción para negocios en crecimiento.",
                features: [
                  "Empresas ilimitadas",
                  "Usuarios ilimitados",
                  "Movimientos en tiempo real",
                  "Dashboard avanzado",
                  "Soporte prioritario",
                ],
              },
              {
                name: "Enterprise",
                price: "S/169",
                desc: "Para operaciones grandes que necesitan máximo control.",
                features: [
                  "Todo lo del plan Pro",
                  "Soporte 24/7",
                  "Asesor dedicado",
                  "Personalización avanzada",
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card
                  className={`
              relative h-full p-8 flex flex-col justify-between
              border transition-all duration-300
              ${plan.popular
                      ? "border-primary shadow-2xl shadow-primary/10 scale-[1.03]"
                      : "border-border hover:border-primary/40"
                    }
            `}
                >
                  {/* Badge Popular */}
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                      Más Popular
                    </Badge>
                  )}

                  <CardContent className="space-y-8">

                    {/* Header */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{plan.name}</h3>

                      <div className="flex items-end gap-2 justify-center md:justify-start">
                        <span className="text-4xl font-bold">
                          {plan.price}
                        </span>
                        <span className="text-sm text-muted-foreground mb-1">
                          / mes
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {plan.desc}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      className={`
                  w-full mt-6 transition-all duration-300
                  ${plan.popular
                          ? "bg-primary text-white hover:bg-primary/90"
                          : ""
                        }
                `}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Comenzar ahora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIOS PRO ================= */}
      <section className="py-32 bg-muted/20 relative overflow-hidden" id="testimonios">
        <div className="container mx-auto px-6">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <Badge variant="outline" className="mb-4">
              Confianza
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Empresas que confían en IvenTys
            </h2>

            <p className="text-muted-foreground text-lg">
              Negocios reales que optimizaron su inventario y mejoraron su rentabilidad.
            </p>
          </motion.div>

          {/* Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="max-w-5xl mx-auto"
          >
            <CarouselContent>

              {[
                {
                  name: "Carlos Ramírez",
                  role: "Gerente General",
                  company: "Distribuidora Andina SAC",
                  text: "Desde que implementamos IvenTys, redujimos pérdidas de inventario en un 40% y mejoramos la trazabilidad completa de nuestros productos.",
                },
                {
                  name: "María Torres",
                  role: "Jefa de Operaciones",
                  company: "Retail Nova Perú",
                  text: "El control en tiempo real nos permitió tomar decisiones más rápidas y evitar quiebres de stock en campañas importantes.",
                },
                {
                  name: "Luis Mendoza",
                  role: "Director Comercial",
                  company: "Logística Prime",
                  text: "La gestión multiempresa es increíble. Podemos controlar todas nuestras sedes desde un solo panel.",
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border border-border/60 bg-background/80 backdrop-blur-sm shadow-xl shadow-primary/5">
                    <CardContent className="p-8 flex flex-col gap-6">

                      {/* Stars */}
                      <div className="flex gap-1 text-primary">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-muted-foreground leading-relaxed">
                        “{testimonial.text}”
                      </p>

                      {/* User Info */}
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {testimonial.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role} · {testimonial.company}
                          </p>
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
      </section>

      {/* ================= CTA FINAL PRO ================= */}
      <section className="relative py-30 overflow-hidden bg-primary text-primary-foreground" id="contacto">

        {/* Glow decorativo */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative container mx-auto px-6 text-center max-w-8xl"
        >

          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
            Comienza Ahora
          </Badge>

          <div className="flex flex-row justify-between items-center gap-6">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Lleva el control total de tu inventario
              <br className="hidden md:block" />
              y haz crecer tu negocio
            </h2>

            <div className="flex flex-row items-center gap-2 bg-white/10 text-white border-white/20 rounded-full px-4 py-2">
              <ChevronRight className="w-6 h-6" />
            </div>

            {/* Subtext */}
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Automatiza procesos, reduce pérdidas y toma decisiones inteligentes con datos en tiempo real.
            </p>
          </div>


          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 transition-all duration-300"
              >
                Crear Cuenta Gratis
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white">

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Sin tarjeta de crédito
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Configuración en minutos
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Soporte incluido
            </div>

          </div>

        </motion.div>
      </section>

    </div>
  )
}