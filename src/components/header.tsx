import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/supratik-chakraborty-image.jpeg";

export function Header() {
  return (
    <div className="flex flex-col gap-4 items-center md:items-start">
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-slate-200/10 mb-4 relative">
         <Image src={profileImage} alt="Profile" fill className="object-cover" />
      </div>
      <div className="font-bold tracking-tight text-slate-200 text-2xl md:text-5xl text-center md:text-left">
        <Link href="/">Supratik Chakraborty</Link>
      </div>
      {/* <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Software Engineer
      </h2> */}
      <p className="max-w-full leading-normal text-slate-400 font-medium text-sm text-center md:text-left">
        SDE @Trumio | Building AI-first web platforms | Full-stack + LLMs
      </p>
      {/* <div className="max-w-xs leading-normal text-slate-400 mt-4 space-y-4">
        <p>
          Back in the day, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio.
        </p>
      </div> */}
      <p className="max-w-full leading-normal text-slate-400 text-sm text-center md:text-left">
        Building AI-native web platforms optimized for performance, scalability, and seamless user experience using React, Next.js, and FastAPI. Driving LLM integrations (OpenAI, Azure Cognitive Services) and leading cross-functional teams to turn complex PRDs into production-grade solutions.
      </p>
      <div className="flex items-center justify-start gap-4 mt-4 w-full">
        <Button asChild variant="default" className="bg-teal-400/10 text-teal-300 hover:bg-teal-400/20 border border-teal-400/50 w-full md:w-auto">
          <a href="/supratik-chakraborty-resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>
        {/* <Button asChild variant="outline" className="border-slate-200 text-slate-200 hover:bg-slate-200 hover:text-slate-900">
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </Button> */}
      </div>
    </div>
  );
}
