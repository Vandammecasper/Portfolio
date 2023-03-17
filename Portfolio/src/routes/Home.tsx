import Header from '../components/Header'

import { Link } from 'react-router-dom';

import { FileDown, Phone, Send, Linkedin , Mail, MapPin, Globe, Cake } from 'lucide-react';

import profileIcon from '../assets/imgs/profileIcon.png'

function Home() {

  return (
    <div className="Home">
      <Header title='Tibo Messiaen'/>

      <h1 className='text-2xl text-center pt-4 pb-5 font-bold text-caribbean-current'>Welcome</h1>

      <p className='text-sm px-4 pb-4'>
        Welcome to my online portfolio. Below you can find my online Curriculum Vitae.
        In the menu you can choose to read more about my hard and soft skills,
        discover my learning adventure or have a look at some of my projects
      </p>

      <Link className='flex place-items-center place-content-center bg-caribbean-current w-fit m-auto text-white rounded mb-16' to={'/downloads/cv'}>
        <FileDown className='text-2xl m-4'/>
        <p className='m-4 ml-0'>DOWNLOAD MY CV</p>
      </Link>

      <div className='w-full bg-white'>
        <div className='bg-caribbean-current text-center'>
          <div className='p-10 text-white border-b border-whtie'>
            <img src={profileIcon} alt="Profile icon" className='rounded-full w-16 h-16 m-auto mb-4'/>

            <h2 className='text-2xl'>Tibo Messiaen</h2>

            <h3 className='text-sm'>Full stack web & app developer</h3>

          </div>

          <div className='flex justify-evenly h-20 text-white'>
            <div className='w-full'>
              <Phone className='fill-white stroke-caribbean-current'/>
              <p>links</p>
            </div>

            <div className='border-x w-full'>
              <Send className='fill-white stroke-caribbean-current'/>
              <p>midden</p>
            </div>

            <div className='w-full'>
              <Linkedin className='fill-white stroke-caribbean-current'/>
              <p>rechts</p>
            </div>

          </div>

          <div className='bg-white p-8 mb-16'>
            <div className='flex px-6 py-3 place-items-center'>
              <Phone className='inline h-8 w-8 mr-4'/>
              <div className='inline-block'>
                <p className='w-fit inline text-sm'>+32 496 02 59 82</p>
                <p className='w-fit text-sm'>Mobile</p>
              </div>
            </div>

            <div className='flex px-6 py-3 place-items-center'>
              <Mail className='inline h-8 w-8 mr-4'/>
              <div className='inline-block'>
                <p className='w-fit inline text-sm'>tibomessiaen@gmail.com</p>
                <p className='w-fit text-sm'>Email</p>
              </div>
            </div>

            <div className='flex px-6 py-3 place-items-center'>
              <MapPin className='inline h-8 w-8 mr-4'/>
              <div className='inline-block text-left'>
                <p className='w-fit inline text-sm'> Sint-Eloois-Vijve - West-Flanders</p>
                <p className='w-fit text-sm xsm:inline'>- Belgium</p>
                <p className='w-fit text-sm'>Mobile</p>
              </div>
            </div>

            <div className='flex px-6 py-3 place-items-center'>
              <Globe className='inline h-8 w-8 mr-4'/>
              <div className='inline-block text-left'>
                <p className='w-fit inline text-sm'> www.tibomessiaen.be</p>
                <p className='w-fit text-sm'>Website</p>
              </div>
            </div>

            <div className='flex px-6 py-3 place-items-center'>
              <Cake className='inline h-8 w-8 mr-4'/>
              <div className='inline-block text-left'>
                <p className='w-fit inline text-sm'> 26/02/2003</p>
                <p className='w-fit text-sm'>Birthday</p>
              </div>
            </div>

            <Link className='flex place-items-center place-content-center bg-caribbean-current w-fit m-auto text-white rounded' to={'/downloads/cv'}>
              <FileDown className='text-2xl m-4'/>
              <p className='m-4 ml-0'>DOWNLOAD MY CV</p>
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
