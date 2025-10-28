import { BadgeCheck, Users, Wrench } from 'lucide-react';
import React from 'react';

const PartnerCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 p-8 border-0">
    <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center self-center bg-primary/10 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="space-y-4 flex-grow">
      <h3 className="text-2xl">{title}</h3>
      <p className="text-muted">
        {description}
      </p>
    </div>
  </div>
);

const WhyPartner = () => {
  const partnersData = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-primary" />,
      title: 'Govt & PCB Approved Designs',
      description:
        'Our designs strictly adhere to all government and Pollution Control Board guidelines, ensuring your operations are fully compliant.',
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: 'Turnkey Installation & AMC Support',
      description:
        'We manage everything from initial setup to ongoing maintenance, providing you with hassle-free operation and peace of mind.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: '200+ Industrial Clients Served',
      description:
        'Join a growing list of satisfied partners across various industries who trust our expertise and reliable solutions.',
    },
  ];

  return (
    <section id="whyus" className="py-24 scroll-mt-20 relative overflow-hidden bg-navy-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-transparent pointer-events-none" />
      <div className="absolute z-[-1] inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full animate-float -translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full animate-float-slow translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Why Partner With Amphitrite?</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Our commitment to quality, compliance, and customer satisfaction sets us apart
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {partnersData.map((partner, index) => (
            <PartnerCard
              key={index}
              icon={partner.icon}
              title={partner.title}
              description={partner.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;