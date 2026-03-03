"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Package,
  ArrowUpDown,
  Warehouse,
  AlertTriangle,
  TrendingUp,
  TrendingDown
} from "lucide-react"

const stats = [
  {
    title: "Productos",
    value: 120,
    icon: Package,
    color: "bg-blue-500/10 text-blue-600",
    badge: "+4%",
    trend: "up"
  },
  {
    title: "Movimientos Hoy",
    value: 35,
    icon: ArrowUpDown,
    color: "bg-emerald-500/10 text-emerald-600",
    badge: "+12%",
    trend: "up"
  },
  {
    title: "Almacenes",
    value: 3,
    icon: Warehouse,
    color: "bg-purple-500/10 text-purple-600",
    badge: "Activo",
    trend: "neutral"
  },
  {
    title: "Bajo Stock",
    value: 5,
    icon: AlertTriangle,
    color: "bg-red-500/10 text-red-600",
    badge: "-2%",
    trend: "down"
  }
]

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon

        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <Card className="group relative overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col gap-4">

                {/* Top Section */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl ${stat.color}`}>
                    <Icon size={22} />
                  </div>

                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 px-2 py-1 text-xs font-medium"
                  >
                    {stat.trend === "up" && <TrendingUp size={14} />}
                    {stat.trend === "down" && <TrendingDown size={14} />}
                    {stat.badge}
                  </Badge>
                </div>

                {/* Value Section */}
                <div>
                  <p className="text-sm text-muted-foreground">
                    {stat.title}
                  </p>

                  <h3 className="text-3xl font-semibold tracking-tight mt-1">
                    {stat.value}
                  </h3>
                </div>

                {/* Bottom subtle indicator line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full rounded-b-2xl" />
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}