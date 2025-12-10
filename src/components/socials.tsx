import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/deagleSC",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/supratikch",
    icon: Linkedin,
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com",
  //   icon: Twitter,
  // },
  {
    name: "Email",
    href: "mailto:supratikofficial1@gmail.com",
    icon: Mail,
  },
];

export function Socials() {
  return (
    <ul className="ml-1 mt-8 flex items-center justify-center md:justify-start" aria-label="Social media">
      {socialLinks.map((item) => (
        <li key={item.name} className="mr-5 text-xs shrink-0">
          <Link
            href={item.href}
            className="block hover:text-slate-200"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${item.name} (opens in a new tab)`}
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
