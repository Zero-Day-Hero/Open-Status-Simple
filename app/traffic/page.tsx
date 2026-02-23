"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, ArrowUpCircle, ArrowDownCircle } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const trafficData = [
  { time: "00:00", in: 400, out: 240 },
  { time: "04:00", in: 300, out: 139 },
  { time: "08:00", in: 200, out: 980 },
  { time: "12:00", in: 278, out: 390 },
  { time: "16:00", in: 189, out: 480 },
  { time: "20:00", in: 239, out: 380 },
  { time: "23:59", in: 349, out: 430 },
]

export default function TrafficAnalysisPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Network Traffic Analysis (2025)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inbound Peak</CardTitle>
            <ArrowDownCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">450 Mbps</div>
            <p className="text-xs text-muted-foreground">+20% from yesterday</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outbound Peak</CardTitle>
            <ArrowUpCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">980 Mbps</div>
            <p className="text-xs text-muted-foreground">+5% from yesterday</p>
          </CardContent>
        </Card>
        <Card className="glass-card border-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Streams</CardTitle>
            <Activity className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,240</div>
            <p className="text-xs text-muted-foreground">Stable monitoring</p>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card border-none p-6">
        <CardHeader>
          <CardTitle>24-Hour Throughput</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trafficData}>
              <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}Mb`} />
              <Tooltip />
              <Area type="monotone" dataKey="in" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.4} />
              <Area type="monotone" dataKey="out" stackId="1" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.4} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
