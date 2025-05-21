import React, { useState } from 'react';

const FormPost = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [registros, setRegistros] = useState([]); // ← Aqui ficam os cadastros

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoRegistro = { nome, cpf };
    setRegistros([...registros, novoRegistro]);

    setNome('');
    setCpf('');
  };

  return (
    <div>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {/* Lista de cadastros */}
      <h3>Registros:</h3>
      <ul>
        {registros.map((item, index) => (
          <li key={index}>
            {item.nome} - {item.cpf}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormPost;
