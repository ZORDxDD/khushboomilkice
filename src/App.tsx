import React from 'react';
import { IceCream, Star, Award, Phone, Mail, MapPin} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"


function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/pv32Z19T/Screenshot-2025-03-09-132321.png?auto=format&fit=crop&q=80"
            alt="Ice cream background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-8 py-6">
          <div className="flex items-center gap-2">
            <IceCream className="w-8 h-8 text-pink-400" />
            <span className="text-2xl font-bold text-white">Khushboo Milk Ice</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-white">
            <a href="#home" className="hover:text-pink-400 transition">Home</a>
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <button onClick={() => navigate('/flavors')} className="hover:text-pink-400 transition">Flavors</button>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Indulge in Pure Happiness
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Experience the magic of handcrafted ice cream made with love and the finest ingredients
          </p>
          <button 
            onClick={() => navigate('/flavors')}
            className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"
          >
            Explore Our Flavors
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Star className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Made with the finest ingredients and love</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <IceCream className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unique Flavors</h3>
            <p className="text-gray-600">Discover our signature creations</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Award className="w-12 h-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognized for excellence</p>
          </div>
        </div>
      </section>

      {/* Popular Flavors */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Popular Flavors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vanilla Bean Dream",
                image: "https://i.ibb.co/TD3nY9pJ/00643755-A-Single-Scoop-of-Vanilla-Ice-Cream.jpg",
                price: "₹40"
              },
              {
                name: "ButterScotch Fudge",
                image: "https://i.ibb.co/x8HT0YxR/84014919.jpg?auto=format&fit=crop&q=80",
                price: "₹50"
              },
              {
                name: "Chocolate Bliss",
                image: "https://i.ibb.co/b5kLR3Gr/Chocolate-Ice-Cream.jpg",
                price: "₹45"
              }
            ].map((flavor, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={flavor.image} alt={flavor.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{flavor.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-pink-500" />
                <span>+91 9155013333</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-pink-500" />
                <span>query.khushboomilkice@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-pink-500" />
                <span>Near Milan Hotel, Muramkalan, Ramgarh, Jharkhand-829122</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <IceCream className="w-6 h-6 text-pink-400" />
                <span className="text-xl font-bold">Khushboo Milk Ice</span>
              </div>
              <p className="text-gray-400">Bringing smiles with every scoop since 2005</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><button onClick={() => navigate('/flavors')} className="text-gray-400 hover:text-white transition">Flavors</button></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 10AM - 10PM</li>
                <li>Saturday: 11AM - 11PM</li>
                <li>Sunday: 11AM - 9PM</li>
              </ul>
            </div>
            <div>
              {/* <h4 className="text-lg font-semibold mb-4">Follow Us</h4> */}
              {/* <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </div> */}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Khushboo Milk Ice. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;