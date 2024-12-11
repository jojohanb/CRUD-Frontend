function Editar (){

    return (
        <div>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Digite seu nome completo. . ." />
            <select name="Dentistas" id="Dentistas">
                <option value="Dr. Antônio Almeida">Antônio Almeida</option>
                <option value="Dra. Ana Beatriz">Ana Beatriz</option> 
                <option value="Selecione um medico" selected>Selecione um Dentista</option>
            </select>
            <select name="Serviço" id="Serviço">
                <option value="Selecione um serviço" selected>Selecione um Serviço</option>
                <option value="Clareamento">Clareamento</option>
                <option value="Consulta geral">Consulta geral</option>
                <option value="Implante dentário">Implante dentario</option>
                <option value="Tratamento de canal">Tratamento de canal</option>
            </select>
            <select name="Data/Hora" id="Data/Hora">
                <option value="01/10/2024 08:30h" selected>01/10/2024 08:30h</option>
                <option value="01/10/2024 10:30h">01/10/2024 10:30h</option>
                <option value="01/10/2024 15:00h">01/10/2024 15:00h</option>
                <option value="05/10/2024 08:30h">05/10/2024 08:30h</option>
                <option value="05/10/2024 10:30h">05/10/2024 10:30h</option>
                <option value="05/10/2024 15:30h">01/10/2024 15:30h</option>
            </select>
        </div>
    )
}

export default Editar 