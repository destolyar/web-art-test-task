import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminPanel } from './pages/AdminPanel';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { AdminRoutes } from './routes/AdminRoutes';
import { PrivateRoutes } from './routes/PrivateRoutes';
import './styles/App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<Profile/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route element={<AdminRoutes/>}>
              <Route path='/admin' element={<AdminPanel/>}/>
            </Route>
          </Route>
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
