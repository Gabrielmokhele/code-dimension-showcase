import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Software Development", href: "#services" },
        { name: "IT Consulting", href: "#services" },
        { name: "VR Solutions", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary glow" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-primary text-lg tracking-wide">
                  CodeDimension
                </span>
                <span className="text-[10px] text-muted-foreground tracking-widest">
                  Software • IT • VR
                </span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Transforming businesses through innovative technology solutions. 
              Building the future, one line of code at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeDimension. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with passion for innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
