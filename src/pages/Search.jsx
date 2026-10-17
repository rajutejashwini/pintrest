import { useSearchParams } from 'react-router-dom';
import PinGrid from '../components/PinGrid.jsx';
import usePins from '../hooks/usePins.js';

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get('q') || '';
  const results = usePins().search(q);
  return (
    <>
      <h1 className="page-title">{q ? `Results for “${q}”` : 'All pins'}</h1>
      <PinGrid pins={results} emptyText="No pins match your search. Try a title, category or keyword like “travel” or “sunset”." />
    </>
  );
}
