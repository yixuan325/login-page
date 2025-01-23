import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setErrorMessage('Please enter username and password');
    } else if (username === 'admin' && password === '1234') {
      setErrorMessage('');
      alert('Login successful');
    } else {
      setErrorMessage('Wrong username or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-back">
      <div className="w-96 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
        <p className="text-xs text-center mb-2">Enter your email to log in for this app</p>
        {errorMessage && <p className="text-red-500 text-center mb-2">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="username"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-700 mb-4"
          >
            Log in
          </button>
          <p className="text-xs text-center">By clicking continue, you agree to our Terms of Service and Privacy Policy</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
