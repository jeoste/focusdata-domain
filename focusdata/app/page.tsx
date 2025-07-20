import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Eye, TrendingUp, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Image 
                src="/focus_logo.png" 
                alt="Focus Logo" 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
            </div>
            <span className="text-xl font-bold text-foreground">F O C U S</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Badge variant="secondary" className="animate-pulse">
              Coming Soon
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm">
              Data Platform focused on Observability
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                F O C U S
              </span>
              <br />
              <span className="text-foreground">is coming soon</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Be data omniscient by monitoring, analyzing and optimizing your data in real-time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get notified at launch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn more
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Real-time observability</CardTitle>
              <CardDescription>
                Monitor your data continuously with customizable metrics and alerts
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Advanced analytics</CardTitle>
              <CardDescription>
                Analyze trends and patterns in your data with powerful tools
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Centralized management</CardTitle>
              <CardDescription>
                Centralize and organize all your data sources in one place
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Enhanced security</CardTitle>
              <CardDescription>
                Protect your sensitive data with enterprise-level security mechanisms
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Optimal performance</CardTitle>
              <CardDescription>
                Ultra-fast data processing with high-performance architecture
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Intuitive interface</CardTitle>
              <CardDescription>
                A modern and intuitive user experience for all skill levels
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <Card className="border-0 bg-gradient-to-r from-primary/5 to-secondary/5 shadow-xl">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to revolutionize your data observability?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join the waitlist and be among the first to discover Focus
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                Join the waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <Image 
                src="/focus_logo.png" 
                alt="Focus Logo" 
                width={16} 
                height={16}
                className="w-4 h-4"
              />
            </div>
            <span className="text-lg font-semibold">F O C U S</span>
          </div>
          <p className="text-muted-foreground">
            The next-generation data observability platform
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>© 2025 Focus. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
