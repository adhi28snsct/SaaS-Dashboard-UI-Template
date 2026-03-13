"use client"

import { DataTable } from "@/components/data-table"
import { Badge } from "@/components/ui/badge"

const data = [
  {
    id: "1",
    name: "Alice Freeman",
    email: "alice@example.com",
    plan: "Pro",
    status: "Active",
    lastActive: "2 min ago",
    joinDate: "Jan 12, 2024"
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    plan: "Enterprise",
    status: "Inactive",
    lastActive: "5 days ago",
    joinDate: "Feb 04, 2024"
  },
  {
    id: "3",
    name: "Charlie Davis",
    email: "charlie@example.com",
    plan: "Free",
    status: "Active",
    lastActive: "1 hour ago",
    joinDate: "Mar 15, 2024"
  },
  {
    id: "4",
    name: "Diana Ross",
    email: "diana@example.com",
    plan: "Pro",
    status: "Pending",
    lastActive: "Never",
    joinDate: "Apr 01, 2024"
  },
  {
    id: "5",
    name: "Evan Wright",
    email: "evan@example.com",
    plan: "Enterprise",
    status: "Active",
    lastActive: "15 min ago",
    joinDate: "May 22, 2024"
  },
  {
    id: "6",
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    plan: "Free",
    status: "Active",
    lastActive: "2 hours ago",
    joinDate: "Jun 10, 2024"
  },
]

const columns = [
  { header: "User Name", accessorKey: "name" },
  { header: "Email", accessorKey: "email" },
  { 
    header: "Plan", 
    accessorKey: "plan",
    cell: (row: any) => (
      <Badge variant="outline" className={
        row.plan === "Enterprise" ? "border-violet-500 text-violet-500" :
        row.plan === "Pro" ? "border-blue-500 text-blue-500" : ""
      }>{row.plan}</Badge>
    )
  },
  { 
    header: "Status", 
    accessorKey: "status",
    cell: (row: any) => (
      <Badge className={
        row.status === "Active" ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20" :
        row.status === "Inactive" ? "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20" :
        "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
      } variant="secondary">
        {row.status}
      </Badge>
    )
  },
  { header: "Last Active", accessorKey: "lastActive" },
  { header: "Join Date", accessorKey: "joinDate" },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
        <p className="text-muted-foreground mt-2">
          Manage your platform users and their subscription plans.
        </p>
      </div>
      <DataTable columns={columns} data={data} searchKey="name" />
    </div>
  )
}
