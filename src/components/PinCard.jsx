import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';

export default function PinCard({ pin }) {
  const { users, savedIds, toggleSave } = useApp();
  const author = users.find((u) => u.username === pin.author);
  const saved = savedIds.includes(pin.id);
  return (
    <article className="pin">
      <div className="pin-media">
        <Link to={`/pin/${pin.id}`}><img src={pin.imageUrl} alt={pin.title} loading="lazy" /></Link>
        <button className={'save-btn' + (saved ? ' saved' : '')} onClick={() => toggleSave(pin.id)}>{saved ? 'Saved' : 'Save'}</button>
      </div>
      <h3 className="pin-title">{pin.title}</h3>
      <div className="pin-author">
        {author && <img src={author.avatar} alt="" />}<span>{author ? author.name : pin.author}</span>
      </div>
    </article>
  );
}
