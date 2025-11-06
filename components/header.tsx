import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <img src="/brandstar-logo.png" alt="Brandstar" className="h-10 w-auto" /> */}
          <h2 className="text-2xl text-primary font-extrabold">brandstar-logo</h2>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="font-medium text-muted-foreground hover:text-primary transition"
          >
            How It Works
          </a>
          <a href="#pricing" className="font-medium text-muted-foreground hover:text-primary transition">
            Pricing
          </a>
          <a href="#why-us" className="font-medium text-muted-foreground hover:text-primary transition">
            Why Us
          </a>
          <a href="#contact" className="font-medium text-muted-foreground hover:text-primary transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* <Button variant="ghost" size="sm" className="hidden sm:inline">
            Sign In
          </Button> */}
          <Button size="lg" className="bg-primary font-bold text-white hover:bg-primary/90 rounded-full">
            Get Started
          </Button>
          <button className="md:hidden p-2 hover:bg-secondary rounded-lg transition">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  )
}
