import ImagePlaceholder from '../components/ImagePlaceholder';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { Quote, BookOpen, Award, Users, Lightbulb, Target, PenTool } from 'lucide-react';

const faculty = [
  {
    name: 'Dr. Arvind Sharma',
    subject: 'Physics',
    color: 'from-blue-500 to-sky',
    tagline: '"Physics is not just formulas — it is the art of understanding the universe one question at a time."',
    experience: '18+ years of teaching experience',
    highlights: [
      'Ph.D. in Applied Physics from IIT Delhi',
      'Author of 3 bestselling physics textbooks',
      '500+ students in IITs & NITs',
    ],
  },
  {
    name: 'Prof. Meena Iyer',
    subject: 'Mathematics',
    color: 'from-accent to-accent-light',
    tagline: '"Mathematics is the language of logic. Master it, and you can solve anything life throws at you."',
    experience: '15+ years of teaching experience',
    highlights: [
      'M.Sc. Mathematics (Gold Medalist)',
      'National-level Math Olympiad coach',
      'Innovator of speed-solving techniques',
    ],
  },
  {
    name: 'Mr. Rakesh Verma',
    subject: 'Chemistry',
    color: 'from-emerald to-teal-400',
    tagline: '"Chemistry is all about reactions — in the lab and in life. Stay curious, stay experimental."',
    experience: '12+ years of teaching experience',
    highlights: [
      'M.Tech in Chemical Engineering',
      'Former researcher at CSIR labs',
      'Known for making Organic Chemistry fun',
    ],
  },
];

export default function Faculty() {
  return (
    <>
      <PageHeader
        title="Our"
        highlight="Faculty"
        subtitle="Meet the brilliant minds who guide our students to success every day."
      />

      {/* ─── Faculty Cards ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {faculty.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Photo with gradient overlay */}
              <div className="relative overflow-hidden">
                <ImagePlaceholder
                  className="w-full h-56 sm:h-64 rounded-none transition-transform duration-500 group-hover:scale-105"
                  label={f.name}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                {/* Subject badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r ${f.color} rounded-full shadow-lg`}>
                    {f.subject}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {/* Name & Experience */}
                <h3 className="text-xl font-extrabold text-primary">{f.name}</h3>
                <p className="text-sm text-gray-400 font-medium mt-1">{f.experience}</p>

                {/* Tagline */}
                <div className="relative bg-gradient-to-br from-surface to-surface-alt rounded-2xl p-4 mt-4 mb-4 border border-gray-100">
                  <Quote className="absolute -top-2 -left-2 w-7 h-7 text-accent/30" />
                  <p className="italic text-gray-600 text-sm leading-relaxed pl-2">
                    {f.tagline}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {f.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${f.color} shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Faculty Stats ─── */}
      <section className="bg-gradient-to-r from-primary-dark to-primary py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { icon: Users, stat: '25+', label: 'Expert Faculty' },
            { icon: BookOpen, stat: '50+', label: 'Courses Taught' },
            { icon: Award, stat: '95%', label: 'Student Satisfaction' },
            { icon: Quote, stat: '15+', label: 'Avg. Years Experience' },
          ].map((s, i) => (
            <div key={i}>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white">{s.stat}</p>
              <p className="text-sm text-white/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Teaching Philosophy ─── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            badge="Philosophy"
            title="Our Teaching"
            highlight="Approach"
            subtitle="At Gurukul Academy, our faculty don't just teach — they inspire."
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Concept First', desc: 'We focus on deep understanding of concepts, not rote memorization. Every topic is taught from first principles.', icon: Target, color: 'from-blue-500 to-sky' },
              { title: 'Practice Driven', desc: 'Regular problem-solving sessions, quizzes, and mock tests ensure students are exam-ready at all times.', icon: PenTool, color: 'from-emerald to-teal-400' },
              { title: 'Personal Touch', desc: 'Every student gets individual attention. Our teachers are mentors who care about your growth and success.', icon: Lightbulb, color: 'from-accent to-accent-light' },
            ].map((item, i) => (
              <div key={i} className="bg-surface rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4 mx-auto`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
