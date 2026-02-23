'use server';
/**
 * @fileOverview A Genkit flow for analyzing system performance metrics and providing intelligent insights.
 *
 * - analyzeMetrics - A function that takes system performance data and returns key insights.
 * - IntelligentMetricInsightsInput - The input type for the analyzeMetrics function.
 * - IntelligentMetricInsightsOutput - The return type for the analyzeMetrics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentMetricInsightsInputSchema = z.object({
  metricsData: z
    .array(
      z.object({
        timestamp: z.string().datetime().describe('ISO timestamp of the metric data point.'),
        uptimePercentage: z.number().min(0).max(100).describe('System uptime percentage (0-100).'),
        responseTimeMs: z.number().min(0).describe('Average response time in milliseconds.'),
      })
    )
    .describe('An array of historical system performance data points.'),
  timeRange: z
    .string()
    .optional()
    .describe('Optional: The time range the metrics data covers (e.g., "last 24 hours", "last 7 days").'),
});

export type IntelligentMetricInsightsInput = z.infer<
  typeof IntelligentMetricInsightsInputSchema
>;

const IntelligentMetricInsightsOutputSchema = z.object({
  insights: z
    .array(
      z.object({
        summary: z.string().describe('A concise summary of the insight.'),
        relevanceExplanation:
          z.string().describe('An explanation of why this insight is relevant to the user.'),
      })
    )
    .describe('A list of key insights identified from the metrics data.'),
  overallSentiment: z
    .enum(['good', 'neutral', 'bad'])
    .describe('An overall sentiment about the system performance (good, neutral, or bad).'),
  recommendations: z
    .array(z.string())
    .optional()
    .describe('Optional: Actionable recommendations based on the insights.'),
});

export type IntelligentMetricInsightsOutput = z.infer<
  typeof IntelligentMetricInsightsOutputSchema
>;

export async function analyzeMetrics(
  input: IntelligentMetricInsightsInput
): Promise<IntelligentMetricInsightsOutput> {
  return intelligentMetricInsightsFlow(input);
}

const intelligentMetricInsightsPrompt = ai.definePrompt({
  name: 'intelligentMetricInsightsPrompt',
  input: {schema: IntelligentMetricInsightsInputSchema},
  output: {schema: IntelligentMetricInsightsOutputSchema},
  prompt: `You are an expert system performance analyst.
Your task is to analyze the provided system performance metrics and identify key insights, explaining their relevance to a user who wants to understand critical trends and potential issues quickly.

Consider the following metrics data for the given time range:
Time Range: {{{timeRange}}}

Metrics Data:
{{#each metricsData}}
  - Timestamp: {{{timestamp}}}, Uptime: {{{uptimePercentage}}}%, Response Time: {{{responseTimeMs}}}ms
{{/each}}

Based on this data, provide:
1.  A list of key insights, each with a summary and an explanation of its relevance.
2.  An overall sentiment about the system's performance ('good', 'neutral', 'bad').
3.  Optionally, a list of recommendations for improvement or further investigation.

Focus on trends, anomalies, and deviations from expected performance. Be concise but informative.
`,
});

const intelligentMetricInsightsFlow = ai.defineFlow(
  {
    name: 'intelligentMetricInsightsFlow',
    inputSchema: IntelligentMetricInsightsInputSchema,
    outputSchema: IntelligentMetricInsightsOutputSchema,
  },
  async input => {
    const {output} = await intelligentMetricInsightsPrompt(input);
    return output!;
  }
);
