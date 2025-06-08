import LoginPage from './LoginPage';
import SettingsPage from './SettingsPage';
// import EditRatePage from './EditRatePage';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/admin-panel/login'; // Указываем полный путь с подкаталогом
    return null;
  }
  return children;
};

const routes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/edit-rate/:id',
    element: (
      <ProtectedRoute>
         <SettingsPage /> 
      </ProtectedRoute>
    ),
  },
];

export default routes;