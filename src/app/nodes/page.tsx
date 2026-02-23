"use client"

import { MonitorCard } from "@/components/dashboard/MonitorCard"
import { Button } from "@/components/ui/button"

const networkNodes = [
  { name: "Core Router - Tehran-01", status: "operational", latency: 12, uptime: 99.99, region: "Central DC" },
  { name: "Edge Firewall - FW-Alpha", status: "operational", latency: 5, uptime: 100.00, region: "Entry Point" },
  { name: "Switch Dist-04", status: "degraded", latency: 85, uptime: 98.20, region: "Block B" },
  { name: "Load Balancer V3", status: "operational", latency: 18, uptime: 99.95, region: "DMZ" },
  { name: "Storage NAS-01", status: "operational", latency: 45, uptime: 99.90, region: "Storage Row" },
  { name: "VPN Gateway", status: "down", latency: 0, uptime: 95.40, region: "Remote Access" },
  { name: "Backup Controller", status: "operational", latency: 22, uptime: 99.99, region: "Offsite" },
  { name: "Public WiFi AP", status: "operational", latency: 15, uptime: 99.85, region: "Lobby" },
]

export default function NetworkNodesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">Network Nodes Management</h2>
        <div className="flex gap-2">
          <Button className="bg-primary text-white">Add New Node</Button>
          <Button variant="outline">Export Inventory</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {networkNodes.map((node, idx) => (
          <MonitorCard key={idx} {...node} />
        ))}
      </div>
    </div>
  )
}
