import { Target, Eye, Heart, Award, Users, BookOpen, GraduationCap, Building2, Trophy, Globe, Star } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To provide world-class coaching that empowers students to achieve academic excellence and develop holistic life skills.',
    color: 'from-blue-500 to-sky',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted and impactful coaching institute in the country, nurturing future leaders and innovators.',
    color: 'from-violet to-purple-400',
  },
  {
    icon: Heart,
    title: 'Our Values',
    text: 'Integrity, dedication, compassion, and a relentless pursuit of knowledge form the core of everything we do.',
    color: 'from-rose to-pink-400',
  },
  {
    icon: Award,
    title: 'Our Legacy',
    text: 'With 15+ years of excellence, we have helped thousands of students crack competitive exams and reach top institutions.',
    color: 'from-accent to-accent-light',
  },
];

const milestones = [
  { year: '2010', text: 'Gurukul Academy was founded with a batch of 20 students and a single classroom.', icon: Building2, color: 'from-blue-500 to-sky' },
  { year: '2013', text: 'Expanded to 3 classrooms with 100+ students and launched the first study material.', icon: BookOpen, color: 'from-emerald to-teal-400' },
  { year: '2016', text: 'First batch secured top 100 ranks in JEE & NEET national exams.', icon: Trophy, color: 'from-accent to-accent-light' },
  { year: '2019', text: 'Launched online coaching platform, reaching 2000+ students across India.', icon: Globe, color: 'from-violet to-purple-400' },
  { year: '2022', text: 'Opened second campus, faculty strength grew to 25+ expert educators.', icon: GraduationCap, color: 'from-rose to-pink-400' },
  { year: '2025', text: '5000+ students enrolled, 95% success rate, and recognized as top coaching institute.', icon: Star, color: 'from-accent to-accent-light' },
];

const counters = [
  { icon: Users, value: '5,000+', label: 'Happy Students' },
  { icon: GraduationCap, value: '25+', label: 'Expert Faculty' },
  { icon: BookOpen, value: '50+', label: 'Courses' },
  { icon: Award, value: '95%', label: 'Success Rate' },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About"
        highlight="Us"
        subtitle="Discover the story, mission, and passion behind Gurukul Academy."
      />

      {/* ─── Story ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-2xl" />
              <ImagePlaceholder
                className="relative w-full aspect-[4/3] shadow-2xl"
                label="Founder / Campus"
              />
              {/* Floating card */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <p className="text-3xl font-extrabold text-primary">15+</p>
                <p className="text-xs text-gray-500 font-semibold">Years of Trust</p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-accent/10 text-accent rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-5 leading-tight">
              Where Tradition Meets <span className="text-gradient">Innovation</span>
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed text-sm sm:text-base">
              <p>
                Gurukul Academy was founded with a simple yet powerful idea — every
                student deserves access to quality education and mentoring,
                regardless of their background. What started as a small classroom
                with just 20 students has grown into one of the most reputed
                coaching institutes in the region.
              </p>
              <p>
                Our founders believed in the ancient Gurukul tradition where
                teachers and students share a deep bond built on trust, respect,
                and the shared love for learning. This philosophy continues to
                guide us as we prepare students for competitive exams, board
                examinations, and professional careers.
              </p>
              <p>
                Today, Gurukul Academy boasts state-of-the-art classrooms, a
                dedicated team of expert educators, and a track record that speaks
                for itself — year after year, our students secure top ranks and
                admissions to prestigious institutions across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Counters ─── */}
      <section className="bg-gradient-to-r from-primary-dark to-primary py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {counters.map((c, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                <c.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">{c.value}</p>
              <p className="text-sm text-white/60 mt-1">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Mission / Vision ─── */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Core"
            title="What Drives"
            highlight="Us"
            subtitle="Every decision we make is guided by these foundational principles."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Milestones ─── */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <SectionHeading
          badge="Timeline"
          title="Our"
          highlight="Milestones"
          subtitle="A journey of growth, excellence, and unwavering commitment to education."
        />
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/30 sm:-translate-x-0.5" />

          <div className="space-y-8 sm:space-y-12">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-4 sm:gap-0 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md -translate-x-2 sm:-translate-x-2 mt-6 z-10" />

                {/* Content */}
                <div className={`ml-14 sm:ml-0 sm:w-[45%] ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                  <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow">
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center shadow-md`}>
                        <m.icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <span className="text-lg font-extrabold text-accent">{m.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden sm:block sm:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
