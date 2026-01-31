import { Code, Headphones, Glasses, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom web and mobile applications built with best-in-class engineering practices.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions"],
  },
  {
    icon: Headphones,
    title: "IT Consulting & Support",
    description:
      "Strategic IT guidance, cloud migrations, security, and 24/7 support tailored to your business.",
    features: ["Cloud Migration", "Cybersecurity", "24/7 Support", "Infrastructure"],
  },
  {
    icon: Glasses,
    title: "VR & Immersive Technology",
    description:
      "Design and deliver immersive VR experiences for training, visualization, and product demos.",
    features: ["VR Training", "3D Visualization", "Product Demos", "Interactive Experiences"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Comprehensive solutions to accelerate your digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary text-sm font-medium hover:gap-3 gap-2 transition-all group/link"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
