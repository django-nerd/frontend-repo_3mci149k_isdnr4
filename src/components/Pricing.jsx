const plans = [
  {
    name: "Starter Setup",
    price: "$1,497",
    features: [
      "Funnel + website template install",
      "1 calendar + 1 pipeline",
      "Basic automations (lead capture, confirmation)",
      "Email/SMS configuration",
      "2 rounds of revisions",
    ],
    cta: "Get Starter",
  },
  {
    name: "Growth Setup",
    price: "$2,997",
    features: [
      "Custom funnel build",
      "2-3 calendars + multiple pipelines",
      "Advanced workflows (nurture, no-show, winback)",
      "Review & reputation system",
      "Analytics dashboard",
    ],
    highlight: true,
    cta: "Choose Growth",
  },
  {
    name: "Scale Setup",
    price: "$4,997",
    features: [
      "Multi-location/team routing",
      "Complex automations + integrations",
      "Attribution & source tracking",
      "Migration + full QA",
      "Priority support",
    ],
    cta: "Scale with Us",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, Transparent Packages</h2>
          <p className="mt-3 text-slate-600">Pick the setup that matches your growth stage. All packages include training and a 14-day post-launch support.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 shadow-sm ${p.highlight ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-200 bg-white'}`}
            >
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${p.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
