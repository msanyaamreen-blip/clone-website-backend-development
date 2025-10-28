import React from 'react';
import { Droplet, ShieldCheck, Settings } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  iconBgClass: string;
  title: string;
  description: string;
  animationDelay?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, iconBgClass, title, description, animationDelay }) => (
  <div className="rounded-xl p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay }}>
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg ${iconBgClass}`}>
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Droplet className="w-8 h-8 text-primary" />,
      iconBgClass: 'bg-primary/20',
      title: "Save Costs",
      description: "Recycle up to 80% of wastewater and cut down fresh water expenses.",
      delay: "200ms"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      iconBgClass: 'bg-emerald-500/20',
      title: "Stay Compliance",
      description: "Meet Pollution Control Board and Government regulations with ease.",
      delay: "400ms"
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      iconBgClass: 'bg-blue-500/20',
      title: "Solutions",
      description: "Structured plant design for your industry, capacity, and budget.",
      delay: "600ms"
    },
  ];

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-gradient-to-b from-slate-blue to-navy-dark scroll-mt-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary rounded-full animate-float blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-400 rounded-full animate-float-slow blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2>
            Why Industries Choose Our STP & ETP Solutions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              iconBgClass={benefit.iconBgClass}
              title={benefit.title}
              description={benefit.description}
              animationDelay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;