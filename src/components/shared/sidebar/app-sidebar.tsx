import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DirectorNav, TeacherNav } from "@/constants";
import { NavUser } from "./nav-user";
import NavIcon from "./nav-icon";
import ChangePassword from "../change-password";
import { useAuth } from "@/stores/auth.store";
import { AnimatedThemeToggler } from "../../ui/animated-theme-toggler";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function AppSidebar() {
  const role = useAuth().role;

  const location = useLocation();

  let Roledata: any = [];
  let route: string = "";

  if (role === "DIRECTOR") {
    Roledata = DirectorNav;
    route = "director";
  } else if (role !== "TEACHER") {
    Roledata = TeacherNav;
    route = "teacher";
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <NavIcon />
        </SidebarHeader>
        <SidebarContent className="px-2">
          {Roledata.map((item: any) => {
            const Icon = item.icon;
            const isActive = location.pathname === `/${item.route}`;

            return (
              <Link
                key={item.label}
                to={`/${route}/${item.route}`}
                className={`
          flex items-center gap-3 px-3 py-2 rounded-md text-sm
          transition-colors
          ${
            isActive
              ? "bg-[color:var(--sidebar-primary)] text-[color:var(--sidebar-primary-foreground)]"
              : "text-[color:var(--sidebar-foreground)] hover:bg-[color:var(--sidebar-accent)] hover:text-[color:var(--sidebar-accent-foreground)]"
          }
        `}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </SidebarContent>

        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="bg-sidebar border-sidebar-border border-b flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="pr-3 w-full flex items-center justify-between">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <AnimatedThemeToggler />
          </div>
        </header>
        <ChangePassword />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
