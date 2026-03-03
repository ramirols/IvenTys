"use client"

import toast from "react-hot-toast"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ConfiguracionPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Configuración</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Cuenta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button
                        variant="destructive"
                        onClick={() => toast("Sesión cerrada (simulado)")}
                    >
                        Cerrar Sesión
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}