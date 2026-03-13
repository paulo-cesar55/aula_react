
    'use client'; 
import { useState, useEffect } from 'react';

export default function NumeroAleatorio() {
  const [numero, setNumero] = useState(0);


  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100) + 1;
    setNumero(novoNumero);
  };

  
  useEffect(() => {
    gerarNumero();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Número Aleatório: {numero}</h1>
      <button 
        onClick={gerarNumero}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Gerar Novo Número
      </button>
    </div>
  );
}

