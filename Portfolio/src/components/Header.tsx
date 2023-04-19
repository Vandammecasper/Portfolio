import { useState } from 'react'
import { Settings, Home } from 'lucide-react';

import { Link } from 'react-router-dom';

import "../../src/assets/styles/mobileNavigation.scss"

interface Props {
  title: string,
  }

export default ({title}:Props) => {
  const [active, setActive] = useState('Home');

  const body = document.querySelector("body");

  const handleClick = () => {
    if(body) body.classList.toggle("has-mobile-nav");
  }

  const selectHome = () => {
    setActive('Home');
  }

  const selectAbout = () => {
    setActive('About me');
  }

  const selectLearning = () => {
    setActive('Learning Adventure');
  }

  const selectProjects = () => {
    setActive('Projects');
  }

  return (
    <header className="flex place-content-between bg-white px-4 content-center text-center place-items-center h-12 shadow-header xl:h-16 xl:px-6 2xl:px-24">
      <Link to='/' onClick={selectHome}><h1 className='text-2xl font-medium xl:text-3xl'>{title}</h1></Link>
      <div className='hidden sm:flex xl:text-xl'>
        <ul>
          {active === 'About me' ?
            <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/about'>About me</Link></li> :
            <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/about' onClick={selectAbout}>About me</Link></li>}

          {active === 'Learning Adventure' ?
            <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/learning'>Learning Adventure</Link></li> :
            <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/learning' onClick={selectLearning}>Learning Adventure</Link></li>}
          
          {active === 'Projects' ?
            <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/projects'>Projects</Link></li> :
            <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/projects' onClick={selectProjects}>Projects</Link></li>}

        </ul>
      </div>
      <div className="c-header__mobile-nav-trigger sm:hidden">
        <button className="o-button-reset c-nav-trigger js-toggle-nav" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                <path className="c-nav-trigger__svg" id="navbar_mobile" d="M3,24H27V21H3v3Zm0-7.5H27v-3H3v3ZM3,6V9H27V6Z" transform="translate(-3 -6)" fill="" fill-rule="evenodd"/>
              </svg>
        </button>
      </div>
    </header>
  );
};