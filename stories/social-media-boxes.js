import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, color } from '@storybook/addon-knobs';

import SocialMediaBoxes from '../components/link-components/social-media-boxes';

const stories = storiesOf('social-media-boxes', module);

stories.add('Instagram default', () => {

    return (
        <SocialMediaBoxes
            instagramLink="https://www.instagram.com/"
        />
    )
});

stories.add('Instagram as 2 columns', () => {

    return (
        <SocialMediaBoxes
            noColumns={2}
            instagramLink="https://www.instagram.com/"
        />
    )
});
