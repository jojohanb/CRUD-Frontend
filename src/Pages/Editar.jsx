import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Editar() {
  const [paciente, setPaciente] = useState("");
  const [dentista, setDentista] = useState("");
  const [servico, setServico] = useState("");
  const [dataHora, setDataHora] = useState("");

  const navigate = useNavigate();

  const atualizarAgendamento = async () => {
    try {
      const response = await fetch("http://localhost:3000/agendamentos", {
        method: "POST", // Use "PUT" se for uma atualização de um registro existente
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paciente,
          dentista,
          servico,
          datahora: dataHora,
        }),
      });

      if (response.ok) {
        alert("Agendamento atualizado com sucesso!");
        navigate("/"); // Redireciona para a página inicial
      } else {
        alert("Erro ao atualizar o agendamento");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao atualizar o agendamento");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border border-gray-300 shadow-lg rounded-lg bg-white flex w-4/12 h-auto flex-col items-center gap-6 p-6">
        <h1 className="font-bold text-3xl text-sky-600">Editar Agendamento</h1>
        <h3 className="text-slate-500 text-center text-lg">
          Atualize os dados do seu agendamento
        </h3>
        <div className="flex flex-col items-center gap-4 w-full">
          <label
            className="text-lg font-medium text-gray-700 self-start pl-6"
            htmlFor="nome"
          >
            Nome
          </label>
          <input
            className="border border-gray-300 w-10/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            type="text"
            placeholder="Digite seu nome completo..."
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
          />
          <label
            className="text-lg font-medium text-gray-700 self-start pl-6"
            htmlFor="Dentistas"
          >
            Selecione um Dentista
          </label>
          <select
            className="border border-gray-300 w-10/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={dentista}
            onChange={(e) => setDentista(e.target.value)}
          >
            <option value="">Selecione um Dentista</option>
            <option value="Dr. Antônio Almeida">Antônio Almeida</option>
            <option value="Dra. Ana Beatriz">Ana Beatriz</option>
          </select>
          <label
            className="text-lg font-medium text-gray-700 self-start pl-6"
            htmlFor="Serviço"
          >
            Selecione um Serviço
          </label>
          <select
            className="border border-gray-300 w-10/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
          >
            <option value="">Selecione um Serviço</option>
            <option value="Clareamento">Clareamento</option>
            <option value="Consulta geral">Consulta geral</option>
            <option value="Implante dentário">Implante dentário</option>
            <option value="Tratamento de canal">Tratamento de canal</option>
          </select>
          <label
            className="text-lg font-medium text-gray-700 self-start pl-6"
            htmlFor="Data/Hora"
          >
            Selecione Data e Hora
          </label>
          <select
            className="border border-gray-300 w-10/12 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={dataHora}
            onChange={(e) => setDataHora(e.target.value)}
          >
            <option value="">Selecione uma Data e Hora</option>
            <option value="01/10/2024 08:30h">01/10/2024 08:30h</option>
            <option value="01/10/2024 10:30h">01/10/2024 10:30h</option>
            <option value="01/10/2024 15:00h">01/10/2024 15:00h</option>
          </select>
          <button
            className="w-10/12 bg-sky-600 text-white p-3 rounded-lg hover:bg-sky-700 transition duration-300"
            onClick={atualizarAgendamento}
          >
            Atualizar Agendamento
          </button>
        </div>
      </div>
    </div>
  );
}

export default Editar;
