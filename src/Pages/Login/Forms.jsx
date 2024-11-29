import React from 'react';

function Forms(){
    
    return(
        <div>
            <h1>MaGendas</h1>
            <h3>Gerenciamento de agendas prático</h3>
            <p>Acesse sua conta</p>
            <input type="email" placeholder="Digite seu e-mail..." />
            <input type="password" placeholder="Digite sua senha..."/>
            <button>Acessar</button>
            <p>Não tenho conta. Criar conta agora</p>
        </div>
    )

}

export default Forms