import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import PinGrid from '../components/PinGrid.jsx';
import { useApp } from '../context/AppContext.jsx';
import boards from '../data/boards.js';

export default function PinDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pins, users, savedIds, toggleSave } = useApp();
  const pin = pins.find((p) => p.id === Number(id));
  if (!pin) return <div className="empty"><h2>Pin not found</h2><Link to="/">Back to home</Link></div>;
  const author = users.find((u) => u.username === pin.author);
  const board = boards.find((b) => b.id === pin.boardId);
  const saved = savedIds.includes(pin.id);
  const related = pins.filter((p) => p.category === pin.category && p.id !== pin.id);
  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back"><FiArrowLeft /></button>
      <div className="detail">
        <img className="detail-img" src={pin.imageUrl} alt={pin.title} />
        <div className="detail-info">
          <h1>{pin.title}</h1>
          <p className="muted">{pin.category}{board ? ` · ${board.name}` : ''}</p>
          {pin.keywords?.length > 0 && <p className="muted">{pin.keywords.map((k) => `#${k.replace(/\s/g, '')}`).join(' ')}</p>}
          <div className="pin-author big">{author && <img src={author.avatar} alt="" />}<span>{author ? author.name : pin.author}</span></div>
          <button className={'save-btn static' + (saved ? ' saved' : '')} onClick={() => toggleSave(pin.id)}>{saved ? 'Saved' : 'Save'}</button>
        </div>
      </div>
      <h2 className="page-title">More like this</h2>
      <PinGrid pins={related} emptyText="No similar pins yet." />
    </>
  );
}
