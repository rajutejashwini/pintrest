import PinGrid from '../components/PinGrid.jsx';
import { useApp } from '../context/AppContext.jsx';

export default function SavedPins() {
  const { pins, savedIds } = useApp();
  return (
    <>
      <h1 className="page-title">Saved pins</h1>
      <PinGrid pins={pins.filter((p) => savedIds.includes(p.id))} emptyText="Tap Save on any pin and it will show up here." />
    </>
  );
}
