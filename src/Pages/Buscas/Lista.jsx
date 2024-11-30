import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

function Lista() {
  const data = [
    {
      dentista: 'Dr. Antônio Almeida',
    },
    {
      dentista: 'Dra. Ana Beatriz',
    },
    // Adicione mais itens aqui...
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between border-b-2 border-blue-500 pb-2 text-blue-600 font-bold">
        <p>Dentistas</p>
        <p>Ações</p>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b-2 border-gray-200 py-4 text-gray-700"
        >
          <p>{item.dentista}</p>
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
  );
}

export default Lista;
