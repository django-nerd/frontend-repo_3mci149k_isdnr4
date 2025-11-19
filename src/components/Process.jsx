const steps = [
  {
    title: "Discovery & Mapping",
    desc: "We map your offers, lead sources, sales process, and retention so the system matches your real business.",
  },
  {
    title: "Build & Configure",
    desc: "We set up funnels, calendars, pipelines, automations, and messaging inside your GHL account.",
  },
  {
    title: "QA & Launch",
    desc: "We test every path end-to-end, connect domains & tracking, and hand over a clean, documented system.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How We Work</h2>
          <p className="mt-3 text-slate-600">A streamlined, transparent process so you can launch fast with zero guesswork.</p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold shadow">{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
