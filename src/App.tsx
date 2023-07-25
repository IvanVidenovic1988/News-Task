import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './config/consts';
import Login from './pages/Login/Login';
import NewsList from './pages/News/NewsList';
import Nav from './components/Nav';
import ProtectedLoginRoute from './components/ProtectedLoginRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="">
      <BrowserRouter>

        <Nav />

        <Routes>

          <Route path={ROUTES.login} element={
            <ProtectedLoginRoute>
              <Login />
            </ProtectedLoginRoute>}
          />

          <Route path={ROUTES.news} element={
            <ProtectedRoute>
              <NewsList />
            </ProtectedRoute>}
          />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;