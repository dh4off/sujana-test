"use client"

import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { HiMenu, HiX, HiHome, HiOutlineLightBulb, HiOutlineCog, HiOutlineMail } from "react-icons/hi"

const navItems = [
  { name: "Home", path: "/", icon: <HiHome className="inline-block mr-1 mb-0.5 text-lg" /> },
  { name: "Services", path: "/services", icon: <HiOutlineCog className="inline-block mr-1 mb-0.5 text-lg" /> },
  { name: "Contact Us", path: "/contact-us", icon: <HiOutlineMail className="inline-block mr-1 mb-0.5 text-lg" /> },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  // Set navbar text and background based on page
  const navText = isHome && !scrolled ? "text-white" : "text-black"
  const navBg = isHome && !scrolled ? "bg-transparent" : "bg-white shadow-md"
  const linkActive = isHome
    ? "border-b-2 border-yellow-400 text-yellow-400"
    : "border-b-2 border-yellow-400 text-yellow-500"
  const linkDefault = isHome
    ? "hover:text-yellow-400 border-b-2 border-transparent"
    : "hover:text-yellow-500 border-b-2 border-transparent"

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${navBg}`}>
      <nav className={`max-w-7xl mx-auto flex items-center justify-between px-4 py-6 md:py-8 ${navText}`}>
        {/* Logo */}
        <div className="font-extrabold text-2xl tracking-widest flex items-center select-none flex-shrink-0">
          <span className={isHome && !scrolled ? "text-white" : "text-black"}>IMAA</span>
          <span className="text-yellow-400 ml-1">MEDIA</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center flex-1 justify-center min-w-0">
          {navItems.map((item) => (
            <li key={item.path} className="flex items-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-2 py-1 font-semibold text-base transition-colors duration-200 border-b-2 ${
                    isActive ? linkActive : linkDefault
                  }`
                }
                end={item.path === "/"}
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        

        {/* Mobile Hamburger */}
        <button className="md:hidden ml-2 flex-shrink-0 z-50" onClick={() => setOpen(!open)}>
          {open
            ? <HiX size={28} className={isHome ? "text-white" : "text-black"} />
            : <HiMenu size={28} className={isHome ? "text-white" : "text-black"} />
          }
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden ${isHome ? "bg-black/90 text-white" : "bg-white text-black"} shadow-lg border-t border-gray-100`}>
          <ul className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-base transition-colors duration-200 border-b-2 ${
                      isActive ? linkActive : linkDefault
                    }`
                  }
                  end={item.path === "/"}
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
