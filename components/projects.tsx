"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects, type ProjectFilter } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.filterCategory === activeFilter);
  }, [activeFilter]);

  return (
    <AnimatedSection id="projects" className="scroll-mt-24 px-6 py-20 bg-[#f7f7f5]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-sm uppercase tracking-[0.22em] text-black/40">
            Projects
          </h2>

          <div
            className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            aria-label="Project filters"
          >
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-200 sm:px-5 ${
                    isActive
                      ? "border-black bg-black text-white shadow-sm"
                      : "border-black/10 bg-white/70 text-black/55 hover:border-black/25 hover:bg-white hover:text-black"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
