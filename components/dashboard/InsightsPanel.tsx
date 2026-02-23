
"use client"

import * as React from "react"
import { analyzeMetrics, type IntelligentMetricInsightsOutput } from "@/ai/flows/intelligent-metric-insights"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sparkles, Loader2, BrainCircuit, CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const dummyMetrics = [
  { timestamp: new Date(Date.now() - 3600000 * 3).toISOString(), uptimePercentage: 99.9, responseTimeMs: 120 },
  { timestamp: new Date(Date.now() - 3600000 * 2).toISOString(), uptimePercentage: 98.5, responseTimeMs: 450 },
  { timestamp: new Date(Date.now() - 3600000 * 1).toISOString(), uptimePercentage: 99.9, responseTimeMs: 115 },
  { timestamp: new Date().toISOString(), uptimePercentage: 99.9, responseTimeMs: 110 },
]

export function InsightsPanel() {
  const [insights, setInsights] = React.useState<IntelligentMetricInsightsOutput | null>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchInsights() {
      try {
        const result = await analyzeMetrics({
          metricsData: dummyMetrics,
          timeRange: "last 4 hours"
        })
        setInsights(result)
      } catch (error) {
        console.error("Failed to fetch AI insights", error)
      } finally {
        setLoading(false)
      }
    }
    fetchInsights()
  }, [])

  const SentimentIcon = insights?.overallSentiment === 'good' ? CheckCircle : 
                        insights?.overallSentiment === 'neutral' ? AlertTriangle : XCircle
  
  const sentimentColor = insights?.overallSentiment === 'good' ? 'text-green-500 bg-green-50' : 
                         insights?.overallSentiment === 'neutral' ? 'text-yellow-500 bg-yellow-50' : 'text-red-500 bg-red-50'

  return (
    <Card className="glass-card border-none overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4">
        <div className="animate-pulse bg-accent/20 rounded-full p-2">
          <BrainCircuit className="h-6 w-6 text-accent" />
        </div>
      </div>
      
      <CardHeader className="relative">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">AI Engine Active</span>
        </div>
        <CardTitle className="text-xl font-bold text-primary">System Insights</CardTitle>
        <CardDescription>Generative analysis of historical performance data</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <Loader2 className="h-8 w-8 text-accent animate-spin" />
            <p className="text-sm text-muted-foreground animate-pulse font-medium">Processing metrics with Neural Engine...</p>
          </div>
        ) : insights ? (
          <>
            <div className={`p-4 rounded-2xl flex items-center gap-4 ${sentimentColor}`}>
              <SentimentIcon className="h-6 w-6 shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide">Overall Sentiment</p>
                <p className="text-sm font-semibold capitalize">{insights.overallSentiment} Condition</p>
              </div>
            </div>

            <div className="space-y-4">
              {insights.insights.map((insight, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:border-accent/30 transition-colors">
                  <h4 className="text-sm font-bold text-primary mb-1">{insight.summary}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{insight.relevanceExplanation}</p>
                </div>
              ))}
            </div>

            {insights.recommendations && insights.recommendations.length > 0 && (
              <div className="pt-4 border-t border-primary/5">
                <p className="text-[10px] font-bold text-muted-foreground uppercase mb-3">AI Recommendations</p>
                <div className="flex flex-wrap gap-2">
                  {insights.recommendations.map((rec, i) => (
                    <Badge key={i} variant="secondary" className="rounded-lg py-1 px-3 bg-accent/10 text-accent border-none text-[10px] font-medium">
                      {rec}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            Analysis unavailable. Check connectivity.
          </div>
        )}
      </CardContent>
    </Card>
  )
}
