import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import PageHeader from '../components/PageHeader';

const categories = ['All', 'Campus', 'Events', 'Classroom', 'Achievements'];

const images = [
  { id: 1, label: 'Campus Front View', category: 'Campus' },
  { id: 2, label: 'Annual Day Celebration', category: 'Events' },
  { id: 3, label: 'Physics Lab Session', category: 'Classroom' },
  { id: 4, label: 'Award Ceremony', category: 'Achievements' },
  { id: 5, label: 'Library', category: 'Campus' },
  { id: 6, label: 'Sports Day', category: 'Events' },
  { id: 7, label: 'Chemistry Lab', category: 'Classroom' },
  { id: 8, label: 'Topper Felicitation', category: 'Achievements' },
  { id: 9, label: 'Campus Garden', category: 'Campus' },
  { id: 10, label: 'Science Exhibition', category: 'Events' },
  { id: 11, label: 'Smart Classroom', category: 'Classroom' },
  { id: 12, label: 'State-level Winners', category: 'Achievements' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? images : images.filter((img) => img.category === active);

  return (
    <>
      <PageHeader
        title="Photo"
        highlight="Gallery"
        subtitle="A glimpse into life at Gurukul Academy — our campus, events, classrooms, and celebrations."
      />

      {/* ─── Filter Tabs ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-primary/30 hover:text-primary hover:shadow-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Gallery Grid ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <ImagePlaceholder
                className="w-full h-40 sm:h-52 lg:h-56 rounded-none transition-transform duration-500 group-hover:scale-110"
                label={img.label}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start justify-end p-3 sm:p-5">
                <span className="inline-block px-2.5 py-1 mb-1.5 text-[10px] font-bold uppercase tracking-wider bg-accent/90 text-primary-dark rounded-full">
                  {img.category}
                </span>
                <span className="text-white text-sm sm:text-base font-bold leading-snug">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No photos in this category yet.</p>
          </div>
        )}
      </section>
    </>
  );
}
