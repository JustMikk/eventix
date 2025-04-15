import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EventCategory {
  name: string
  count: number
  percentage: number
}

interface PopularEventsProps {
  categories: EventCategory[]
}

export function PopularEvents({ categories }: PopularEventsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Popular Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-medium">{category.name}</p>
              <span className="text-sm text-muted-foreground">
                {category.count.toLocaleString()} Events
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${category.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
} 