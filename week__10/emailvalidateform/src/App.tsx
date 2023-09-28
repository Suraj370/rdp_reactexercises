import React from 'react'
import useEmailValidation from './useEmailValidation'
import './App.css'

const App = () => {
  const [email, error, handleValidation] = useEmailValidation();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert(`Your email is ${email}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userEmail" >Email :</label>
      <input
        type="text"
        id="userEmail"
        onChange={(e) => handleValidation(e.target.value)}
      ></input>
       <br />
       {error && <div style={{color: 'red'}}>Invalid email</div>}
       
       <button type='submit' disabled = {error}>Submit</button>

    </form>
  )
}

export default App