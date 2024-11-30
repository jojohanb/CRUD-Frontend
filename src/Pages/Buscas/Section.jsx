
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Section() {
  return (
    <section className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="flex gap-4 items-center">
        <h1 className="font-bold text-xl text-gray-800">Agendamentos</h1>
        <button className="p-2 text-[#0d61fd] border border-[#0d61fd] rounded-lg hover:bg-blue-100">
          Novo Dentista
        </button>
      </div>
      <div className="flex items-center gap-4">
        <input className=' p-2 border-2 rounded-md w-72' type="text" placeholder='Buscar por nomes de dentistas . . .' />
        <button className="p-2 bg-[#0d61fd] text-white rounded-lg hover:bg-[#0b4fcc]">
          Filtrar
        </button>
      </div>
    </section>
  );
}

export default Section;
