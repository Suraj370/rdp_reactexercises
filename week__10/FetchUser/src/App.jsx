import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetchUser from './useFetchUser'
function App() {
  const { loading, error, details } = useFetchUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Age: {details.age}</p>
      {/* Render other user details */}
    </div>
  );
}

export default App
