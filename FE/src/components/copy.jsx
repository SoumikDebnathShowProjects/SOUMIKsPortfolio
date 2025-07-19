"use client"

import { useState } from "react"
import {
  AlignHorizontalDistributeEndIcon,
  HomeIcon,
  Menu,
  PenIcon,
  SidebarCloseIcon,
} from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-[#121212] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="flex items-center text-xl font-bold">
              <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-md bg-[#1e1e1e]">
                😎
              </span>
              Hey, I'm Soumik Debnath 👋
            </h1>
          </div>

          {/* Sidebar / Navigation */}
          <nav
            className={`fixed top-0 z-50 h-screen w-4/5 bg-[#1e1e1e] p-8 transition-all duration-300 md:static md:h-auto md:w-auto md:bg-transparent md:p-0 ${
              isMenuOpen ? "right-0" : "-right-full"
            } md:block`}
          >
            <ul
              className={`flex flex-col gap-6 text-lg md:flex-row md:gap-8 md:items-center ${
                isMenuOpen ? "animate-fade-in" : ""
              }`}
            >
              {isMenuOpen && (
                <li className="flex justify-end">
                  <button
                    className="text-neutral-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <SidebarCloseIcon className="w-6 h-6" />
                  </button>
                </li>
              )}

              <li>
                <a
                  href="#home"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition duration-300 hover:scale-105"
                >
                  <HomeIcon className="w-5 h-5" /> Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition duration-300 hover:scale-105"
                >
                  <AlignHorizontalDistributeEndIcon className="w-5 h-5" /> About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition duration-300 hover:scale-105"
                >
                  <PenIcon className="w-5 h-5" /> Projects
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition duration-300 hover:scale-105"
                >
                  📝 Blogs
                </a>
              </li>
              <li>
                <a
                  href="#awards"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition duration-300 hover:scale-105"
                >
                  🏆 Awards
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Button & Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#ff5733] px-6 py-2 font-medium text-white transition-colors hover:bg-[#ff7a5c]"
            >
              Contact
            </a>
            <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
