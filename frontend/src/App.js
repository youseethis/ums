// File: frontend/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainAppBar from './components/MainAppBar';
import MainSideBar from './components/MainSideBar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { AuthContext } from './context/AuthContext';
import UserProfile from './components/userProfile';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <MainAppBar />
        <div className="Flex">
          {user ? <MainSideBar /> : ""}
          <Routes>
            <Route path="/login" element = { user ? <Navigate to="/" /> : <LoginPage />} />
            <Route path="/" element= { user ? <UserList /> : <Navigate to="/login" />} />
            <Route path="/AddUser" element = { user? <UserForm /> : <LoginPage/>} /> 
            <Route path="/UserProfile/:userId" element = { user? <UserProfile /> : <LoginPage/>} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
