import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import MainPage from './components/mainPage/MainPage';
import LoginPage from './components/AuthorizationSystem/LoginPage';
import RegistrationPage from './components/AuthorizationSystem/RegistrationPage';
import ListFurniturePage from './components/furnitureItems/ListFurniturePage';
import FurnitureDetailsPage from './components/furnitureItems/FurnitureDetailsPage';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ModelList from './components/AdminPanel/ModelList';


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem('accessToken'));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />

                <Route path='/registration' element={<RegistrationPage onLogin={() => setIsAuthenticated(true)} />} />

                <Route path='/furniture/:furnitureType' element={<ListFurniturePage />} />
                <Route path="/furniture/:furnitureType/:itemId" element={<FurnitureDetailsPage />} />

                <Route path='/admin' element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login" />} />
                <Route path='/admin/:model' element={<ModelList />} />
            </Routes>
        </Router>
    );
}

export default App;
