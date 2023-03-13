import '../assets/styles/components/aboutme.scss'
import { Link } from 'react-router-dom';

import { Settings } from 'lucide-react';
import Icon from './Icon';

import placeholder from '../assets/imgs/placeholder.png'

import dartIcon from '../assets/svgs/dartIcon.svg'

export default () => {

  return (
    <div className='c-aboutme-container'>
        <h1 className='c-aboutme-title'>Title</h1>
        <h2 className='c-aboutme-subtitle'>Subtitle</h2>
        <p className='c-aboutme-paragraph'>Paragraph 1</p>
        <p className='c-aboutme-paragraph'>Paragraph 2</p>
        <p className='c-aboutme-paragraph'>Paragraph 3</p>
        <h2 className='c-aboutme-subtitle'>Subtitle</h2>
        <Icon icon={dartIcon}/>
        <img src={placeholder} alt="Image" className='c-aboutme-img'/>
    </div>
  );
};