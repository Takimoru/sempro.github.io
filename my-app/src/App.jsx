import { Routes, Route } from 'react-router-dom';
import CommunityServiceDashboard from './components/dashboard/CommunityServiceDashboard';
import InputDesign from './components/program/InputDesign';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<CommunityServiceDashboard />} />
      <Route path="/add-program" element={<InputDesign />} />
    </Routes>
  );
}

export default App;
