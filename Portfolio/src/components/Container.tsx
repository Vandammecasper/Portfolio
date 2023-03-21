import { Outlet } from 'react-router-dom';
import Header from './Header';

export default () => {
    return(
        <div>
            <Header title='Tibo Messiaen' />
            <Outlet/>
        </div>
    )
}