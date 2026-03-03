"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import toast from "react-hot-toast"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

import { User, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react"

export default function RegisterPage() {
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        toast.success("Cuenta creada correctamente 🎉")

        setTimeout(() => {
            router.push("/dashboard")
        }, 1000)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">

            {/* BOTÓN VOLVER AL INICIO */}
            <Link href="/" className="absolute top-6 left-6 z-10">
                <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground cursor-pointer">
                    <ArrowLeft size={18} />
                    Volver al inicio
                </Button>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-md"
            >
                <Card className="shadow-2xl border border-border/40 rounded-2xl">
                    <CardHeader className="text-center space-y-3">

                        {/* Badge */}
                        <div className="flex justify-center">
                            <Badge variant="secondary" className="px-3 py-1 text-xs">
                                Nuevo usuario
                            </Badge>
                        </div>

                        <CardTitle className="text-2xl font-bold tracking-tight">
                            Crear Cuenta
                        </CardTitle>

                        <CardDescription>
                            Regístrate y comienza a gestionar tu inventario
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                            {/* Nombre */}
                            <div className="space-y-2">
                                <Label>Nombre</Label>
                                <div className="relative">
                                    <User
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />
                                    <Input
                                        placeholder="Tu nombre"
                                        className="pl-10 focus-visible:ring-2 focus-visible:ring-primary/40 transition"
                                        {...register("name", {
                                            required: "El nombre es obligatorio",
                                        })}
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-sm text-red-500">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />
                                    <Input
                                        type="email"
                                        placeholder="correo@empresa.com"
                                        className="pl-10 focus-visible:ring-2 focus-visible:ring-primary/40 transition"
                                        {...register("email", {
                                            required: "El email es obligatorio",
                                        })}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-sm text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <Label>Contraseña</Label>
                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />

                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-10 pr-10 focus-visible:ring-2 focus-visible:ring-primary/40 transition"
                                        {...register("password", {
                                            required: "La contraseña es obligatoria",
                                        })}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                                    >
                                        <AnimatePresence mode="wait" initial={false}>
                                            <motion.span
                                                key={showPassword ? "off" : "on"}
                                                initial={{ opacity: 0, rotate: -90 }}
                                                animate={{ opacity: 1, rotate: 0 }}
                                                exit={{ opacity: 0, rotate: 90 }}
                                                transition={{ duration: 0.2 }}
                                                className="flex"
                                            >
                                                {showPassword ? (
                                                    <EyeOff size={18} />
                                                ) : (
                                                    <Eye size={18} />
                                                )}
                                            </motion.span>
                                        </AnimatePresence>
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-sm text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-11 rounded-xl text-base font-medium transition-all hover:scale-[1.01]"
                            >
                                Crear Cuenta
                            </Button>
                        </form>

                        <p className="text-sm text-center mt-6 text-muted-foreground">
                            ¿Ya tienes cuenta?{" "}
                            <Link
                                href="/login"
                                className="text-primary hover:underline font-medium"
                            >
                                Inicia sesión
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}