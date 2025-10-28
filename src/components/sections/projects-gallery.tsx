import type { FC } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  image: string;
  categoryClasses: string;
}

const projectsData: Project[] = [
  {
    title: 'ABC Textile Mill ETP',
    category: 'Textile Industry',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_8.jpg',
    categoryClasses: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
  },
  {
    title: 'Metro Residency STP',
    category: 'Real Estate',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_7.jpg',
    categoryClasses: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300',
  },
  {
    title: 'PharmaLife Industries ETP',
    category: 'Pharmaceutical',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_6.jpg',
    categoryClasses: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
  },
  {
    title: 'ChemTech Solutions ETP',
    category: 'Chemical Industry',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_5.jpg',
    categoryClasses: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
  },
  {
    title: 'GrandView Hotel STP',
    category: 'Hospitality',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_4.jpg',
    categoryClasses: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300',
  },
  {
    title: 'FoodCorp Processing ETP',
    category: 'Food Processing',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_3.jpg',
    categoryClasses: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',
  },
];

const ProjectsGallery: FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20 bg-slate-blue/[0.15]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Projects Gallery</h2>
          <p className="text-lg max-w-3xl mx-auto text-slate-400">
            See our successful installations across various industries. Each project demonstrates our commitment to
            quality and regulatory compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-slate-900/70 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-2 text-white">{project.title}</h4>
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${project.categoryClasses}`}>
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;