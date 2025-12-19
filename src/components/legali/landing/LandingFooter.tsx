import * as React from "react"
import { cn } from "@/lib/utils"

export interface FooterLinkGroup {
  title: string
  links: { label: string; href: string }[]
}

export interface LandingFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo image source */
  logoSrc?: string
  /** Footer description text */
  description?: string
  /** Link groups to display */
  linkGroups?: FooterLinkGroup[]
  /** Social media links */
  socialLinks?: { name: string; href: string }[]
  /** Copyright text */
  copyright?: string
  /** Disclaimer text */
  disclaimer?: string
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
]

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
        ref={ref}
        className={cn("bg-[#0f172a] text-slate-400 pt-20 pb-8 px-6", className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {/* Brand column */}
            <div className="col-span-2">
              <img
                src={logoSrc}
                alt="Legali"
                className="h-10 mb-6 brightness-0 invert opacity-80"
              />
              <p className="text-sm text-slate-500 mb-6 max-w-xs">{description}</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#4eaed0] flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-5 h-5 bg-current rounded-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-white font-semibold mb-4">{group.title}</h3>
                <ul className="space-y-3 text-sm">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-[#4eaed0] transition-colors"
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
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">{copyright}</p>
            <p className="text-xs text-slate-600">{disclaimer}</p>
          </div>
        </div>
      </footer>
    )
  }
)

LandingFooter.displayName = "LandingFooter"

export { LandingFooter }
