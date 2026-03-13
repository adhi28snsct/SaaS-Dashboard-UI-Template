"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  className?: string
}

export function StatCard({ title, value, icon: Icon, trend, trendValue, className }: StatCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trendValue && (
          <p className={cn(
            "text-xs mt-1",
            trend === "up" ? "text-emerald-500" : trend === "down" ? "text-destructive" : "text-muted-foreground"
          )}>
            {trend === "up" ? "+" : trend === "down" ? "-" : ""}{trendValue} from last month
          </p>
        )}
      </CardContent>
    </Card>
  )
}
