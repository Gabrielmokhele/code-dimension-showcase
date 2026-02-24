import { Code, Bot, Glasses, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Transform your ideas into powerful digital solutions with our cutting-edge software development services. We specialize in building scalable, secure, and innovative applications.",
    features: [
      "Custom Web Applications",
      "Mobile App Development (iOS & Android)",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Cloud-Native Solutions",
      "E-commerce Platforms",
      "Enterprise Software Solutions",
      "Microservices Architecture"
    ],
    details: "Our experienced development team uses the latest technologies and best practices to deliver high-quality software that exceeds expectations. From initial concept to deployment and maintenance, we're with you every step of the way."
  },
  {
    icon: Bot,
    title: "AI Integration & Chatbots",
    description:
      "Harness the power of artificial intelligence to automate customer interactions and streamline your business processes. We build intelligent chatbots and integrate cutting-edge AI solutions tailored to your needs.",
    features: [
      "Custom AI Chatbot Development",
      "Natural Language Processing (NLP)",
      "Multi-Platform Integration (Web, Mobile, Social Media)",
      "AI-Powered Customer Support",
      "Conversational AI Solutions",
      "Chatbot Analytics & Optimization",
      "GPT & LLM Integration",
      "Automated Workflow Solutions"
    ],
    details: "Our AI integration services help businesses automate repetitive tasks, improve customer engagement, and provide 24/7 support. From simple FAQ bots to sophisticated conversational AI, we deliver solutions that understand and respond to your customers intelligently."
  },
  {
    icon: Glasses,
    title: "VR Experience Services",
    description:
      "Immerse your audience in unforgettable virtual reality experiences. We provide premium VR experiences for events, shows, and special occasions, creating memorable moments that captivate and entertain.",
    features: [
      "VR Show Experiences",
      "Virtual Entertainment Experiences",
      "On-Site VR Experience Management",
      "Custom VR Content for Events",
      "Multi-User VR Sessions",
      "Experience Curation & Design"
    ],
    details: "We bring cutting-edge VR technology to your events and venues, offering immersive experiences that transport audiences to new worlds. Whether it's a concert, exhibition, or special event, we handle everything from setup to delivery, ensuring a seamless and unforgettable VR experience for your guests."
  },
];

const Services = () => {
  return (
     <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 lg:px-8">
           <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-12">
                 <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-fade-in">Our Services</h1>
                 <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">Comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business outcomes.</p>
              </div>
           </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 lg:px-8 relative">
           <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

           <div className="container mx-auto max-w-6xl relative z-10">
              <div className="space-y-16">
                 {services.map((service, index) => (
                    <Card key={service.title} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                       <CardHeader>
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                             {/* Icon + Title row (mobile) */}
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                   <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                                </div>

                                <CardTitle className="font-display text-2xl sm:text-3xl text-foreground">{service.title}</CardTitle>
                             </div>

                             {/* Description */}
                             <p className="text-muted-foreground text-base sm:text-lg sm:mt-3">{service.description}</p>
                          </div>
                       </CardHeader>

                       <CardContent className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-3">
                             {service.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3 text-muted-foreground">
                                   <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                   <span>{feature}</span>
                                </div>
                             ))}
                          </div>

                          <div className="pt-4 border-t border-border">
                             <p className="text-muted-foreground">{service.details}</p>
                          </div>

                          <a href="/contact" className="inline-flex items-center text-primary text-sm font-medium hover:gap-3 gap-2 transition-all group">
                             Get Started with {service.title}
                             <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                       </CardContent>
                    </Card>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 lg:px-8">
           <div className="container mx-auto max-w-4xl">
              <Card className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border-primary/20">
                 <CardContent className="p-12 text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Let's discuss how our services can help you achieve your goals. Get in touch for a free consultation.</p>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                       Contact Us Today
                       <ArrowRight className="h-5 w-5" />
                    </a>
                 </CardContent>
              </Card>
           </div>
        </section>

        <Footer />
     </div>
  );
};

export default Services;
