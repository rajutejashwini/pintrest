import PinGrid from '../components/PinGrid.jsx';
import usePins from '../hooks/usePins.js';

export default function Home() {
  const { pins } = usePins();
  return <PinGrid pins={pins} />;
}
