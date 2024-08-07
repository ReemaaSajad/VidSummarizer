import React, { useState } from 'react';
import '../styles/Signup.css';
import googleLogo from '../assets/googlelogo.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError('Passwords do not match!');
      return;
    }
    // Handle sign up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Repeat Password:', repeatPassword);
    setError('');
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log('Sign up with Google');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter email'
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password'
              required
            />
          </div>
          <div className="form-group">
            <label>Repeat Password:</label>
            <input
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder='Re-enter password'
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button className='submit' type="submit">Sign Up</button>
        </form>
        <button className="google-button" onClick={handleGoogleSignUp}>
                <img src={googleLogo} alt="Google logo" className="google-logo" />
                Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
