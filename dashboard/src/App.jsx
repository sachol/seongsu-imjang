import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import ThemeList from './pages/ThemeList';
import ThemeDetail from './pages/ThemeDetail';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import ChecklistPage from './pages/ChecklistPage';
import SchedulePage from './pages/SchedulePage';
import PasswordGate from './components/PasswordGate';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <PasswordGate>
        <div className="app">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/themes" element={<ThemeList />} />
              <Route path="/themes/:id" element={<ThemeDetail />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/checklist" element={<ChecklistPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </PasswordGate>
    </BrowserRouter>
  );
}

export default App;
