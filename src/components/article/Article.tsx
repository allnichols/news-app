import React from 'react';

type Article = {
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    publishedDate: string;
}

export const Article: React.FC<Article> = (Article) => {
    return (
        <article>
            <h1>{Article.title}</h1>
        </article>
    )
}