import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>

      <div className='bg-[#0d61fd] text-white text-xl font-bold flex gap-3 items-center justify-between p-3'>
        <div className='flex gap-3 items-center'>
          <img className='rounded-full w-12 h-12' src="/src/png MG.JPG" alt="" />
          <h1 className='m-2 mx-4'>MaGendas</h1>
          <p>Agendamentos</p>
          <p>Dentistas</p>
        </div>
        <div className='mx-10 flex gap-2'>
          Murilo Robetti R
          <FontAwesomeIcon icon={faChevronDown} size="1x" />
        </div>
      </div>

   



    </div>
      
  )
}

export default Header
