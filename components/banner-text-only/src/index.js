import React from 'react';
import './banner-text-only.scss';

const BannerTextOnly = ({ textColor, backgroundColor }) => {
    return (
        <div className="c-banner-text-only" style={{ color: textColor, backgroundColor: backgroundColor }}>
            <ul className="g-grid__container g-grid__container--1/3-1/3-1/3 c-banner-text-only__list">
                <li className="g-grid__item g-grid__item--one c-banner-text-only__list-item">Best prices online</li>
                <li className="g-grid__item g-grid__item--two c-banner-text-only__list-item">Track price changes</li>
                <li className="g-grid__item g-grid__item--three c-banner-text-only__list-item">Independent reviews</li>
            </ul>
        </div>
    );
};

export default BannerTextOnly;
