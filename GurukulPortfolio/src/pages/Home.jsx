import { NavLink } from 'react-router-dom';
import {
  BookOpen,
  Users,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Clock,
  Shield,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import SectionHeading from '../components/SectionHeading';

const stats = [
  { icon: Users, value: '5,000+', label: 'Students Enrolled', color: 'from-blue-500 to-sky' },
  { icon: Trophy, value: '95%', label: 'Success Rate', color: 'from-accent to-accent-light' },
  { icon: BookOpen, value: '50+', label: 'Courses Offered', color: 'from-emerald to-teal-400' },
  { icon: Star, value: '15+', label: 'Years of Excellence', color: 'from-violet to-purple-400' },
];

const features = [
  { icon: Users, title: 'Expert Faculty', desc: 'Learn from IIT/NIT alumni & PhD holders with decades of experience' },
  { icon: BookOpen, title: 'Study Material', desc: 'Comprehensive, regularly-updated study resources & question banks' },
  { icon: TrendingUp, title: 'Mock Tests', desc: 'Regular assessments with detailed analytics & performance tracking' },
  { icon: Shield, title: 'Small Batches', desc: 'Limited seats per batch ensuring personalized attention for all' },
  { icon: Lightbulb, title: 'Doubt Sessions', desc: 'Daily doubt-clearing sessions with dedicated teaching assistants' },
  { icon: Clock, title: 'Flexible Timings', desc: 'Morning, evening & weekend batches to suit every schedule' },
];

const testimonials = [
  { name: 'Aarav Patel', text: 'Gurukul Academy transformed my preparation. The teachers truly care about every student.', rank: 'AIR 12, JEE Advanced' },
  { name: 'Sneha Reddy', text: 'The structured approach and constant motivation helped me achieve what I once thought impossible.', rank: 'AIR 34, NEET' },
  { name: 'Rohan Gupta', text: 'Best coaching institute! The faculty, study material, and environment — everything is world-class.', rank: 'AIR 56, JEE Advanced' },
];

export default function Home() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden min-h-[90vh] sm:min-h-0 flex items-center">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[10%] w-72 h-72 bg-accent/15 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-sky/10 rounded-full blur-[120px] animate-float delay-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full" />
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="animate-fade-in-down">
                <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-sm text-white/90 rounded-full border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  Welcome to Gurukul Academy
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] animate-fade-in-up">
                Empowering Minds,
                <br />
                <span className="text-gradient">Building Futures</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-200">
                Gurukul Academy has been a beacon of quality education for over
                15 years — blending tradition with innovation to help every
                student achieve their dream.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <NavLink
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary-dark font-bold px-7 py-3.5 rounded-2xl transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
                <NavLink
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-300"
                >
                  Explore More
                </NavLink>
              </div>

              {/* Mini trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6 justify-center lg:justify-start animate-fade-in-up delay-400">
                {[
                  ['5000+', 'Students'],
                  ['95%', 'Success'],
                  ['15+', 'Years'],
                ].map(([val, lab]) => (
                  <div key={lab} className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-accent">{val}</span>
                    <span className="text-xs text-white/50 uppercase tracking-wider">{lab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Video */}
            <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fade-in-up delay-300">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-sky/20 rounded-3xl blur-2xl" />
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <iframe
                    src="https://www.youtube.com/embed/T9QqoOrJlrg?rel=0&autoplay=1&mute=1&start=0&end=20&loop=1&playlist=T9QqoOrJlrg"
                    title="Gurukul Academy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl shadow-black/10 animate-float z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-md">
                      <GraduationCap className="w-5 h-5 text-primary-dark" />
                    </div>
                    <div>
                      <p className="text-primary font-bold text-sm">Top Rated</p>
                      <p className="text-gray-500 text-xs">Coaching Institute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-10 sm:h-16">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 34C840 44 960 56 1080 56C1200 56 1320 44 1380 38L1440 32V80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 -mt-2 sm:-mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1 animate-scale-in delay-${(i + 1) * 100}`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ WHY GURUKUL ══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Students Love"
          highlight="Gurukul Academy"
          subtitle="We don't just teach — we transform. Here's what makes us different from the rest."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-accent-light transition-all duration-300">
                <f.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ ABOUT STRIP ══════════════ */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl" />
                <ImagePlaceholder
                  className="relative w-full aspect-[4/3] shadow-xl"
                  label="Campus Photo"
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-5 leading-tight">
                A Legacy of <span className="text-gradient">Excellence</span> in Education
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                At Gurukul Academy, we believe every student has unlimited
                potential. Our unique blend of rigorous academics and
                compassionate mentoring creates an environment where students
                thrive and excel beyond expectations.
              </p>
              <ul className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                {[
                  'Expert faculty from IITs, NITs & top universities',
                  'Comprehensive study material & daily practice tests',
                  'Individual doubt-clearing & mentorship sessions',
                  'Proven track record of top ranks year after year',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <NavLink
                to="/about"
                className="group inline-flex items-center gap-2 mt-8 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeading
          badge="Testimonials"
          title="What Our Toppers"
          highlight="Say About Us"
          subtitle="Hear from the students who made it to the top with Gurukul Academy."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-xl hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-accent font-semibold">{t.rank}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Start Your <span className="text-gradient">Journey?</span>
          </h2>
          <p className="text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Join thousands of successful students who turned their dreams into
            reality with Gurukul Academy. Admissions are now open!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-primary-dark font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-2xl hover:-translate-y-0.5 text-lg"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </NavLink>
            <NavLink
              to="/results"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/50 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
            >
              View Results
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
