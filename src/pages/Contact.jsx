import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const contactMethods = [
   {
      icon: Mail,
      title: "Email Us",
      detail: "info@codedimension.tech",
      description: "Send us an email anytime. We typically respond within 24 hours.",
      action: "mailto:info@codedimension.tech",
   },
   {
      icon: Phone,
      title: "Call Us",
      detail: "(+27) 67 310 2522",
      description: "Speak directly with our team during business hours.",
      action: "tel:+27673102522",
   },
   {
      icon: MapPin,
      title: "Visit Us",
      detail: "Pretoria, South Africa",
      description: "Schedule an in-person meeting at our headquarters.",
      action: "#",
   },
];

const offices = [
  {
    city: "Pretoria",
    country: "South Africa",
    address: "Pretoria, South Africa",
    phone: "(+27) 67 310 2522",
    email: "us@codedimension.tech"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    // Get form data
    const formData = {
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      from_email: e.target.email.value,
      company: e.target.company.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status);
        setIsSubmitting(false);
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setIsSubmitting(false);
        toast({
          title: "Error sending message",
          description: "Please try again or email us directly at info@codedimension.tech",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Ready to start your next project or have questions? We'd love to hear from you. 
              Our team is here to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <Card
                key={method.title}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">{method.title}</h3>
                  <a 
                    href={method.action}
                    className="text-primary font-medium hover:underline block mb-3"
                  >
                    {method.detail}
                  </a>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                 
                    <input
                      type="text"
                      name="service"
                      className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Service of Interest"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Card */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">24/7 Support:</strong> For enterprise clients with 
                      support contracts, our team is available around the clock.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3">Quick Response Guarantee</h3>
                  <p className="text-muted-foreground mb-4">
                    We value your time. Our team typically responds to all inquiries within 24 hours 
                    during business days, and often much faster.
                  </p>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
