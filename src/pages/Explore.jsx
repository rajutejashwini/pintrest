import { useState } from 'react';
import PinGrid from '../components/PinGrid.jsx';
import usePins from '../hooks/usePins.js';
import categories from '../data/categories.js';

export default function Explore() {
  const [category, setCategory] = useState('All');
  const { byCategory } = usePins();
  return (
    <>
      <h1 className="page-title">Explore</h1>
      <div className="chips">
        {categories.map((c) => <button key={c} className={'chip' + (c === category ? ' active' : '')} onClick={() => setCategory(c)}>{c}</button>)}
      </div>
      <PinGrid pins={byCategory(category)} emptyText={`No pins in ${category} yet.`} />
    </>
  );
}
