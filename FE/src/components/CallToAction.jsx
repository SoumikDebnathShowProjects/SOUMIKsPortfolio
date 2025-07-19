const CallToAction = () => {
  return (
    <section className="border-b border-neutral-800 py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col gap-6">
          <h2 className="text-4xl font-bold md:text-5xl">Want to create someting awesome?</h2>
          <a
            href="#contact"
            className="flex w-fit items-center gap-2 rounded-full bg-[#ff5733] px-6 py-3 font-medium text-white transition-colors hover:bg-[#ff7a5c]"
          >
            Ping Me
            <span>→</span>
          </a>
        </div>

        <div className="flex flex-col">
          <a
            href="https://instagram.com"
            className="flex items-center justify-between border-b border-neutral-800 py-4 text-xl font-medium transition-colors hover:text-[#ff5733]"
          >
            INSTAGRAM
            <span>↗</span>
          </a>
          <a
            href="https://linkedin.com"
            className="flex items-center justify-between border-b border-neutral-800 py-4 text-xl font-medium transition-colors hover:text-[#ff5733]"
          >
            LINKEDIN
            <span>↗</span>
          </a>
          <a
            href="https://layers.com"
            className="flex items-center justify-between border-b border-neutral-800 py-4 text-xl font-medium transition-colors hover:text-[#ff5733]"
          >
            LAYERS
            <span>↗</span>
          </a>
          <a
            href="https://behance.net"
            className="flex items-center justify-between border-b border-neutral-800 py-4 text-xl font-medium transition-colors hover:text-[#ff5733]"
          >
            BEHANCE
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
