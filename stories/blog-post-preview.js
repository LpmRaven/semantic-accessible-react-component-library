import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, color } from '@storybook/addon-knobs';
import fastLoremIpsum from 'fast-lorem-ipsum';

import BlogPostPreview from '../components/blog-post-preview/src';
import BorderArrowLink from '../components/link-components/src/border-arrow-link';

const stories = storiesOf('blog-post-preview', module);

stories.add('basic', () => {
    const articleTitle = text('articleTitle', fastLoremIpsum("10w"));
    const articleContent = text('articleContent', fastLoremIpsum("100w"));


    return (
        <BlogPostPreview
            articleTitle={articleTitle}
            articleContent={articleContent}
        />
    );
});

stories.add('with link', () => {
    const articleTitle = text('articleTitle', fastLoremIpsum("10w"));
    const articleContent = text('articleContent', fastLoremIpsum("100w"));
    const linkComponent = (<BorderArrowLink>Full Article</BorderArrowLink>);

    return (
        <BlogPostPreview
            articleTitle={articleTitle}
            articleContent={articleContent}
            linkComponent={linkComponent}
        >
        </BlogPostPreview>
    );
});