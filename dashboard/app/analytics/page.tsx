"use client"

import { ChartCard } from "@/components/chart-card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"

const userGrowthData = [
  { name: "Jan", users: 4000 },
  { name: "Feb", users: 5000 },
  { name: "Mar", users: 5800 },
  { name: "Apr", users: 7200 },
  { name: "May", users: 8500 },
  { name: "Jun", users: 10500 },
  { name: "Jul", users: 12543 },
]

const featureUsageData = [
  { name: "Dashboard", usage: 85 },
  { name: "Reports", usage: 65 },
  { name: "Settings", usage: 30 },
  { name: "Exports", usage: 45 },
  { name: "API", usage: 20 },
]

const trafficSourcesData = [
  { name: "Direct", value: 400 },
  { name: "Organic Search", value: 300 },
  { name: "Referral", value: 300 },
  { name: "Social Media", value: 200 },
]

const COLORS = ["#0ea5e9", "#8b5cf6", "#ec4899", "#f59e0b"]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground mt-2">
          Deep dive into your user engagement and platform metrics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard 
          title="User Growth Over Time" 
          description="Cumulative user signups."
          className="col-span-1"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-[#333]" />
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: 'var(--background)' }}
                itemStyle={{ color: 'var(--foreground)' }}
              />
              <Line type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard 
          title="Feature Usage Statistics" 
          description="Popularity of platform features by interaction percentage."
          className="col-span-1"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={featureUsageData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" className="dark:stroke-[#333]" />
              <XAxis type="number" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis dataKey="name" type="category" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} width={80} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: 'var(--background)' }}
                itemStyle={{ color: 'var(--foreground)' }}
                cursor={{ fill: 'rgba(0,0,0,0.05)' }}
              />
              <Bar dataKey="usage" fill="#ec4899" radius={[0, 4, 4, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard 
          title="Traffic Sources" 
          description="Where your users are coming from."
          className="col-span-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={trafficSourcesData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {trafficSourcesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: 'var(--background)' }}
                itemStyle={{ color: 'var(--foreground)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}
