"use client"

import { Users, CreditCard, Activity, ArrowUpRight } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { ChartCard } from "@/components/chart-card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 2800 },
  { name: "Jun", total: 3200 },
  { name: "Jul", total: 3800 },
]

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground mt-2">
          Welcome back. Here is a summary of your product's performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="12,543"
          icon={Users}
          trend="up"
          trendValue="12%"
        />
        <StatCard
          title="Monthly Active"
          value="8,234"
          icon={Activity}
          trend="up"
          trendValue="8%"
        />
        <StatCard
          title="Revenue"
          value="$45,231.89"
          icon={CreditCard}
          trend="up"
          trendValue="19%"
        />
        <StatCard
          title="Growth Rate"
          value="+24.5%"
          icon={ArrowUpRight}
          trend="neutral"
          trendValue="0.5%"
        />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
        <ChartCard 
          title="Revenue Overview" 
          description="Monthly recurring revenue over the last 7 months."
          className="lg:col-span-4"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-[#333]" />
              <XAxis 
                dataKey="name" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
              />
              <YAxis 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: 'var(--background)' }}
                itemStyle={{ color: 'var(--foreground)' }}
              />
              <Area 
                type="monotone" 
                dataKey="total" 
                stroke="#8884d8" 
                fillOpacity={1} 
                fill="url(#colorTotal)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        
        <ChartCard 
          title="Recent Signups" 
          description="Users who joined recently."
          className="lg:col-span-3"
        >
          <div className="space-y-4">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center text-primary font-semibold text-sm mr-4">
                  U{i}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">User {i}</p>
                  <p className="text-sm text-muted-foreground">user{i}@example.com</p>
                </div>
                <div className="ml-auto font-medium text-sm text-muted-foreground">
                  {i}h ago
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </div>
  )
}
