import { useState, useEffect } from 'react';


const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=57c8394f5bc742bf9a569cbe33fe0be1`;

interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string | null;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
  }[];

const useGetArticles = () => {
    const [articles, setArticles] = useState<null | Article>(null);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
        (async () => {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                const data = await response.json();
                setArticles(data.articles);
                setLoading(false);
            } catch (error: any) {
                if(error.name === 'AbortError') {
                    return;
                }
                setError(error);
                setLoading(false);
            }
        })();
        return () => {
            abortController.abort();
        };
    }, [])

    return [articles, loading, error];

}

export default useGetArticles;

