"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowDownLeft,
  ArrowUpRight,
  Repeat
} from "lucide-react"

const movements = [
  {
    type: "Entrada",
    product: "Producto A",
    quantity: 10,
    icon: ArrowDownLeft,
    tone: "emerald"
  },
  {
    type: "Salida",
    product: "Producto B",
    quantity: -4,
    icon: ArrowUpRight,
    tone: "red"
  },
  {
    type: "Transferencia",
    product: "Producto C",
    quantity: 8,
    icon: Repeat,
    tone: "blue"
  }
]

const toneStyles = {
  emerald: {
    icon: "text-emerald-600 bg-emerald-500/10",
    value: "text-emerald-600"
  },
  red: {
    icon: "text-red-600 bg-red-500/10",
    value: "text-red-600"
  },
  blue: {
    icon: "text-blue-600 bg-blue-500/10",
    value: "text-blue-600"
  }
}

export default function RecentMovements() {
  return (
    <Card className="border border-border/50 bg-background shadow-sm rounded-2xl">
      <CardContent className="p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold tracking-tight">
            Últimos Movimientos
          </h3>

          <Badge variant="secondary" className="text-xs">
            Tiempo real
          </Badge>
        </div>

        {/* Movements */}
        <div className="space-y-3">
          {movements.map((move, index) => {
            const Icon = move.icon
            const styles = toneStyles[move.tone]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05
                }}
                whileHover={{
                  backgroundColor: "rgba(0,0,0,0.02)"
                }}
                className="flex items-center justify-between rounded-xl p-4 border border-border/40 transition-colors duration-150"
              >
                <div className="flex items-center gap-4">

                  {/* Icon */}
                  <div className={`p-2 rounded-lg ${styles.icon}`}>
                    <Icon size={17} />
                  </div>

                  {/* Info */}
                  <div>
                    <p className="font-medium text-sm">
                      {move.type} · {move.product}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hace 2 horas
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <span
                  className={`font-semibold text-sm ${styles.value}`}
                >
                  {move.quantity > 0
                    ? `+${move.quantity}`
                    : move.quantity}
                </span>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}