import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { GamePage } from './components/GamePage/GamePage';
import MainPage from './components/MainPage/MainPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home/*' element={<MainPage />} />
        <Route path='game/:id' element={<GamePage />} />
        <Route path="*" element={<Navigate to={'/home'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
