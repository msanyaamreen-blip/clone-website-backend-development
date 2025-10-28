"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Amphitrite Technologies delivered an exceptional ETP system for our textile plant. The team was professional, and we achieved 100% PCB compliance on the first inspection.",
    name: "Ramesh Krishnan",
    title: "Plant Manager, ABC Textiles",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_19.jpg",
  },
  {
    quote: "Outstanding service and support. The STP installation was completed on time, and their AMC team is always responsive. Highly recommend for any industrial water treatment needs.",
    name: "Lakshmi Iyer",
    title: "Facility Head, Metro Residency",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_20.jpg",
  },
  {
    quote: "We saved ₹15 lakhs annually on water costs after installing their water recycling system. The ROI was evident within the first year. Excellent technical expertise!",
    name: "Dr. Ashok Mehta",
    title: "Director, PharmaLife Industries",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_21.jpg",
  },
  {
    quote: "Professional team with deep knowledge of PCB regulations. They guided us through the entire compliance process and delivered a custom ETP solution that perfectly fits our needs.",
    name: "Sunil Reddy",
    title: "Operations Head, ChemTech Solutions",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_22.jpg",
  },
  {
    quote: "15 years of excellent service! From initial consultation to ongoing maintenance, Amphitrite has been our trusted partner for all water treatment needs across our hotel properties.",
    name: "Meera Nambiar",
    title: "GM Operations, GrandView Resorts",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_23.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-24 sm:py-32 bg-secondary text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real reviews from our satisfied clients
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-px">
                  <Card className="h-full flex flex-col p-8 rounded-xl bg-card text-card-foreground shadow-lg border-l-4 border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <blockquote className="text-muted-foreground/90 italic">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <div className="mt-8 flex items-center gap-4">
                        <Image
                          src={testimonial.image}
                          alt={`Headshot of ${testimonial.name}`}
                          width={56}
                          height={56}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-12 text-foreground bg-background/50 hover:bg-background/80" />
          <CarouselNext className="hidden lg:flex -right-12 text-foreground bg-background/50 hover:bg-background/80" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;