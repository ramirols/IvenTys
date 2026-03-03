"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import {
    ArrowDownCircle,
    ArrowUpCircle,
    Repeat,
    Plus,
    Trash2,
    Pencil,
    Boxes,
    Hash,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function MovimientosPage() {
    const [open, setOpen] = useState(false)
    const [editing, setEditing] = useState(null)

    const [movimientos, setMovimientos] = useState([])

    const [form, setForm] = useState({
        type: "IN",
        product: "",
        quantity: "",
    })

    const resetForm = () => {
        setForm({ type: "IN", product: "", quantity: "" })
        setEditing(null)
    }

    const handleSave = () => {
        if (!form.product || !form.quantity) {
            toast.error("Completa los campos")
            return
        }

        if (editing) {
            setMovimientos(
                movimientos.map((m) =>
                    m.id === editing.id
                        ? { ...form, id: editing.id, quantity: Number(form.quantity) }
                        : m
                )
            )
            toast.success("Movimiento actualizado ✏️")
        } else {
            setMovimientos([
                ...movimientos,
                { id: Date.now(), ...form, quantity: Number(form.quantity) },
            ])
            toast.success("Movimiento registrado 🔄")
        }

        resetForm()
        setOpen(false)
    }

    const handleEdit = (mov) => {
        setEditing(mov)
        setForm(mov)
        setOpen(true)
    }

    const handleDelete = (id) => {
        setMovimientos(movimientos.filter((m) => m.id !== id))
        toast.success("Movimiento eliminado 🗑️")
    }

    const getBadge = (type) => {
        switch (type) {
            case "IN":
                return <Badge className="bg-green-100 text-green-700">Entrada</Badge>
            case "OUT":
                return <Badge className="bg-red-100 text-red-700">Salida</Badge>
            case "TRANSFER":
                return <Badge className="bg-blue-100 text-blue-700">Transferencia</Badge>
            default:
                return null
        }
    }

    const getIcon = (type) => {
        switch (type) {
            case "IN":
                return <ArrowDownCircle className="h-4 w-4 text-green-600" />
            case "OUT":
                return <ArrowUpCircle className="h-4 w-4 text-red-600" />
            case "TRANSFER":
                return <Repeat className="h-4 w-4 text-blue-600" />
            default:
                return null
        }
    }

    return (
        <div className="space-y-8">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                        <Boxes className="h-7 w-7 text-primary" />
                        Movimientos
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Controla entradas, salidas y transferencias
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Badge variant="secondary">
                        {movimientos.length} movimientos
                    </Badge>

                    <Dialog open={open} onOpenChange={(v) => {
                        setOpen(v)
                        if (!v) resetForm()
                    }}>
                        <DialogTrigger asChild>
                            <Button className="rounded-xl">
                                <Plus className="mr-2 h-4 w-4" />
                                Nuevo
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-lg rounded-2xl">
                            <DialogHeader>
                                <DialogTitle>
                                    {editing ? "Editar Movimiento" : "Registrar Movimiento"}
                                </DialogTitle>
                                <DialogDescription>
                                    Completa la información del movimiento
                                </DialogDescription>
                            </DialogHeader>

                            <Separator />

                            <div className="space-y-5 py-2">

                                {/* Tipo */}
                                <div className="space-y-2">
                                    <Label>Tipo</Label>
                                    <Select
                                        value={form.type}
                                        onValueChange={(value) =>
                                            setForm({ ...form, type: value })
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="IN">Entrada</SelectItem>
                                            <SelectItem value="OUT">Salida</SelectItem>
                                            <SelectItem value="TRANSFER">
                                                Transferencia
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Producto */}
                                <div className="space-y-2">
                                    <Label>Producto</Label>
                                    <div className="relative">
                                        <Boxes className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            className="pl-9"
                                            value={form.product}
                                            onChange={(e) =>
                                                setForm({ ...form, product: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Cantidad */}
                                <div className="space-y-2">
                                    <Label>Cantidad</Label>
                                    <div className="relative">
                                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="number"
                                            className="pl-9"
                                            value={form.quantity}
                                            onChange={(e) =>
                                                setForm({ ...form, quantity: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <DialogFooter>
                                <Button variant="outline" onClick={() => setOpen(false)}>
                                    Cancelar
                                </Button>
                                <Button onClick={handleSave}>
                                    {editing ? "Actualizar" : "Guardar"}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Tabla */}
            <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                    <CardTitle>Historial de Movimientos</CardTitle>
                    <CardDescription>
                        Visualiza todos los movimientos registrados
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {movimientos.length === 0 ? (
                        <div className="text-center py-16 space-y-3">
                            <Boxes className="mx-auto h-10 w-10 text-muted-foreground" />
                            <p className="text-muted-foreground">
                                No hay movimientos registrados
                            </p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Tipo</TableHead>
                                    <TableHead>Producto</TableHead>
                                    <TableHead>Cantidad</TableHead>
                                    <TableHead className="text-right">
                                        Acciones
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {movimientos.map((m) => (
                                    <TableRow key={m.id}>
                                        <TableCell className="flex items-center gap-2">
                                            {getIcon(m.type)}
                                            {getBadge(m.type)}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {m.product}
                                        </TableCell>
                                        <TableCell>{m.quantity}</TableCell>
                                        <TableCell className="text-right space-x-2">

                                            <Button
                                                size="icon"
                                                variant="outline"
                                                onClick={() => handleEdit(m)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>

                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button size="icon" variant="outline">
                                                        <Trash2 className="h-4 w-4 text-red-600" />
                                                    </Button>
                                                </AlertDialogTrigger>

                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>
                                                            ¿Eliminar movimiento?
                                                        </AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Esta acción no se puede deshacer.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>

                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>
                                                            Cancelar
                                                        </AlertDialogCancel>
                                                        <AlertDialogAction
                                                            onClick={() => handleDelete(m.id)}
                                                        >
                                                            Eliminar
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>

                                        </TableCell>
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