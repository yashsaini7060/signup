import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(input));
  };

  const validatePassword = (input) => {
    setPasswordValid(input.length >= 8);
  };

  const validateConfirmPassword = (input) => {
    setConfirmPasswordValid(input === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            onBlur={() => setEmailTouched(true)}
            style={{ border: emailTouched && !emailValid ? '2px solid red' : (emailValid ? '2px solid green' : '') }}
          />
          {emailTouched && !emailValid && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            onBlur={() => setPasswordTouched(true)}
            style={{ border: passwordTouched && !passwordValid ? '2px solid red' : '' }}
          />
          {passwordTouched && !passwordValid && <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
            }}
            onBlur={() => setConfirmPasswordTouched(true)}
            style={{ border: confirmPasswordTouched && !confirmPasswordValid ? '2px solid red' : (confirmPasswordValid ? '2px solid green' : '') }}
          />
          {confirmPasswordTouched && !confirmPasswordValid && <p style={{ color: 'red' }}>Passwords do not match</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
