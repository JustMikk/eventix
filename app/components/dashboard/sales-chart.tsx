import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SalesData {
  month: string
  revenue: number
  profit: number
}

interface SalesChartProps {
  data: SalesData[]
  period: string
}

export function SalesChart({ data, period }: SalesChartProps) {
  const maxValue = Math.max(...data.map(d => Math.max(d.revenue, d.profit)))
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base font-medium">Sales Revenue</CardTitle>
          <p className="text-sm text-muted-foreground">
            {period}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">Total Revenue</p>
          <p className="text-2xl font-bold">
            ${data.reduce((sum, d) => sum + d.revenue, 0).toLocaleString()}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] relative">
          <div className="flex items-end justify-between h-full gap-2">
            {data.map((item, index) => (
              <div key={index} className="flex gap-1 w-full">
                {/* Revenue bar */}
                <div className="w-3 bg-primary/20 rounded-full relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-primary rounded-full transition-all"
                    style={{ 
                      height: `${(item.revenue / maxValue) * 100}%`
                    }}
                  />
                </div>
                {/* Profit bar */}
                <div className="w-3 bg-pink-100 rounded-full relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-pink-500 rounded-full transition-all"
                    style={{ 
                      height: `${(item.profit / maxValue) * 100}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* X-axis labels */}
          <div className="flex justify-between mt-2">
            {data.map((item, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                {item.month}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 