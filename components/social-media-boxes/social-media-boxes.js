import React from 'react';
import './social-media-boxes.scss';

const getLinkText = (socialMediaType) => {
    if (socialMediaType === "instagram") return "Instagram";
    if (socialMediaType === "facebook") return "Facebook";
    if (socialMediaType === "linkedin") return "LinkedIn";
    if (socialMediaType === "twitter") return "Twitter";
    if (socialMediaType === "youtube") return "Youtube";
};

const getSocialMediaType = (linkHref) => {
    if (linkHref.contains("instagram")) return "instagram";
    if (linkHref.contains("facebook")) return "facebook";
    if (linkHref.contains("linkedin")) return "linkedin";
    if (linkHref.contains("twitter")) return "twitter";
    if (linkHref.contains("youtube")) return "youtube";
};

const renderLink = (linkHref) => {
    const socialMediaType = getSocialMediaType(linkHref);
    const linkText = getLinkText(socialMediaType);
    const linkClass = `c-social-media-boxes__${socialMediaType}`;

    return (
        <a class={linkClass} href={linkHref}>{linkText}</a>
    );
};

const renderItems = (socialLinks) => {
    return socialLinks.map((linkHref, index) => {
        const itemClass = `c-social-media-boxes__grid-item--${index}`;

        return (
            <div className={itemClass}>
                {renderLink(linkHref)}
            </div>
        );
    })
};

const SocialMediaBoxes = ({ noColumns, instagramLink }) => {
    const socialLinks = [instagramLink,]

    let columnClass = "c-social-media-boxes__columns--3";
    if (noColumns) {
        if (noColumns === 1 || noColumns === 2 || noColumns === 3 || noColumns === 4) {
            columnClass = `c-social-media-boxes__columns--${noColumns}`;
        }
    }

    return (
        <div className={`c-social-media-boxes__grid ${columnClass}`}>
            {renderItems(socialLinks)}
        </div>
    )
};


export default SocialMediaBoxes;