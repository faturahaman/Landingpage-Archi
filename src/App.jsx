import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sofa, Phone, Mail, MapPin, MessageCircle, Star, Building, Palette, Ruler, Hammer, Menu, X } from 'lucide-react';

const ArchitectureLandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profileImages = [
    "/images/profile/logo.jpg",
    "/images/profile/profile.jpg"
  ];
  const [profileIndex, setProfileIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Otomatis ganti foto profil setiap 4 detik dengan transisi halus
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setProfileIndex((prev) => (prev + 1) % profileImages.length);
        setIsFading(false);
      }, 500); // durasi fade out
    }, 4000);
    return () => clearInterval(timer);
  }, [profileImages.length]);

  const carouselImages = [
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=600&fit=crop', },
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',},
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=600&fit=crop', },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop', }
  ];

  const galleryImages = [
    { src: '/images/galery/aset (1).jpg', alt: 'Aset 1' },
    { src: '/images/galery/aset (2).jpg', alt: 'Aset 2' },
    { src: '/images/galery/aset (3).jpg', alt: 'Aset 3' },
    { src: '/images/galery/aset (4).jpg', alt: 'Aset 4' },
    { src: '/images/galery/aset (10).jpg', alt: 'Aset 10' },
    { src: '/images/galery/aset (11).jpg', alt: 'Aset 11' },
    { src: '/images/galery/aset (12).jpg', alt: 'Aset 12' },
    { src: '/images/galery/aset (13).jpg', alt: 'Aset 13' },
    { src: '/images/galery/aset (14).jpg', alt: 'Aset 14' },
    { src: '/images/galery/aset (15).jpg', alt: 'Aset 15' },
    { src: '/images/galery/aset (16).jpg', alt: 'Aset 16' },
    { src: '/images/galery/aset (17).jpg', alt: 'Aset 17' },
    { src: '/images/galery/aset (18).jpg', alt: 'Aset 18' },
    { src: '/images/galery/aset (19).jpg', alt: 'Aset 19' },
    { src: '/images/galery/aset (20).jpg', alt: 'Aset 20' },
    { src: '/images/galery/aset (21).jpg', alt: 'Aset 21' },
    { src: '/images/galery/aset (22).jpg', alt: 'Aset 22' },
    { src: '/images/galery/properti (1).jpg', alt: 'Properti 1' },
    { src: '/images/galery/properti (2).jpg', alt: 'Properti 2' },
    { src: '/images/galery/properti (3).jpg', alt: 'Properti 3' },
    { src: '/images/galery/properti (4).jpg', alt: 'Properti 4' },
    { src: '/images/galery/properti (5).jpg', alt: 'Properti 5' },
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
    }
  ];

  // Testimonials array
  const testimonials = [
    {
      name: "Bambang Supriyadi",
      text: "Awalnya saya pikir desain rumah itu ribet, ternyata setelah konsultasi sama Syawal Properti Unggul, jadi lebih paham. Prosesnya cukup jelas, saya bisa diskusi soal kebutuhan keluarga. Ada beberapa masukan yang menurut saya masuk akal, walau ada juga yang saya sesuaikan sendiri. Hasil akhirnya sesuai harapan, nggak berlebihan tapi cukup nyaman buat keluarga.",
      rating: 4
    },
    {
      name: "Sutrisno Widodo",
      text: "Saya pakai jasa Syawal Properti Unggul buat renovasi toko. Nggak muluk-muluk, yang penting toko jadi lebih terang dan barang gampang diatur. Ada beberapa revisi, tapi komunikasinya lancar. Secara umum, saya cukup puas, walau masih ada beberapa hal kecil yang saya perbaiki sendiri.",
      rating: 4
    },
    {
      name: "Pak Haji Sulaiman",
      text: "Saya coba konsultasi desain kontrakan supaya lebih menarik. Syawal Properti Unggul kasih beberapa opsi, saya pilih yang sederhana saja. Prosesnya nggak ribet, dan hasilnya lumayan, sekarang kontrakan lebih rapi. Kalau ada rejeki, mungkin nanti saya lanjut renovasi bagian lain.",
      rating: 4
    },
    {
      name: "Gunawan Prasetyo",
      text: "Saya orangnya suka detail, jadi beberapa kali tanya-tanya soal ukuran dan bahan. Syawal Properti Unggul cukup sabar jawab pertanyaan saya. Hasil desainnya nggak terlalu mewah, tapi sesuai kebutuhan saya. Lumayan lah buat rumah masa pensiun.",
      rating: 4
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // WhatsApp number
  const whatsappNumber = "6281290996305"; 
  const whatsappMessage = "halo saya dari website Syawal Properti Unggul, saya ingin memesan jasa arsitektur dan furnitur.";

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
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
              Syawal Properti Unggul
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
              Mengubah Ruang dengan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse">
                Keahlian Arsitektur
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              Jasa Arsitektur & Desain Furnitur Kustom Profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <a
                href="#services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Jelajahi Layanan
              </a>
              <a
                href="#gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section / Jumbotron */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-in fade-in-0 slide-in-from-left-8 duration-1000 flex justify-center">
              <div
                style={{
                  width: 320,
                  height: 400,
                  maxWidth: "100%",
                  maxHeight: "100%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  background: "#fff",
                  borderRadius: "2rem",
                  boxShadow: "0 10px 32px 0 rgba(0,0,0,0.10)"
                }}
              >
                <img
                  src={profileImages[profileIndex]}
                  alt="Architect Portrait"
                  className={`transition-all duration-500 ease-in-out object-contain w-full h-full ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
                  style={{
                    position: "absolute",
                    top: 0, left: 0, width: "100%", height: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-300">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
               Pengalaman Founder kami
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                  Syawal Properti Unggul
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                Berawal dari seorang buruh bangunan, pendiri kami Syawal Properti Unggul, telah menempuh perjalanan luar biasa. Dengan dedikasi dan semangat pantang menyerah, beliau membangun keahlian langsung di lapangan konstruksi.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                Lebih dari 10 tahun pengalaman dalam pembangunan gedung perkantoran, perumahan, dan berbagai properti, kini beliau hadir dengan usaha resmi, Syawal Properti Unggul. Kami menggabungkan keahlian teknis dengan kreativitas untuk menciptakan desain yang tidak hanya memenuhi kebutuhan klien, tetapi juga mencerminkan kepribadian dan gaya hidup mereka.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-700">150+</div>
                  <div className="text-gray-600">Proyek Terselesaikan</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-purple-600 group-hover:text-purple-700">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-600 group-hover:text-green-700">100%</div>
                  <div className="text-gray-600">Kepuasan Klien</div>
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
              Layanan
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi desain komprehensif yang disesuaikan untuk mewujudkan visi Anda
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Portofolio </span>
              Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan proyek terbaru kami dan lihat bagaimana kami mengubah ruang
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllGallery ? galleryImages : galleryImages.slice(0, 3)).map((image, index) => (
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
          <div className="text-center mt-8">
            {!showAllGallery ? (
              <button
                onClick={() => setShowAllGallery(true)}
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-300"
              >
                Lihat Semua
              </button>
            ) : (
              <button
                onClick={() => setShowAllGallery(false)}
                className="px-8 py-3 rounded-full bg-gray-400 text-white font-semibold shadow hover:bg-gray-600 transition-all duration-300"
              >
                Tutup
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ulasan
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Klien</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengarkan apa kata klien kami yang puas tentang pekerjaan kami
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
              Mari Bangun Sesuatu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                yang Luar Biasa Bersama
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Siap mengubah ruang Anda? Hubungi kami hari ini
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Phone className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="text-blue-100">+62 812-9099-6305</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Mail className="text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100"> syawalpropertiunggul@gmail.com</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <MapPin className="text-green-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
              <p className="text-blue-100">Jl.	Bukit	Cimanggu	City	Raya	No.	1	Ruko	Blok	KD2	Lt.	1,	Desa/Kelurahan
Cilendek	Timur,	Kec.	Bogor	Barat,	Kota	Bogor,	Provinsi	Jawa	Barat,
</p>
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
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Syawal Properti Unggul
            </div>
            <p className="text-gray-400 mb-6">
              Mengubah ruang dengan keunggulan arsitektur dan desain furnitur kustom
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">
                © 2025 Syawal Properti Unggul. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArchitectureLandingPage;