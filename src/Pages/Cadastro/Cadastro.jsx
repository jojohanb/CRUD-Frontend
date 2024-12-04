import React from 'react';

function Cadastro() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border border-gray-300 shadow-lg rounded-lg bg-white flex w-4/12 h-[650px] flex-col items-center gap-6 p-6">
        <h1 className="font-bold text-3xl text-sky-600">MaGendas</h1>
        <h3 className="text-slate-500 text-center text-lg">
          Gerenciamento de agendas prático
        </h3>
        <div className="flex justify-center items-center flex-col gap-4 w-full">
          <p className="text-lg font-medium text-gray-700">Criar nova conta</p>
          <input
            className="border border-gray-300 w-10/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            placeholder="Digite seu nome..."
          />
          <input
            className="border border-gray-300 w-10/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="email"
            placeholder="Digite seu e-mail..."
          />
          <input
            className="border border-gray-300 w-10/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="password"
            placeholder="Digite sua senha..."
          />
          <input
            className="border border-gray-300 w-10/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="password"
            placeholder="Confirme sua senha..."
          />
          <button className="w-10/12 bg-sky-600 text-white p-3 rounded-lg hover:bg-sky-700 transition duration-300">
            Criar Conta
          </button>
          <div className="text-sm text-slate-500">
            <p>
              Já possui uma conta?{' '}
              <a href="" className="text-sky-600 hover:underline">
                Fazer login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;

