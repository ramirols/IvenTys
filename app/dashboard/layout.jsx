"use client"

import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger
} from "@/components/ui/sidebar"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import AppSidebar from "@/components/layout/Sidebar"

export default function DashboardLayout({ children }) {
    const pathname = usePathname()

    return (
        <SidebarProvider defaultOpen>
            <AppSidebar />

            <SidebarInset className="relative flex flex-col min-h-svh bg-slate-50">

                {/* Botón flotante */}
                <div className="absolute top-2 left-2 z-50">
                    <SidebarTrigger className="bg-white border shadow-sm hover:bg-slate-100 transition-colors cursor-pointer" />
                </div>

                <main className="flex-1 p-6 md:p-10 pt-16 overflow-hidden relative">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{
                                opacity: 0,
                                x: 18,
                                filter: "blur(4px)"
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                filter: "blur(0px)"
                            }}
                            exit={{
                                opacity: 0,
                                x: -18,
                                filter: "blur(4px)"
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className="will-change-transform will-change-opacity"
                            style={{ backfaceVisibility: "hidden" }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>

                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}