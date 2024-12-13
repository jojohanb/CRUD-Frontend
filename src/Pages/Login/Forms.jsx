import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Forms() {
  // PARTE DA VALIDACAO DOS CAMPOS
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleEnviar = (e) => {
    e.preventDefault();

    if (email && senha) {
      navigate('/');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="border border-gray-300 shadow-lg rounded-lg bg-white flex w-4/12 h-[600px] flex-col items-center gap-6 p-6">
        <h1 className="font-bold text-3xl text-sky-600">MaGendas</h1>
        <h3 className="text-slate-500 text-center text-lg">
          Gerenciamento de agendas prático
        </h3>
        <div className="flex justify-center items-center flex-col gap-4 w-full">
          <p className="text-lg font-medium text-gray-700">Acesse sua conta</p>
          
          <form className="flex justify-center items-center flex-col gap-4 w-full" onSubmit={handleEnviar}>
            <input
              className="border border-gray-300 w-10/12 p-3 rounded-lg"
              type="email"
              placeholder="Digite seu e-mail . . ."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="border border-gray-300 w-10/12 p-3 rounded-lg"
              type="password"
              placeholder="Digite sua senha . . ."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              maxLength={7}
            />
            <button
              type="submit"
              className="w-10/12 bg-sky-600 text-white p-3 rounded-lg hover:bg-sky-300 ">
              Acessar
            </button>
          </form>

          <div className="text-sm text-slate-500">
            <p>
              Não tenho conta?
              <NavLink to="/cadastro" className="text-sky-600 hover:underline">
                Criar conta agora
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// LOGIN ESTA COMPLETOOOOOOOOOOOO
export default Forms;
