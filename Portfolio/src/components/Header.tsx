import { useState } from 'react'
import { Settings } from 'lucide-react';

import { Link } from 'react-router-dom';

export default () => {

  return (
    <header className="bg-white">
      <h1 className='text-3xl'>Title</h1>
      <Link to={'/settings'}><Settings /></Link>
    </header>
  );
};