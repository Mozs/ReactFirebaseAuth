import {React, useState, useRef, useContext, Fragment } from 'react';
import Banner from '../components/banner';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [ error, setError] = useState('');
  const [ loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const [ message, setMessage ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
     try {
      setError('')
      setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("Check your Email for for further instructions")
     } catch {
      setError("Failed to Reset Password")
     }
     setLoading(false)
  }
  return (
    <>
  
  <Banner />
  <div className="flex items-center justify-center 
  min-h-screen bg-gray-100">
  <div className="w-full max-w-md">
  <Header />
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      {error && <p className='mb-3 bg-red-100 border
      border-red-300 text-red-400 px-4 py-3 
     rounded relative" role="alert'>{error}</p>}
      
     {message && <p className='mb-3 bg-green-100 border
     border-white-300 text-green-400 px-4 py-3 
    rounded relative" role="alert'>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="appearance-none border 
            rounded w-full 
            py-2 px-3 text-gray-700 
            leading-tight focus:outline-none 
            focus:shadow-outline"
            id="email"
            type="text"
            ref={emailRef}
            placeholder="Username"
          />
        </div>
        
        <div className="flex items-center mb-2">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Reset Password
          </button>
        </div>

        <div className="flex items-center mb-2">
          <Link to="/signin"
            className=" text-sm text-blue-500 w-full py-2 px-3"
            type="text"
          >
            Login
          </Link>
        </div>
        <div className='mb-6 flex justify-end'>
        <div className="text-sm text-blue-500">Don't Have an Account? <Link className='hover:text-blue-800' to="/signup">Sign Up</Link>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</>
  )
}

