'use client';

import { useState, useEffect } from 'react';
import DiceFace from './components/DiceFace';

export default function Page() {
  const [numero, setNumero] = useState(1);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 6) + 1;
    setNumero(novoNumero);
  };

  useEffect(() => {
    gerarNumero();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Dado</h1>

      <h2>Número: {numero}</h2>

      {/* 🎲 Face do dado */}
      <DiceFace value={numero} />

      <button
        onClick={gerarNumero}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
         Rolar dado
      </button>
    </div>
  );
}