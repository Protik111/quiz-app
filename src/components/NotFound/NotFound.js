import React from 'react';
import notfound from '../../images/not-found.jpg';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div clasName="notfound">
            <img className="notfound-img" src={notfound} alt="" />
        </div>
    );
};

export default NotFound;