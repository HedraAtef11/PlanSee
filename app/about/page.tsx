import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Trophy } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "We put our clients first, ensuring their needs and goals drive every decision.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering outstanding results.",
    },
    {
      icon: Trophy,
      title: "Innovation",
      description: "We embrace innovative solutions to solve complex challenges.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-width">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg max-w-3xl text-white/90">
            We are a team of dedicated professionals committed to delivering
            exceptional planning and consulting services. With years of experience
            and a passion for excellence, we help our clients achieve their goals.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <img
                  src={`https://images.unsplash.com/photo-167${member}575602276-acd073f104c1?q=80&w=400&h=400&fit=crop`}
                  alt={`Team member ${member}`}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">Senior Consultant</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}