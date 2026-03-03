"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart
} from "recharts"
import { TrendingUp } from "lucide-react"

export default function StockChart({ data }) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-xl border bg-background/95 backdrop-blur-xl shadow-lg px-4 py-2 text-sm">
          <p className="text-muted-foreground">{label}</p>
          <p className="font-semibold text-primary">
            {payload[0].value} movimientos
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="relative overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardContent className="p-6 space-y-6">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Movimientos últimos 7 días
              </h3>
              <p className="text-sm text-muted-foreground">
                Actividad reciente de inventario
              </p>
            </div>

            <Badge className="flex items-center gap-1 px-3 py-1 text-xs">
              <TrendingUp size={14} />
              +8.2%
            </Badge>
          </div>

          {/* Chart */}
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--muted))"
                  vertical={false}
                />

                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  className="text-xs"
                />

                <YAxis
                  tickLine={false}
                  axisLine={false}
                  className="text-xs"
                />

                <Tooltip content={<CustomTooltip />} />

                <Area
                  type="monotone"
                  dataKey="cantidad"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fill="url(#colorStock)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}