"use client";

import React, { useState } from "react";
import { Sparkles, CircleCheckBig, ArrowRight } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Consultation request sent successfully! We'll contact you soon.");
        setFormData({
          name: "",
          phone: "",
          company: "",
          email: "",
          service: "",
        });
      } else {
        toast.error(data.error || "Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExploreSolutions = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center overflow-hidden font-sans"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_1.jpg"
          alt="Industrial water treatment plant background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#1e3a5f]/80 to-[#1e3a5f]/50" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 w-full container mx-auto px-6 py-24 lg:py-12">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 md:space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 animate-fade-in-down">
              <Sparkles className="w-4 h-4 text-[#00d4aa]" />
              <span className="text-sm font-semibold">
                15+ Years of Excellence
              </span>
            </div>

            <h1 className="text-[40px] leading-tight md:text-5xl lg:text-[56px] xl:text-[64px] font-bold tracking-tighter animate-fade-in-left delay-200">
              Recycle Water and Wastewater Treatment to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4aa] to-[#00b894]">
                Reduce Costs
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4aa] to-[#00b894]">
                Stay Compliant
              </span>
            </h1>

            <div className="space-y-5 animate-fade-in-left delay-400">
              <h2 className="text-2xl md:text-3xl font-semibold">
                End-to-end Setup For
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-4 group transition-all duration-300">
                  <CircleCheckBig className="h-7 w-7 text-[#00d4aa] flex-shrink-0" />
                  <span className="font-medium">
                    Sewage Treatment Plant (STP)
                  </span>
                </li>
                <li className="flex items-center gap-4 group transition-all duration-300">
                  <CircleCheckBig className="h-7 w-7 text-[#00d4aa] flex-shrink-0" />
                  <span className="font-medium">
                    Effluent Treatment Plant (ETP)
                  </span>
                </li>
                <li className="flex items-center gap-4 group transition-all duration-300">
                  <CircleCheckBig className="h-7 w-7 text-[#00d4aa] flex-shrink-0" />
                  <span className="font-medium">
                    Reverse Osmosis (RO) Water
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-gray-200/90 animate-fade-in-left delay-700">
              Design, Installation, and Maintenance for industries across India.
            </p>

            <div className="pt-4 animate-fade-in-up delay-1000">
              <Button
                size="lg"
                onClick={handleExploreSolutions}
                className="bg-white text-navy-dark hover:bg-gray-200 shadow-2xl font-bold text-lg h-auto px-8 py-[18px] group transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <Card id="lead-form" className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl border-0 scroll-mt-24">
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-card-foreground text-2xl font-semibold">
                  Request Free Consultation
                </CardTitle>
                <p className="text-sm text-primary font-medium pt-1">
                  Get expert advice tailored to your needs
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name: *</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="bg-white border-border focus:ring-ring"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone: *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="bg-white border-border focus:ring-ring"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name:</Label>
                    <Input 
                      id="company" 
                      placeholder="Enter your company name" 
                      className="bg-white border-border focus:ring-ring"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email id: *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-white border-border focus:ring-ring"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium text-gray-700">Service Need: *</Label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                      disabled={isSubmitting}
                      required
                    >
                      <SelectTrigger id="service" className="bg-white border-border focus:ring-ring text-gray-700">
                        <SelectValue placeholder="Select service required" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stp">Sewage Treatment Plant (STP)</SelectItem>
                        <SelectItem value="etp">Effluent Treatment Plant (ETP)</SelectItem>
                        <SelectItem value="ro">Reverse Osmosis (RO) Water</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 h-auto text-base transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-primary/40"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get Consultation"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;