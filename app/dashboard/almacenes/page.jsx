"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import {
    Warehouse,
    Plus,
    MapPin,
    Boxes,
    Building2,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function AlmacenesPage() {
    const [open, setOpen] = useState(false)

    const [almacenes, setAlmacenes] = useState([
        { id: 1, name: "Principal", location: "Lima" },
    ])

    const [form, setForm] = useState({
        name: "",
        location: "",
    })

    const handleAdd = () => {
        if (!form.name) {
            toast.error("El nombre es obligatorio")
            return
        }

        setAlmacenes([
            ...almacenes,
            { id: Date.now(), ...form },
        ])

        setForm({ name: "", location: "" })
        setOpen(false)

        toast.success("Almacén creado 🏬")
    }

    return (
        <div className="space-y-8">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                        <Warehouse className="h-7 w-7 text-primary" />
                        Almacenes
                    </h1>
                    <p className="text-muted-foreground mt-1 text-sm">
                        Gestiona tus centros de almacenamiento
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Badge variant="secondary">
                        {almacenes.length} almacenes
                    </Badge>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button className="rounded-xl">
                                <Plus className="mr-2 h-4 w-4" />
                                Nuevo
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-md rounded-2xl">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    <Building2 className="h-5 w-5 text-primary" />
                                    Nuevo Almacén
                                </DialogTitle>
                                <DialogDescription>
                                    Registra un nuevo centro de almacenamiento
                                </DialogDescription>
                            </DialogHeader>

                            <Separator />

                            <div className="space-y-5 py-2">

                                {/* Nombre */}
                                <div className="space-y-2">
                                    <Label>Nombre</Label>
                                    <div className="relative">
                                        <Warehouse className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Ej. Sucursal Norte"
                                            className="pl-9"
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm({ ...form, name: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Ubicación */}
                                <div className="space-y-2">
                                    <Label>Ubicación</Label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Ej. Lima, Perú"
                                            className="pl-9"
                                            value={form.location}
                                            onChange={(e) =>
                                                setForm({ ...form, location: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <DialogFooter>
                                <Button
                                    variant="outline"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button onClick={handleAdd}>
                                    Guardar
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Tabla */}
            <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                    <CardTitle>Lista de Almacenes</CardTitle>
                    <CardDescription>
                        Visualiza los almacenes registrados
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {almacenes.length === 0 ? (
                        <div className="text-center py-16 space-y-3">
                            <Warehouse className="mx-auto h-10 w-10 text-muted-foreground" />
                            <p className="text-muted-foreground">
                                No hay almacenes registrados
                            </p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nombre</TableHead>
                                    <TableHead>Ubicación</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {almacenes.map((a) => (
                                    <TableRow key={a.id}>
                                        <TableCell className="font-medium">
                                            {a.name}
                                        </TableCell>
                                        <TableCell>{a.location}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}