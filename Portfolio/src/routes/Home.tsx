import Header from '../components/Header'

import { Link } from 'react-router-dom';

import { FileDown, Phone, Send, Linkedin , Mail, MapPin, Globe, Cake, UserPlus } from 'lucide-react';

import profileIcon from '../assets/imgs/profileIcon.png'
import ContactInfo from '../components/ContactInfo';
import EducationInfo from '../components/EducationInfo';

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

      <div className='w-full bg-caribbean-current text-center'>
          <div className='p-10 text-white border-b border-whtie'>
            <img src={profileIcon} alt="Profile icon" className='rounded-full w-16 h-16 m-auto mb-4'/>

            <h2 className='text-2xl'>Tibo Messiaen</h2>

            <h3 className='text-sm'>Full stack web & app developer</h3>

          </div>

          <div className='flex justify-evenly text-white p-4'>
            <div className='w-full'>
              <Phone className='fill-white stroke-caribbean-current w-12 h-12 m-auto'/>
              <p>Call</p>
            </div>

            <div className='border-x w-full'>
              <Send className='fill-white stroke-caribbean-current w-12 h-12 m-auto'/>
              <p>Email</p>
            </div>

            <div className='w-full'>
              <Linkedin className='fill-white stroke-caribbean-current w-12 h-12 m-auto'/>
              <p>linked-in</p>
            </div>

          </div>

          <div className='bg-white p-8 mb-16'>
            <ContactInfo icon={Phone}
              title="+32 471 62 09 82"
              subtitle="Mobile"/>

            <ContactInfo icon={Mail}
              title="tibomessiaen@gmail.com"
              subtitle="Email"/>

            <ContactInfo icon={MapPin}
              title="Sint-Eloois-Vijve - West-Flanders"
              title2="- Belgium"
              subtitle="Location"/>

            <ContactInfo icon={Globe}
              title="www.tibomessiaen.be"
              subtitle="Website"/>

            <ContactInfo icon={Cake}
              title="26/02/2003"
              subtitle="Birthday"/>

            <Link className='flex place-items-center place-content-center bg-caribbean-current w-fit m-auto text-white rounded' to={'/downloads/cv'}>
              <UserPlus className='text-2xl m-4'/>
              <p className='m-4 ml-0'>DOWNLOAD MY VCARD</p>
            </Link>

          </div>

      </div>
      <div className='bg-white p-12 mb-16'>
        <h2 className='text-2xl text-center font-bold mb-6'>Education</h2>

        <EducationInfo title='Howest - Bechelor'
          subtitle='Multimedia & creative technologies - Next Web Developer'
          years='2021 - 2024'/>

        <EducationInfo title='VTI Waregem'
          subtitle='Industrial Information and Communication Technologie'
          years='2019 - 2021'/>

        <EducationInfo title='VTI Waregem'
          subtitle='Electricity and Electronics'
          years='2017 - 2019'/>

        <EducationInfo title='VTI Waregem'
          subtitle='Industrial Sciences'
          years='2015 - 2017'/>

        <h2 className='text-2xl text-center font-bold mb-6 mt-12'>Skills</h2>
        <ol className='list-disc pl-4'>
          <li>Full stack developer</li>
          <li>App developer</li>
          <li>Desktop applications</li>
        </ol>
      </div>
    </div>
  )
}

export default Home
