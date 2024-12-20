"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { CheckCircledIcon } from "@radix-ui/react-icons"
import { useState, useMemo } from "react"

const PRICING_PLANS = [
  {
    title: "Basic",
    description: "A basic plan for startups and individual users",
    monthlyPrice: 10,
    features: [
      "AI-powered analytics",
      "Basic support",
      "5 projects limit",
      "Access to basic AI tools",
    ],
  },
  {
    title: "Premium",
    description: "A premium plan for growing businesses",
    monthlyPrice: 20,
    features: [
      "Advanced AI insights",
      "Priority support",
      "Unlimited projects",
      "Access to all AI tools",
      "Custom integrations",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    description: "An enterprise plan with advanced features for large organizations",
    monthlyPrice: 50,
    features: [
      "Custom AI solutions",
      "24/7 dedicated support",
      "Unlimited projects",
      "Access to all AI tools",
      "Custom integrations",
      "Data security and compliance",
    ],
  },
  {
    title: "Ultimate",
    description: "The ultimate plan with all features for industry leaders",
    monthlyPrice: 80,
    features: [
      "Bespoke AI development",
      "White-glove support",
      "Unlimited projects",
      "Priority access to new AI tools",
      "Custom integrations",
      "Highest data security and compliance",
    ],
  },
] as const

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = useMemo(() => 
    PRICING_PLANS.map(plan => ({
      ...plan,
      price: isAnnual 
        ? Math.floor(plan.monthlyPrice * 12 * 0.833) // 16.7% discount for annual
        : plan.monthlyPrice
    })), [isAnnual]
  )

  return (
    <section className="min-h-screen bg-black text-white p-8 z-50" aria-labelledby="pricing-heading">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2 id="pricing-heading" className="text-base font-semibold text-white uppercase tracking-wider">Pricing</h2>
          <p className="text-5xl font-bold tracking-tight sm:text-6xl">Simple pricing for everyone.</p>
          <p className="text-xl text-white max-w-4xl mx-auto my-4 leading-8">
            Choose an affordable plan that's packed with the best features for engaging your audience, creating
            customer loyalty, and driving sales.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <label className="flex items-center space-x-4" htmlFor="billing-toggle">
            <span className={!isAnnual ? 'text-white' : 'text-muted-foreground'}>Monthly</span>
            <Switch 
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span className={isAnnual ? 'text-white' : 'text-muted-foreground'}>Annual</span>
          </label>
            <span className="flex items-center">
              <span className="bg-white/90 text-background py-1 px-2 rounded-full text-xs font-semibold uppercase">
                2 Months Free ✨
              </span>
            </span>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {plans.map((plan,) => (
            <Card 
              key={plan.title}
              className={`bg-black border-zinc-800 rounded-2xl w-full min-w-[292px] mx-auto 
                {
                plan.highlight ? 'border-orange-300' : ''
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription className="text-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="text-4xl font-bold">
                  ${plan.price} 
                  <span className="font-normal text-base text-foreground">
                    / {isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                <Button 
                  className="w-full font-bold text-base bg-white text-black my-4 hover:bg-gray-200"
                  onClick={() => console.log(`Subscribe to ${plan.title} plan`)}
                >
                  Subscribe
                </Button>
                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"/>
                <ul className="space-y-2" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircledIcon className="h-5 w-5 text-green-500 mr-2" aria-hidden="true" />
                      <span className="text-xs font-semibold/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
