import { createContext, useContext, useEffect, useState } from 'react';
import initialPins from '../data/pins.js';
import users from '../data/users.js';

const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };

export function AppProvider({ children }) {
  const currentUser = users.find((u) => u.isCurrent);
  const [createdPins, setCreatedPins] = useState(() => read('created_pins', []));
  const [savedIds, setSavedIds] = useState(() => read('saved_pins', []));
  useEffect(() => localStorage.setItem('created_pins', JSON.stringify(createdPins)), [createdPins]);
  useEffect(() => localStorage.setItem('saved_pins', JSON.stringify(savedIds)), [savedIds]);

  const pins = [...createdPins, ...initialPins];
  const toggleSave = (id) => setSavedIds((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const addPin = (pin) => { const p = { id: Date.now(), author: currentUser.username, keywords: [], ...pin }; setCreatedPins((c) => [p, ...c]); return p.id; };

  return <AppContext.Provider value={{ pins, users, currentUser, savedIds, toggleSave, addPin }}>{children}</AppContext.Provider>;
}
