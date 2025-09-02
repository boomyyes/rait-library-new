import React, { useState } from 'react';
   import './Login.css';

   const Login = ({ setIsLoggedIn }) => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');

     const handleSubmit = (e) => {
       e.preventDefault();
       if (!email || !password) {
         setError('Please enter your email and password.');
         return;
       }
       if (password.length < 8) {
         setError('Password must be at least 8 characters long.');
         return;
       }
       console.log('Logging in with:', { email, password });
       setIsLoggedIn(true);
       setError('');
       setEmail('');
       setPassword('');
     };

     return (
       <div className="auth-container">
         <div className="auth-card">
           <h2>Sign In</h2>
           <form onSubmit={handleSubmit} className="auth-form">
             <div className="form-group">
               <label htmlFor="email">Email</label>
               <input
                 type="email"
                 id="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter your email"
                 autoComplete="email"
                 required
               />
             </div>
             <div className="form-group">
               <label htmlFor="password">Password</label>
               <input
                 type="password"
                 id="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Enter your password"
                 autoComplete="current-password"
                 required
               />
             </div>
             {error && <p className="error-message">{error}</p>}
             <button type="submit" className="auth-button">Sign In</button>
           </form>
           <p className="auth-link">
             Don’t have an account? <a href="/register" className="link-text">Sign Up</a>
           </p>
         </div>
       </div>
     );
   };

   export default Login;