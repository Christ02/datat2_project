import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Estado para los datos simulados
  const [data, setData] = useState([]);

  // Efecto para simular la carga de datos
  useEffect(() => {
    // Simulación de datos
    const fakeData = [
      { id: 1, name: 'Dato 1', description: 'Descripción del dato 1' },
      { id: 2, name: 'Dato 2', description: 'Descripción del dato 2' }
    ];
    setData(fakeData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Proyecto de Datos 2</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
