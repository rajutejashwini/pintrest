import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import Search from './pages/Search.jsx';
import PinDetails from './pages/PinDetails.jsx';
import Profile from './pages/Profile.jsx';
import SavedPins from './pages/SavedPins.jsx';
import CreatePin from './pages/CreatePin.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/search" element={<Search />} />
          <Route path="/pin/:id" element={<PinDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<SavedPins />} />
          <Route path="/create" element={<CreatePin />} />
          <Route path="*" element={<div className="empty"><h2>Page not found</h2></div>} />
        </Routes>
      </main>
    </>
  );
}
