const Footer = () => {
  return (
    <footer className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold">Whenever wherever.</h2>
            <p className="mb-4">We're meant to work together.</p>
            <p className="max-w-xs text-neutral-400">
              Get in touch with us for full-time job opportunities, freelance projects, design advice, or simply to say
              hello.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Explore</h3>
            <div className="flex flex-wrap gap-2">
              <a
                href="#about"
                className="rounded-md border border-neutral-700 px-4 py-2 transition-colors hover:bg-white/5"
              >
                About me
              </a>
              <a
                href="#projects"
                className="rounded-md border border-neutral-700 px-4 py-2 transition-colors hover:bg-white/5"
              >
                Projects
              </a>
              <a
                href="#newsletter"
                className="rounded-md border border-neutral-700 px-4 py-2 transition-colors hover:bg-white/5"
              >
                Newsletter
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Lets work together</h3>
            <div className="flex items-center gap-2 rounded-full bg-[#1e1e1e] pl-4">
              <span className="text-neutral-400">Got an idea?</span>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-[#ff5733] px-4 py-2 font-medium text-white transition-colors hover:bg-[#ff7a5c]"
              >
                Let's talk
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-neutral-800 pt-12">
          <h2 className="mb-4 text-8xl font-bold text-white/10">Footer</h2>
          <p className="text-sm text-neutral-400">© 2023-2024 Halah Portofolio</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
