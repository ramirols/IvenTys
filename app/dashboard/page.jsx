"use client"

import { motion } from "framer-motion"
import StatsCards from "@/components/dashboard/StatsCards"
import StockChart from "@/components/dashboard/StockChart"
import RecentMovements from "@/components/dashboard/RecentMovements"

export default function DashboardPage() {
    const fakeChartData = [
        { date: "Lun", cantidad: 12 },
        { date: "Mar", cantidad: 18 },
        { date: "Mié", cantidad: 9 },
        { date: "Jue", cantidad: 22 },
        { date: "Vie", cantidad: 15 },
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
        >
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <StatsCards />

            <div className="grid md:grid-cols-2 gap-6">
                <StockChart data={fakeChartData} />
                <RecentMovements />
            </div>
        </motion.div>
    )
}