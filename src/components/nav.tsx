"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Nav() {
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-6 w-max">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="group flex items-center py-3"
              onClick={() => setActiveSection(item.href.substring(1))}
            >
              <span className={cn(
                "mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                activeSection === item.href.substring(1) 
                  ? "w-16 bg-slate-200" 
                  : "bg-slate-600"
              )} />
              <span className={cn(
                "text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-slate-200 group-focus-visible:text-slate-200 motion-reduce:transition-none",
                activeSection === item.href.substring(1) 
                  ? "text-slate-200" 
                  : "text-slate-500"
              )}>
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
