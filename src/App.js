import './App.css';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [navbarClicks, setNavbarClicks] = useState(0);
  const isActive = navbarClicks >= 3;

  return (
    <div className={`App${isActive ? ' funny-button' : ''}`}>
      <button className="opacity-0 position-absolute top-0 start-0" style={{ zIndex: "1500" }} onClick={() => setNavbarClicks(navbarClicks + 1)} />
      <Home />
    </div>
  );
}

export default App;
