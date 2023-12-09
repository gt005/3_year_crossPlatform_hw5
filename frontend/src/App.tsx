import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import LoginPage from './components/AuthorizationSystem/LoginPage';
import RegistrationPage from './components/AuthorizationSystem/RegistrationPage';
import ListFurniturePage from './components/furnitureItems/ListFurniturePage';
import FurnitureDetailsPage from './components/furnitureItems/FurnitureDetailsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registration' element={<RegistrationPage />} />

                <Route path='/furniture/:furnitureType' element={<ListFurniturePage />} />

                <Route path="/furniture/:furnitureType/:itemId" element={<FurnitureDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
