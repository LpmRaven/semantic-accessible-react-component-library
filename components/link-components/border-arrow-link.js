import React from 'react';
import './border-arrow-link.scss';

const BorderArrowLink = ({ children }) => {
    return (
        <a className="button e-link--border e-link--arrow">
            {children}
        </a>
    )
};


export default BorderArrowLink;