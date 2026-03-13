"use client"

import { ActivityFeed, ActivityItem } from "@/components/activity-feed"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const activities: ActivityItem[] = [
  {
    id: "1",
    title: "New User Signup",
    description: "Alice Freeman created an account.",
    time: "2 minutes ago",
    type: "signup"
  },
  {
    id: "2",
    title: "Subscription Upgrade",
    description: "Evan Wright upgraded to Enterprise plan.",
    time: "15 minutes ago",
    type: "upgrade"
  },
  {
    id: "3",
    title: "API Token Generated",
    description: "Charlie Davis generated a new API token for production.",
    time: "1 hour ago",
    type: "feature"
  },
  {
    id: "4",
    title: "Failed Login Attempt",
    description: "Multiple failed login attempts from IP 192.168.1.5",
    time: "3 hours ago",
    type: "other"
  },
  {
    id: "5",
    title: "Successful Login",
    description: "Bob Smith logged in from a new device (MacBook Pro).",
    time: "5 hours ago",
    type: "login"
  },
  {
    id: "6",
    title: "New Feature Used",
    description: "Diana Ross exported a CSV report for the first time.",
    time: "Yesterday, 4:20 PM",
    type: "feature"
  },
  {
    id: "7",
    title: "New User Signup",
    description: "Fiona Gallagher created an account.",
    time: "Yesterday, 10:15 AM",
    type: "signup"
  }
]

export default function ActivityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Activity Logs</h2>
        <p className="text-muted-foreground mt-2">
          Monitor recent platform events and user actions.
        </p>
      </div>

      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>A timeline of all recorded events today.</CardDescription>
        </CardHeader>
        <CardContent>
          <ActivityFeed items={activities} className="mt-4" />
        </CardContent>
      </Card>
    </div>
  )
}
