import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { Footer } from './components/Footer/Footer';
import { Contacts } from './pages/Contacts/Contacts';
import { Courses } from './pages/Courses/Courses';

export function App() {
  return (
    <div className='app'>
      <div className='wrapper'>
        <Header />
        <main className='main'>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path='account' element={<AccountPage />} />
            <Route path='courses' element={<Courses />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='*' element={<h1>404 Page not found</h1>} />
          </Routes >
        </main>
      </div>
      <Footer />
    </div>
  );
}

