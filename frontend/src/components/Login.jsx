
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CustomizedInput from './shared/CustomizedInput';
import NavigationLink from './shared/NavigationLink';
import '../styles/Login.css' // Import the CSS file for styles

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    try {
      toast.loading('Signing In', { id: 'login' });
      await auth?.login(username, password);
      toast.success('Signed In Successfully', { id: 'login' });
      setTimeout(() => {
        toast.dismiss();
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error('Signing In Failed', { id: 'login' });
      setTimeout(() => {
        toast.dismiss();
      }, 3000);
    }

    console.log(username + ' and ' + password);
  };

  useEffect(() => {
    if (auth?.user) {
      return navigate('/dashboard/');
    }
  }, [auth]);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h4 className="login-title">Login</h4>
        <CustomizedInput type="username" name="username" label="Username" />
        <CustomizedInput type="password" name="password" label="Password" />
        <button type="submit" className="login-button">
          Login
        </button>
        <NavigationLink bg="#6D5147" to="/" text="Back To Home" textColor="black" />
      </form>
    </div>
  );
};

export default Login;

