"use client"

import { useState, useEffect } from "react"
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight, HiCheck, HiExclamation } from "react-icons/hi"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const contactInfo = [
  {
    icon: <HiMail className="text-yellow-400 text-2xl" />,
    label: "Email",
    value: "imaamedia101@gmail.com",
    href: "mailto:imaamedia101@gmail.com",
  }
]

const socialLinks = [
  { icon: <FaFacebook size={20} />, href: "#", label: "Facebook" },
  { icon: <FaInstagram size={20} />, href: "#", label: "Instagram" },
  { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn" },
]

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validateForm = () => {
    const newErrors = {}
    if (!formState.name.trim()) newErrors.name = "Name is required"
    if (!formState.email.trim()) newErrors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(formState.email)) newErrors.email = "Email is invalid"
    if (!formState.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate form submission
      setFormStatus({
        submitted: true,
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon.",
      })

      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } else {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Please fix the errors in the form.",
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-zinc-100 to-white">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 overflow-hidden bg-gradient-to-r from-gray-900 to-black animate-fade-in">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
          <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-yellow-400 font-medium mb-6 inline-block border border-white/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get in Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Let's <span className="text-yellow-400">Talk!</span>
          </h1>

          <p className="text-xl text-white/80 mb-6 font-medium max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Ready to dive into a world of tailored solutions? Reach out to us and let's make magic happen!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-2">
                  <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-12 text-white mb-6">
                    <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                    <p className="text-white/70">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className={`peer w-full border-2 ${
                            errors.name ? "border-red-400" : "border-gray-200"
                          } focus:border-yellow-400 rounded-lg outline-none bg-transparent py-3 px-4 placeholder-transparent transition-colors`}
                          placeholder="Your Name"
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-2 -top-2.5 bg-white px-2 text-sm transition-all ${
                            errors.name ? "text-red-400" : "text-gray-500 peer-focus:text-yellow-500"
                          }`}
                        >
                          Your Name
                        </label>
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <HiExclamation className="mr-1" /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className={`peer w-full border-2 ${
                            errors.email ? "border-red-400" : "border-gray-200"
                          } focus:border-yellow-400 rounded-lg outline-none bg-transparent py-3 px-4 placeholder-transparent transition-colors`}
                          placeholder="Your Email"
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-2 -top-2.5 bg-white px-2 text-sm transition-all ${
                            errors.email ? "text-red-400" : "text-gray-500 peer-focus:text-yellow-500"
                          }`}
                        >
                          Your Email
                        </label>
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <HiExclamation className="mr-1" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="peer w-full border-2 border-gray-200 focus:border-yellow-400 rounded-lg outline-none bg-transparent py-3 px-4 placeholder-transparent transition-colors"
                          placeholder="Subject (Optional)"
                        />
                        <label
                          htmlFor="subject"
                          className="absolute left-2 -top-2.5 bg-white px-2 text-sm text-gray-500 peer-focus:text-yellow-500"
                        >
                          Subject (Optional)
                        </label>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className={`peer w-full border-2 ${
                            errors.message ? "border-red-400" : "border-gray-200"
                          } focus:border-yellow-400 rounded-lg outline-none bg-transparent py-3 px-4 placeholder-transparent resize-none transition-colors`}
                          placeholder="Your Message"
                        />
                        <label
                          htmlFor="message"
                          className={`absolute left-2 -top-2.5 bg-white px-2 text-sm transition-all ${
                            errors.message ? "text-red-400" : "text-gray-500 peer-focus:text-yellow-500"
                          }`}
                        >
                          Your Message
                        </label>
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <HiExclamation className="mr-1" /> {errors.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {formStatus.submitted && (
                      <div
                        className={`mb-6 p-4 rounded-lg animate-fade-in ${
                          formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                        }`}
                      >
                        <div className="flex items-center">
                          {formStatus.success ? (
                            <HiCheck className="mr-2 text-green-500" />
                          ) : (
                            <HiExclamation className="mr-2 text-red-500" />
                          )}
                          {formStatus.message}
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg shadow hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center group"
                    >
                      Send Message
                      <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
                    alt="Contact"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 text-gray-700 hover:text-yellow-500 transition-all duration-300 p-3 rounded-lg hover:bg-yellow-50 group hover:translate-x-2"
                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                      >
                        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{info.label}</div>
                          <div className="font-medium">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 pt-3 border-t border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-110"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-3 border-t border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Email Notice */}
      <section className="w-full py-10 px-4 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-yellow-400">
            <div className="flex items-center justify-center mb-2">
              <HiExclamation className="text-yellow-500 text-xl mr-2" />
              <h3 className="font-semibold text-gray-900">Important Notice</h3>
            </div>
            <p className="text-gray-600">
              We are currently experiencing issues with our primary email. Please use{" "}
              <a href="mailto:imaamedia101@gmail.com" className="text-yellow-500 font-semibold hover:underline">
                imaamedia101@gmail.com
              </a>{" "}
              for all inquiries. Thank you for your patience!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
