"use client"

import { cn } from "@/lib/utils"

export interface ActivityItem {
  id: string
  title: string
  description: string
  time: string
  type: "signup" | "upgrade" | "login" | "feature" | "other"
}

interface ActivityFeedProps {
  items: ActivityItem[]
  className?: string
}

export function ActivityFeed({ items, className }: ActivityFeedProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="relative flex gap-4">
          <div className="flex flex-col items-center">
            <div className={cn(
               "flex h-8 w-8 items-center justify-center rounded-full border-2",
               item.type === "signup" && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500",
               item.type === "upgrade" && "border-blue-500 bg-blue-50 dark:bg-blue-950/50 text-blue-500",
               item.type === "login" && "border-gray-500 bg-gray-50 dark:bg-gray-950/50 text-gray-500",
               item.type === "feature" && "border-violet-500 bg-violet-50 dark:bg-violet-950/50 text-violet-500",
               item.type === "other" && "border-orange-500 bg-orange-50 dark:bg-orange-950/50 text-orange-500",
            )}>
               {/* Dot inside */}
               <div className="h-2.5 w-2.5 rounded-full bg-current" />
            </div>
            {index !== items.length - 1 && (
              <div className="w-[2px] h-full bg-border mt-2 rounded-full absolute top-8 bottom-0 bottom-[-2rem] left-4 -translate-x-[1px]" />
            )}
          </div>
          <div className="flex flex-col flex-1 pb-4">
            <p className="text-sm font-medium leading-none mb-1">{item.title}</p>
            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            <time className="text-xs text-muted-foreground font-mono">{item.time}</time>
          </div>
        </div>
      ))}
    </div>
  )
}
