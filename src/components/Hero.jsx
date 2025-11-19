export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs text-indigo-700 shadow-sm mb-5">
              Full GoHighLevel Account Setup • Done-For-You
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Launch a Revenue-Ready GHL System in Days, Not Months
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We implement a complete GoHighLevel environment—funnels, automations, calendars, pipelines, and reporting—tailored to your business so you can convert more leads and scale with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-white font-semibold hover:bg-slate-800 transition-colors">
                See Packages
              </a>
              <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-slate-900 font-semibold ring-1 ring-slate-200 hover:bg-slate-50">
                Book a Free Audit
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Founder: Ikram K.</p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center text-center p-6">
                <div>
                  <p className="text-sm font-medium text-indigo-700">What you get</p>
                  <ul className="mt-3 text-left text-slate-700 space-y-2">
                    <li>• High-converting funnel templates</li>
                    <li>• CRM with pipelines & automations</li>
                    <li>• Calendars, forms & surveys</li>
                    <li>• SMS/Email marketing setup</li>
                    <li>• Reporting dashboards</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">Everything configured inside your GoHighLevel account, handed to you ready to run.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
