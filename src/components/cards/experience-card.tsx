import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export interface Experience {
  id: string;
  start: string;
  end: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  skills: string[];
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="group relative border-none bg-transparent shadow-none transition-all hover:!opacity-100 group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <div className="z-10 relative flex flex-col gap-1 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {experience.start} — {experience.end}
        </header>
        <div className="z-10">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <Link
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href={experience.companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {experience.title} ·{" "}
                  <span className="inline-block">
                    {experience.company}
                    <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                  </span>
                </span>
              </Link>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate-400">
            {experience.description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {experience.skills.map((skill) => (
              <li key={skill} className="mr-1.5 mt-2">
                <Badge variant="secondary" className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 rounded-full px-3 py-1 font-medium leading-5">
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
