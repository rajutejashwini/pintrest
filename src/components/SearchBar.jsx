import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [params] = useSearchParams();
  const [text, setText] = useState(params.get('q') || '');
  const navigate = useNavigate();
  const submit = (e) => { e.preventDefault(); navigate(`/search?q=${encodeURIComponent(text.trim())}`); };
  return (
    <form className="searchbar" onSubmit={submit} role="search">
      <FiSearch aria-hidden="true" />
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Search for ideas" aria-label="Search pins" />
    </form>
  );
}
