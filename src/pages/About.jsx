import { Target, Users, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries, exploring emerging technologies to deliver cutting-edge solutions that keep our clients ahead of the curve."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships by truly understanding your needs and delivering solutions that exceed expectations."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results every time."
  },
  {
    icon: Zap,
    title: "Agile & Adaptive",
    description: "In a rapidly evolving tech landscape, we stay flexible and responsive, adapting quickly to new challenges and opportunities."
  }
];

const milestones = [
   { year: "2025", title: "Company Founded", description: "Started with a vision to transform businesses through technology" },
   { year: "2025", title: "First Client Project", description: "Delivered a production-ready micro-finance loan portal using React and Node.js, featuring secure APIs, automated loan workflows, and a fully responsive user experience." }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-fade-in">
              About CodeDimension
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              We're a team of passionate technologists, designers, and innovators dedicated to 
              transforming businesses through cutting-edge software, IT solutions, and immersive VR experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2018, CodeDimension emerged from a simple yet powerful vision: to bridge the gap 
                  between cutting-edge technology and practical business solutions. What started as a small team 
                  of developers has grown into a full-service technology partner serving clients worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous innovation and a relentless focus on quality. From 
                  developing enterprise software solutions to pioneering immersive VR experiences, we've 
                  consistently pushed the boundaries of what's possible with technology.
                </p>
                <p>
                  Today, CodeDimension stands at the forefront of digital transformation, helping businesses of 
                  all sizes leverage the power of software development, IT consulting, and virtual reality to 
                  achieve their goals and stay competitive in an ever-evolving digital landscape.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in our growth and evolution
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary border-2 border-primary">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                  )}
                </div>
                <Card className="flex-1 bg-card/50 border-border group-hover:border-primary/50 transition-all duration-300 mb-4">
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "2+", label: "Team Members" },
              { number: "3+", label: "Projects Delivered" },
              { number: "1+", label: "Enterprise Clients" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
