import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from "./pages/NotFound";
import Signup from './pages/Signup';
import Activity from './pages/Activity';
import ActivityEdit from './pages/sponsor/ActivityEdit';
import Notifications from './pages/Notifications';
import Forgot from './pages/Forgot'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={HomePage(<Home />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/activity/:id" element={<Activity />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/sponsor/activity" element={<ActivityEdit />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}

const HomePage = (component) => {
  const [navbarClicks, setNavbarClicks] = useState(0);
  const isActive = navbarClicks >= 3;
  return (
    <div className={`App${isActive ? ' funny-button' : ''}`}>
      <button className="opacity-0 position-absolute top-0 start-0" style={{ zIndex: "1500" }} onClick={() => setNavbarClicks(navbarClicks + 1)} />
      {component}
    </div>
  );
};

export default App;
