"use client"

import { useEffect, useRef, useState } from "react"
import { HiArrowRight, HiChevronDown, HiCheck, HiStar } from "react-icons/hi"
import { RiCustomerService2Line, RiComputerLine, RiAdvertisementLine, RiLayoutLine } from "react-icons/ri"

const features = [
  {
    title: "Deliver On Time",
    desc: "Timeliness is our promise. Our dedicated team ensures your project is completed to perfection and delivered precisely when you need it.",
    icon: "⏰",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Increased Reach",
    desc: "Visibility reigns supreme. We sculpt tailored strategies to magnify your brand's resonance and unite you with your ideal audience.",
    icon: "📈",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Increased Revenue",
    desc: "Unlock the path to heightened earnings with our tailored solutions, designed to maximize your revenue potential effortlessly.",
    icon: "💰",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
]

const services = [
  {
    title: "Social Media Marketing",
    icon: <RiCustomerService2Line className="text-white" />,
    description: "Strategic social media management and advertising to boost your brand's online presence.",
  },
  {
    title: "Creative Studio",
    icon: <RiComputerLine className="text-white" />,
    description: "Professional content creation, graphic design, and video editing services.",
  },
  {
    title: "Digital Advertising",
    icon: <RiAdvertisementLine className="text-white" />,
    description: "Comprehensive digital marketing campaigns and brand development strategies.",
  },
  {
    title: "Website Designing",
    icon: <RiLayoutLine className="text-white" />,
    description: "Modern website design and development with SEO optimization and maintenance.",
  },
]

const testimonials = [
  {
    quote:
      "IMAA MEDIA transformed our online presence completely. Our engagement has increased by 300% since working with them.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "The team's creativity and strategic approach to our marketing challenges yielded results beyond our expectations.",
    author: "Michael Chen",
    position: "Marketing Director, Novus Brands",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "Their attention to detail and commitment to delivering on time made all the difference for our launch campaign.",
    author: "Emma Rodriguez",
    position: "Founder, EcoStyle",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
]

const stats = [
  { label: "Projects Completed", value: "250+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Team Members", value: "45" },
  { label: "Years of Experience", value: "12+" },
]

const clients = [
  { name: "Company 1", logo: "https://via.placeholder.com/150x80?text=Client+Logo" },
  { name: "Company 2", logo: "https://via.placeholder.com/150x80?text=Client+Logo" },
  { name: "Company 3", logo: "https://via.placeholder.com/150x80?text=Client+Logo" },
  { name: "Company 4", logo: "https://via.placeholder.com/150x80?text=Client+Logo" },
  { name: "Company 5", logo: "https://via.placeholder.com/150x80?text=Client+Logo" },
  { name: "Company 6", logo: "https://via.placeholder.com/150x80?text=Client+Logo" },
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Testimonial rotation
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-20 text-white max-w-6xl mx-auto">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

          <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-yellow-400 font-medium mb-6 border border-white/20 animate-fade-in-down">
            Digital Solutions for Modern Businesses
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight text-center animate-fade-in-up">
            Elevate Your Brand with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              IMAA MEDIA
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto text-center leading-relaxed animate-fade-in-up animation-delay-300">
            Digital success stories start here. Social media, web design, SEO, and more—crafted for your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-500">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
             >
              Let's Work Together
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Explore Services
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce animation-duration-2000 animation-delay-1000"
            aria-label="Scroll to about section"
          >
            <HiChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="px-4 py-1.5 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium animate-fade-in-left animation-delay-300">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white animate-fade-in-left">
                Digital Excellence, <br />
                <span className="text-yellow-400">Delivered Daily</span>
              </h2>

              <div className="space-y-6 text-gray-300 animate-fade-in-left animation-delay-500">
                <p>
                  IMAA MEDIA is a full-service digital agency dedicated to elevating brands through innovative
                  strategies and cutting-edge solutions.
                </p>
                <p>
                  With a passion for creativity and a commitment to results, we partner with businesses of all sizes to
                  achieve their digital goals and make a lasting impact in their industries.
                </p>

                <div className="pt-4 space-y-3">
                  {["Strategic Thinking", "Creative Excellence", "Technical Expertise", "Result Oriented"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className="flex items-center animate-fade-in-left"
                        style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                      >
                        <div className="bg-yellow-400 rounded-full p-1 mr-3">
                          <HiCheck className="w-4 h-4 text-black" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>

                <div className="pt-4">
                 
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-right">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 p-1 rounded-xl overflow-hidden shadow-xl transform translate-y-8">
                      <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80"
                        alt="Team collaboration"
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 p-1 rounded-xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
                        alt="Digital marketing"
                        className="rounded-lg w-full h-32 object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 p-1 rounded-xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80"
                        alt="Creative process"
                        className="rounded-lg w-full h-32 object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 p-1 rounded-xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80"
                        alt="Digital strategy"
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium animate-fade-in-down">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white animate-fade-in-down animation-delay-200">
              Our Core Features
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-down animation-delay-400">
              We combine creativity, strategy, and technology to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl h-full transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.img || "/placeholder.svg"}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end justify-between p-6">
                      <span className="text-4xl animate-float">{feature.icon}</span>
                      <span className="bg-yellow-400 text-black text-xs font-semibold px-2.5 py-1 rounded-full">
                        Core Feature
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.desc}</p>

                    <div className="mt-6 pt-4 border-t border-gray-700/50">
                      <a
                        href="#"
                        className="inline-flex items-center text-yellow-400 font-medium hover:text-yellow-300 transition-colors group/link"
                      >
                        Learn more
                        <HiArrowRight className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-amber-500/10 text-amber-300 rounded-full text-sm font-medium animate-fade-in-down">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white animate-fade-in-down animation-delay-200">
              Our Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in-down animation-delay-400">
              Comprehensive digital solutions designed to boost your brand's online presence and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30 hover:border-amber-400/30 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-amber-400/10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-amber-500/10 transition-all duration-300 border border-white/20 group"
            >
              View All Services
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium animate-fade-in-down">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-white animate-fade-in-down animation-delay-200">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative h-[26rem] md:h-80">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === activeTestimonial
                    ? "opacity-100 translate-x-0 z-10"
                    : i < activeTestimonial
                      ? "opacity-0 -translate-x-full z-0"
                      : "opacity-0 translate-x-full z-0"
                }`}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 h-full flex flex-col md:flex-row items-center gap-8">
                  <div className="shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400/30 shadow-xl">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <HiStar key={i} className="text-yellow-400 w-6 h-6" />
                        ))}
                    </div>
                    <p className="text-gray-300 text-lg italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === activeTestimonial ? "bg-yellow-400" : "bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}
