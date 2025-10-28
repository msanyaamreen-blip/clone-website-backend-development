import React from 'react';

const provenResultsData = [
  {
    value: "80%",
    label: "Reduced freshwater consumption",
  },
  {
    value: "₹15L+",
    label: "Saved annually through recycling",
  },
  {
    value: "100%",
    label: "PCB compliance achieved",
  },
];

const ProvenResults = () => {
  return (
    <section className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-slate-blue/10 rounded-full filter blur-3xl opacity-50 animate-float-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-navy-dark">
            Proven Results from Our Installations
          </h2>
          <p className="text-lg text-slate-600">
            Our solutions deliver tangible benefits, helping industries save costs, conserve resources, and meet regulatory standards effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {provenResultsData.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-lg text-center text-white bg-gradient-to-br from-primary to-slate-blue transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <div className="text-6xl font-bold mb-4 tracking-tight">
                {stat.value}
              </div>
              <h4 className="text-xl font-semibold leading-relaxed">
                {stat.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;