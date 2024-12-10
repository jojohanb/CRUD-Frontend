import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';


function Inicio() {
  const data = [
    {
      paciente: 'Heber Stein',
      dentista: 'Dr.Antônio Almeida',
      servico: 'Consulta',
      dataHora: '01/10/2024 08:30h',
      valor: 'R$200,00',
    },
    {
      paciente: 'Marcos Antunes',
      dentista: 'Dra.Ana Beatriz',
      servico: 'Consulta',
      dataHora: '01/10/2024 10:00h',
      valor: 'R$250,00',
    },
  ];


  return (
    <div>
      {/* CABEÇA */}
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

    {/* CORPO 1 */}

    <section className="flex justify-between items-center p-4 border-b border-gray-300">
      <div className="flex gap-4 items-center">
        <h1 className="font-bold text-xl text-gray-800">Agendamentos</h1>
        <button className="p-2 text-[#0d61fd] border border-[#0d61fd] rounded-lg hover:bg-blue-100">
          Novo Agendamento
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 border rounded-lg flex items-center gap-1">
          01/10/2024
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <span>até</span>
        <button className="p-2 border rounded-lg flex items-center gap-1">
          10/10/2024
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className="p-2 border rounded-lg flex items-center gap-1">
          Todos os dentistas
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <button className="p-2 bg-[#0d61fd] text-white rounded-lg hover:bg-[#0b4fcc]">
          Filtrar
        </button>
      </div>
    </section>

    {/* CORPO 2 */}

    <div className="p-4">
      <div className="flex justify-between border-b-2 border-blue-500 pb-2 text-blue-600 font-bold">
        <p>Paciente</p>
        <p>Dentistas</p>
        <p>Serviço</p>
        <p>Data/Hora</p>
        <p>Valor</p>
        <p>Ações</p>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b-2 border-gray-200 py-4 text-gray-700"
        >
          <p>{item.paciente}</p>
          <p>{item.dentista}</p>
          <p>{item.servico}</p>
          <p>{item.dataHora}</p>
          <p>{item.valor}</p>
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

    {/* FIM DO CORPO */}

      <footer className="bg-[#2e77ff] text-white p-5 fixed bottom-0 w-full text-center">
        <p className="text-sm"> MaGendas - Faça seus Agendamentos conosco</p>
      </footer>
      
    </div>
  );
}

export default Inicio;


