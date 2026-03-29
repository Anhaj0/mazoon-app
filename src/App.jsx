import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, HardHat, Truck, ShieldCheck, Wrench, Building2, Pickaxe } from 'lucide-react';
import logoImg from './assets/LOGO.jpeg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Equipment', 'Clients', 'Contact'];

  // Data Extracted from PDF
  const services = [
    { title: "Equipment Rental", icon: <Truck size={32} />, desc: "Modern fleet of excavators, bulldozers, loaders, cranes, and trucks. Flexible rental options." },
    { title: "Civil Construction", icon: <Building2 size={32} />, desc: "Residential, commercial, and industrial construction, plus comprehensive infrastructure development." },
    { title: "Excavation & Compaction", icon: <Pickaxe size={32} />, desc: "Safe excavation, accurate backfilling, professional ground leveling, and strict compaction services." },
    { title: "Asphalt Services", icon: <MapPin size={32} />, desc: "Design, installation, and maintenance of asphalt surfaces for roads, highways, and parking lots." },
    { title: "Fencing", icon: <ShieldCheck size={32} />, desc: "Galvanized, PVC coated, Aluminum, Mesh, Heavy Duty, and Stainless Steel chain link fencing." },
    { title: "Logistics", icon: <Truck size={32} />, desc: "Heavy-duty trucks and specialized carriers for secure delivery of construction materials." },
    { title: "Professional Manpower", icon: <HardHat size={32} />, desc: "Qualified engineers, safety officers, equipment operators, and skilled laborers." },
    { title: "Industry Material Supply", icon: <Wrench size={32} />, desc: "Supply of pipes, cement, aggregates, fencing, cables, and safety gear." }
  ];

  const equipment = [
    { no: "1", desc: "Hydraulic Excavator", model: "30-35 Ton", qty: "2" },
    { no: "2", desc: "Hydraulic Excavator", model: "20-25 Ton", qty: "13" },
    { no: "3", desc: "Backhoe Loader", model: "1.0-1.2 m³", qty: "3" },
    { no: "4", desc: "Crawler Dozer", model: "CAT D8R", qty: "10" },
    { no: "5", desc: "Crawler Dozer", model: "CAT D9", qty: "2" },
    { no: "6", desc: "Wheel Loader", model: "CAT 966 / 3.5-4.0 m³", qty: "8" },
    { no: "7", desc: "Wheel Loader", model: "CAT 980 / 4.5-5.5 m³", qty: "2" },
    { no: "8", desc: "Dump Truck", model: "16 CBM", qty: "14" },
    { no: "9", desc: "Dump Truck", model: "24 CBM", qty: "21" },
    { no: "10", desc: "Motor Grader", model: "CAT 14H", qty: "2" },
    { no: "11", desc: "Vibratory Roller (Smooth Drum)", model: "10-12 Ton", qty: "2" },
    { no: "12", desc: "Padfoot Roller", model: "12-15 Ton", qty: "1" },
    { no: "13", desc: "Trencher", model: "-", qty: "1" },
    { no: "14", desc: "Water Tanker", model: "16,000 L", qty: "2" },
    { no: "15", desc: "Water Tanker", model: "32,000 L", qty: "5" },
    { no: "16", desc: "Fuel Tanker", model: "8,000 L", qty: "1" }
  ];

  const clients = ["Saudi Aramco", "SABIC", "Nesma & Partners", "Marafiq", "SISCO", "Saudi Arabia Railways", "SINOPEC", "Arabian Drilling", "China Harbour", "Schlumberger", "Doosan", "Saipem", "Halliburton", "Samsung"];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50 border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('Home')}>
              <img src={logoImg} alt="Mazoon Al-Suhub Logo" className="h-16 w-auto" />
              <div className="ml-3 hidden sm:block">
                <h1 className="text-xl font-bold text-blue-900 tracking-tight uppercase">Mazoon Al-Suhub</h1>
                <p className="text-xs text-yellow-600 font-semibold tracking-widest uppercase">General Contracting Est.</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-blue-900 hover:text-yellow-600 hover:bg-gray-50 px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-blue-900 hover:text-yellow-600 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-white hover:text-yellow-500 block px-3 py-2 text-base font-bold uppercase w-full text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HOME / HERO */}
      <section id="Home" className="relative pt-20 h-screen flex items-center justify-center bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1541888086925-920a0b221008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Heavy Construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-yellow-500 font-bold tracking-[0.3em] uppercase mb-4">Saudi Vision 2030 Contracting</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight mb-6">
            Industrial Solutions & Heavy Civil Construction
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Delivering high-quality earth-moving, infrastructure services, and heavy equipment rental across the Kingdom of Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => scrollTo('Services')} className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 uppercase tracking-wider border-2 border-yellow-500 transition-colors">
              Our Services
            </button>
            <button onClick={() => scrollTo('Contact')} className="bg-transparent hover:bg-blue-800 text-white font-bold py-4 px-8 uppercase tracking-wider border-2 border-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="About" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-2">About Us</h2>
              <h3 className="text-3xl font-extrabold text-blue-900 uppercase mb-6">Built on Reliability & Performance</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Mazoon Al-Suhub General Contracting Establishment was established with the objective of delivering high-quality civil, earth-moving, and infrastructure services across the Kingdom of Saudi Arabia. Headquartered in Al-Ahsa (Hofuf).
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our operations are supported by a well-maintained fleet of heavy equipment, an in-house workshop, and a skilled technical and operational team, enabling us to respond efficiently to project demands and minimize downtime.
              </p>
              <div className="bg-blue-900 text-white p-6 border-l-4 border-yellow-500">
                <h4 className="font-bold uppercase mb-2">Our Core Values</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center"><ChevronRight size={16} className="text-yellow-500 mr-1"/> Integrity & Transparency</li>
                  <li className="flex items-center"><ChevronRight size={16} className="text-yellow-500 mr-1"/> Client Focus</li>
                  <li className="flex items-center"><ChevronRight size={16} className="text-yellow-500 mr-1"/> Sustainability & Safety First</li>
                  <li className="flex items-center"><ChevronRight size={16} className="text-yellow-500 mr-1"/> Teamwork</li>
                  <li className="flex items-center"><ChevronRight size={16} className="text-yellow-500 mr-1"/> Quality & Reliability</li>
                  <li className="flex items-center"><ChevronRight size={16} className="text-yellow-500 mr-1"/> Continuous Improvement</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold text-blue-900 uppercase mb-3 border-b-2 border-yellow-500 inline-block pb-1">Vision</h4>
                <p className="text-gray-600">To be a trusted and reliable contracting partner delivering value-driven construction and industrial support services through long-term client relationships and operational excellence.</p>
              </div>
              <div className="bg-white p-8 shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold text-blue-900 uppercase mb-3 border-b-2 border-yellow-500 inline-block pb-1">Mission</h4>
                <p className="text-gray-600">To achieve sustainable growth by providing safe, high-quality, and efficient services while maximizing value for our clients, partners, and stakeholders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="Services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-2">What We Do</h2>
            <h3 className="text-3xl font-extrabold text-blue-900 uppercase">Our Services</h3>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 p-8 hover:border-yellow-500 hover:shadow-md transition-all group">
                <div className="text-blue-900 mb-6 group-hover:text-yellow-600 transition-colors">
                  {srv.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-900 uppercase mb-3">{srv.title}</h4>
                <p className="text-gray-600 text-sm">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS / REGIONS */}
      <section id="Projects" className="py-20 bg-blue-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Blueprint" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-2">Operations</h2>
              <h3 className="text-3xl font-extrabold uppercase mb-6">Kingdom-Wide Reach</h3>
              <p className="text-gray-300 mb-6">
                With extensive experience supporting projects in road works, excavation, backfilling & compaction, fencing works, cable-laying, leveling, industrial support, and heavy equipment rental, we have successfully contributed to projects across the Kingdom.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Riyadh", "Jubail", "Jizan", "Dammam", "Hofuf (Al-Ahsa)"].map(city => (
                  <span key={city} className="bg-blue-800 border border-blue-700 py-2 px-4 text-sm font-bold uppercase">{city}</span>
                ))}
              </div>
            </div>
            <div className="bg-white text-blue-900 p-8 border-t-4 border-yellow-500">
              <h4 className="text-xl font-bold uppercase mb-4">Business Approach</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Mazoon Al-Suhub Est. operates in alignment with Saudi Aramco standards, regulatory requirements, and recognized industry best practices.
              </p>
              <ul className="space-y-2 text-sm font-semibold">
                <li className="flex items-center"><ChevronRight size={16} className="text-yellow-600 mr-2"/> Strict HSE Requirements</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-yellow-600 mr-2"/> Permit-to-Work Systems</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-yellow-600 mr-2"/> Quality Control Measures</li>
                <li className="flex items-center"><ChevronRight size={16} className="text-yellow-600 mr-2"/> Disciplined Management Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="Equipment" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-2">Fleet Details</h2>
            <h3 className="text-3xl font-extrabold text-blue-900 uppercase">Our Equipment Fleet</h3>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Powering Projects with Reliability & Scale. Maintained by our dedicated 2,450 SQM workshop in Al-Ahsa Industrial Area.</p>
          </div>
          
          <div className="overflow-x-auto bg-white border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider w-16">S.No</th>
                  <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Equipment Description</th>
                  <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Model / Capacity</th>
                  <th className="px-6 py-4 font-bold uppercase text-sm tracking-wider">Quantity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {equipment.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-500">{item.no}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-sm font-semibold text-blue-900">{item.desc}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">{item.model}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-900 font-bold">{item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="Clients" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-2">Trust & Partnerships</h2>
            <h3 className="text-3xl font-extrabold text-blue-900 uppercase">Our Clients</h3>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mt-4"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 px-6 py-4 text-center text-blue-900 font-bold uppercase tracking-wider text-sm w-48 hover:border-yellow-500 hover:bg-blue-900 hover:text-white transition-all">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <section id="Contact" className="bg-blue-900 text-white border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src={logoImg} alt="Mazoon Logo" className="h-20 w-auto mb-6 bg-white p-2" />
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Delivering high-quality civil, earth-moving, and infrastructure services across the Kingdom of Saudi Arabia.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold uppercase mb-6 text-yellow-500">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="text-yellow-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">Al-Ahsa (Hofuf)<br />Kingdom of Saudi Arabia</span>
                </li>
                <li className="flex items-center">
                  <Phone className="text-yellow-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-300 font-mono">+966 53 441 9918<br/>+966 5 1968 9797</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-yellow-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-300">mohamed@mazoon-ksa.com<br/>info@mazoon-ksa.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold uppercase mb-6 text-yellow-500">Quick Inquiry</h4>
              <form className="space-y-3">
                <input type="text" placeholder="Name" className="w-full bg-blue-800 border border-blue-700 text-white px-4 py-2 focus:outline-none focus:border-yellow-500 placeholder-gray-400" />
                <input type="email" placeholder="Email" className="w-full bg-blue-800 border border-blue-700 text-white px-4 py-2 focus:outline-none focus:border-yellow-500 placeholder-gray-400" />
                <textarea rows="3" placeholder="Message" className="w-full bg-blue-800 border border-blue-700 text-white px-4 py-2 focus:outline-none focus:border-yellow-500 placeholder-gray-400"></textarea>
                <button type="button" className="w-full bg-yellow-500 text-blue-900 font-bold uppercase py-2 hover:bg-yellow-400 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-blue-950 text-center py-4 border-t border-blue-800">
          <p className="text-gray-500 text-sm">© 2026 Mazoon Al-Suhub General Contracting Establishment. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
