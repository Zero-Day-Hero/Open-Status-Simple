"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ipRanges = [
  { ip: "192.168.1.1", node: "Core Router", type: "Gateway", status: "Active" },
  { ip: "192.168.1.10", node: "DB Master", type: "Internal", status: "Active" },
  { ip: "192.168.1.15", node: "NOC Console", type: "Static", status: "Active" },
  { ip: "10.0.0.1", node: "Edge Firewall", type: "Public", status: "Active" },
  { ip: "172.16.0.5", node: "VPN Gateway", type: "Static", status: "Inactive" },
]

export default function IPManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">IP Address Management (IPAM)</h2>
      <Card className="glass-card border-none">
        <CardHeader>
          <CardTitle>Assigned IP Addresses</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>IP Address</TableHead>
                <TableHead>Node Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ipRanges.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-mono">{item.ip}</TableCell>
                  <TableCell>{item.node}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === 'Active' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
