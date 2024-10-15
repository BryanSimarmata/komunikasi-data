import React, { useState } from 'React';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('binary');
  const [output, setOutput] = useState({
    binary: '-',
    octal: '-',
    decimal: '-',
    hexadecimal: '-'
  });

  const convert = () => {
    if (!inputValue.trim()) {
      alert("Masukkan bilangan yang valid");
      return;
    }

    let decimalValue;

    switch (inputType) {
      case "binary":
        decimalValue = parseInt(inputValue, 2);
        break;
      case "octal":
        decimalValue = parseInt(inputValue, 8);
        break;
      case "decimal":
        decimalValue = parseInt(inputValue, 10);
        break;
      case "hexadecimal":
        decimalValue = parseInt(inputValue, 16);
        break;
      default:
        alert("Tipe input tidak valid");
        return;
    }

    if (isNaN(decimalValue)) {
      alert("Input tidak valid. Pastikan format input sesuai.");
      return;
    }

    setOutput({
      binary: decimalValue.toString(2),
      octal: decimalValue.toString(8),
      decimal: decimalValue.toString(10),
      hexadecimal: decimalValue.toString(16).toUpperCase()
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Konversi Sistem Bilangan kelompok 3 | komunikasi data</h2>
        
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Masukkan bilangan"
        />
        <select 
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="binary">Biner</option>
          <option value="octal">Oktal</option>
          <option value="decimal">Desimal</option>
          <option value="hexadecimal">Heksadesimal</option>
        </select>
        
        <button onClick={convert}>Konversi</button>
        
        <div className="output">
          <div><strong>Biner:</strong> <span>{output.binary}</span></div>
          <div><strong>Oktal:</strong> <span>{output.octal}</span></div>
          <div><strong>Desimal:</strong> <span>{output.decimal}</span></div>
          <div><strong>Heksadesimal:</strong> <span>{output.hexadecimal}</span></div>
        </div>
      </header>
    </div>
  );
}

export default App;