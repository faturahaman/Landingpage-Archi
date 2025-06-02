import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Sofa, Users, Award, Phone, Mail, MapPin, MessageCircle, Star, ArrowRight, Building, Palette, Ruler, Hammer, Lightbulb, Shield, Menu, X } from 'lucide-react';

const ArchitectureLandingPage = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample carousel images - replace with actual images
  const carouselImages = [
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=600&fit=crop', alt: 'Modern Architecture Design' },
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop', alt: 'Luxury Interior Design' },
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=600&fit=crop', alt: 'Custom Furniture Design' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop', alt: 'Contemporary Living Space' }
  ];

  // Sample gallery images - replace with actual work photos
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop', alt: 'Modern Living Room' },
    { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop', alt: 'Custom Kitchen' },
    { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop', alt: 'Office Design' },
    { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit=crop', alt: 'Bedroom Interior' },
    { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop', alt: 'Dining Area' },
    { src: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=300&fit=crop', alt: 'Bathroom Design' }
  ];

  // Services data
  const services = [
    {
      icon: Building,
      title: "Architectural Design",
      description: "Complete architectural solutions from concept to construction, creating spaces that blend functionality with aesthetic appeal."
    },
    {
      icon: Sofa,
      title: "Custom Furniture",
      description: "Bespoke furniture design and manufacturing tailored to your space and style preferences."
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Comprehensive interior design services that transform spaces into beautiful, functional environments."
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimal space utilization and layout planning for residential and commercial properties."
    },
    {
      icon: Hammer,
      title: "Renovation",
      description: "Professional renovation services that breathe new life into existing spaces."
    },
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description: "Expert design advice and consultation to help you make informed decisions about your project."
    }
  ];

  // Testimonials array - easily editable
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Incredible attention to detail and innovative designs. Our dream home became a reality thanks to the exceptional architectural vision and craftsmanship.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      text: "The custom furniture pieces transformed our office space completely. Professional service, quality work, and delivered on time. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Designer",
      text: "Working with this team has been fantastic. Their architectural expertise and furniture craftsmanship are unmatched in the industry.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      text: "They redesigned our restaurant space beautifully. The custom furniture and layout increased our capacity while maintaining elegance.",
      rating: 5
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // WhatsApp number - replace with actual number
  const whatsappNumber = "+628123456789"; // Replace with actual WhatsApp number
  const whatsappMessage = "Hello! I'm interested in your architecture and furniture services.";

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ArchiFurni
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 animate-in slide-in-from-top-2 duration-300">
              <div className="px-4 py-2 space-y-1">
                <a 
                  href="#home" 
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:translate-x-2 hover:shadow-sm"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:translate-x-2 hover:shadow-sm"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:translate-x-2 hover:shadow-sm"
                >
                  Services
                </a>
                <a 
                  href="#gallery" 
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:translate-x-2 hover:shadow-sm"
                >
                  Gallery
                </a>
                <a 
                  href="#testimonials" 
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:translate-x-2 hover:shadow-sm"
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  onClick={closeMobileMenu}
                  className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:translate-x-2 hover:shadow-sm"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
          
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              Transforming Spaces with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">
                Architectural Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              Professional Architecture & Custom Furniture Design Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <a
                href="#services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Explore Services
              </a>
              <a
                href="#gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section / Jumbotron */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-in fade-in-0 slide-in-from-left-8 duration-1000">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Architect Portrait"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 hover:rotate-1"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-300">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Meet the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                  Master Architect
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                With over 15 years of experience in architectural design and custom furniture creation, 
                we bring dreams to life through innovative design solutions. Our passion lies in creating 
                spaces that not only look beautiful but also enhance the way people live and work.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                From residential homes to commercial spaces, every project is approached with meticulous 
                attention to detail, ensuring that each design reflects the unique personality and needs 
                of our clients.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-purple-600 group-hover:text-purple-700">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-600 group-hover:text-green-700">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions tailored to transform your vision into reality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest projects and see how we transform spaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-in fade-in-0 zoom-in-50 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Client
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about our work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="text-yellow-400 fill-current hover:scale-110 transition-transform duration-200" 
                      size={20}
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic hover:text-gray-900 transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your space? Get in touch with us today
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Phone className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+62 812-3456-789</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Mail className="text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">info@archifurni.com</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <MapPin className="text-green-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-blue-100">Bogor, West Java</p>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <MessageCircle size={24} />
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              ArchiFurni
            </div>
            <p className="text-gray-400 mb-6">
              Transforming spaces with architectural excellence and custom furniture design
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2025 ArchiFurni. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArchitectureLandingPage;