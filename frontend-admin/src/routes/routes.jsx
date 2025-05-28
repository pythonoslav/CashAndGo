import LoginPage from './LoginPage';
import SettingsPage from './SettingsPage';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (token) {
    window.location.href = '/login';
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
];

export default routes;