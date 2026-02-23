
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  subValue?: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  data: any[]
  color?: string
}

export function StatCard({ title, value, subValue, icon: Icon, trend, data, color = "hsl(var(--primary))" }: StatCardProps) {
  return (
    <Card className="glass-card hover-lift overflow-hidden border-none">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-xl bg-primary/5 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          {trend && (
            <div className={cn(
              "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
              trend === "up" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            )}>
              {trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {trend === "up" ? "+12.5%" : "-2.3%"}
            </div>
          )}
        </div>
        
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{title}</p>
          <h3 className="text-2xl font-bold tracking-tight text-primary">{value}</h3>
          {subValue && <p className="text-[10px] text-muted-foreground font-medium">{subValue}</p>}
        </div>

        <div className="h-16 w-full mt-6 -mx-6 -mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                fillOpacity={1}
                fill={`url(#gradient-${title})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
