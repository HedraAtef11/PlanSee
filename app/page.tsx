import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SuccessPartners } from "@/components/SuccessPartners";

export default function Home() {
  const features = [
    "Professional Project Management",
    "Expert Consultation",
    "Innovative Solutions",
    "Quality Assurance",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Transform Your Vision Into Reality
              </h1>
              <p className="text-lg mb-8 text-white/90">
                We specialize in turning complex projects into successful realities through expert planning and execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop"
                alt="Planning meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Plansee?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-muted-foreground">
                  Delivering excellence through our proven expertise and dedication.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Partners Section */}
      <SuccessPartners />

      {/* CTA Section */}
      <section className="section-padding bg-secondary/10">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Contact us today for a
            consultation.
          </p>
          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}