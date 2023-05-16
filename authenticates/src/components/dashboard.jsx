import React, { useState } from 'react'
import Header from './Header';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [error, setError] = useState('');
  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
      setError('')

      try {
        await logout()

        navigate("/signin")
      } catch {
        setError("Failed to Logout")
      }
  }
  return (
    <>
    <Header/>
    <h2 className='m-4'>Profile</h2>
    {error && <span>{error}</span>}
    <strong className='m-4'>Email:</strong> {currentUser.email}
    <br></br>
    <Link to="/update-profile" className="m-4">Updade Profile</Link>
    <div>
    <button onClick={handleLogout} 
    className='bg-transparent 
    hover:bg-blue-500 text-blue-700 
    font-semibold hover:text-white py-2 px-4 
    border border-blue-500 
    hover:border-transparent rounded m-4'>Logout</button>
    </div>
    
    
    </>
  )
}

