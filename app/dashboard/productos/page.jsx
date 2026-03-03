"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import {
    PackagePlus,
    Plus,
    Package,
    DollarSign,
    Hash,
    Boxes,
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

export default function ProductosPage() {
    const [open, setOpen] = useState(false)

    const [productos, setProductos] = useState([
        { id: 1, name: "Laptop HP", sku: "HP-01", price: 2500 },
        { id: 2, name: "Mouse Logitech", sku: "LOG-02", price: 80 },
    ])

    const [form, setForm] = useState({
        name: "",
        sku: "",
        price: "",
    })

    const handleAdd = () => {
        if (!form.name || !form.sku || !form.price) {
            toast.error("Completa todos los campos")
            return
        }

        setProductos([
            ...productos,
            { id: Date.now(), ...form, price: Number(form.price) },
        ])

        setForm({ name: "", sku: "", price: "" })
        setOpen(false)

        toast.success("Producto agregado 🚀")
    }

    return (
        <div className="space-y-8">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                        <Boxes className="h-7 w-7 text-primary" />
                        Productos
                    </h1>
                    <p className="text-muted-foreground mt-1 text-sm">
                        Gestiona tu inventario de productos
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm">
                        {productos.length} productos
                    </Badge>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button className="rounded-xl">
                                <Plus className="mr-2 h-4 w-4" />
                                Nuevo
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-lg rounded-2xl">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    <PackagePlus className="h-5 w-5 text-primary" />
                                    Nuevo Producto
                                </DialogTitle>
                                <DialogDescription>
                                    Agrega un nuevo producto a tu inventario
                                </DialogDescription>
                            </DialogHeader>

                            <Separator />

                            <div className="space-y-5 py-2">

                                {/* Nombre */}
                                <div className="space-y-2">
                                    <Label>Nombre</Label>
                                    <div className="relative">
                                        <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Ej. Laptop Lenovo"
                                            className="pl-9"
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm({ ...form, name: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* SKU */}
                                <div className="space-y-2">
                                    <Label>SKU</Label>
                                    <div className="relative">
                                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            placeholder="Ej. LEN-01"
                                            className="pl-9"
                                            value={form.sku}
                                            onChange={(e) =>
                                                setForm({ ...form, sku: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Precio */}
                                <div className="space-y-2">
                                    <Label>Precio</Label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            type="number"
                                            placeholder="0.00"
                                            className="pl-9"
                                            value={form.price}
                                            onChange={(e) =>
                                                setForm({ ...form, price: e.target.value })
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
                                    Guardar Producto
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Tabla */}
            <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                    <CardTitle>Lista de Productos</CardTitle>
                    <CardDescription>
                        Visualiza y administra tus productos registrados
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {productos.length === 0 ? (
                        <div className="text-center py-16 space-y-3">
                            <Package className="mx-auto h-10 w-10 text-muted-foreground" />
                            <p className="text-muted-foreground">
                                No hay productos registrados
                            </p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nombre</TableHead>
                                    <TableHead>SKU</TableHead>
                                    <TableHead className="text-right">
                                        Precio
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {productos.map((p) => (
                                    <TableRow key={p.id}>
                                        <TableCell className="font-medium">
                                            {p.name}
                                        </TableCell>
                                        <TableCell>{p.sku}</TableCell>
                                        <TableCell className="text-right">
                                            S/ {p.price.toLocaleString()}
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