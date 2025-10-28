import type { FC } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: FC = () => {
  return (
    <section id="office" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] xl:text-[3rem] font-bold mb-4 text-white">Our Office</h2>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto text-muted-foreground">
            Visit us at our Chennai location or get in touch to schedule a consultation
          </p>
        </div>

        <div className="bg-card text-card-foreground rounded-2xl shadow-md p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Our Address</h3>
                  <p className="text-muted leading-relaxed">
                    No 1-4, Abirami Homes,<br />
                    Bhuvaneshwari Nagar,<br />
                    1st Cross Street, Velachery,<br />
                    Chennai – 600 042
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Phone Number</h3>
                  <a href="tel:+919876543210" className="text-muted hover:text-primary transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Email Address</h3>
                  <a href="mailto:contact@amphitrite.com" className="text-muted hover:text-primary transition-colors duration-300">
                    contact@amphitrite.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Business Hours</h3>
                  <p className="text-muted">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Google Map */}
            <div className="h-full min-h-[300px] md:min-h-full">
              <iframe
                className="w-full h-full rounded-xl shadow-md border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.327899738093!2d80.2201386153648!3d12.999999890833188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8b8e8f8f8d%3A0x8b8b8b8b8b8b8b8b!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;