'use client'

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import type { ReactNode } from "react"

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  className?: string
  icon?: ReactNode
}

export function StatsCard({ title, value, description, className, icon }: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
} 