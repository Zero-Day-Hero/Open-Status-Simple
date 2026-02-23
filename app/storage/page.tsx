"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, HardDrive, Archive } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const storageNodes = [
  { id: "NAS-01", type: "SSD Array", total: "10 TB", used: "8.4 TB", percent: 84 },
  { id: "BACKUP-VOL", type: "Cold Storage", total: "100 TB", used: "45 TB", percent: 45 },
  { id: "DB-LOCAL", type: "NVMe", total: "2 TB", used: "1.2 TB", percent: 60 },
]

export default function StorageStatusPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Infrastructure Storage Monitoring</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {storageNodes.map((node, idx) => (
          <Card key={idx} className="glass-card border-none">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-base">{node.id}</CardTitle>
                <p className="text-[10px] text-muted-foreground uppercase">{node.type}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-xs font-bold">
                <span>Capacity</span>
                <span>{node.percent}% Used</span>
              </div>
              <Progress value={node.percent} className="h-2" />
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>Total: {node.total}</span>
                <span>Used: {node.used}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
