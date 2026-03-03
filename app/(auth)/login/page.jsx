"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { toast } from "sonner"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"

import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react"

export default function LoginPage() {
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data) => {
        setLoading(true)

        setTimeout(() => {
            toast.success("Inicio de sesión exitoso 🚀", {
                description: "Bienvenido a IvenTys",
            })

            router.push("/dashboard")
        }, 1200)
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">

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
                                Inventario en tiempo real
                            </Badge>
                        </div>

                        <CardTitle className="text-2xl font-bold tracking-tight">
                            Iniciar Sesión
                        </CardTitle>

                        <CardDescription>
                            Accede a tu panel de gestión
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                {/* Email */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    rules={{ required: "El email es obligatorio" }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Mail
                                                        size={18}
                                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                                    />
                                                    <Input
                                                        type="email"
                                                        placeholder="correo@empresa.com"
                                                        className="pl-10 focus-visible:ring-2 focus-visible:ring-primary/40 transition"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Password */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    rules={{ required: "La contraseña es obligatoria" }}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Contraseña</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Lock
                                                        size={18}
                                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                                    />

                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="••••••••"
                                                        className="pl-10 pr-10 focus-visible:ring-2 focus-visible:ring-primary/40 transition"
                                                        {...field}
                                                    />

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setShowPassword(!showPassword)
                                                        }
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
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    className="w-full h-11 rounded-xl text-base font-medium transition-all hover:scale-[1.01]"
                                    disabled={loading}
                                >
                                    {loading ? "Ingresando..." : "Iniciar Sesión"}
                                </Button>
                            </form>
                        </Form>

                        <p className="text-sm text-center mt-6 text-muted-foreground">
                            ¿No tienes cuenta?{" "}
                            <Link
                                href="/register"
                                className="text-primary hover:underline font-medium"
                            >
                                Regístrate aquí
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}