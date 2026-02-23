"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Server, Cpu, Layers } from "lucide-react"

const servers = [
  { name: "APP-SRV-01", cpu: 45, ram: 60, status: "Healthy" },
  { name: "DB-CLUSTER-MASTER", cpu: 82, ram: 90, status: "High Load" },
  { name: "WEB-EDGE-01", cpu: 12, ram: 30, status: "Idle" },
  { name: "MAIL-GATEWAY", cpu: 35, ram: 45, status: "Healthy" },
  { name: "AUTH-PROVIDER", cpu: 55, ram: 70, status: "Healthy" },
]

export default function ServerHealthPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Server Infrastructure Health</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((srv, idx) => (
          <Card key={idx} className="glass-card border-none">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">{srv.name}</CardTitle>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${srv.status === 'High Load' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                {srv.status}
              </span>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1"><Cpu className="h-3 w-3" /> CPU Usage</div>
                  <span>{srv.cpu}%</span>
                </div>
                <Progress value={srv.cpu} className="h-1" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1"><Layers className="h-3 w-3" /> RAM Allocation</div>
                  <span>{srv.ram}%</span>
                </div>
                <Progress value={srv.ram} className="h-1" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
