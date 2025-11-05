import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                Welcome to Brandstar
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
                <span className="text-primary">Design It.</span> Brand It. Wear It.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Create stunning custom branded products without limitations. From apparel to accessories, bring your
                vision to life in minutes.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg shadow-primary/20"
              >
                Launch Editor
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary rounded-full px-8 bg-transparent"
              >
                View Gallery
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Designs Created</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10M+</p>
                <p className="text-sm text-muted-foreground">Items Shipped</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-primary/20 to-accent/20 border border-border p-8">
              <img
                src="/custom-branded-t-shirt-design-studio.jpg"
                alt="Brandstar Design Studio"
                className="w-full h-full object-cover rounded-xl"
              />

              <div className="absolute bottom-8 left-8 bg-card border border-primary/30 rounded-lg p-4 backdrop-blur-sm shadow-lg shadow-primary/10">
                <p className="text-xs font-semibold text-primary">Live Preview</p>
                <p className="text-sm font-bold text-foreground">Real-time Rendering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
