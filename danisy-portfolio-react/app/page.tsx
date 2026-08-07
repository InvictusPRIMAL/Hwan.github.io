'use client';

import React from 'react';
import DemoRadialScrollGalleryBento from '@/components/demo';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Instagram, Mail, Code2, Database, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-mono font-bold text-white text-sm">
              DH
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Danisy Hazwan
            </span>
          </a>
          <div className="flex items-center space-x-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-indigo-400 transition-colors">Radial Work</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 max-w-5xl mx-auto text-center">
        <Badge variant="outline" className="mb-6 border-indigo-500/30 text-indigo-400 bg-indigo-500/10 px-3 py-1">
          UniKL IT Student & Back-End Developer
        </Badge>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Danisy Hazwan</span>
        </h1>

        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Engineering robust back-end systems and web data automation. Specializing in ASP.NET, Java, C#, SQL, and Jsoup web scraping.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="https://github.com/InvictusPRIMAL" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-semibold transition-all">
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-hazwan-b29b11300/" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-sm font-semibold transition-all">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/itsdanisy/" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-pink-600/20 hover:bg-pink-600 text-pink-300 hover:text-white border border-pink-500/30 text-sm font-semibold transition-all">
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a href="mailto:danisy0175@gmail.com" className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 text-sm font-semibold shadow-lg shadow-indigo-600/20 transition-all">
            <Mail size={18} />
            <span>Email Me</span>
          </a>
        </div>
      </section>

      {/* Radial Scroll Gallery Section */}
      <section id="portfolio" className="py-12 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Featured Projects Showcase</h2>
          <p className="text-slate-400 text-sm">Scroll down to rotate through interactive work cards</p>
        </div>

        <DemoRadialScrollGalleryBento />
      </section>

      {/* About & Skills Section */}
      <section id="skills" className="py-20 px-4 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
              <Code2 size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Back-End Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Developing web management systems and microservices using ASP.NET, C#, and object-oriented Java.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Bot size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Data Automation</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building custom web scrapers with Java & Jsoup for automated price monitoring and notifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4">
              <Database size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Database Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designing relational databases, normalization schemas, and SQL queries for reliable systems.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-auto py-8 px-4 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© 2026 Muhammad Danisy Hazwan. Built with Next.js, Tailwind CSS & GSAP RadialScrollGallery.</p>
      </footer>
    </main>
  );
}

