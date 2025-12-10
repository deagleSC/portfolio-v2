import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Nav } from "@/components/nav";
import { Socials } from "@/components/socials";
import { ExperienceCard } from "@/components/cards/experience-card";
import { ProjectCard } from "@/components/cards/project-card";
import { experiences, projects } from "@/data/resume";
import { MouseSpotlight } from "@/components/mouse-spotlight";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <MouseSpotlight />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Header />
            <Nav />
          </div>
          <Socials />
        </header>
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-[calc(100%+3rem)] bg-background/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:w-[calc(100%+6rem)] md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Experience
              </h2>
            </div>
            <div className="flex flex-col gap-12 group/list mt-12">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
            {/* <div className="mt-12">
              <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" href="/resume.pdf">
                <span>
                  View Full Resume <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </span>
              </Link>
            </div> */}
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-[calc(100%+3rem)] bg-background/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:w-[calc(100%+6rem)] md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Projects
              </h2>
            </div>
            <div className="flex flex-col gap-12 group/list mt-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          
          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Built with <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank" rel="noreferrer noopener">Vercel</a>.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
