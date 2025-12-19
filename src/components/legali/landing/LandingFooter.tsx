import * as React from "react";
import { cn } from "@/lib/utils";

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface LandingFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo image source */
  logoSrc?: string;
  /** Footer description text */
  description?: string;
  /** Link groups to display */
  linkGroups?: FooterLinkGroup[];
  /** Social media links */
  socialLinks?: { name: string; href: string }[];
  /** Copyright text */
  copyright?: string;
  /** Disclaimer text */
  disclaimer?: string;
}

const defaultLinkGroups: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

/**
 * Landing page footer with link groups and social icons.
 * Includes logo, description, and legal disclaimers.
 */
const LandingFooter = React.forwardRef<HTMLElement, LandingFooterProps>(
  (
    {
      className,
      logoSrc = "/assets/landing/logo-legali.png",
      description = "Making legal guidance accessible to everyone through AI-powered intelligence.",
      linkGroups = defaultLinkGroups,
      socialLinks = [
        { name: "twitter", href: "#" },
        { name: "linkedin", href: "#" },
        { name: "facebook", href: "#" },
      ],
      copyright = "© 2024 Legali AI. All rights reserved.",
      disclaimer = "Legali is not a law firm and does not provide legal advice.",
      ...props
    },
    ref
  ) => {
    return (
      <footer
        className={cn("bg-[#0f172a] px-6 pt-20 pb-8 text-slate-400", className)}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          {/* Main footer content */}
          <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-5">
            {/* Brand column */}
            <div className="col-span-2">
              <img
                alt="Legali"
                className="mb-6 h-10 opacity-80 brightness-0 invert"
                src={logoSrc}
              />
              <p className="mb-6 max-w-xs text-slate-500 text-sm">
                {description}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 transition-colors hover:bg-[#4eaed0]"
                    href={social.href}
                    key={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="h-5 w-5 rounded-sm bg-current" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 font-semibold text-white">{group.title}</h3>
                <ul className="space-y-3 text-sm">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="transition-colors hover:text-[#4eaed0]"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-slate-800 border-t pt-8 md:flex-row">
            <p className="text-slate-500 text-sm">{copyright}</p>
            <p className="text-slate-600 text-xs">{disclaimer}</p>
          </div>
        </div>
      </footer>
    );
  }
);

LandingFooter.displayName = "LandingFooter";

export { LandingFooter };
