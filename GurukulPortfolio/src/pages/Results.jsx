import { TrendingUp, Award, Medal, Trophy, Star } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';

const toppers = [
  { name: 'Aarav Patel', rank: 'AIR 12', exam: 'JEE Advanced 2025', color: 'from-blue-500 to-sky' },
  { name: 'Sneha Reddy', rank: 'AIR 34', exam: 'NEET 2025', color: 'from-emerald to-teal-400' },
  { name: 'Rohan Gupta', rank: 'AIR 56', exam: 'JEE Advanced 2025', color: 'from-violet to-purple-400' },
  { name: 'Priya Singh', rank: '99.8%ile', exam: 'JEE Mains 2025', color: 'from-accent to-accent-light' },
  { name: 'Karan Mehta', rank: 'AIR 78', exam: 'NEET 2025', color: 'from-rose to-pink-400' },
  { name: 'Ananya Das', rank: 'State Topper', exam: 'Board Exams 2025', color: 'from-blue-500 to-indigo-500' },
];

const yearlyStats = [
  { year: '2025', jee: 120, neet: 95, boards: '98% pass rate' },
  { year: '2024', jee: 105, neet: 88, boards: '97% pass rate' },
  { year: '2023', jee: 90, neet: 75, boards: '96% pass rate' },
  { year: '2022', jee: 78, neet: 60, boards: '95% pass rate' },
];

export default function Results() {
  return (
    <>
      <PageHeader
        title="Our"
        highlight="Results"
        subtitle="Numbers that speak louder than words — our students' success is our greatest achievement."
      />

      {/* ─── Highlight Stats ─── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 -mt-6 sm:-mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: TrendingUp, stat: '120+', label: 'IIT Selections in 2025', color: 'from-blue-500 to-sky' },
            { icon: Award, stat: '95+', label: 'NEET Selections in 2025', color: 'from-emerald to-teal-400' },
            { icon: Medal, stat: '98%', label: 'Board Exam Pass Rate', color: 'from-accent to-accent-light' },
          ].map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">{s.stat}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Toppers ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeading
          badge="Hall of Fame"
          title="Star"
          highlight="Toppers"
          subtitle="Celebrating the students who achieved extraordinary results."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {toppers.map((t, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-accent/20 p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative shrink-0">
                <ImagePlaceholder
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  label="Photo"
                />
                {/* Rank badge */}
                <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shadow-md`}>
                  <Trophy className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-primary text-lg truncate">{t.name}</h3>
                <p className="text-accent font-extrabold text-lg">{t.rank}</p>
                <p className="text-gray-500 text-sm">{t.exam}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Year-wise Performance ─── */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            badge="Track Record"
            title="Year-wise"
            highlight="Performance"
            subtitle="Consistent excellence — every year, our students outperform."
          />
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full bg-white text-sm min-w-[480px]">
              <thead>
                <tr className="bg-gradient-to-r from-primary-dark to-primary text-white text-left">
                  <th className="px-5 sm:px-6 py-4 font-bold rounded-tl-2xl">Year</th>
                  <th className="px-5 sm:px-6 py-4 font-bold">JEE Selections</th>
                  <th className="px-5 sm:px-6 py-4 font-bold">NEET Selections</th>
                  <th className="px-5 sm:px-6 py-4 font-bold rounded-tr-2xl">Board Results</th>
                </tr>
              </thead>
              <tbody>
                {yearlyStats.map((y, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-100 hover:bg-accent/5 transition-colors"
                  >
                    <td className="px-5 sm:px-6 py-4 font-extrabold text-primary">{y.year}</td>
                    <td className="px-5 sm:px-6 py-4 text-gray-700 font-semibold">{y.jee}+</td>
                    <td className="px-5 sm:px-6 py-4 text-gray-700 font-semibold">{y.neet}+</td>
                    <td className="px-5 sm:px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-bold">
                        <Star className="w-3 h-3 fill-emerald" />
                        {y.boards}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Results Banner ─── */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-br from-accent/15 to-primary/10 rounded-3xl blur-xl" />
          <ImagePlaceholder
            className="relative w-full h-52 sm:h-72 lg:h-80 shadow-xl"
            label="Results Banner / Achievement Board"
          />
        </div>
      </section>
    </>
  );
}
