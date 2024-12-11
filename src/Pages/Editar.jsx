function Editar (){

    return (
        <div>
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Digite seu nome completo. . ." />
            <select name="Dentistas" id="Dentistas">
                <option value="Dr. Antônio Almeida">Antônio Almeida</option>
                <option value="Dra. Ana Beatriz">Ana Beatriz</option>
            </select>
        </div>

    )
}

export default Editar 