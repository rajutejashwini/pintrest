import PinCard from './PinCard.jsx';

export default function PinGrid({ pins, emptyText = 'No pins to show yet.' }) {
  if (!pins.length) return <div className="empty"><h2>Nothing here</h2><p>{emptyText}</p></div>;
  return <section className="masonry">{pins.map((pin) => <PinCard key={pin.id} pin={pin} />)}</section>;
}
