import Icon from './Icon';

import placeholder from '../assets/imgs/placeholder.png'

import dartIcon from '../assets/svgs/dartIcon.svg'

export default () => {

  return (
    <div className=''>
        <h1 className=''>Title</h1>
        <h2 className=''>Subtitle</h2>
        <p className=''>Paragraph 1</p>
        <p className=''>Paragraph 2</p>
        <p className=''>Paragraph 3</p>
        <h2 className=''>Subtitle</h2>
        <img src={placeholder} alt="Image" className=''/>
    </div>
  );
};