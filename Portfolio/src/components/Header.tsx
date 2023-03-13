import { useState } from 'react'
import { Settings } from 'lucide-react';

import '../assets/styles/components/header.scss'
import { Link } from 'react-router-dom';

export default () => {

  return (
    <header className="c-header">
      <h1 className='c-header__title'>Messiaen Tibo</h1>
      <ul className="c-header-links">
        <li className="c-header-links__item c-header-links__item-selected"><Link to={'/about'}>About me</Link></li>
        <li className="c-header-links__item"><Link to={'/learning'}>Learning adventure</Link></li>
        <li className="c-header-links__item"><Link to={'/projects'}>Projects</Link></li>
      </ul>
    </header>
  );
};