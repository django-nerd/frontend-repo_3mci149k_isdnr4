import { CheckCircle2 } from "lucide-react"

const services = [
  {
    title: "Funnel & Website Setup",
    points: [
      "Conversion-optimized templates",
      "Custom branding & domain connection",
      "Tracking (GA4, Pixel, GTM)"
    ],
  },
  {
    title: "CRM & Pipeline Build",
    points: [
      "Lead capture forms & surveys",
      "Stages, tags & custom fields",
      "Automated follow-ups"
    ],
  },
  {
    title: "Automations & Messaging",
    points: [
      "Workflows for SMS & email",
      "Appointment confirmation + reminders",
      "Nurture sequences that convert"
    ],
  },
  {
    title: "Calendars & Booking",
    points: [
      "Multiple calendars & team routing",
      "Availability rules & buffers",
      "No-show prevention system"
    ],
  },
  {
    title: "Reputation & Reviews",
    points: [
      "Automated review requests",
      "2-way SMS for happy customers",
      "Widgets for website & funnels"
    ],
  },
  {
    title: "Analytics & Optimization",
    points: [
      "Source tracking & attribution",
      "Dashboard setup",
      "Monthly optimization add-on"
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What We Set Up For You</h2>
          <p className="mt-3 text-slate-600">A complete GoHighLevel system tailored to your business model, built to convert and scale.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-indigo-600 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
