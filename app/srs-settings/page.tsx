"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Settings, Shield } from "lucide-react"

export default function SRSSettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">SRS System Configuration</h2>
      <Card className="glass-card border-none max-w-2xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-accent" />
            <CardTitle>Monitoring Rules & Compliance</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl">
            <div className="space-y-0.5">
              <Label className="text-base font-bold">Auto-Diagnostic (req-02)</Label>
              <p className="text-xs text-muted-foreground">Enable automatic node recovery checks.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl">
            <div className="space-y-0.5">
              <Label className="text-base font-bold">SNMP v3 Enforcement (req-09)</Label>
              <p className="text-xs text-muted-foreground">Only allow encrypted SNMP traps.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl">
            <div className="space-y-0.5">
              <Label className="text-base font-bold">SLA Breach Alerts (req-05)</Label>
              <p className="text-xs text-muted-foreground">Alert shift leader on latency &gt; 100ms.</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
