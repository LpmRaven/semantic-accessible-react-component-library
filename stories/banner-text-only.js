import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '../components/banner-text-only';
import { text, boolean, number, color } from '@storybook/addon-knobs';

const stories = storiesOf('banner-text-only', module);

stories.add('with color options', () => {
    const textColor = color('textColor', '#fff');
    const backgroundColor = color('backgroundColor', '#000');

    return (
        <Banner
            textColor={textColor}
            backgroundColor={backgroundColor}
        />
    );
});
