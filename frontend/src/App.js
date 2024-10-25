import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fazer a requisição para o backend
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/message`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Gerência de Configuração e Manutenção de Software</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;