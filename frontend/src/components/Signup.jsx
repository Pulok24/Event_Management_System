
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CustomizedInput from './shared/CustomizedInput';
import NavigationLink from './shared/NavigationLink';
import '../styles/Signup.css'; // Importing the CSS file for styling


const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');
    const username = data.get('username');

    try {
      toast.loading('Signing In', { id: 'login' });
      await auth?.signup(name, username, email, password);
      toast.success('Signed up Successfully', { id: 'signup' });
      setTimeout(() => {
        toast.dismiss();
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error('Signing up Failed', { id: 'signup' });
      setTimeout(() => {
        toast.dismiss();
      }, 3000);
    }

    console.log(username + ' and ' + password);
  };

  useEffect(() => {
    if (auth?.user) {
      toast.success('dashboard');
      return navigate('/dashboard');
    }
  }, [auth]);

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h4 className="signup-title">Signup</h4>
        <CustomizedInput type="text" name="name" label="Name" />
        <CustomizedInput type="username" name="username" label="Username" />
        <CustomizedInput type="email" name="email" label="Email" />
        <CustomizedInput type="password" name="password" label="Password" />
        <button type="submit" className="signup-button">Signup</button>
        <NavigationLink bg="#6D5147" to="/" text="Back To Home" textColor="black" />
      </form>
    </div>
  );
};

export default Signup;

