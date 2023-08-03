import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from './config/consts';
import Login from './pages/Login/components/Login';
import NewsList from './pages/News/components/NewsList';
import Nav from './components/Nav';
import ProtectedLoginRoute from './components/ProtectedLoginRoute';
import ProtectedRoute from './components/ProtectedRoute';
import SingleNewsPage from './pages/SingleNewsPage/components/SingleNewsPage';

function App() {
  return (
    <div className="">
      <BrowserRouter>

        <Nav />

        <Routes>

          <Route path={ROUTES.home}>
            <Route index element={<Navigate to={ROUTES.login} />} />
          </Route>

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

          <Route path={`${ROUTES.news}/:newsId`} element={
            <ProtectedRoute>
              <SingleNewsPage />
            </ProtectedRoute>}
          />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;