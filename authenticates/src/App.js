import Signin from './auth/siginin/signin';
import Signup from './auth/signup/signup';
import { AuthProvider } from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './auth/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

export default function App() {
  return (
    <AuthProvider>
     <Routes>
     <Route exact path="/" element={
      <PrivateRoute>
      <Dashboard />
      </PrivateRoute>
     }>
     
     </Route>
     <Route exact path="/update-profile" element={
      <PrivateRoute>
      <UpdateProfile />
      </PrivateRoute>
     }>
     
     </Route>
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
   </AuthProvider>
  );
}

