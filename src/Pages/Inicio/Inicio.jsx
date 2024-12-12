import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

function Inicio() {
  const [data, setData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await fetch("http://localhost:3333/agendamentos");
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error("Erro ao buscar agendamentos");
        }
      } catch (error) {
        console.error("Erro de conexão com o servidor:", error);
      }
    };

    fetchAgendamentos();
  }, []);

  const handleEdit = (item) => {
    setEditingItem(item);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditingItem(null);
  };

  const handleUpdate = async (updatedItem) => {
    try {
      const response = await fetch(`http://localhost:3333/agendamentos/${updatedItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
      if (response.ok) {
        const result = await response.json();
        setData((prevData) =>
          prevData.map((item) =>
            item.id === result.id ? { ...item, ...result } : item
          )
        );
        setEditMode(false);
        setEditingItem(null);
      } else {
        console.error("Erro ao atualizar agendamento");
      }
    } catch (error) {
      console.error("Erro de conexão com o servidor:", error);
    }
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <header className="bg-[#377dff] text-white text-xl font-bold flex justify-between items-center p-4 shadow-lg">
        <div className="flex gap-4 items-center">
          <img className="rounded-full w-12 h-12" src="/MG.JPG" alt="Logo MaGendas" />
          <h1 className="text-2xl">MaGendas</h1>
          <nav className="hidden sm:flex gap-4">
            <NavLink to="/" className="hover:underline">
              Agendamentos
            </NavLink>
            <NavLink to="/buscas" className="hover:underline">
              Dentistas
            </NavLink>
          </nav>
        </div>
        <div className="flex gap-2 items-center">
          <p>Murilo Robetti R</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={handleGoToLogin}
          />
        </div>
      </header>

      <section className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex gap-4 items-center">
          <h1 className="font-bold text-xl text-gray-800">Agendamentos</h1>
          <NavLink
            to="/agendamentos"
            className="p-2 text-[#0d61fd] border border-[#0d61fd] rounded-lg hover:bg-blue-100"
          >
            Novo Agendamento
          </NavLink>
        </div>
      </section>

      <div className="p-4">
        <div className="flex justify-between border-b-2 border-blue-500 pb-2 text-blue-600 font-bold text-sm">
          <p className="w-1/5">Paciente</p>
          <p className="w-1/5">Dentista</p>
          <p className="w-1/5">Serviço</p>
          <p className="w-1/5">Data/Hora</p>
          <p className="w-1/5">Valor</p>
          <p className="w-1/5">Ações</p>
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b-2 border-gray-200 py-4 text-gray-700"
          >
            <p className="w-1/5">{item.paciente}</p>
            <p className="w-1/5">{item.dentista}</p>
            <p className="w-1/5">{item.servico}</p>
            <p className="w-1/5">{item.dataHora}</p>
            <p className="w-1/5">{item.servico === "Consulta" ? "R$200,00" : "R$250,00"}</p>
            <div className="flex gap-2 w-1/5 justify-center">
              <button className="text-red-500 hover:text-red-700">
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleEdit(item)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editMode && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="font-bold text-xl text-gray-800 mb-4">Editar Agendamento</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editingItem);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block font-semibold">Paciente:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={editingItem.paciente}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, paciente: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Dentista:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={editingItem.dentista}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, dentista: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Serviço:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={editingItem.servico}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, servico: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Data/Hora:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={editingItem.dataHora}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, dataHora: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block font-semibold">Valor:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={editingItem.servico === "Consulta" ? "R$200,00" : "R$250,00"}
                disabled
              />
            </div>
            <div className="flex gap-4">
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                Atualizar
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600"
                onClick={handleCancel}
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
