"use client"

import { ChartCard } from "@/components/chart-card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"

const retentionData = [
  { name: "Week 1", "Cohort A": 100, "Cohort B": 100 },
  { name: "Week 2", "Cohort A": 85, "Cohort B": 90 },
  { name: "Week 3", "Cohort A": 70, "Cohort B": 80 },
  { name: "Week 4", "Cohort A": 60, "Cohort B": 75 },
  { name: "Week 5", "Cohort A": 50, "Cohort B": 65 },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground mt-2">
            Generated reports and scheduled exports.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard 
          title="User Retention by Cohort" 
          description="Percentage of users remaining active over 5 weeks."
          className="col-span-1 lg:col-span-2"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={retentionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-[#333]" />
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: 'var(--background)' }}
                itemStyle={{ color: 'var(--foreground)' }}
                cursor={{ fill: 'rgba(0,0,0,0.05)' }}
              />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="Cohort A" stackId="a" fill="#0ea5e9" radius={[0, 0, 4, 4]} />
              <Bar dataKey="Cohort B" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Placeholder for more reports */}
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm flex items-center justify-center text-muted-foreground h-[200px]">
          Additional Report Module
        </div>
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm flex items-center justify-center text-muted-foreground h-[200px]">
          Additional Report Module
        </div>
      </div>
    </div>
  )
}
