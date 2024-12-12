import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Cadastro() {
  // MESMA COISA FEITA EM LOGIN PARTE DA VALIDACAO DOS CAMPOS
  const [nome, setNome] = useState('');
  const [emailCadastro, setEmailCadastro] = useState('');
  const [senhaCadastro, setSenhaCadastro] = useState('');
  const [confirmacao, setConfirmacao] = useState ('');
  const navigate = useNavigate();

  const handleEnviarCadastro = (e) => {
    e.preventDefault();
  
    if (nome && emailCadastro && senhaCadastro && confirmacao) {
      if (senhaCadastro === confirmacao) {
        console.log("Formulário validado! Navegando para a página inicial.");
        navigate("/");
      } else {
        alert("As senhas não coincidem.");
      }
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="border border-gray-300 shadow-lg rounded-lg bg-white flex w-4/12 h-[650px] flex-col items-center gap-6 p-6">
        <h1 className="font-bold text-3xl text-sky-600">MaGendas</h1>
        <h3 className="text-slate-500 text-center text-lg">
          Gerenciamento de agendas prático
        </h3>
        <div className="flex justify-center items-center flex-col gap-4 w-full">
          <p className="text-lg font-medium text-gray-700">Criar nova conta</p>

          <form className='flex justify-center items-center flex-col gap-4 w-full' onSubmit={handleEnviarCadastro}>
            <input
              className="border border-gray-300 w-10/12 p-3 rounded-lg "
              type="text"
              placeholder="Digite seu nome . . ."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <input
              className="border border-gray-300 w-10/12 p-3 rounded-lg "
              type="email"
              placeholder="Digite seu e-mail . . . "
              value={emailCadastro}
              onChange={(e) => setEmailCadastro(e.target.value)}
              required
            />
            <input
              className="border border-gray-300 w-10/12 p-3 rounded-lg "
              type="password"
              placeholder="Digite sua senha . . . "
              value={senhaCadastro}
              onChange={(e) => setSenhaCadastro(e.target.value)}
              required
              maxLength={7}
            />
            <input
              className="border border-gray-300 w-10/12 p-3 rounded-lg "
              type="password"
              placeholder="Confirme sua senha . . . "
              value={confirmacao}
              onChange={(e) => setConfirmacao(e.target.value)}
              required
              maxLength={7}
            />
            <button className="w-10/12 bg-sky-600 text-white p-3 rounded-lg hover:bg-sky-300">
              Criar Conta
            </button>
          </form>

          <div className="text-sm text-slate-500">
            <p>
              Já possui uma conta?{' '}
              <NavLink to="/login" className="text-sky-600 hover:underline">
                Fazer login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// PARTE DE CADASTRO TBM CONCLUIDAA
export default Cadastro;

