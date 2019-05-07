import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, color } from '@storybook/addon-knobs';

import SocialMediaBoxes from '../components/social-media-boxes/src';

const stories = storiesOf('social-media-boxes', module);

stories.add('Instagram default', () => {
    return (
        <SocialMediaBoxes
            instagramLink="https://www.instagram.com/"
        />
    );
});

stories.add('Facebook default', () => {
    return (
        <SocialMediaBoxes
            facebookLink="https://www.facebook.com/"
        />
    );
});

stories.add('LinkedIn default', () => {
    return (
        <SocialMediaBoxes
            linkedinLink="https://www.linkedin.com/"
        />
    );
});

stories.add('CV default', () => {
    return (
        <SocialMediaBoxes
            cvLink="https://www.website.com/my-cv-download"
        />
    );
});

stories.add('All Social Media default colored', () => {
    return (
        <SocialMediaBoxes
            facebookLink="https://www.facebook.com/"
            instagramLink="https://www.instagram.com/"
            linkedinLink="https://www.linkedin.com/"
            cvLink="https://www.website.com/my-cv-download"
            coloredLink={true}
        />
    );
});

stories.add('All Social Media default', () => {
    return (
        <SocialMediaBoxes
            facebookLink="https://www.facebook.com/"
            instagramLink="https://www.instagram.com/"
            linkedinLink="https://www.linkedin.com/"
            cvLink="https://www.website.com/my-cv-download"
        />
    );
});

stories.add('Instagram and Linkedin default', () => {

    return (
        <SocialMediaBoxes
            instagramLink="https://www.instagram.com/"
            linkedinLink="https://www.linkedin.com/"
        />
    );
});

stories.add('Instagram and Linkedin as 3 columns', () => {

    return (
        <SocialMediaBoxes
            numberOfColumns={3}
            instagramLink="https://www.instagram.com/"
            linkedinLink="https://www.linkedin.com/"
        />
    );
});