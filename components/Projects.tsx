import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project, projects } from "@/lib/projects";
import Link from "next/link";

const ProjectCard = ({ title, description, image, tags }: Project) => (
  <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
    <Image
      src={image || "/placeholder.svg"}
      alt={title}
      width={400}
      height={250}
      className="w-full h-48 object-cover"
    />
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Projects That Inspire Growth
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto">
          Discover our favorite projects that demonstrate how we simplify
          complex technology into easy-to-use digital solutions. See how our
          work can boost your business and turn challenges into opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Link href="/projects">
            <Button size="lg">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
