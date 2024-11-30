import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="bg-[#377dff] text-white text-xl font-bold flex justify-between items-center p-4 shadow-lg">
      <div className="flex gap-4 items-center">
        <img
          className="rounded-full w-12 h-12"
          src="/src/png MG.JPG"
          alt="Logo MaGendas"
        />
        <h1 className="text-2xl">MaGendas</h1>
        <nav className="hidden sm:flex gap-4">
          <a href="#" className="hover:underline">
            Agendamentos
          </a>
          <a href="#" className="hover:underline">
            Dentistas
          </a>
        </nav>
      </div>
      <div className="flex gap-2 items-center">
        <p>Murilo Robetti R</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </header>
  );
}

export default Header;
