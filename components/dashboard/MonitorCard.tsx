"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Clock, ExternalLink, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface MonitorCardProps {
  name: string
  status: "operational" | "degraded" | "down"
  latency: number
  uptime: number
  region: string
}

export function MonitorCard({ name, status, latency, uptime, region }: MonitorCardProps) {
  const getStatusConfig = (s: string) => {
    switch (s) {
      case "operational":
        return { color: "bg-green-500", text: "Operational", icon: CheckCircle2, accent: "text-green-500" }
      case "degraded":
        return { color: "bg-yellow-500", text: "High Latency", icon: AlertCircle, accent: "text-yellow-500" }
      default:
        return { color: "bg-red-500", text: "Node Offline", icon: AlertCircle, accent: "text-red-500" }
    }
  }

  const config = getStatusConfig(status)

  return (
    <Card className="glass-card group transition-all duration-300 hover:ring-2 hover:ring-accent/20 border-none">
      <CardHeader className="flex flex-row items-center justify-between p-6 pb-2">
        <div className="flex items-center gap-3">
          <div className={`h-2 w-2 rounded-full ${config.color} animate-pulse`} />
          <CardTitle className="text-base font-bold text-primary">{name}</CardTitle>
        </div>
        <Badge variant="outline" className="rounded-full bg-secondary/50 border-none font-medium text-[10px] uppercase">
          {region}
        </Badge>
      </CardHeader>
      <CardContent className="p-6 pt-2">
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span className="text-[10px] font-medium uppercase">Latency</span>
            </div>
            <span className="text-lg font-bold text-primary">{latency > 0 ? `${latency}ms` : '---'}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="h-3 w-3" />
              <span className="text-[10px] font-medium uppercase">Uptime</span>
            </div>
            <span className="text-lg font-bold text-primary">{uptime}%</span>
          </div>
        </div>
        
        <div className="flex gap-1 mt-6 h-6 items-end">
          {Array.from({ length: 24 }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "flex-1 rounded-sm transition-all duration-300 hover:scale-125",
                status === "down" ? "bg-red-500/20 h-2" : 
                i === 15 ? "bg-yellow-500 h-4" : i === 22 ? "bg-red-500 h-6" : "bg-green-500 h-5"
              )} 
            />
          ))}
        </div>
        
        <button className="w-full mt-6 py-2 px-4 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white">
          Diagnostics Tool
          <Activity className="h-3 w-3" />
        </button>
      </CardContent>
    </Card>
  )
}
