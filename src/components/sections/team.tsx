"use client";
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

// Type definition for a team member
interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
}

// Data for team members
const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Founder & Chief Engineer',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/professional-indian-male-engineer-in-his-3a8e8a0a-20251030135413.jpg',
  },
  {
    name: 'Priya Sharma',
    title: 'Senior Project Manager',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/professional-indian-female-project-manag-87e661f8-20251030135414.jpg',
  },
  {
    name: 'Amit Patel',
    title: 'Technical Head - ETP',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/professional-indian-male-technical-engin-e530f3fc-20251030135415.jpg',
  },
  {
    name: 'Kavita Desai',
    title: 'Environmental Compliance Officer',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/professional-indian-female-compliance-of-50ab12e6-20251030135410.jpg',
  },
  {
    name: 'Suresh Nair',
    title: 'Operations Manager',
    imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/26392af0-dc78-46b2-9569-92fc261d6e22/generated_images/professional-indian-male-operations-mana-1c86c9c7-20251030135410.jpg',
  },
];

// Card component for a single team member
const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="group overflow-hidden rounded-xl bg-white shadow-lg">
    <div className="relative">
      <Image
        src={member.imageSrc}
        alt={`Professional headshot of ${member.name}`}
        width={400}
        height={384}
        className="h-96 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute top-4 right-4 translate-x-12 space-y-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <a href="#" aria-label={`${member.name} on LinkedIn`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="#" aria-label={`${member.name} on Twitter`} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
          <Twitter className="h-5 w-5" />
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-slate-800">{member.name}</h3>
      <p className="text-sm text-slate-600">{member.title}</p>
    </div>
  </div>
);

// Main Team section component
const TeamSection = () => {
  return (
    <section id="team" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-800 lg:text-5xl">Our Team</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Meet the experts behind our successful installations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;