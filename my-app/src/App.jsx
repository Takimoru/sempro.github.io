import { Routes, Route } from 'react-router-dom';
import CommunityServiceDashboard from './components/dashboard/CommunityServiceDashboard';
import InputDesign from './components/program/InputDesign';
import Calendarside from './components/calendar/Calendarside';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<CommunityServiceDashboard />} />
      <Route path="/add-program" element={<InputDesign />} />
      <Route path="/calendar" element={< Calendarside />} />
    </Routes>
  );
}

export default App;