"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import {
    Menu,
    X,
    Shield,
    Wifi,
    MapPin,
    Phone,
    MessageCircle,
    Instagram,
    Clock,
    Home,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import VideoSection from "@/components/section/VideoSection";

export default function PadangKostLanding() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const testimonials = [
    //     {
    //         name: "Sari Indah",
    //         status: "Medical Student, UNAND",
    //         rating: 5,
    //         quote: "Padang Kost memberikan pengalaman tinggal yang luar biasa. Fasilitas modern dan lokasi strategis membuatnya sempurna untuk mahasiswa.",
    //     },
    //     {
    //         name: "Ahmad Rizki",
    //         status: "Software Engineer",
    //         rating: 5,
    //         quote: "Kualitas kamar dan pelayanan di sini benar-benar premium. Seperti tinggal di hotel berbintang setiap hari.",
    //     },
    //     {
    //         name: "Maya Putri",
    //         status: "Architecture Student, UNP",
    //         rating: 5,
    //         quote: "Desain interior yang elegan dan suasana yang nyaman membuat saya betah tinggal di sini. Highly recommended!",
    //     },
    // ];

    const rooms = [
        {
            image: "/1.jpg",
            // name: "Mandeh Suite",
            // price: "Rp 2.500.000",
            // status: "Available",
            // facilities: ["AC", "Wi-Fi", "Private Bathroom", "Balcony"],
        },
        {
            image: "/2.jpg",
            // name: "Harau Deluxe",
            // price: "Rp 2.000.000",
            // status: "Available",
            // facilities: ["AC", "Wi-Fi", "Private Bathroom", "Desk"],
        },
        {
            image: "/3.jpg",
            // name: "Bukittinggi Premium",
            // price: "Rp 1.800.000",
            // status: "Limited",
            // facilities: ["AC", "Wi-Fi", "Shared Bathroom", "Study Area"],
        },
        {
            image: "/4.jpg",
            // name: "Bukittinggi Premium",
            // price: "Rp 1.800.000",
            // status: "Limited",
            // facilities: ["AC", "Wi-Fi", "Shared Bathroom", "Study Area"],
        },
        {
            image: "/main.jpg",
            // name: "Bukittinggi Premium",
            // price: "Rp 1.800.000",
            // status: "Limited",
            // facilities: ["AC", "Wi-Fi", "Shared Bathroom", "Study Area"],
        },
        {
            image: "/samping.jpg",
            // name: "Bukittinggi Premium",
            // price: "Rp 1.800.000",
            // status: "Limited",
            // facilities: ["AC", "Wi-Fi", "Shared Bathroom", "Study Area"],
        },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#F7F7F7]">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#EBEBEB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center space-x-2">
                            {/* Optional: Icon bulat minimalis */}
                            <div className="bg-[#F7F7F7] rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                                <Image
                                    src={"/logo.png"}
                                    alt="Logo Teta Kost"
                                    width={100}
                                    height={100}
                                />
                            </div>

                            {/* Logo teks */}
                            <h1 className="text-2xl font-extrabold tracking-tight">
                                <span className="text-[#FF5A5F] font-serif">
                                    TETA
                                </span>
                                <span className="text-[#4B4B4B] font-sans">
                                    Kost
                                </span>
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <button
                                    onClick={() => scrollToSection("home")}
                                    className="text-[#222222] hover:text-[#FF5A5F] transition-colors"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollToSection("rooms")}
                                    className="text-[#222222] hover:text-[#FF5A5F] transition-colors"
                                >
                                    Kamar
                                </button>
                                <button
                                    onClick={() =>
                                        scrollToSection("facilities")
                                    }
                                    className="text-[#222222] hover:text-[#FF5A5F] transition-colors"
                                >
                                    Fasilitas
                                </button>
                                <button
                                    onClick={() => scrollToSection("location")}
                                    className="text-[#222222] hover:text-[#FF5A5F] transition-colors"
                                >
                                    Lokasi
                                </button>
                            </div>
                        </div>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* Contact Us Button */}
                            <a
                                href="https://wa.me/6281270727484?text=Halo%2C%20saya%20ingin%20bertanya%20seputar%20TETA%20Kost"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="outline"
                                    className="border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white bg-transparent"
                                >
                                    Contact Us
                                </Button>
                            </a>

                            {/* Book Now Button */}
                            <a
                                href="https://wa.me/6281270727484?text=Halo%2C%20saya%20tertarik%20untuk%20booking%20kamar%20di%20TETA%20Kost"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white cursor-pointer">
                                    Book Now
                                </Button>
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-[#222222] hover:text-[#FF5A5F] transition-colors"
                            >
                                {isMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[#FAF9F6] border-t border-[#EBEBEB]">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="block px-3 py-2 text-[#222222] hover:text-[#FF5A5F] transition-colors w-full text-left"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection("rooms")}
                                className="block px-3 py-2 text-[#222222] hover:text-[#FF5A5F] transition-colors w-full text-left"
                            >
                                Kamar
                            </button>
                            <button
                                onClick={() => scrollToSection("facilities")}
                                className="block px-3 py-2 text-[#222222] hover:text-[#FF5A5F] transition-colors w-full text-left"
                            >
                                Fasilitas
                            </button>
                            <button
                                onClick={() => scrollToSection("location")}
                                className="block px-3 py-2 text-[#222222] hover:text-[#FF5A5F] transition-colors w-full text-left"
                            >
                                Lokasi
                            </button>
                            <div className="px-3 py-2 space-y-2">
                                <Button
                                    variant="outline"
                                    className="w-full border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white bg-transparent"
                                >
                                    Contact Us
                                </Button>
                                <Button className="w-full bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white">
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="relative h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/main.jpg"
                        alt="Padang Kost Exterior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Temukan Hunian Nyaman dan Modern di Kota Padang
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        Rasakan pengalaman tinggal berkualitas yang dirancang
                        khusus untuk mahasiswa dan profesional muda yang
                        mengutamakan kenyamanan dan gaya hidup praktis.
                    </p>
                    <Button
                        size="lg"
                        className="bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
                        onClick={() => scrollToSection("rooms")}
                    >
                        Lihat Kamar
                    </Button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#222222] mb-4">
                            Kenapa Memilih TETA Kost?
                        </h2>
                        <p className="text-xl text-[#717171] max-w-2xl mx-auto">
                            Rasakan perpaduan sempurna antara kenyamanan, gaya
                            modern, dan lokasi strategis di pusat Kota Padang
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-[#FF5A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF5A5F]/20 transition-colors">
                                <Home className="w-8 h-8 text-[#FF5A5F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#222222] mb-2">
                                Desain Interior Modern
                            </h3>
                            <p className="text-[#717171]">
                                Ruangan yang dirancang dengan cermat,
                                berfurnitur kontemporer, dan estetika yang
                                elegan
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-[#FF5A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF5A5F]/20 transition-colors">
                                <Shield className="w-8 h-8 text-[#FF5A5F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#222222] mb-2">
                                Keamanan 24 Jam
                            </h3>
                            <p className="text-[#717171]">
                                Sistem keamanan siaga penuh dengan pengawasan
                                CCTV dan akses masuk yang aman
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-[#FF5A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF5A5F]/20 transition-colors">
                                <MapPin className="w-8 h-8 text-[#FF5A5F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#222222] mb-2">
                                Lokasi Strategis
                            </h3>
                            <p className="text-[#717171]">
                                Lokasi utama dekat kampus, pusat perbelanjaan,
                                dan akses transportasi umum yang mudah
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-[#FF5A5F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF5A5F]/20 transition-colors">
                                <Wifi className="w-8 h-8 text-[#FF5A5F]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#222222] mb-2">
                                Internet Berkecepatan Tinggi
                            </h3>
                            <p className="text-[#717171]">
                                Koneksi internet fiber optik yang stabil, cocok
                                untuk belajar maupun bekerja dari kost
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Rooms Section */}
            <section id="rooms" className="py-20 bg-[#F7F7F7]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#222222] mb-4">
                            Gambar Kamar
                        </h2>
                        <p className="text-xl text-[#717171] max-w-2xl mx-auto">
                            Lihat beberapa contoh kamar yang tersedia di TETA
                            Kost — dirancang dengan detail dan kenyamanan untuk
                            mendukung aktivitas harian Anda.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rooms.map((room, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-[#FAF9F6] border-0 rounded-xl"
                                )}
                            >
                                <Image
                                    src={room.image || "/placeholder.svg"}
                                    alt={"Kamar Teta Kost"}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <VideoSection />

            {/* Gallery & Facilities Section */}
            <section id="facilities" className="py-20 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#222222] mb-4">
                            Fasilitas & Area Bersama
                        </h2>
                        <p className="text-xl text-[#717171] max-w-2xl mx-auto">
                            Jelajahi berbagai fasilitas unggulan kami yang
                            dirancang untuk mendukung kenyamanan dan
                            produktivitas harian Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Parkir Aman */}
                        <div className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src="/parkiran.jpg"
                                alt="Parkir Aman"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Parkir Aman
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Area parkir khusus penghuni yang aman
                                        dan nyaman
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Jemur Pakaian */}
                        <div className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src="/jemuran.jpg"
                                alt="Jemur Pakaian"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Tempat Jemur Pakaian
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Area khusus untuk menjemur pakaian
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Dapur Bersama */}
                        <div className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src="/dapur.jpg"
                                alt="Dapur Bersama"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Dapur Bersama
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Dapur bersih dan lengkap yang bisa
                                        digunakan bersama
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Taman Atap */}
                        {/* <div className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Taman Atap"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Taman Atap
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Area santai dengan pemandangan terbuka
                                        dan suasana segar
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        {/* Ruang Belajar */}
                        {/* <div className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Ruang Belajar"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Ruang Belajar
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Tempat tenang dan kondusif untuk belajar
                                        atau kerja remote
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        {/* Fasilitas Laundry */}
                        {/* <div className="relative group overflow-hidden rounded-2xl">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Fasilitas Laundry"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-xl font-semibold mb-2">
                                        Fasilitas Laundry
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        Tersedia mesin cuci dan pengering untuk
                                        kebutuhan harian
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#222222] mb-4">What Our Residents Say</h2>
            <p className="text-xl text-[#717171]">
              Hear from our satisfied residents about their experience at Padang Kost
            </p>
          </div>

          <div className="relative">
            <Card className="bg-[#FAF9F6] border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-[#222222] mb-6 italic font-serif">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
                <div>
                  <p className="font-semibold text-[#222222] text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-[#717171]">{testimonials[currentTestimonial].status}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-[#FF5A5F]" : "bg-[#EBEBEB]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

            {/* Location Section */}
            <section id="location" className="py-20 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#222222] mb-4">
                            Lokasi Strategis di Padang
                        </h2>
                        <p className="text-xl text-[#717171] max-w-2xl mx-auto">
                            Terletak di lokasi yang sangat strategis, memberikan
                            akses mudah ke kampus, pusat perbelanjaan, dan
                            tempat hiburan
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-[#F7F7F7] rounded-2xl p-8 h-96 flex items-center justify-center my-10">
                                <div className="text-center text-[#717171]">
                                    <MapPin className="w-16 h-16 mx-auto mb-4 text-[#FF5A5F]" />
                                    <p className="text-sm">
                                        Jl. Berok Jembatan Lama III No, 7a, Kec.
                                        Nanggalo, Kota Padang, Sumatera Barat
                                    </p>
                                    <div className="mt-4">
                                        <iframe
                                            width="100%"
                                            height="400"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15896.412803960804!2d100.3618686952828!3d-0.8952706125189116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTMnNDIuOSJTIDEwMMKwMjEnNDIuNyJF!5e0!3m2!1sen!2sid!4v1721726100000!5m2!1sen!2sid"
                                            allowFullScreen
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 my-6">
                            <h3 className="text-2xl font-serif font-bold text-[#222222] mb-6">
                                Titik-Titik Terdekat
                            </h3>

                            <div className="flex items-center space-x-4 p-4 bg-[#F7F7F7] rounded-xl">
                                <div className="w-12 h-12 bg-[#FF5A5F]/10 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-[#FF5A5F]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#222222]">
                                        Sekolah Tinggi Ilmu Kesehatan YPAK
                                        Padang
                                    </p>
                                    <p className="text-[#717171]">
                                        5 menit dengan motor
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-[#F7F7F7] rounded-xl">
                                    <div className="w-12 h-12 bg-[#FF5A5F]/10 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-[#FF5A5F]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#222222]">
                                            Universitas Negeri Padang (UNP)
                                        </p>
                                        <p className="text-[#717171]">
                                            10 menit dengan motor
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-[#F7F7F7] rounded-xl">
                                    <div className="w-12 h-12 bg-[#FF5A5F]/10 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-[#FF5A5F]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#222222]">
                                            Basko City Mall
                                        </p>
                                        <p className="text-[#717171]">
                                            15 menit dengan motor
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-[#F7F7F7] rounded-xl">
                                    <div className="w-12 h-12 bg-[#FF5A5F]/10 rounded-full flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-[#FF5A5F]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#222222]">
                                            Pantai Padang
                                        </p>
                                        <p className="text-[#717171]">
                                            20 menit dengan motor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#FF5A5F] to-[#FF5A5F]/90 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Siap Tinggal Nyaman di Teta Kost?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Rasakan hunian modern dan nyaman di pusat Kota Padang.
                        Booking kamar sekarang dan temukan kenapa Teta Kost jadi
                        pilihan favorit mahasiswa dan profesional muda.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/6281270727484?text=Halo%2C%20saya%20tertarik%20untuk%20booking%20kamar%20di%20TETA%20Kost"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="bg-[#FAF9F6] text-[#FF5A5F] hover:bg-gray-100 px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Booking via WhatsApp
                            </Button>
                        </a>
                        <a
                            href="https://wa.me/6281270727484?text=Halo%2C%20saya%20ingin%20bertanya%20seputar%20ketersedian%20kamar%20di%20TETA%20Kost"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-[#FF5A5F] px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 bg-transparent cursor-pointer"
                            >
                                Cek Ketersediaan Kamar
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#222222] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div className="flex-shrink-0 flex items-center space-x-2 mb-2">
                                {/* Optional: Icon bulat minimalis */}
                                <div className="bg-[#F7F7F7] rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                                    <Image
                                        src={"/logo.png"}
                                        alt="Logo Teta Kost"
                                        width={100}
                                        height={100}
                                    />
                                </div>

                                {/* Logo teks */}
                                <h1 className="text-2xl font-extrabold tracking-tight">
                                    <span className="text-[#FF5A5F] font-serif">
                                        TETA
                                    </span>
                                    <span className="text-[#F7F7F7] font-sans">
                                        Kost
                                    </span>
                                </h1>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Hunian Nyaman dan Modern di Kota Padang
                            </p>
                            <p className="text-gray-400 text-sm">
                                Jl. Berok Jembatan Lama III No, 7a
                                <br />
                                Kec. Nanggalo, Kota Padang
                                <br />
                                Sumatera Barat
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <button
                                        onClick={() => scrollToSection("home")}
                                        className="hover:text-white transition-colors"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection("rooms")}
                                        className="hover:text-white transition-colors"
                                    >
                                        Kamar
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection("facilities")
                                        }
                                        className="hover:text-white transition-colors"
                                    >
                                        Fasilitas
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection("location")
                                        }
                                        className="hover:text-white transition-colors"
                                    >
                                        Lokasi
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Contact Info
                            </h4>
                            <ul className="space-y-2 text-gray-400">
                                <a
                                    className="flex items-center"
                                    href="https://wa.me/6281270727484?text=Halo%2C%20saya%20ingin%20bertanya%20seputar%20ketersedian%20kamar%20di%20TETA%20Kost"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    +62 812 7072 7484
                                </a>
                                <a
                                    className="flex items-center"
                                    href="https://wa.me/6281275727554?text=Halo%2C%20saya%20ingin%20bertanya%20seputar%20ketersedian%20kamar%20di%20TETA%20Kost"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    +62 812 7572 7554
                                </a>
                                <li>tetakostpadang@gmail.com</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">
                                Ikuti Sosial Media Kami
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-[#FF5A5F] rounded-full flex items-center justify-center hover:bg-[#FF5A5F]/80 transition-colors"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                {/* <a
                                    href="#"
                                    className="w-10 h-10 bg-[#FF5A5F] rounded-full flex items-center justify-center hover:bg-[#FF5A5F]/80 transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                        <p>
                            &copy; {new Date().getFullYear()} Nuvra Studio.
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
