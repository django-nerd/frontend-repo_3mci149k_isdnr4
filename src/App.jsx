import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <section className="py-16 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-slate-900 p-8 sm:p-10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">Ready to launch your GHL system?</h3>
                <p className="mt-2 text-slate-300">Get a free system audit and roadmap call with Ikram K.</p>
              </div>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-slate-900 font-semibold hover:bg-slate-100"
              >
                Book Your Call
              </a>
            </div>
            <footer className="mt-10 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Growth Launch — Built for ambitious founders. Founder: Ikram K.
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
