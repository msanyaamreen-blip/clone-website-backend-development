import type { LucideProps } from "lucide-react";
import Image from "next/image";
import {
  Factory,
  TestTube2,
  Shirt,
  CookingPot,
  FlaskConical,
  Layers,
  School,
  GraduationCap,
  Building2,
} from "lucide-react";

type StatCardProps = {
  value: string;
  label: string;
};

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="transform rounded-3xl bg-gradient-to-br from-secondary to-background p-8 text-center text-white shadow-xl transition-transform duration-300 hover:scale-105">
    <h3 className="mb-2 text-5xl font-bold lg:text-6xl">{value}</h3>
    <p className="text-lg text-muted-foreground">{label}</p>
  </div>
);

type IndustryCardProps = {
  name: string;
  icon: React.ComponentType<LucideProps>;
  description: string;
  imageSrc: string;
};

const IndustryCard = ({ name, icon: Icon, description, imageSrc }: IndustryCardProps) => (
  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={imageSrc}
        alt={`${name} water treatment facility`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm">
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
    <div className="flex flex-col p-6 text-card-foreground">
      <h4 className="mb-2 text-xl font-semibold">{name}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
);

const StatsIndustries = () => {
  const stats = [
    { value: "15+", label: "Years of Expertise" },
    { value: "200+", label: "Installations" },
    { value: "100%", label: "PCB Compliance" },
  ];

  const industries = [
    { 
      name: "Manufacturing", 
      icon: Factory,
      description: "Custom STP & ETP solutions for manufacturing units with high water consumption and complex effluent requirements.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/modern-manufacturing-facility-with-indus-6309127e-20251030135423.jpg"
    },
    { 
      name: "Pharma", 
      icon: TestTube2,
      description: "Specialized treatment systems meeting stringent pharmaceutical industry standards and regulatory compliance.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/pharmaceutical-manufacturing-facility-cl-e74a0d46-20251030135413.jpg"
    },
    { 
      name: "Textiles", 
      icon: Shirt,
      description: "Advanced color removal and chemical treatment for textile dyeing and processing facilities.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/textile-dyeing-factory-interior-large-in-41119399-20251030135412.jpg"
    },
    { 
      name: "Food Processing", 
      icon: CookingPot,
      description: "Hygienic wastewater treatment for food and beverage processing plants with organic load management.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/food-processing-plant-interior-stainless-697967f0-20251030135415.jpg"
    },
    { 
      name: "Chemicals", 
      icon: FlaskConical,
      description: "Heavy-duty treatment systems for chemical plants handling toxic and hazardous wastewater.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/chemical-plant-facility-with-large-indus-b684f06b-20251030135412.jpg"
    },
    { 
      name: "Tannery", 
      icon: Layers,
      description: "Specialized chrome recovery and tannery effluent treatment with zero liquid discharge options.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/leather-tannery-facility-large-tanning-d-060173a5-20251030135418.jpg"
    },
    { 
      name: "Schools", 
      icon: School,
      description: "Compact and efficient STP systems for educational institutions with consistent daily loads.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/modern-school-building-exterior-with-gre-d49e5e8f-20251030135413.jpg"
    },
    { 
      name: "Colleges", 
      icon: GraduationCap,
      description: "Scalable water treatment solutions for large educational campuses and hostel facilities.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/large-college-campus-with-modern-buildin-ee2b2b61-20251030135418.jpg"
    },
    { 
      name: "Large Hotels", 
      icon: Building2,
      description: "Premium STP and water recycling systems for hospitality sector with automated monitoring.",
      imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/luxury-five-star-hotel-building-exterior-bdd1b0f9-20251030135413.jpg"
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 overflow-hidden bg-background py-24">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            Trusted by Leading Industries Across India
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 rounded-full bg-primary"></div>
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <div className="h-1 w-20 rounded-full bg-primary"></div>
          </div>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="text-center">
          <h3 className="mb-12 text-3xl font-semibold text-white">Industries Served:</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard 
                key={index} 
                name={industry.name} 
                icon={industry.icon}
                description={industry.description}
                imageSrc={industry.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsIndustries;