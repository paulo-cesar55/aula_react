
'use client'; 
import { useState, useEffect } from 'react';

export default function NumeroAleatorio() {
  const [numero, setNumero] = useState("- -");


  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100) + 1;
    setNumero(novoNumero);
  };

  
  useEffect(() => {
    gerarNumero();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Número Gerado: {numero}</h3>
      <button 
        onClick={gerarNumero}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Gerar Aleatório
      </button>
    </div>
  );
}

