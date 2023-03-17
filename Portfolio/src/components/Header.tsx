import { useState } from 'react'
import { Settings, Home } from 'lucide-react';

import { Link } from 'react-router-dom';

export default ({title}:{title:string}) => {

  return (
    <header className="flex place-content-between bg-white py-2 px-4 content-center text-center place-items-center h-12 shadow-header">
      <h1 className='text-2xl font-medium'>{title}</h1>
      <div className='hidden xsm:flex'>
        <ul>
          <li className='inline p-2'>
            link
          </li>
          <li className='inline p-2'>
            link2
          </li>
        </ul>
      </div>
      <div className='flex xsm:hidden'>
        <p className='text-6xl'>=</p>
      </div>
    </header>
  );
};