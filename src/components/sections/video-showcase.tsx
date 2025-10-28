"use client";

import Image from "next/image";
import { Play, Volume2, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-28">
      {/* Decorative floating gradient circles */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="animate-float absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/25 filter blur-3xl"></div>
        <div className="animate-float-slow absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/25 filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            See Our{" "}
            <span className="bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            in Action
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground lg:text-xl">
            Watch how we transform wastewater into clean, reusable water for
            industries across India
          </p>
        </div>

        {/* Video Player Card */}
        <div className="group relative mx-auto max-w-6xl cursor-pointer overflow-hidden rounded-2xl bg-card shadow-xl">
          <div className="relative aspect-video w-full">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_2.jpg"
              alt="Water Treatment Plant Video"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy-dark/60 transition-colors duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative transition-transform duration-500 group-hover:scale-110">
                <div className="absolute -inset-2 animate-pulse rounded-full bg-primary/30"></div>
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/10 shadow-2xl backdrop-blur-sm transition-all duration-500 md:h-32 md:w-32">
                  <Play
                    className="ml-2 h-12 w-12 text-white md:h-16 md:w-16"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Controls on Hover */}
            <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-8 transform translate-y-4">
              <div className="flex items-center justify-between">
                <Button className="shadow-lg transition-all duration-300 hover:shadow-xl">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Full Video
                </Button>
                <div className="hidden items-center gap-2 text-white md:flex">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-white/10"
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-white/10"
                  >
                    <Maximize className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute right-4 top-4 rounded-lg bg-black/50 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              3:45
            </div>
          </div>

          {/* Video Title and Description */}
          <div className="p-6 text-card-foreground md:p-8">
            <h3 className="mb-2 text-2xl font-bold">
              Complete Water Treatment Process
            </h3>
            <p className="text-muted">
              From raw wastewater to clean, reusable water - see our end-to-end
              solutions
            </p>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            "100% PCB Compliant",
            "Save Up to 70% Water",
            "Reduce Operating Costs",
            "Expert Installation",
          ].map((feature) => (
            <div
              key={feature}
              className="cursor-pointer rounded-full bg-background px-6 py-3 font-semibold text-light-blue transition-transform duration-300 hover:scale-105 hover:bg-primary/20"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;