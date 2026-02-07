import { MapPin, Phone, Mail, ArrowUpRight, Heart } from 'lucide-react';
import logo from '../images/Logo.webp';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-primary-dark to-primary text-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <img
                src={logo}
                alt="Gurukul Academy"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Nurturing minds, shaping futures. Committed to academic excellence
              and holistic development since 2010.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold mb-5 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/faculty', 'Faculty'],
                ['/results', 'Results'],
                ['/gallery', 'Gallery'],
                ['/contact', 'Contact Us'],
              ].map(([to, label]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-white/60 hover:text-accent transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-5 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              {['JEE Preparation', 'NEET Preparation', 'Board Exams (XI–XII)', 'Foundation (VIII–X)', 'Online Courses', 'Crash Courses'].map((item) => (
                <li key={item} className="hover:text-white/80 transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-white flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent rounded-full" />
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                123 Education Lane, Knowledge City, India
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                info@gurukulacademy.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Gurukul Academy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose fill-rose" /> for Education
          </p>
        </div>
      </div>
    </footer>
  );
}
