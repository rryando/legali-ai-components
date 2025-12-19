import * as React from "react"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import { SpotlightCard } from "../atomic/SpotlightCard"
import { SectionBadge } from "../atomic/SectionBadge"

export interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
  rating: number
}

export interface TestimonialsSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Testimonials to display */
  testimonials?: Testimonial[]
  /** Section title */
  title?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Legali helped me understand my contract dispute in minutes. I felt empowered to negotiate a fair settlement.",
    author: "Sarah M.",
    role: "Small Business Owner",
    avatar: "SM",
    rating: 5,
  },
  {
    quote:
      "As a solo practitioner, Legali has transformed how I handle initial case assessments. It's like having a research team.",
    author: "David Chen, Esq.",
    role: "Attorney",
    avatar: "DC",
    rating: 5,
  },
  {
    quote:
      "I couldn't afford a lawyer for my landlord dispute, but Legali walked me through every step. I won my case!",
    author: "Marcus J.",
    role: "Teacher",
    avatar: "MJ",
    rating: 5,
  },
]

/**
 * Testimonials section with customer quotes and ratings.
 * Displays testimonial cards with avatars and star ratings.
 */
const TestimonialsSection = React.forwardRef<HTMLElement, TestimonialsSectionProps>(
  (
    {
      className,
      testimonials = defaultTestimonials,
      title = "Loved by thousands",
      ...props
    },
    ref
  ) => {
    return (
      <section
        id="testimonials"
        ref={ref}
        className={cn(
          "py-24 px-6 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionBadge
              icon={<Star className="w-4 h-4 fill-current" />}
              label="Customer Stories"
              variant="warning"
              className="mb-6"
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <SpotlightCard
                key={testimonial.author}
                className="p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4eaed0] to-[#667eea] flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    )
  }
)

TestimonialsSection.displayName = "TestimonialsSection"

export { TestimonialsSection }
