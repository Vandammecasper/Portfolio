
import { LucideIcon, Phone } from 'lucide-react';
import { Component } from 'react';

interface Props {
    icon: LucideIcon,
    title: string,
    subtitle: string,
    title2?: string // optional parameter
    }

export default ({icon, title, subtitle, title2}:Props) => {

    const Icon = icon;

    return (
        <div className='flex py-3 place-items-center'>
            <Icon className='inline h-8 w-8 mr-4'></Icon>
            <div className='inline-block'>
                <p className='w-fit inline text-sm'>{title}</p>
                {title2 && <p className='w-fit text-sm'>{title2}</p>}
                <p className='w-fit text-sm'>{subtitle}</p>
            </div>
        </div>
    );
};
