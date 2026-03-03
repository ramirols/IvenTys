"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarRail,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { BarChart3, Package, Warehouse, ArrowUpDown, Settings, User2, ChevronUp, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AppSidebar() {
    const pathname = usePathname()

    const navItems = [
        { title: "Dashboard", href: "/dashboard", icon: BarChart3 },
        { title: "Productos", href: "/dashboard/productos", icon: Package },
        { title: "Almacenes", href: "/dashboard/almacenes", icon: Warehouse },
        { title: "Movimientos", href: "/dashboard/movimientos", icon: ArrowUpDown },
        { title: "Configuración", href: "/dashboard/configuracion", icon: Settings },
    ]

    return (
        <Sidebar collapsible="icon" className="border-r border-slate-200/60 bg-white">
            {/* HEADER: Logo centrado */}
            <SidebarHeader className="h-16 flex items-center justify-center">
                <div className="flex items-center gap-3 w-full px-4 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
                    <div className="bg-indigo-600 text-white min-w-8 h-8 rounded-lg flex items-center justify-center font-bold shadow-md shadow-indigo-100 shrink-0 transition-transform">
                        I
                    </div>
                    <span className="font-bold text-slate-800 text-lg tracking-tight group-data-[collapsible=icon]:hidden whitespace-nowrap">
                        IvenTys
                    </span>
                </div>
            </SidebarHeader>

            {/* CONTENIDO: Navegación con alineación forzada */}
            <SidebarContent className="group-data-[collapsible=icon]:px-0 px-2">
                <SidebarGroup>
                    <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden px-2 text-[10px] uppercase font-bold mb-2">
                        Plataforma
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === item.href}
                                        tooltip={item.title}
                                        className={`
                                            transition-all duration-200 mb-1 rounded-xl h-10
                                            group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0
                                            ${pathname === item.href
                                                ? "bg-indigo-50 text-indigo-600"
                                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}
                                        `}
                                    >
                                        <Link href={item.href} className="flex items-center group-data-[collapsible=icon]:justify-center">
                                            <item.icon className={`size-5 shrink-0 ${pathname === item.href ? "text-indigo-600" : "text-slate-400"}`} />
                                            <span className="font-medium ml-3 group-data-[collapsible=icon]:hidden">
                                                {item.title}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            {/* FOOTER: Perfil centrado */}
            <SidebarFooter className="p-2 border-t border-slate-50">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="hover:bg-slate-50 rounded-xl transition-colors group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
                                >
                                    <div className="bg-slate-100 rounded-lg p-1.5 shrink-0 flex items-center justify-center">
                                        <User2 className="size-5 text-slate-500" />
                                    </div>
                                    <div className="flex flex-col items-start text-sm group-data-[collapsible=icon]:hidden ml-3 flex-1 overflow-hidden">
                                        <span className="font-semibold text-slate-700 truncate w-full">Ramiro</span>
                                        <span className="text-[11px] text-slate-400 truncate w-full">Admin</span>
                                    </div>
                                    <ChevronUp className="size-4 text-slate-300 group-data-[collapsible=icon]:hidden ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="right" align="end" className="w-56 p-2 rounded-2xl shadow-xl border-slate-100">
                                <DropdownMenuItem className="rounded-lg cursor-pointer py-2 text-slate-600 hover:bg-slate-50">
                                    <User2 className="mr-2 size-4" /> Perfil
                                </DropdownMenuItem>
                                <DropdownMenuItem className="rounded-lg cursor-pointer py-2 text-slate-600 hover:bg-slate-50">
                                    <Settings className="mr-2 size-4" /> Configuración
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-slate-50" />
                                <DropdownMenuItem className="rounded-lg cursor-pointer py-2 text-red-500 focus:text-red-600 focus:bg-red-50">
                                    <LogOut className="mr-2 size-4" /> Cerrar sesión
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}