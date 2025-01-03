import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

function Inicio() {
  const [dados, setDados] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [itemEditando, setItemEditando] = useState(null);
  const [termoBusca, setTermoBusca] = useState(''); 
  const navegar = useNavigate();

// Aqui é a parte de pedir resultados pro bd

  useEffect(() => {
    const buscarAgendamentos = async () => {
      console.log("fetch")
      try {
        const resposta = await fetch("https://crud-jnhc.onrender.com/agendamentos");
        const resultado = await resposta.json();
        if (resposta.ok) {
          setDados(resultado);
        } else {
          console.error("Erro ao buscar agendamentos");
        }
      } catch (error) {
        console.log("erro catch")
        console.error("Erro:", error);
      }
    };
    buscarAgendamentos();
  }, []);
  
  

// aqui é parte do modo edicao 

  const manipularAtualizacao = async () => {
    await fetch(`https://crud-jnhc.onrender.com/agendamentos${itemEditando.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemEditando),
    });
    setModoEdicao(false);
    setDados(dados.map(item => item.id === itemEditando.id ? itemEditando : item));
  };

  const manipularEdicao = (item) => {
      setItemEditando(item);
      setModoEdicao(true);  
    };
  const Cancelar = () => setModoEdicao(false);
//Aqui é a parte do delete

  const excluirAgendamento = async (id) => {
    await fetch(`https://crud-jnhc.onrender.com/agendamentos${id}`, {
      method: 'DELETE',
    });
    setDados(dados.filter(item => item.id !== id));  
  };

  //Aqui é a parte da busca dos pacientes

  const filtrarPacientes = () => {
    return dados.filter(item => 
      item.paciente.toLowerCase().includes(termoBusca.toLowerCase())
    );
  };

  return (
    <div>
      <header className="bg-[#377dff] text-white text-xl font-bold flex justify-between items-center p-4 shadow-lg">
        <div className="flex gap-4 items-center">
          <img className="rounded-full w-12 h-12" src="/MG.JPG" alt="Logo MaGendas" />
          <h1 className="text-2xl">MaGendas</h1>
          <nav className="hidden sm:flex gap-4">
            <NavLink to="/" className="hover:underline">Agendamentos</NavLink>
            <NavLink to="/buscas" className="hover:underline">Dentistas</NavLink>
          </nav>
        </div>
        <div className="flex gap-2 items-center">
          <p>Murilo Robetti R</p>
          <FontAwesomeIcon icon={faChevronDown} onClick={() => navegar("/login")} />
        </div>
      </header>

      <section className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-bold text-xl text-gray-800">Agendamentos</h1>
          <NavLink to="/agendamentos" className="p-2 text-[#0d61fd] border border-[#0d61fd] rounded-lg hover:bg-blue-100">
            Novo Agendamento
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="p-2 text-[#0d61fd] border border-[#0d61fd] rounded-lg ">01/10/2024  
          <FontAwesomeIcon icon={faChevronDown} />
          </p>
          <p className="font-bold">até</p>
          <p className="p-2 text-[#0d61fd] border border-[#0d61fd] rounded-lg">10/10/2024
          <FontAwesomeIcon icon={faChevronDown} />
          </p>

          <div className="flex items-center gap-4">
            <input
              className='p-2 border-2 rounded-md w-72'
              type="text"
              placeholder='Buscar por nomes de pacientes . . .'
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)} 
            />
            <button
              className="p-2 bg-[#0d61fd] text-white rounded-lg hover:bg-[#0b4fcc]"
              onClick={() => filtrarPacientes()} >
              Filtrar
            </button>
          </div>
        </div>
      </section>

      <div className="p-4">
        <div className="grid grid-cols-6 gap-4 border-b-2 border-blue-500 pb-2 text-blue-600 font-bold text-sm">
          <p className="text-center">Paciente</p>
          <p className="text-center">Dentista</p>
          <p className="text-center">Serviço</p>
          <p className="text-center">Data/Hora</p>
          <p className="text-center">Valor</p>
          <p className="text-center">Ações</p>
        </div>

  {/* buscas */}
        {filtrarPacientes().map((item) => (
          <div key={item.id} className="grid grid-cols-6 gap-4 border-b-2 border-gray-200 py-4 text-gray-700">
            <p className="text-center">{item.paciente}</p>
            <p className="text-center">{item.dentista}</p>
            <p className="text-center">{item.servico}</p>
            <p className="text-center">{item.datahora}</p>
            <p className="text-center">{item.servico === "Consulta" ? "R$200,00" : "R$250,00"}</p>
            <div className="flex gap-2 justify-center">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => excluirAgendamento(item.id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => manipularEdicao(item)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
        ))}
      </div>



  {/* modoEdicao */}
      {modoEdicao && (
        <div className="p-4 bg-white rounded-md shadow-md max-w-md mx-auto border border-gray-300 mt-6">
          <h2 className="font-bold text-lg text-gray-700 mb-4 text-center">Editar Agendamento</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              manipularAtualizacao();
            }}
            className="space-y-3"
          >
            {["paciente", "dentista", "servico", "datahora"].map((campo) => (
              <div key={campo}>
                <label className="text-sm font-medium text-gray-600">
                  {`${campo[0].toUpperCase() + campo.slice(1)}:`}
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  value={itemEditando[campo]}
                  onChange={(e) => setItemEditando({ ...itemEditando, [campo]: e.target.value })}
                />
              </div>
            ))}
            <div className="flex gap-2 justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-600"
              >
                Atualizar
              </button>
              <button
                type="button"
                className="bg-red-400 text-white px-3 py-1 text-sm rounded-md hover:bg-red-500"
                onClick={Cancelar}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Inicio;
