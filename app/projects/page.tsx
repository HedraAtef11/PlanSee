import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Corporate Headquarters Planning",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      description: "Comprehensive planning and execution of a modern corporate headquarters.",
    },
    {
      title: "Residential Complex Development",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
      description: "Master planning for a luxury residential development project.",
    },
    {
      title: "Smart City Infrastructure",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
      description: "Implementation of smart city solutions for urban development.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-width">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg max-w-3xl text-white/90">
            Explore our portfolio of successful projects across various sectors.
            Each project showcases our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="pt-6">
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}