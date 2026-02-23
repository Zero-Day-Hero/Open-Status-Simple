import type {Metadata} from 'next';
import './globals.css';
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Search, Bell, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Status Dashboard 2025 | Infrastructure Monitoring',
  description: 'Classic infrastructure monitoring dashboard for 2025 operations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <SidebarProvider>
          <div className="flex min-h-screen bg-background text-foreground overflow-hidden w-full">
            <AppSidebar />
            <SidebarInset className="flex-1 overflow-auto">
              <header className="h-20 flex items-center justify-between px-8 bg-background/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-30">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="h-10 w-10 hover:bg-accent/10 hover:text-accent rounded-xl" />
                  <div className="hidden md:flex flex-col">
                    <h1 className="text-xl font-bold text-primary tracking-tight">Network Operation Center (NOC)</h1>
                    <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">Fiscal Year 2025 - Infrastructure Monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-64 hidden lg:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search IP/Node ID..." 
                      className="pl-10 h-10 bg-secondary/50 border-none rounded-xl focus-visible:ring-accent"
                    />
                  </div>
                  <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl hover:bg-accent/10 hover:text-accent relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 bg-accent rounded-full border-2 border-background" />
                  </Button>
                  <Button className="h-10 rounded-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    <span className="hidden sm:inline">Admin Console</span>
                  </Button>
                </div>
              </header>
              <main className="p-8 space-y-8 pb-12">
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
