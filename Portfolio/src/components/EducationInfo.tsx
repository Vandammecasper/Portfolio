

interface Props {
    title: string,
    subtitle: string,
    years: string
    }

export default ({ title, subtitle, years}:Props) => {



    return (
        <div className='mb-4'>
            <h3 className='text-base font-bold'>{title}</h3>
            <p className='text-sm'>{subtitle}</p>
            <p className='text-sm font-light'>{years}</p>
        </div>
    );
};
