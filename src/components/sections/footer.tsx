import { Droplet, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-navy-dark to-slate-blue text-white font-primary">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-semibold">Amphitrite</span>
                <p className="text-sm text-white/80">Technologies</p>
              </div>
            </a>
            <p className="text-sm text-white/90 leading-relaxed">
              Pioneering sustainable water treatment solutions across India. Excellence in STP, ETP, and RO systems for over 15 years.
            </p>
            <p className="text-sm italic text-primary">"Clean Water, Sustainable Future"</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Services', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#office' },
                { name: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/90 hover:text-white transition-colors duration-300 relative group">
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/90">
              <p>No 1-4, Abirami Homes,Bhuvaneshwari Nagar,Velachery, Chennai – 600 042</p>
              <p><a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 987 654 3210</a></p>
              <p><a href="mailto:info@amphitritetech.com" className="hover:text-primary transition-colors">info@amphitritetech.com</a></p>
            </div>
            <div className="pt-2">
              <p className="text-sm mb-3">Follow Us:</p>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Get Started */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-white">Get Started</h4>
            <div>
              <h5 className="font-semibold text-base mb-2">Request Free Consultation</h5>
              <p className="text-sm text-white/90 mb-4">
                Get expert advice on water treatment solutions tailored to your needs.
              </p>
              <form className="space-y-3">
                <input 
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-10 px-4 rounded-md bg-white/5 border border-white/20 text-sm text-white placeholder:text-white/60 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                />
                <input 
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-10 px-4 rounded-md bg-white/5 border border-white/20 text-sm text-white placeholder:text-white/60 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                />
                <button
                  type="button"
                  className="w-full h-10 rounded-md bg-primary text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">
            © 2025 Amphitrite Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;