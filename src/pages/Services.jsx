"use client"

import { useState, useEffect } from "react"
import { HiArrowRight, HiCheck, HiPlus } from "react-icons/hi"
import { RiCustomerService2Line, RiComputerLine, RiAdvertisementLine, RiLayoutLine } from "react-icons/ri"

const services = [
  {
    title: "Social Media Marketing",
    icon: <RiCustomerService2Line />,
    description: "Grow your audience and engagement with strategic social campaigns.",
    bullets: [
      "Content creation & scheduling",
      "Audience analytics",
      "Brand voice development",
      "Influencer partnerships"
    ]
  },
  {
    title: "Creative Studio",
    icon: <RiComputerLine />,
    description: "Stunning visuals, graphics, and videos to elevate your brand.",
    bullets: [
      "Logo & brand design",
      "Video production",
      "Motion graphics",
      "Photography"
    ]
  },
  {
    title: "Digital Advertising",
    icon: <RiAdvertisementLine />,
    description: "Targeted ads that drive real results across platforms.",
    bullets: [
      "Google & Meta ads",
      "Retargeting campaigns",
      "A/B testing",
      "Performance reporting"
    ]
  },
  {
    title: "Website Designing",
    icon: <RiLayoutLine />,
    description: "Modern, responsive websites that convert visitors into customers.",
    bullets: [
      "UI/UX design",
      "SEO optimization",
      "E-commerce solutions",
      "Maintenance & support"
    ]
  }
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-zinc-100 to-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-r from-gray-900 to-black animate-fade-in">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        <div className="absolute h-full w-full bg-gradient-to-b from-black/0 via-black/0 to-black/80" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-yellow-400 font-medium mb-6 inline-block border border-white/20">
            Expert Solutions for Your Business
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight animate-fade-in">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 font-medium max-w-2xl mx-auto animate-fade-in">
            Our expert team offers savvy solutions at unbeatable rates. Explore our comprehensive range of services
            designed to elevate your brand.
          </p>
        </div>
      </section>

      
      {/* Services Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 bg-amber-100 text-amber-600 rounded-full text-sm font-medium">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to boost your brand's online presence and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.2 + i * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="flex flex-col items-center p-8 pb-0">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl text-amber-500">{service.icon}</span>
                  </div>
                  <h3 className="font-bold text-2xl mb-2 text-gray-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </p>
                </div>
                <div className="px-8 pb-8">
                  <ul className="space-y-3 mb-6">
                    {service.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start animate-fade-in"
                        style={{ animationDelay: `${0.3 + j * 0.1}s`, animationFillMode: 'both' }}
                      >
                        <span className="bg-amber-100 text-amber-600 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                          <HiCheck className="w-4 h-4" />
                        </span>
                        <span className="text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setActiveService(activeService === i ? null : i)}
                    className="inline-flex items-center font-medium text-amber-600 hover:text-amber-700 transition-colors group/btn px-4 py-2 rounded-full border border-amber-100 bg-amber-50 hover:bg-amber-100 shadow-sm"
                  >
                    {activeService === i ? "View Less" : "Learn More"}
                    <HiArrowRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  {activeService === i && (
                    <div className="mt-6 pt-4 border-t border-gray-100 animate-fade-in">
                      <p className="text-gray-600">
                        Our {service.title} service is designed to help your business thrive in the digital landscape. With our expert team and proven strategies, we deliver exceptional results that drive growth and increase your brand's visibility.
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">Starting from</span>
                        <span className="font-bold text-xl text-amber-600">$499</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Our Approach
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">How We Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our streamlined process ensures we deliver exceptional results every time.
            </p>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Discovery", desc: "We learn about your business goals and challenges" },
              { number: "02", title: "Strategy", desc: "We develop a tailored plan to achieve your objectives" },
              { number: "03", title: "Execution", desc: "We implement the strategy with precision and creativity" },
              { number: "04", title: "Results", desc: "We measure success and optimize for continuous improvement" },
            ].map((step, i) => (
              <div
                key={step.number}
                className="relative animate-fade-in"
                style={{ animationDelay: `${0.2 + i * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  <div className="text-5xl font-bold text-yellow-400/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <HiArrowRight className="w-8 h-8 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to transform your digital presence?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center bg-black text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 text-lg group"
            >
              Get a Free Consultation
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Questions & Answers
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find answers to common questions about our services.</p>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full mt-6" />
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What makes your services different from other agencies?",
                a: "We combine creativity, strategy, and data-driven insights to deliver tailored solutions that drive real results. Our team of experts works closely with you to understand your unique needs and goals.",
              },
              {
                q: "How long does it typically take to see results?",
                a: "While timelines vary based on the service and your specific goals, most clients begin to see measurable results within 30-60 days. We provide regular reports and updates to track progress.",
              },
              {
                q: "Do you offer packages or custom solutions?",
                a: "We offer both standardized packages and fully customized solutions. During our initial consultation, we'll help determine which approach best suits your needs and budget.",
              },
              {
                q: "How do you measure success?",
                a: "We establish clear KPIs at the beginning of each project and provide regular reporting on these metrics. Our focus is always on delivering measurable ROI for your business.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${0.2 + i * 0.2}s`, animationFillMode: 'both' }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-900">{faq.q}</h3>
                  <span className="bg-yellow-100 rounded-full p-1 text-yellow-700">
                    <HiPlus className="w-4 h-4" />
                  </span>
                </div>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
