import { configure, addParameters, addDecorator } from '@storybook/react';
//import theme from './theme.js';
import { themes } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';


function loadStories() {
    require('../stories/index.js');
    require('../stories/banner-text-only.js');
    require('../stories/blog-post-preview.js');
    require('../stories/link-components.js');
    require('../stories/social-media-boxes.js');
    // You can require as many stories as you need.
}

addDecorator(withInfo);
addDecorator(withKnobs);

addParameters({
    options: {
        theme: themes.light
    },
});

configure(loadStories, module);