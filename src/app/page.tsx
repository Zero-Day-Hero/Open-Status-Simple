"use client"

import { StatCard } from "@/components/dashboard/StatCard"
import { MonitorCard } from "@/components/dashboard/MonitorCard"
import { Activity, Network, HardDrive, ShieldAlert, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const bandwidthData = [
  { value: 450 }, { value: 520 }, { value: 480 }, { value: 610 }, { value: 590 }, { value: 650 }, { value: 720 }
]

const packetLossData = [
  { value: 0.1 }, { value: 0.2 }, { value: 0.1 }, { value: 0.5 }, { value: 0.3 }, { value: 0.1 }, { value: 0.1 }
]

const networkNodes = [
  { name: "Core Router - Tehran-01", status: "operational", latency: 12, uptime: 99.99, region: "Central DC" },
  { name: "Edge Firewall - FW-Alpha", status: "operational", latency: 5, uptime: 100.00, region: "Entry Point" },
  { name: "Switch Dist-04", status: "degraded", latency: 85, uptime: 98.20, region: "Block B" },
  { name: "Load Balancer V3", status: "operational", latency: 18, uptime: 99.95, region: "DMZ" },
  { name: "Storage NAS-01", status: "operational", latency: 45, uptime: 99.90, region: "Storage Row" },
  { name: "VPN Gateway", status: "down", latency: 0, uptime: 95.40, region: "Remote Access" },
]

export default function NetworkDashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Avg Bandwidth" 
          value="720 Gbps" 
          subValue="Oct 2025 Peak"
          icon={Activity} 
          trend="up"
          data={bandwidthData}
          color="hsl(var(--primary))"
        />
        <StatCard 
          title="Packet Loss" 
          value="0.12%" 
          subValue="Global Network Avg"
          icon={ShieldAlert} 
          trend="down"
          data={packetLossData}
          color="hsl(var(--accent))"
        />
        <StatCard 
          title="Active Nodes" 
          value="142" 
          subValue="2025 Inventory"
          icon={Network} 
          data={bandwidthData}
          color="#6366f1"
        />
        <StatCard 
          title="Storage Load" 
          value="84%" 
          subValue="Cluster A-01"
          icon={HardDrive} 
          trend="up"
          data={packetLossData}
          color="#f43f5e"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-primary">Critical Network Nodes</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-lg h-8 text-[10px] font-bold uppercase border-none bg-secondary/80">Filter: Active</Button>
              <Button variant="outline" size="sm" className="rounded-lg h-8 text-[10px] font-bold uppercase border-none bg-secondary/80">Sort: Uptime</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {networkNodes.map((node, idx) => (
              <MonitorCard key={idx} {...node} />
            ))}
          </div>
        </div>

        <div className="xl:col-span-4 space-y-8">
          <Card className="glass-card border-none overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Settings className="h-4 w-4 text-accent" />
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">SRS Compliance</span>
              </div>
              <CardTitle className="text-xl font-bold text-primary">Monitoring Requirements</CardTitle>
              <CardDescription>System Specification Audit 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="text-sm font-bold text-primary mb-1">Latency SLA (req-04)</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Ensure &lt; 50ms latency for all core routing nodes. Status: Passed.</p>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="text-sm font-bold text-primary mb-1">Uptime Goal (req-01)</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Maintain 99.9% availability across DC switches. Status: Stable.</p>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <h4 className="text-sm font-bold text-primary mb-1">SNMP Traps (req-09)</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Real-time alert delivery enabled for all Layer 3 devices.</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="glass-card rounded-2xl p-6 border-none bg-gradient-to-br from-primary to-accent text-white shadow-xl">
            <h3 className="font-bold text-lg mb-2">Network Expansion 2026</h3>
            <p className="text-xs opacity-80 mb-6">Review the capacity planning report for the upcoming year infrastructure upgrade.</p>
            <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold rounded-xl h-11 border-none">
              Download 2026 Blueprint
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
