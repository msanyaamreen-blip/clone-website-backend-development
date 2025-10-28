import type { LucideProps } from "lucide-react";
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
};

const IndustryCard = ({ name, icon: Icon }: IndustryCardProps) => (
  <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center text-card-foreground shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h4 className="text-xl font-semibold">{name}</h4>
  </div>
);

const StatsIndustries = () => {
  const stats = [
    { value: "15+", label: "Years of Expertise" },
    { value: "200+", label: "Installations" },
    { value: "100%", label: "PCB Compliance" },
  ];

  const industries = [
    { name: "Manufacturing", icon: Factory },
    { name: "Pharma", icon: TestTube2 },
    { name: "Textiles", icon: Shirt },
    { name: "Food Processing", icon: CookingPot },
    { name: "Chemicals", icon: FlaskConical },
    { name: "Tannery", icon: Layers },
    { name: "Schools", icon: School },
    { name: "Colleges", icon: GraduationCap },
    { name: "Large Hotels", icon: Building2 },
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
              <IndustryCard key={index} name={industry.name} icon={industry.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsIndustries;