import { Rocket, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Innovative solutions crafted to solve real-world problems.
          </p>
        </div>

        <Card className="bg-card/30 backdrop-blur-sm border-border border-dashed">
          <CardContent className="py-16">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="h-10 w-10 text-primary animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
                  Coming Soon
                  <Sparkles className="h-5 w-5 text-primary" />
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We're working on exciting new products that will revolutionize how you 
                  interact with technology. Stay tuned for updates!
                </p>
              </div>
              <div className="flex justify-center gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Products;
