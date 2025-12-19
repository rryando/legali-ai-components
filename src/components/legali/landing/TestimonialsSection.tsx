import { Star } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "../atomic/SectionBadge";
import { SpotlightCard } from "../atomic/SpotlightCard";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface TestimonialsSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Testimonials to display */
  testimonials?: Testimonial[];
  /** Section title */
  title?: string;
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
];

/**
 * Testimonials section with customer quotes and ratings.
 * Displays testimonial cards with avatars and star ratings.
 */
const TestimonialsSection = React.forwardRef<HTMLElement, TestimonialsSectionProps>(
  (
    { className, testimonials = defaultTestimonials, title = "Loved by thousands", ...props },
    ref
  ) => {
    return (
      <section
        className={cn(
          "overflow-hidden bg-gradient-to-b from-slate-50/50 to-white px-6 py-24",
          className
        )}
        id="testimonials"
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <SectionBadge
              className="mb-6"
              icon={<Star className="h-4 w-4 fill-current" />}
              label="Customer Stories"
              variant="warning"
            />
            <h2 className="font-bold text-3xl text-slate-900 tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <SpotlightCard
                className="rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
                key={testimonial.author}
              >
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star className="h-5 w-5 fill-current text-amber-400" key={i} />
                  ))}
                </div>

                <blockquote className="mb-6 text-lg text-slate-700 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4eaed0] to-[#667eea] font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TestimonialsSection.displayName = "TestimonialsSection";

export { TestimonialsSection };
