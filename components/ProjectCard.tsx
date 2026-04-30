import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const renderProjectStatus = (project: Project) => {
    switch (project.status) {
      case "current":
        return (
          <span className="inline-flex items-center gap-2 text-sm text-black/50">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1bae70]" />
            Live on this page
          </span>
        );

      case "soon":
        return (
          <span className="inline-flex items-center gap-2 text-sm text-black/50">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            Coming Soon
          </span>
        );

      case "live":
      default:
        return (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-black transition hover:text-black/65"
          >
            View Live Site
            <span aria-hidden="true">↗</span>
          </a>
        );
    }
  };
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-black/8 bg-white/70 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-[10px]">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-black/40">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-base leading-7 text-black/65">
          {project.description}
        </p>

        <div className="mt-6 border-t border-black/8 pt-4">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40">
            Built with
          </p>

          <p className="mt-3 text-sm leading-6 text-black/65">
            {project.stack.join(" · ")}
          </p>
        </div>

        <div className="mt-auto pt-6">{renderProjectStatus(project)}</div>
      </div>
    </div>
  );
}
