import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import LoginPage from './components/AuthorizationSystem/LoginPage';
import RegistrationPage from './components/AuthorizationSystem/RegistrationPage';
import ListFurniturePage from './components/furnitureItems/ListFurniturePage';
import FurnitureDetailsPage from './components/furnitureItems/FurnitureDetailsPage';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ModelList from './components/AdminPanel/ModelList';


function App() {
    const isLoggedIn = () => {
        return localStorage.getItem('accessToken');
    };

    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registration' element={<RegistrationPage />} />

                <Route path='/furniture/:furnitureType' element={<ListFurniturePage />} />
                <Route path="/furniture/:furnitureType/:itemId" element={<FurnitureDetailsPage />} />

                <Route path='/admin' element={isLoggedIn() ? <AdminPanel /> : <Navigate to="/login" />} />
                <Route path='/admin/:model' element={<ModelList />} />
            </Routes>
        </Router>
    );
}

export default App;
