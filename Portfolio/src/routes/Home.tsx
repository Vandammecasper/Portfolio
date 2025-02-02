import Header from '../components/Header'

import { Link } from 'react-router-dom';

import { FileDown, Phone, Send, Linkedin , Mail, MapPin, Globe, Cake, UserPlus } from 'lucide-react';

import profileIcon from '../assets/imgs/profileIcon.png'
import cv from '../assets/pdfs/Tibo_Messiaen_CV.pdf'
import ContactInfo from '../components/ContactInfo';
import EducationInfo from '../components/EducationInfo';
import Title from '../components/Title';

function Home() {

  return (
    <div className="Home">

      <Title title="Welcome"/>

      <p className='text-center text-sm px-4 pb-4 max-w-lg m-auto xl:text-base xl:max-w-xl xl:pb-6 2xl:text-xl 2xl:max-w-2xl 2xl:pb-8'>
        Hey, I am Tibo Messiaen, a full stack web & app developer from Belgium. I am currently studying at Howest in Kortrijk, Belgium. I am a hard working person and I am always willing to learn new things.
      </p>

      <a href={cv} target="_blank" className='flex place-items-center place-content-center bg-caribbean-current w-fit m-auto text-white rounded mb-16 hover:text-orange-peel'>
        <FileDown className='text-2xl m-4'/>
        <p className='m-4 ml-0'>DOWNLOAD MY CV</p></a>

      <div className='xl:flex xl:mx-24'>
        <div className='w-full bg-caribbean-current text-center max-w-md m-auto xl:inline-block xl:h-200 xl:mt-0 xl:mr-6'>
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

            <div className='bg-white p-8 mb-16 xl:mb-0'>
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

              <Link className='flex place-items-center place-content-center bg-caribbean-current w-fit m-auto rounded text-white hover:text-orange-peel' to={'/downloads/cv'}>
                <UserPlus className='text-2xl m-4'/>
                <p className='m-4 ml-0'>DOWNLOAD MY VCARD</p>
              </Link>

            </div>

        </div>
        <div className='bg-white relative overflow-hidden p-12 m-auto mb-16 max-w-lg xl:h-200 xl:max-w-3xl xl:flex xl:flex-start'>
          <div className='inline-block xl:mr-12'>
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
          </div>

          <div className='inline-block'>
            <h2 className='text-2xl text-center font-bold mb-6 mt-12 xl:mt-0'>Skills</h2>

            <ol className='list-disc pl-4'>
              <li>Full stack developer</li>
              <li>App developer</li>
              <li>Desktop applications</li>
            </ol>

          </div>

          <div className='invisible xl:visible absolute bg-caribbean-current h-48 w-200 -rotate-45 bottom-0'>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
