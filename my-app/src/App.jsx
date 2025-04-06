import { useState } from 'react';
import CommunityServiceDashboard from './components/dashboard/CommunityServiceDashboard';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <CommunityServiceDashboard />
  );
}

export default App;
