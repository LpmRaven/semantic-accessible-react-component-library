import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, color } from '@storybook/addon-knobs';

import BorderArrowLink from '../components/link-components/src/border-arrow-link';

const stories = storiesOf('link-components', module);

stories.add('basic', () => {

    return (
        <BorderArrowLink>Full Article</BorderArrowLink>
    );
});
