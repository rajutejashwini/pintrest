import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import categories from '../data/categories.js';
import boards from '../data/boards.js';

export default function CreatePin() {
  const { addPin } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', imageUrl: '', category: categories[1], boardId: boards[0].id });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); navigate(`/pin/${addPin({ ...form, title: form.title.trim() })}`); };
  return (
    <form className="create-form" onSubmit={submit}>
      <h1 className="page-title">Create pin</h1>
      <label>Title<input name="title" value={form.title} onChange={change} required maxLength={80} /></label>
      <label>Image URL<input name="imageUrl" type="url" value={form.imageUrl} onChange={change} placeholder="https://..." required /></label>
      <label>Category<select name="category" value={form.category} onChange={change}>{categories.filter((c) => c !== 'All').map((c) => <option key={c}>{c}</option>)}</select></label>
      <label>Board<select name="boardId" value={form.boardId} onChange={change}>{boards.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}</select></label>
      {form.imageUrl && <img className="preview" src={form.imageUrl} alt="Preview" />}
      <button className="save-btn static" type="submit">Publish</button>
    </form>
  );
}
