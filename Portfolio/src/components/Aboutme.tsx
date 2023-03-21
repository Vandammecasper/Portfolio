import Icon from './Icon';

import placeholder from '../assets/imgs/placeholder.png'

// import dartIcon from '../assets/svgs/dartIcon.svg'
// import { ReactComponent as DartIcon } from '../assets/svgs/dartIcon.svg'
import programmingIcon from '../assets/svgs/programmingIcon.svg'
import swimmingIcon from '../assets/svgs/swimmingIcon.svg'

export default () => {

  return (
    <div className='my-4 p-10 bg-white'>
        <h1 className='text-3xl font-bold mb-6'>About me</h1>
        <h2 className='text-xl font-bold mb-4'>Hello, I'm Tibo</h2>
        <p className='mb-6'>As a kid I've always had an interest in web development as wel as sports.Since my brother decided to study Computer Science, I decided to go my own path in something completely different- my second hobby, sport! After finishing college in 2011, I got a job as a lifeguard in a swimming pool.</p>
        <p className='mb-6'>The interest in web technology however was still strong. That's when my brother decided to give me a PHP book. Before reading it, I bought additional books about JQUERY and HTML. Yeah.... JQUERY was quite populair back then.</p>
        <p className='mb-6'>After finishing them, I was convinced I wanted to go this route. I decided to go back to school. I combined school with work, worked part time to be able to get my bachelor degree.</p>
        <h2 className='text-xl font-bold mb-4'>My hobbies</h2>
        {/* <img className='h-12 w-12 fill-orange-peel' src={dartIcon} alt="Dart arrow icon" /> */}
        {/* <DartIcon/> */}
        <img src={programmingIcon} alt="Programming icon" />
        <img src={swimmingIcon} alt="Swimmer icon" />
        <img src={placeholder} alt="Image" className=''/>
    </div>
  );
};