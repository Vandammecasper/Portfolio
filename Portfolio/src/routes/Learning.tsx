import Header from '../components/Header'
import Title from '../components/Title'
import SeperatorLine from '../components/SeperatorLine'
import LearningCard from '../components/LearningCard'


function Learning() {

  return (
    <div className="Learning">
        <Header title='Tibo Messiaen' target='Learning Adventure'/>

        <Title title="My learning adventure"/>

        <div className='max-w-6xl m-auto'>
          <SeperatorLine year="2023"/>
          <LearningCard side='left' title='ICT year 1' subtitle='C#, C++, arduino' content="I started programming in my 5th year of high school. We learned the activate led's with arduino and micro controllers. And we started creating our first console applications with C# to get used to the syntax."/>

          <SeperatorLine year="2023"/>
          <LearningCard side='right' title='ICT year 2' subtitle='C#, c++, arduino' content='In our second year of ICT, we went from console applications to desktop applications. And we went in depth of the c++ of how the shift registers work.'/>
          <LearningCard side='left' title='Self Learning' subtitle='C#' content='I really enjoyed the C# programmes we made and so I started creating my own C# applications with the help of youtube tutorials. I created one big dasboard application with all the different usefull features we created over the years (sorting algorithms, random number generators, ...). This was also the year that I created my first snake and tetris desktop application.'/>
        </div>
    </div>
  )
}

export default Learning
