import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ChevronRight, Star, CheckCircle, Home as HomeIcon } from 'lucide-react';

export default function FlooringServiceWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    location: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    { id: 1, name: 'SPC Flooring', category: 'Flooring', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=400&fit=crop&q=90', description: 'Durable and waterproof SPC flooring solutions' },
    { id: 2, name: 'LVT Flooring', category: 'Flooring', image: 'https://images.unsplash.com/photo-1577020525450-a9e62ae97a20?w=500&h=400&fit=crop&q=90', description: 'Luxury vinyl tile flooring' },
    { id: 3, name: 'Wall to Wall Carpet', category: 'Carpet', image: 'https://images.unsplash.com/photo-1551092918-d0198f91c39a?w=500&h=400&fit=crop&q=90', description: 'Premium wall to wall carpet installation' },
    { id: 4, name: 'Stair Carpet', category: 'Carpet', image: 'https://images.unsplash.com/photo-1559028615-cd4628902d4a?w=500&h=400&fit=crop&q=90', description: 'Professional stair carpet services' },
    { id: 5, name: 'Artificial Grass', category: 'Flooring', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&q=90', description: 'Realistic artificial grass installation' },
    { id: 6, name: 'Corridor Rugs', category: 'Rugs', image: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?w=500&h=400&fit=crop&q=90', description: 'Beautiful corridor and hallway rugs' },
    { id: 7, name: 'Solid Wood Flooring', category: 'Flooring', image: 'https://images.unsplash.com/photo-1616007613009-ab7e26172454?w=500&h=400&fit=crop&q=90', description: 'Authentic solid wood flooring' },
    { id: 8, name: 'Epoxy Flooring', category: 'Flooring', image: 'https://images.unsplash.com/photo-1565638539571-99213be34a0f?w=500&h=400&fit=crop&q=90', description: 'Industrial epoxy flooring solutions' },
    { id: 9, name: 'Artificial Turf', category: 'Flooring', image: 'https://images.unsplash.com/photo-1566612394343-c5a63f45e590?w=500&h=400&fit=crop&q=90', description: 'Premium artificial turf' },
    { id: 10, name: 'Shaggy Rugs', category: 'Rugs', image: 'https://images.unsplash.com/photo-1584622281867-8a748c1b8e13?w=500&h=400&fit=crop&q=90', description: 'Luxurious shaggy rugs' },
    { id: 11, name: 'Kids Room Flooring', category: 'Flooring', image: 'https://images.unsplash.com/photo-1616003325521-2e066f63b3bc?w=500&h=400&fit=crop&q=90', description: 'Safe and fun kids room flooring' },
    { id: 12, name: 'Parquet Flooring', category: 'Flooring', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=400&fit=crop&q=90', description: 'Classic parquet flooring designs' },
  ];

  const curtains = [
    { name: 'Blackout Curtains', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=400&fit=crop&q=90', description: 'Complete light blocking curtains' },
    { name: 'Sheer Curtains', image: 'https://images.unsplash.com/photo-1566612394343-c5a63f45e590?w=500&h=400&fit=crop&q=90', description: 'Elegant sheer curtain solutions' },
    { name: 'Venetian Blinds', image: 'https://images.unsplash.com/photo-1566612394343-c5a63f45e590?w=500&h=400&fit=crop&q=90', description: 'Modern venetian blind styles' },
    { name: 'Roller Blinds', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=400&fit=crop&q=90', description: 'Practical roller blind systems' },
  ];

  const projects = [
    { name: 'Gym Flooring', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=90' },
    { name: 'SPC Flooring Installation', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop&q=90' },
    { name: 'Kids Room Design', image: 'https://images.unsplash.com/photo-1616003325521-2e066f63b3bc?w=600&h=400&fit=crop&q=90' },
    { name: 'Epoxy Flooring Project', image: 'https://images.unsplash.com/photo-1565638539571-99213be34a0f?w=600&h=400&fit=crop&q=90' },
    { name: 'Parquet Installation', image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=400&fit=crop&q=90' },
    { name: 'Luxury Wood Flooring', image: 'https://images.unsplash.com/photo-1616007613009-ab7e26172454?w=600&h=400&fit=crop&q=90' },
  ];

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ fullName: '', phone: '', email: '', serviceType: '', location: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = "Hello, I want flooring service.";
    window.open(`https://wa.me/923198303393?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderHome = () => (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Get Premium Flooring Dubai</h1>
            <p className="text-xl text-slate-300 mb-8">Professional flooring installation services in Dubai including SPC flooring, parquet flooring, vinyl flooring, carpets, rugs, curtains and blinds.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setCurrentPage('booking')} className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition">
                Book A Free Consultation
              </button>
              <button onClick={() => setCurrentPage('flooring')} className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-bold hover:bg-yellow-500 hover:text-slate-900 transition">
                View Services
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90" alt="Flooring" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Fast Installation', desc: 'Quick and efficient' },
              { title: 'Free Measurement', desc: 'No hidden charges' },
              { title: 'Professional Team', desc: 'Experienced experts' },
              { title: 'Affordable Rates', desc: 'Best prices' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center hover:scale-105">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map(service => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 cursor-pointer">
                <div className="h-40 overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-yellow-600 text-sm font-semibold mb-2">{service.category}</p>
                  <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setCurrentPage('flooring')} className="bg-yellow-500 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
              View All Services
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Recent Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
                <div className="h-56 overflow-hidden relative">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition">{project.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderFlooring = () => (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Flooring Services</h1>
        <p className="text-xl text-slate-600 mb-12">Premium flooring solutions for your home and business</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.filter(s => s.category === 'Flooring').map(service => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="h-40 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <button onClick={() => setCurrentPage('booking')} className="w-full bg-yellow-500 text-slate-900 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCarpet = () => (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Carpet Services</h1>
        <p className="text-xl text-slate-600 mb-12">Premium carpet installation and solutions</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.filter(s => s.category === 'Carpet').map(service => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="h-40 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <button onClick={() => setCurrentPage('booking')} className="w-full bg-yellow-500 text-slate-900 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRugs = () => (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Rugs Services</h1>
        <p className="text-xl text-slate-600 mb-12">Beautiful rugs for every space</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.filter(s => s.category === 'Rugs').map(service => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="h-40 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <button onClick={() => setCurrentPage('booking')} className="w-full bg-yellow-500 text-slate-900 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurtains = () => (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Curtains & Blinds</h1>
        <p className="text-xl text-slate-600 mb-12">Premium window treatments and solutions</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {curtains.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="h-40 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                <button onClick={() => setCurrentPage('booking')} className="w-full bg-yellow-500 text-slate-900 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-8">About Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90" alt="About" className="rounded-2xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Premium Flooring Dubai</h2>
            <p className="text-slate-600 mb-4 text-lg">We are a professional flooring and interior services company dedicated to transforming spaces with premium quality products and expert installation.</p>
            <p className="text-slate-600 mb-4 text-lg">With years of experience in the industry, we provide top-notch flooring solutions including SPC, LVT, parquet, carpet installation, and window treatments.</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Choose Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" /> Professional and experienced team</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" /> High-quality materials</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" /> Free consultation and measurement</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" /> Competitive pricing</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-yellow-500" /> Quick turnaround time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-500" size={28} />
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">+923198303393</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-500" size={28} />
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-slate-600">m.ali51214g@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-500" size={28} />
                <div>
                  <p className="font-semibold text-slate-900">Location</p>
                  <p className="text-slate-600">Dubai, UAE</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-yellow-500 transition bg-slate-100 p-3 rounded-full"><Facebook size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-yellow-500 transition bg-slate-100 p-3 rounded-full"><Instagram size={24} /></a>
              <button onClick={handleWhatsApp} className="text-slate-900 hover:text-yellow-500 transition bg-slate-100 p-3 rounded-full"><MessageCircle size={24} /></button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-slate-900 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBooking = () => (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-800 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Book Free Consultation</h2>
        <form onSubmit={handleFormSubmit} className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
          {formSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-3">
              <CheckCircle size={24} />
              Thank you! We will contact you soon.
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="">Select Service Type</option>
              <option value="SPC Flooring">SPC Flooring</option>
              <option value="LVT Flooring">LVT Flooring</option>
              <option value="Carpet">Carpet Installation</option>
              <option value="Rugs">Rugs</option>
              <option value="Curtains">Curtains</option>
              <option value="Blinds">Blinds</option>
              <option value="Other">Other Services</option>
            </select>
          </div>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleFormChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6"
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleFormChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-6 h-32 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-slate-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
          >
            Book Free Consultation
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-yellow-500 text-slate-900 py-3 text-center font-semibold sticky top-0 z-50">
        Hire Floor Team & Get 10% OFF for Limited Time
      </div>

      <header className="bg-white shadow-lg sticky top-12 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-slate-900 hover:text-yellow-500 transition">
              Premium Flooring Dubai
            </button>
            
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => setCurrentPage('home')} className="text-slate-700 hover:text-yellow-500 transition font-medium">Home</button>
              <button onClick={() => setCurrentPage('flooring')} className="text-slate-700 hover:text-yellow-500 transition font-medium">Flooring</button>
              <button onClick={() => setCurrentPage('carpet')} className="text-slate-700 hover:text-yellow-500 transition font-medium">Carpet</button>
              <button onClick={() => setCurrentPage('rugs')} className="text-slate-700 hover:text-yellow-500 transition font-medium">Rugs</button>
              <button onClick={() => setCurrentPage('curtains')} className="text-slate-700 hover:text-yellow-500 transition font-medium">Curtains & Blinds</button>
              <button onClick={() => setCurrentPage('about')} className="text-slate-700 hover:text-yellow-500 transition font-medium">About Us</button>
              <button onClick={() => setCurrentPage('contact')} className="text-slate-700 hover:text-yellow-500 transition font-medium">Contact</button>
              <button onClick={() => setCurrentPage('booking')} className="bg-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                Hire Floor Team
              </button>
            </nav>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
              <button onClick={() => {setCurrentPage('home'); setMenuOpen(false);}} className="block w-full text-left text-slate-700 hover:text-yellow-500 transition font-medium py-2">Home</button>
              <button onClick={() => {setCurrentPage('flooring'); setMenuOpen(false);}} className="block w-full text-left text-slate-700 hover:text-yellow-500 transition font-medium py-2">Flooring</button>
              <button onClick={() => {setCurrentPage('carpet'); setMenuOpen(false);}} className="block w-full text-left text-slate-700 hover:text-yellow-500 transition font-medium py-2">Carpet</button>
              <button onClick={() => {setCurrentPage('rugs'); setMenuOpen(false);}} className="block w-full text-left text-slate-700 hover:text-yellow-500 transition font-medium py-2">Rugs</button>
              <button onClick={() => {setCurrentPage('curtains'); setMenuOpen(false);}} className="block w-full text-left text-slate-700 hover:text-yellow-500 transition font-medium py-2">Curtains & Blinds</button>
              <button onClick={() => {setCurrentPage('about'); setMenuOpen(false);}} className="block w-full text-left text-slate-700 hover:text-yellow-500 transition font-medium py-2">About Us</button>
              <button onClick={() => {setCurrentPage('contact'); setMenuOpen(false);}} className="block w-full text-left text-slate-700 hover:text-yellow-500 transition font-medium py-2">Contact</button>
              <button onClick={() => {setCurrentPage('booking'); setMenuOpen(false);}} className="block w-full bg-yellow-500 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">Hire Floor Team</button>
            </div>
          )}
        </div>
      </header>

      {currentPage === 'home' && renderHome()}
      {currentPage === 'flooring' && renderFlooring()}
      {currentPage === 'carpet' && renderCarpet()}
      {currentPage === 'rugs' && renderRugs()}
      {currentPage === 'curtains' && renderCurtains()}
      {currentPage === 'about' && renderAbout()}
      {currentPage === 'contact' && renderContact()}
      {currentPage === 'booking' && renderBooking()}

      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Premium Flooring Dubai</h3>
              <p className="text-slate-300">Professional flooring and interior services in Dubai.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-yellow-500 transition">Home</button></li>
                <li><button onClick={() => setCurrentPage('flooring')} className="hover:text-yellow-500 transition">Services</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-yellow-500 transition">About</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-yellow-500 transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li><button onClick={() => setCurrentPage('flooring')} className="hover:text-yellow-500 transition">Flooring</button></li>
                <li><button onClick={() => setCurrentPage('carpet')} className="hover:text-yellow-500 transition">Carpet</button></li>
                <li><button onClick={() => setCurrentPage('rugs')} className="hover:text-yellow-500 transition">Rugs</button></li>
                <li><button onClick={() => setCurrentPage('curtains')} className="hover:text-yellow-500 transition">Curtains & Blinds</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone size={20} /> +923198303393
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={20} /> m.ali51214g@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} /> Dubai, UAE
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-500 transition"><Facebook size={24} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-yellow-500 transition"><Instagram size={24} /></a>
                <button onClick={handleWhatsApp} className="text-slate-300 hover:text-yellow-500 transition"><MessageCircle size={24} /></button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-300">
            <p>&copy; 2026 Premium Flooring Dubai. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-2xl hover:bg-green-600 transition animate-pulse z-50"
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}
