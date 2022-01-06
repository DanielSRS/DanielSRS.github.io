import React from 'react';
import './Glass.css';

const Glass = ({children}: React.PropsWithChildren<{}>) => {
    return (
        <div className='glass'>
            {children}
        </div>
    );
}

export default Glass;