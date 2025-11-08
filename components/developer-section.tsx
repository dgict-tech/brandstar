import { Button } from "@/components/ui/button"
import { Code, GitBranch, Zap } from "lucide-react"

export default function DeveloperSection() {
  const integrations = [
    {
      title: "REST API",
      description: "Build custom integrations with our comprehensive REST API",
      icon: Code,
    },
    {
      title: "JavaScript SDK",
      description: "Embed the editor directly into your web application with our SDK",
      icon: Code,
    },
    {
      title: "Webhooks",
      description: "Get real-time notifications when designs are created or exported",
      icon: Zap,
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-secondary-foreground lg:text-primary font-semibold text-sm">For Developers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Integrate with <span className="text-primary">Ease</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Our comprehensive developer tools make it simple to integrate the Brandstar editor engine into your
            platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <div
                key={index}
                className="rounded-2xl border-2 border-border bg-background p-8 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary-foreground lg:text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{integration.title}</h3>
                <p className="text-muted-foreground">{integration.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-background border-2 border-border rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-primary" />
            Quick Start Example
          </h3>
          <pre className="bg-card p-4 rounded-lg overflow-x-auto text-sm">
            <code className="text-muted-foreground">{`// Initialize the Brandstar Editor
import { BrandstarEditor } from '@brandstar/sdk';

const editor = new BrandstarEditor({
  apiKey: 'your_api_key',
  container: '#editor',
  onExport: (design) => {
    console.log('Design exported:', design);
  }
});

// User designs will be saved to your account`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-2xl border-2 border-border bg-background p-8">
            <h3 className="text-xl font-bold mb-4">API Documentation</h3>
            <p className="text-muted-foreground mb-6">
              Complete API reference with code examples, authentication, and best practices.
            </p>
            <Button className="bg-primary text-secondary-foreground hover:bg-primary/90 rounded-lg font-semibold">
              View Docs
            </Button>
          </div>
          <div className="rounded-2xl border-2 border-border bg-background p-8">
            <h3 className="text-xl font-bold mb-4">GitHub Repository</h3>
            <p className="text-muted-foreground mb-6">Access SDKs, sample projects, and community contributions.</p>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold"
            >
              <GitBranch className="w-4 h-4 mr-2" />
              Open GitHub
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need help with integration?{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Contact our developer support
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
