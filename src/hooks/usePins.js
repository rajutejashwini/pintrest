import { useApp } from '../context/AppContext.jsx';

// Filtering helpers that work on the pins imported from data/pins.js
export default function usePins() {
  const { pins } = useApp();
  const byCategory = (cat) => (cat === 'All' ? pins : pins.filter((p) => p.category === cat));
  const search = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return pins;
    return pins.filter((p) => [p.title, p.category, p.author, ...(p.keywords || [])].some((v) => v.toLowerCase().includes(q)));
  };
  return { pins, byCategory, search };
}
