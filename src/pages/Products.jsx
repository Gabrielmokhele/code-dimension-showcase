import { Package, ShoppingCart, ArrowRight, Star, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
   {
      name: "GradeGrasp",
      tagline: "Smarter Teacher Discovery",
      description: "GradeGrasp is an upcoming education technology platform that helps students find the right teachers quickly and confidently. It connects learners with verified educators based on subject, grade, location, and performance insights.",
      category: "EdTech Platform",
      status: "Coming Soon",
      features: ["Teacher discovery by subject & grade", "Advanced search and filtering", "Verified educator profiles", "Ratings & reviews", "Location-based matching", "Responsive web platform"],
      useCases: ["Finding private tutors", "Academic support & enrichment", "Connecting students with educators", "Education service discovery"],
   },
];


const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-fade-in">
              Our Products
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Innovative software products and platforms designed to solve real business challenges. 
              Ready-to-deploy solutions that scale with your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.name}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant={product.status === "New" ? "default" : "secondary"}>
                      {product.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{product.category}</span>
                  </div>
                  <CardTitle className="font-display text-2xl text-foreground mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-primary font-medium">{product.tagline}</p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase) => (
                        <Badge key={useCase} variant="outline" className="text-xs">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border flex gap-3">
                    <a
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Request Demo
                      <Zap className="h-4 w-4" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 lg:px-8 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <Package className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Custom Solutions Available
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Don't see what you're looking for? We also build custom products tailored to your 
                specific business needs. Let's discuss your requirements.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                Discuss Custom Solution
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
