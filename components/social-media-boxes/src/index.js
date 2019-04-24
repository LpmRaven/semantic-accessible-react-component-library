import React from 'react';
import './social-media-boxes.scss';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io';

const filterNull = (array) => {
    return array.filter(function (el) {
        return el != null;
    });
};

const getSocialIcon = (socialMediaType) => {
    if (socialMediaType === "instagram") return <IoLogoInstagram size={25} />;
    if (socialMediaType === "facebook") return <IoLogoFacebook size={25} />;
    if (socialMediaType === "linkedin") return <IoLogoLinkedin size={25} />;
    if (socialMediaType === "twitter") return <IoLogoTwitter size={25} />;
    if (socialMediaType === "youtube") return <IoLogoYoutube size={25} />;
};

const getLinkText = (socialMediaType) => {
    if (socialMediaType === "instagram") return "Instagram";
    if (socialMediaType === "facebook") return "Facebook";
    if (socialMediaType === "linkedin") return "LinkedIn";
    if (socialMediaType === "twitter") return "Twitter";
    if (socialMediaType === "youtube") return "Youtube";
};

const getSocialMediaType = (linkHref) => {
    if (linkHref.includes("instagram")) return "instagram";
    if (linkHref.includes("facebook")) return "facebook";
    if (linkHref.includes("linkedin")) return "linkedin";
    if (linkHref.includes("twitter")) return "twitter";
    if (linkHref.includes("youtube")) return "youtube";
};

const renderLink = (linkHref) => {
    const socialMediaType = getSocialMediaType(linkHref);
    const linkText = getLinkText(socialMediaType);
    const linkClass = `c-social-media-boxes__link c-social-media-boxes__${socialMediaType}`;

    return (
        <a className={linkClass} href={linkHref}>{getSocialIcon(socialMediaType)}{linkText}</a>
    );
};

const renderItems = (socialLinks) => {
    return socialLinks.map((linkHref, index) => {
        const itemClass = `c-social-media-boxes__grid-item c-social-media-boxes__grid-item--${index + 1}`;

        if (linkHref) {
            return (
                <li className={itemClass}>
                    {renderLink(linkHref)}
                </li>
            );
        }
    });
};

const SocialMediaBoxes = ({ noColumns, instagramLink, facebookLink, linkedinLink }) => {
    const allSocialLinks = [instagramLink, facebookLink, linkedinLink];
    const socialLinks = filterNull(allSocialLinks);
    const noRows = Math.floor(socialLinks.length / noColumns);

    let columnClass = "c-social-media-boxes__grid-columns--3-1";
    if (noColumns && noRows) {
        if (noColumns === 1 || noColumns === 2 || noColumns === 3 || noColumns === 4) {
            columnClass = `c-social-media-boxes__grid-columns--${noColumns}-${noRows}`;
        }
    }

    return (
        <ul className={`c-social-media-boxes__grid ${columnClass}`}>
            {renderItems(socialLinks)}
        </ul>
    );
};


export default SocialMediaBoxes;