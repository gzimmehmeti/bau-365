import type { ReactNode } from "react"
import DashboardSidebar from "@/components/layout/dashboard-sidebar"
import DashboardTopBar from "@/components/layout/dashboard-top-bar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <SidebarProvider>
      <DashboardSidebar locale={locale} />
      <SidebarInset>
        <DashboardTopBar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
