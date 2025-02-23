import { React, useState } from 'react'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const loginSuccess = handleLogin(email, password)
    if (loginSuccess) {
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className='bg-[#1e1e1e] shadow-xl rounded-2xl p-12 w-full max-w-md'>
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 mb-4 transition-all' type="email" placeholder='Enter your email' required />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 mb-6 transition-all' type="password" placeholder='Enter password' required />
          <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
