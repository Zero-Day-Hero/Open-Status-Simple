"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Lock, Unlock } from "lucide-react"

const policies = [
  { name: "Public Web Access", status: "Active", port: "80, 443", action: "Allow" },
  { name: "DB Remote Access", status: "Locked", port: "3306", action: "Deny" },
  { name: "SSH Management", status: "Restricted", port: "22", action: "Allow (VPN only)" },
  { name: "Internal API", status: "Active", port: "8080", action: "Allow" },
]

export default function AccessPolicyPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Network Access Control (NAC) Policies</h2>
      <div className="grid grid-cols-1 gap-4">
        {policies.map((p, idx) => (
          <Card key={idx} className="glass-card border-none flex items-center p-6 gap-6">
            <div className={`p-4 rounded-full ${p.action.includes('Allow') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {p.action.includes('Allow') ? <Unlock className="h-6 w-6" /> : <Lock className="h-6 w-6" />}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-primary">{p.name}</h3>
              <p className="text-xs text-muted-foreground">Ports: {p.port} | Status: {p.status}</p>
            </div>
            <div className="text-right">
              <span className={`text-xs font-bold px-3 py-1 rounded-lg ${p.action.includes('Allow') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {p.action}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
