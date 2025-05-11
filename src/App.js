// Импорт необходимых модулей из библиотеки React
import React, { useEffect } from 'react';

// Импорт компонентов для маршрутизации из библиотеки react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Импорт пользовательского компонента Navbar
import Navbar from './components/Navbar/Navbar';
import Landing_page from './components/Landing_Page/LandingPage';
// Функциональный компонент для основного приложения
function App() {

  // Отображение основного компонента приложения
  return (
    <div className="App">
        {/* Настройка BrowserRouter для маршрутизации */}
        <BrowserRouter>
          {/* Отображение компонента Navbar */}
          <Navbar/>

          {/* Настройка маршрутов для различных страниц */}
          <Routes>
            <Route path='/' element={<Landing_page />} />
            {/* Определение отдельных компонентов Route для различных страниц */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Экспорт компонента App как экспорт по умолчанию
export default App;