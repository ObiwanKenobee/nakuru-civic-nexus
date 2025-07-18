import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  status: "active" | "development" | "planning";
  onExplore: () => void;
}

export function ModuleCard({ title, description, icon: Icon, features, status, onExplore }: ModuleCardProps) {
  const statusColors = {
    active: "bg-success text-success-foreground",
    development: "bg-warning text-warning-foreground", 
    planning: "bg-muted text-muted-foreground"
  };

  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 border-0">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          className="w-full" 
          variant={status === "active" ? "default" : "outline"}
          onClick={onExplore}
        >
          {status === "active" ? "Launch Module" : "Learn More"}
        </Button>
      </CardContent>
    </Card>
  );
}