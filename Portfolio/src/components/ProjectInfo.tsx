import { HTMLAttributeAnchorTarget, HtmlHTMLAttributes, ReactElement } from "react";

interface Props{
    title:string;
    paragraph:string;
    // make technologies an array of dictionaries with the key being the title and the value being an array of technologies
    technologies: {title:string, technologies:string[]}[];
    footnote?:string;
    footnoteLink?:ReactElement<HTMLAttributeAnchorTarget>;
}

export default ({title, paragraph, technologies, footnote, footnoteLink}:Props) => {
    return (
        <div>
            <h1 className='text-2xl font-bold mb-4'>{title}</h1>
            <p className='text-xl font-regular pb-2'>{paragraph}</p>
            <div className='mb-6 bg-white border-l-6 border-caribbean-current max-w-xl'>
                <h1 className="text-lg p-6">Technologies</h1>
                <div className="flex flex-wrap pb-6">
                    {technologies.map((technology, index) => {
                        return (
                            <div key={index} className='flex flex-col px-6'>
                                <h3 className=''>{technology.title}:</h3>
                                <ul className='list-disc list-inside'>
                                    {technology.technologies.map((tech, index) => {
                                        return (
                                            <li key={index}>{tech}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                                    
                </div>
            </div>
            <p className="flex">{footnote}<p className='underline text-caribbean-current hover:text-orange-peel'>{footnoteLink}</p></p>
        </div>
    );
  };