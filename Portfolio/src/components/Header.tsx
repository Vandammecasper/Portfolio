import { useState } from 'react'
import { Settings } from 'lucide-react';

import '../assets/styles/components/header.scss'
import { Link } from 'react-router-dom';

export default () => {

  return (
    <header className="c-header">
      <h1 className='c-header__title'>Messiaen Tibo</h1>
      <ul className="c-header-links">
        <li className="c-header-links__item c-header-links__item-selected">About me</li>
        <li className="c-header-links__item">Learning adventure</li>
        <li className="c-header-links__item">Projects</li>
      </ul>
    </header>
  );
};