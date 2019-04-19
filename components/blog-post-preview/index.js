import React from 'react';
import './blog-post-preview.scss';

const getBadge = (newPost, badgeLabel) => {
    if (newPost) {
        return (
            <span className="c-blog-post-preview__tag g-flex__item g-flex__item--no-grow g-flex__container--align-self-start">
                New!
            </span>
        );
    }
    if (badgeLabel) {
        return (
            <span className="c-blog-post-preview__tag g-flex__item g-flex__item--no-grow g-flex__container--align-self-start">
                {badgeLabel}
            </span>
        );
    }
};

const BlogPostPreview = ({ articleTitle, articleContent, linkComponent, newPost, badgeLabel }) => {
    return (
        <article className="c-blog-post-preview">
            <div className="c-blog-post-preview__wrapper g-content-padding g-flex__container">
                <div className="c-blog-post-preview__text-wrapper g-flex__item">
                    <div className="g-flex__container--title">
                        {getBadge(newPost, badgeLabel)}
                        <h2 className="c-blog-post-preview__title">
                            <span className="g-flex__item">
                                {articleTitle}
                            </span>
                        </h2>
                    </div>
                    <p className="c-blog-post-preview__text g-flex__item">
                        {articleContent}
                    </p>
                    <div className="g-flex__item c-blog-post-preview__link-wrapper">
                        {linkComponent}
                    </div>
                </div>
                <div className="c-blog-post-preview__image-wrapper g-flex__item">
                    <div className="c-blog-post-preview__image" />
                </div>
            </div>
        </article >
    );
};

export default BlogPostPreview;
