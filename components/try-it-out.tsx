"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function TryItOut() {
  const [isOpen, setIsOpen] = useState(false)

  const features = [
    {
      title: "AI-Powered Design Assistant",
      description: "Let our AI suggest designs based on your brand colors and style",
    },
    {
      title: "Real-Time Preview",
      description: "See exactly how your design looks on products before you order",
    },
    {
      title: "Drag & Drop Editor",
      description: "No design experience needed - drag and drop to create stunning designs",
    },
    {
      title: "Instant Mockups",
      description: "Generate professional product mockups in seconds for presentations",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-linear-to-b from-background via-card/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">Try It Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">See Brandstar in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience our powerful design tools firsthand. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div
              className="bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl aspect-video flex items-center justify-center border-2 border-primary/20 overflow-hidden group cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/5 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 transition-all" />

              <img
                src="/design-studio-interface-with-t-shirt-preview.jpg"
                alt="Brandstar design editor"
                className="w-full h-full object-cover"
              />

              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all"
              >
                <div className="bg-primary text-primary-foreground rounded-full p-4 transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </div>
              </button>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card border-2 border-border rounded-xl p-4 shadow-lg max-w-xs">
              <p className="text-sm font-semibold text-primary mb-1">Pro Tip</p>
              <p className="text-sm text-foreground">Use AI to generate designs matching your brand in seconds</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2 text-balance">
                Design Without <span className="text-primary">Limits</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Our intuitive editor makes it easy to create professional branded products, even if you have no design
                experience.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="w-full bg-primary text-secondary-foreground hover:bg-primary/90 rounded-lg font-semibold py-6 text-lg mt-8"
            >
              <a
                href="https://brandstar.netlify.app/"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Launch Design Studio
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-linear-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            Ready to Create Amazing Branded Products?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg max-w-2xl mx-auto">
            Join thousands of businesses already using Brandstar to bring their visions to life.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-primary text-secondary-foreground hover:bg-primary/90 rounded-lg font-semibold px-8 py-6"
            >
              <a
                href="https://brandstar.netlify.app/signup"
                rel="noopener noreferrer"
              >
                Start Free Trial
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold px-8 py-6"
            >
              Watch Demo Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
