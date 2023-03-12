import { useState } from 'react'
import { Settings } from 'lucide-react';

import '../assets/styles/components/header.scss'
import { Link } from 'react-router-dom';

export default () => {

  return (
    <header className="c-header">
      <h1 className='c-header__title'>Title</h1>
      <p className='c-header__subtitle'>Subtitle</p>
      <Link to={'/settings'}><Settings /></Link>
    </header>
  );
};