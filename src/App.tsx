import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <>
    <div className="root">
    <LoginPage />
    </div>
    </>
  );
}

export default App

// To keep a react component pure:
// 1. Just return their JSX
// 2. Dont change stuff existed before rendering