import React, {Fragment, useRef, useState} from 'react';
import Banner from '../../components/banner';
import Header from '../../components/Header';
import { useAuth } from '../../context/AuthContext';
import {Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup} = useAuth();
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match")
    }
     try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/");
     } catch {
      setError("Failed to create an account")
     }
     setLoading(false)
  }
  return (
  <Fragment>
  <Banner />
  <div className="flex items-center 
  justify-center min-h-screen 
  bg-gray-100">
  <div className="w-full max-w-md">
  <Header />
    <div className="bg-white shadow-md 
    rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
    {error && <p className='mb-3 bg-red-100 border
     border-red-300 text-red-400 px-4 py-3 
    rounded relative" role="alert'>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="appearance-none 
            border rounded w-full py-2 px-3 
            text-gray-700 leading-tight 
            focus:outline-none 
            focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            ref={emailRef}
            required
          />
        </div>

        <div className="mb-4">
        </div>
        <div className="mb-4">
          <input
            className="appearance-none border 
            rounded w-full py-2 px-3 
            text-gray-700 mb-3 leading-tight 
            focus:outline-none 
            focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
        <div className="mb-4">
        <input
          className="appearance-none border 
          rounded w-full py-2 px-3 
          text-gray-700 mb-3 leading-tight 
          focus:outline-none 
          focus:shadow-outline"
          id="password1"
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
            required
        />
      </div>
        <div className='mb-6 flex justify-end'>
        <a className="text-sm text-blue-500"
            href="signup">
            Have an Account? <Link className=' hover:text-blue-800' to="/signin">Login</Link>
          </a>
        </div>

        <div className="flex items-center mb-2">
          <button
            className="bg-red-500 hover:bg-red-600 
            text-white 
            font-bold w-full py-2 px-3 
            rounded focus:outline-none 
            focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</Fragment>
  )
}
