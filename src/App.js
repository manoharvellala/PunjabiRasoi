
import './App.css';
import AdminPage from './Components/pages/AdminPage';

import LandingPage from './Components/pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersPage from './Components/pages/UsersPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UsersPage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
