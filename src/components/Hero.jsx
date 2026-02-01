import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Shaping the Future of{" "}
              <span className="text-gradient glow-text">
                Software, IT & Immersive Experiences
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              CodeDimension delivers custom software, expert IT consulting, and cutting-edge 
              virtual reality solutions that transform ideas into measurable outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow font-semibold group"
                asChild
              >
                <a href="#services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:text-primary"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          {/* Right Content - 3D VR Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Floating Cards */}
              <div className="absolute top-1/4 right-0 w-72 h-48 bg-card/80 backdrop-blur-sm rounded-lg border border-border p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded flex items-center justify-center">
                  <div className="w-16 h-12 border-2 border-primary/50 rounded" />
                </div>
              </div>
              <div className="absolute bottom-1/4 left-1/4 w-64 h-40 bg-card/60 backdrop-blur-sm rounded-lg border border-primary/30 p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-500 animate-float delay-500">
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-primary/30 rounded" />
                  <div className="h-2 w-1/2 bg-primary/20 rounded" />
                  <div className="h-2 w-2/3 bg-primary/20 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
