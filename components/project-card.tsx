import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-[28px] border border-black/8 bg-white/70 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-[10px]">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={800}
          className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="px-2 pb-2 pt-5">
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

          <p className="mt-2 text-sm leading-6 text-black/70">
            {project.stack.join(" · ")}
          </p>
        </div>

        <div className="mt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-black transition hover:text-black/65"
          >
            View Live Site
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}