import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminPanel } from './pages/AdminPanel';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { PrivateRoutes } from './routes/PrivateRoutes';
import './styles/App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<Profile/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/admin' element={<AdminPanel/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
