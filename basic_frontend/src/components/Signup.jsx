import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import apiClient from '../../service/apiClient'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
 //for navigation
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    //Make an API call to backend with data
    //get response from backend
    //Take action based on response
    try {
        console.log(`Trying to do api call with data: Name:${name},Email:${email},Password:${password}`);
        const response = await apiClient.signup(name,email,password);
        console.log("Signup response:",response);
        if(response.success){
          navigate("/login");
        }else{
            setError(response.message ?? "Signup failed");
        }
    }
    catch (err) {
        console.error("Signup error:", err);
        setError(err.message ?? "Signup failed");
    }
    finally {
        setLoading(false);
    }
  }
  return (
    <div className='signup'>
      <h1>Welcome to Sign up page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Signup
