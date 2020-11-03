import React from 'react';
import './homepage.style.scss';
import Directory from "./../Components/Directory/directory";

const homepage = (props) => {
    console.log(props)
    return (
        <div className='homepage'>
           <Directory />
        </div>
    )
}

export default homepage;
