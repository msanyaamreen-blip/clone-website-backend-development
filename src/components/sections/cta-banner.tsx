"use client";

import React from 'react';

const CtaBanner = () => {
  const stats = [
    { number: '15+ Years', label: 'Industry Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '100%', label: 'PCB Compliance' },
  ];

  const handleConsultationClick = () => {
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#00d4aa] to-[#2c5f7d]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-0 overflow-hidden opacity-20 mix-blend-overlay"
        aria-hidden="true"
      >
        <div
          className="animate-pulse absolute -top-40 -left-60 h-[500px] w-[500px] rounded-full bg-white blur-3xl"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="animate-pulse absolute -bottom-40 -right-60 h-[500px] w-[500px] rounded-full bg-white blur-3xl"
          style={{ animationDuration: '10s' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Save Environment by Treating Water!
          </h2>
          <p className="mt-6 text-xl leading-8 text-white/90">
            Get all your water treatment needs fulfilled by Amphitrite Technologies
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="transform rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl font-bold text-primary">{stat.number}</div>
                <div className="mt-3 text-base text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <button 
              onClick={handleConsultationClick}
              className="transform rounded-lg bg-white px-10 py-4 text-lg font-semibold text-[#1e3a5f] shadow-xl transition-transform duration-300 hover:scale-105"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;