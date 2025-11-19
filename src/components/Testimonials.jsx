const testimonials = [
  {
    quote: "They built our entire lead-to-booking system in GHL in a week. Show-up rates and close rates both went up.",
    name: "Sarah L.",
    role: "Clinic Owner",
  },
  {
    quote: "Finally have a CRM that matches our process. The reporting alone paid for the engagement in 30 days.",
    name: "Marcus P.",
    role: "Agency Partner",
  },
  {
    quote: "Calendars, funnels, automations—everything just works. Team was responsive and super organized.",
    name: "Nina R.",
    role: "Founder, eCom Brand",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Client Wins</h2>
          <p className="mt-3 text-slate-600">Real outcomes from real businesses we’ve set up on GoHighLevel.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-800">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-600">— {t.name}, {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
