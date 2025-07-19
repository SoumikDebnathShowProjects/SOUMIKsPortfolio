const Hero = () => {
  return (
    <section className="border-b border-neutral-800 py-20" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-full">
              <img src="/profile.jpg" alt="Soumik Debnath" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Soumik Debnath</h2>
              <p className="text-neutral-400">Full Stack Developer (MERN)</p>
            </div>
          </div>

          {/* Explore Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-green-900/20 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Let’s build something awesome</span>
          </div>

          {/* Hero Title */}
          <div>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
              Turning ideas into real-world web apps with clean code and passion.
            </h1>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full bg-[#ff5733] px-6 py-3 font-medium text-white transition-colors hover:bg-[#ff7a5c]"
            >
              Let's Talk
              <span>→</span>
            </a>
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-6 py-3 font-medium transition-colors hover:bg-white/5"
            >
              See My Work
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
