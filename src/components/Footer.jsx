import { Link } from "react-router-dom"
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from "react-icons/hi"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-extrabold text-2xl tracking-widest mb-6">
              IMAA <span className="text-yellow-400">MEDIA</span>
            </div>
            <p className="text-gray-400 mb-6">
              We combine creativity, strategy, and technology to deliver exceptional results for our clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <HiArrowRight className="mr-2 text-yellow-400" size={14} />
                  Home
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 text-yellow-400" size={14} />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center"
                >
                  <HiArrowRight className="mr-2 text-yellow-400" size={14} />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <div className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <HiArrowRight className="mr-2 text-yellow-400" size={14} />
                  Digital Marketing
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <HiArrowRight className="mr-2 text-yellow-400" size={14} />
                  Web Development
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <HiArrowRight className="mr-2 text-yellow-400" size={14} />
                  Brand Strategy
                </div>
              </li>
              <li>
                <div className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
                  <HiArrowRight className="mr-2 text-yellow-400" size={14} />
                  Content Creation
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              
              <li className="flex items-center">
                <HiMail className="text-yellow-400 mr-3" size={20} />
                <span className="text-gray-400 cursor-pointer">imaamedia101@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} IMAA MEDIA. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
          </div>
        </div>
      </div>
    </footer>
  )
}
