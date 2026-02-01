import { Target, Users, Zap, Shield } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push boundaries with cutting-edge technologies and creative solutions.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our priority. We build partnerships, not just products.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description: "Fast, iterative development that adapts to your evolving needs.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Enterprise-grade security and reliability in every solution we deliver.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                About CodeDimension
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are a forward-thinking IT consulting company specializing in transformative 
                digital solutions. From custom software development to immersive VR experiences, 
                we help businesses navigate the future of technology.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary glow-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
