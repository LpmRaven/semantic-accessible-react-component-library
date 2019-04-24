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

stories.add('All Social Media default', () => {
    return (
        <SocialMediaBoxes
            facebookLink="https://www.facebook.com/"
            instagramLink="https://www.instagram.com/"
            linkedinLink="https://www.linkedin.com/"
        />
    );
});

stories.add('Instagram as 2 columns', () => {

    return (
        <SocialMediaBoxes
            noColumns={2}
            instagramLink="https://www.instagram.com/"
        />
    );
});
