import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="scroll-mt-24 px-6 py-20 bg-[#f7f7f5]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-sm uppercase tracking-[0.22em] text-black/40">
            Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
