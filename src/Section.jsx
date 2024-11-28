import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Section(){
    return(
        <div className='flex justify-between'>

            <div className='flex gap-4 m-2 items-center'>
                <h1 className=' font-bold text-xl '>Agendamentos</h1>
                <p className=' border-2 p-2 rounded-lg border-[#0d61fd] text-[#0d61fd]'>Novo Agendamento</p>
            </div>
            <div className='flex items-center m-4 gap-4'>
                <p className='border-2 p-2 rounded-lg'>01/10/2024 <FontAwesomeIcon icon={faChevronDown} size="1x" /></p>
                <p>até</p>
                <p className='border-2 p-2 rounded-lg'>10/10/2024 <FontAwesomeIcon icon={faChevronDown} size="1x" /></p>
                <p className='border-2 p-2 rounded-lg'>Todos os dentistas <FontAwesomeIcon icon={faChevronDown} size="1x" /></p>
                <button className='border-2 p-2 rounded-lg text-white bg-[#0d61fd] border-[#0d61fd]'>Filtrar</button>
            </div>
        </div>

    )
}
export default Section