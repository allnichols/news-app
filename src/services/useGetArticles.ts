import { useState, useEffect } from 'react';



const useGetArticles = () => {
    const [articles, setArticles] = useState<null | Response>(null);
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const abortController = new AbortController();
        setLoading(true);
        (async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us?q=bitcoin&apiKey=57c8394f5bc742bf9a569cbe33fe0be1`)
                const json = await response.json();
                console.log(json);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        })();
        // fetch(`https://newsapi.org/v2/top-headlines?country=us?q=tesla&apiKey=57c8394f5bc742bf9a569cbe33fe0be1`)
        // .then(res => res.json())
        // .then(data => console.log(data))
    }, [])

    return articles;

}

export default useGetArticles;

