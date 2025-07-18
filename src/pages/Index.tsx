import { Button } from "@/components/ui/button";
import { ModuleCard } from "@/components/ModuleCard";
import { StatsCard } from "@/components/StatsCard";
import { 
  Heart, 
  MapPin, 
  Users, 
  Building2, 
  Zap,
  Shield,
  Target,
  Globe,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const modules = [
  {
    title: "Health & Immunization Dashboard",
    description: "Offline-first health tracking with predictive AI for vaccine management and maternal care in underserved communities.",
    icon: Heart,
    status: "active" as const,
    features: [
      "Works offline with 72hr sync cycles",
      "Predictive AI for vaccine stockouts",
      "Swahili dashboards for CHVs",
      "Integration with NHIF & KEMSA"
    ]
  },
  {
    title: "Ethical Land Use & Dispute Resolution",
    description: "AI-powered land dispute resolution combining Kenyan law with traditional mediation practices.",
    icon: MapPin,
    status: "development" as const,
    features: [
      "AI interpretation of Kenyan land law",
      "Community mediation tools via USSD",
      "Geo-tagged evidence system",
      "Title deed guidance support"
    ]
  },
  {
    title: "Youth Fellowship Portal",
    description: "Civic internships, micro-jobs, and AI-matched learning paths to combat youth unemployment.",
    icon: Users,
    status: "active" as const,
    features: [
      "Civic internships & micro-jobs",
      "AI-matched learning pathways",
      "M-Pesa reward integration",
      "Youth data corps development"
    ]
  },
  {
    title: "Ward-Level Governance Engine",
    description: "Transparent budget visualization and citizen participation tools for inclusive governance.",
    icon: Building2,
    status: "development" as const,
    features: [
      "Visual budget simulation tools",
      "SMS/USSD citizen polling",
      "Ethical decision scenario modeling",
      "Chief & MCA collaboration platform"
    ]
  },
  {
    title: "Ethical Energy Access Platform",
    description: "Energy equity mapping and climate insights for fair distribution of power resources.",
    icon: Zap,
    status: "planning" as const,
    features: [
      "Geothermal/solar access mapping",
      "Energy equity dashboards",
      "School & clinic energy priority",
      "Climate impact tracking"
    ]
  }
];

const stats = [
  {
    title: "Target Population",
    value: "2.2M+",
    icon: Globe,
    trend: { value: "15% growth", positive: true }
  },
  {
    title: "Wards Covered",
    value: "55",
    icon: Target,
    trend: { value: "100% coverage", positive: true }
  },
  {
    title: "CHVs Supported",
    value: "1,200+",
    icon: Shield,
    trend: { value: "60% efficiency", positive: true }
  },
  {
    title: "Youth Engaged",
    value: "50K",
    icon: TrendingUp,
    trend: { value: "Goal by Year 1", positive: true }
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroImage} 
          alt="AEGIS Nakuru Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AEGIS Nakuru
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Ethical Infrastructure for County Transformation
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            A bold, tech-driven governance platform transforming Nakuru's public services 
            through AI, community-first principles, and offline-friendly technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explore Modules
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              View Impact
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Impact</h2>
            <p className="text-xl text-muted-foreground">
              Transforming governance through ethical technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core Modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five integrated systems addressing Nakuru's key challenges in health, 
              land use, youth employment, governance, and energy access.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <ModuleCard 
                key={index} 
                {...module} 
                onExplore={() => console.log(`Exploring ${module.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            AEGIS Nakuru creates tailored, locally-governed digital public infrastructure 
            that ensures ethical allocation of resources. We're building bottom-up, 
            people-first solutions that work offline and prioritize community needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ethical First</h3>
              <p className="text-muted-foreground">Fair resource distribution and transparent governance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Offline Ready</h3>
              <p className="text-muted-foreground">Works without internet, syncs when connected</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">Built with and for the people of Nakuru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AEGIS Nakuru</h3>
          <p className="mb-6">Ethical Infrastructure for County Transformation</p>
          <p className="text-sm opacity-80">
            Positioning Nakuru as a national civic tech leader, with potential for pan-African replication
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
