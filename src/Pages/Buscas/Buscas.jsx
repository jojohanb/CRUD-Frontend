// IMPORTAÇOES
import { NavLink } from 'react-router-dom';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

function Buscas() {
  const dentistas = [
    'Dr. Antônio Almeida',
    'Dra. Ana Beatriz',
  ];

  return (
    <div>
      <header className="bg-[#377dff] text-white text-xl font-bold flex justify-between items-center p-4 shadow-lg">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-full w-12 h-12"
            src="/MG.JPG" 
            alt="Logo MaGendas"
          />
          <h1 className="text-2xl">MaGendas</h1>
          <nav className="hidden sm:flex gap-4">
            <NavLink to="/" className={'hover:underline'}>
              Agendamentos
            </NavLink>

            <NavLink to="/buscas" className={'hover:underline'}>
              Dentistas
            </NavLink>
          </nav>
        </div>
        <div className="flex gap-2 items-center">
          <p>Murilo R. Robetti</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </header>

      <section className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex gap-4 items-center">
          <h1 className="font-bold text-xl text-gray-800">Agendamentos</h1>
        </div>
        <div className="flex items-center gap-4">
          <input className='p-2 border-2 rounded-md w-72' type="text" placeholder='Buscar por nomes de dentistas . . .' />
          <button className="p-2 bg-[#0d61fd] text-white rounded-lg hover:bg-[#0b4fcc]">
            Filtrar
          </button>
        </div>
      </section>

      <div className="p-4">
        <div className="flex justify-between border-b-2 border-blue-500 pb-2 text-blue-600 font-bold">
          <p>Dentistas</p>
          <p>Ações</p>
        </div>
        {dentistas.map((dentista, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b-2 border-gray-200 py-4 text-gray-700"
          >
            <p>{dentista}</p>
            <div className="flex gap-2">
              <button className="text-red-500 hover:text-red-700">
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <button className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-[#2e77ff] text-white p-5 fixed bottom-0 w-full text-center">
        <p className="text-sm"> MaGendas - Faça seus Agendamentos conosco</p>
      </footer>
    </div>
  );
}

export default Buscas;
