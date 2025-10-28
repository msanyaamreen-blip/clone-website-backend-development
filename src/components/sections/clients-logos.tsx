import Image from "next/image";

type Client = {
  name: string;
  logoSrc: string;
  hasVideo?: boolean;
};

const clients: Client[] = [
  {
    name: "ABC Textiles Ltd.",
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_14.jpg",
  },
  {
    name: "PharmaLife Industries",
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_15.jpg",
    hasVideo: true,
  },
  {
    name: "GrandView Resorts",
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_16.jpg",
  },
  {
    name: "FoodCorp Industries",
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_17.jpg",
  },
  {
    name: "Metro Real Estate",
    logoSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/26392af0-dc78-46b2-9569-92fc261d6e22-wink-shade-59488103-figma-site/assets/images/images_18.jpg",
    hasVideo: true,
  },
];

const ClientCard = ({ client }: { client: Client }) => (
  <div className="relative group transform-gpu transition-transform duration-300 hover:-translate-y-2">
    <div className="bg-card text-card-foreground rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex items-center justify-center">
      <Image
        src={client.logoSrc}
        alt={client.name}
        width={150}
        height={48}
        className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    {client.hasVideo && (
      <div className="absolute top-0 right-0 -mt-3 -mr-3">
        <div className="bg-primary text-primary-foreground text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg">
          Case Study Video
        </div>
      </div>
    )}
  </div>
);


const ClientsLogos = () => {
  return (
    <section className="bg-secondary py-24 scroll-mt-20" id="clients">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across industries
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-stretch">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsLogos;