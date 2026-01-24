import Image from "next/image";
import Link from "next/link";
import {
  ChartColumnStacked,
  Drill,
  Inbox,
  Pickaxe,
  Settings,
  ShoppingBasketIcon,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type DashboardSidebarProps = {
  locale: string;
};

const createItems = (locale: string) => [
  {
    title: "Dashboard",
    url: `/${locale}/dashboard`,
    icon: Inbox,
  },
  {
    title: "Users",
    url: `/${locale}/dashboard/users`,
    icon: User,
  },
  {
    title: "Categories",
    url: `/${locale}/dashboard/categories`,
    icon: ChartColumnStacked,
  },
  {
    title: "Products",
    url: `/${locale}/dashboard/products`,
    icon: ShoppingBasketIcon,
  },
  {
    title: "Auctions",
    url: `/${locale}/dashboard/auctions`,
    icon: Drill,
  },
  {
    title: "Auction Runs",
    url: `/${locale}/dashboard/auction-runs`,
    icon: Pickaxe,
  },
  {
    title: "Settings",
    url: `/${locale}/dashboard/settings`,
    icon: Settings,
  },
];

export default function DashboardSidebar({ locale }: DashboardSidebarProps) {
  const items = createItems(locale);

  return (
    <Sidebar>
      <SidebarHeader className="px-3 py-2">
        <div className="flex items-center p-4 gap-2">
          <Image
            src="/logo.svg"
            alt="App logo"
            width={140}
            height={60}
            className="h-8 w-auto"
            priority
          />
          Bau Material 365
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
