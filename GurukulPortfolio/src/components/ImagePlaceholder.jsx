import { ImageIcon } from 'lucide-react';

const gradients = [
  'from-blue-100 via-sky-50 to-indigo-100',
  'from-amber-50 via-orange-50 to-yellow-100',
  'from-emerald-50 via-teal-50 to-cyan-100',
  'from-rose-50 via-pink-50 to-fuchsia-100',
  'from-violet-50 via-purple-50 to-indigo-100',
];

export default function ImagePlaceholder({ className = '', label = 'Image' }) {
  const grad = gradients[label.length % gradients.length];
  return (
    <div
      className={`bg-gradient-to-br ${grad} flex flex-col items-center justify-center text-gray-400 rounded-2xl border border-gray-200/50 ${className}`}
    >
      <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur flex items-center justify-center mb-2 shadow-sm">
        <ImageIcon className="w-7 h-7 text-gray-400" />
      </div>
      <span className="text-xs font-medium text-gray-500 px-2 text-center leading-snug">{label}</span>
    </div>
  );
}
