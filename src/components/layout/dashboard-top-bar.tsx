 "use client"

import { Bell, ChevronDown, Search } from "lucide-react"
import { usePathname } from "next/navigation"

import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const titleMap: Record<string, string> = {
  users: "Users",
  categories: "Categories",
  products: "Products",
  auctions: "Auctions",
  "auction-runs": "Auction Runs",
  settings: "Settings",
}

function getTitleFromPath(pathname: string | null) {
  if (!pathname) return "Dashboard"
  const parts = pathname.split("/").filter(Boolean)
  const dashboardIndex = parts.indexOf("dashboard")
  const slug = dashboardIndex >= 0 ? parts[dashboardIndex + 1] : undefined

  if (!slug) return "Dashboard"
  return titleMap[slug] ?? slug.replace(/-/g, " ")
}

export default function DashboardTopBar() {
  const pathname = usePathname()
  const title = getTitleFromPath(pathname)

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold">{title}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden min-w-[220px] items-center md:flex">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="h-9 pl-9"
            aria-label="Search"
          />
        </div>
        <button
          type="button"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md border px-3 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Language"
            >
              EN
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>EN</DropdownMenuItem>
            <DropdownMenuItem>DE</DropdownMenuItem>
            <DropdownMenuItem>FR</DropdownMenuItem>
            <DropdownMenuItem>IT</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md border px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="User menu"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
                RF
              </span>
              <span className="hidden text-sm font-medium sm:inline">
                Admin User
              </span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[180px]">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
