import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact"
        highlight="Us"
        subtitle="Have questions or want to enroll? Reach out to us — we'd love to hear from you!"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* ─── Contact Info ─── */}
          <div className="lg:col-span-2">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
              Reach Out
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2 leading-tight">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              We are always happy to help. Drop us a message or visit us at our
              campus — our doors are always open!
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  text: '123 Education Lane, Knowledge City, India — 400001',
                  color: 'from-blue-500 to-sky',
                },
                {
                  icon: Phone,
                  title: 'Call Us',
                  text: '+91 98765 43210 / +91 98765 43211',
                  color: 'from-emerald to-teal-400',
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  text: 'info@gurukulacademy.com',
                  color: 'from-violet to-purple-400',
                },
                {
                  icon: Clock,
                  title: 'Office Hours',
                  text: 'Mon – Sat: 8:00 AM – 6:00 PM',
                  color: 'from-accent to-accent-light',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-gradient-to-br from-surface to-surface-alt rounded-2xl h-44 sm:h-56 flex items-center justify-center text-gray-400 border border-gray-200/50">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <span className="text-sm font-medium">Map Embed Placeholder</span>
              </div>
            </div>
          </div>

          {/* ─── Contact Form ─── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow">
                  <MessageCircle className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-gray-400">We'll get back to you within 24 hours</p>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! We will get back to you soon.');
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm text-gray-700">
                    <option>Admission Enquiry</option>
                    <option>Fee Structure</option>
                    <option>Course Details</option>
                    <option>General Question</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-surface/50 focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary-dark font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mb-3">
            Prefer to talk <span className="text-gradient">directly?</span>
          </h3>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Call us at <span className="font-bold text-primary">+91 98765 43210</span> or walk in to our campus — we'd love to meet you!
          </p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </section>
    </>
  );
}
