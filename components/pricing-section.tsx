"use client"

import { Check, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const plans = [
    {
      name: "Essential License",
      price: "$500",
      period: "6 months",
      description: "Get started with essential tools and core features of the editor engine.",
      features: [
        "Full access to design editor",
        "Basic template library",
        "Limited design exports",
        "No custom brand uploads",
        "Community support",
        "Watermarked exports",
        "Up to 10 projects",
      ],
      cta: "Get Started",
      highlighted: false,
      icon: Zap,
    },
    {
      name: "Professional License",
      price: "$1000",
      period: "1 year",
      description: "Integrate the editor into your platform with premium features",
      features: [
        "Unlimited design exports",
        "Custom brand uploads",
        "Advanced AI design tools",
        "Remove watermarks",
        "Priority email support",
        "Custom branding on editor",
        "API access (rate limited)",
        "Up to 5 team members",
      ],
      cta: "Start 14-Day Trial",
      highlighted: true,
      icon: Code,
    },
    {
      name: "Enterprise Integration",
      price: "$5000",
      period: "licensing",
      description: "Permanent integration + dedicated support for enterprise teams",
      features: [
        "EveExperience Professionalrything in Professional",
        "Permanent license (no recurring fees)",
        "White-label editor customization",
        "Unlimited API calls",
        "Dedicated technical support",
        "Custom feature development",
        "Unlimited team members",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
      highlighted: false,
      icon: Code,
    },
  ]

  return (
    <section id="pricing-section" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-secondary-foreground lg:text-primary font-semibold text-sm">Flexible Licensing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Editor Engine <span className="text-primary">Pricing Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose a plan that fits your needs. Test for free, integrate professionally, or go enterprise with permanent
            licensing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const IconComponent = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted
                    ? "border-primary bg-linear-to-b from-card to-background shadow-lg md:scale-105"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                  </div>
                  <IconComponent className="w-6 h-6 text-primary shrink-0" />
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>

                <Button
                  className={`w-full mb-8 rounded-lg font-semibold py-6 transition-all ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Need help choosing?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
