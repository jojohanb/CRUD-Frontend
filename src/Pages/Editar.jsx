import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Editar() {
  // PARTE DE VALIDACAO DOS CAMPOS, GUARDAR OS DADOS FEITA
  const [paciente, setPaciente] = useState("");
  const [dentista, setDentista] = useState("");
  const [servico, setServico] = useState("");
  const [datahora, setDatahora] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const validarCampos = () => {
    if (!paciente || !dentista || !servico || !datahora) {
      setMensagem("Por favor, preencha todos os campos.");
      return false;
    }
    setMensagem("");
    return true;
  };

  const atualizarAgendamento = async () => {
    if (!validarCampos()) return;
  
    try {
      const response = await fetch("https://crud-jnhc.onrender.com/agendamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paciente,
          dentista,
          servico,
          datahora: datahora, 
        }),
      });
  
      if (response.ok) {
        setMensagem("Agendamento criado com sucesso!");
        setTimeout(() => navigate("/"), 500); 
      } else {
        setMensagem("Erro ao criar o agendamento.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("Erro ao criar o agendamento.");
    }
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="border border-gray-300 shadow-lg rounded-lg bg-white w-96 p-6">
        <h1 className="font-bold text-3xl text-sky-600 text-center">Novo Agendamento</h1>
        <h3 className="text-slate-500 text-center text-lg mb-4">Atualize seus agendamentos</h3>

        <div className="text-center text-blue-500 mb-4">{mensagem}</div>

        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-300 p-3 rounded-lg"
            type="text"
            placeholder="Nome"
            value={paciente}
            onChange={(e) => setPaciente(e.target.value)}
            required
          />
          <select
            className="border border-gray-300 p-3 rounded-lg"
            value={dentista}
            onChange={(e) => setDentista(e.target.value)}
            required
          >
            <option value="">Selecione um Dentista</option>
            <option value="Dr. Antônio Almeida">Antônio Almeida</option>
            <option value="Dra. Ana Beatriz">Ana Beatriz</option>
          </select>

          <select
            className="border border-gray-300 p-3 rounded-lg"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            required
          >
            <option value="">Selecione um Serviço</option>
            <option value="Clareamento">Clareamento</option>
            <option value="Consulta geral">Consulta geral</option>
            <option value="Implante dentário">Implante dentário</option>
            <option value="Tratamento de canal">Tratamento de canal</option>
          </select>

          <select
            className="border border-gray-300 p-3 rounded-lg"
            value={datahora}
            onChange={(e) => setDatahora(e.target.value)}
            required
          >
            <option value="">Selecione Data e Hora</option>
            <option value="01/10/2024 08:30h">01/10/2024 08:30h</option>
            <option value="01/10/2024 10:30h">01/10/2024 10:30h</option>
            <option value="01/10/2024 15:00h">01/10/2024 15:00h</option>
          </select>

          <button
            className="w-full bg-sky-600 text-white p-3 rounded-lg hover:bg-sky-700 transition duration-300 mt-4"
            onClick={atualizarAgendamento}
          >
            Atualizar Agendamento
          </button>
        </div>
      </div>
    </div>
  );
}

// EDITAR TAMBEM ESTA CONCLUIDOOO
export default Editar;
