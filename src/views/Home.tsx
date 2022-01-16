import useGetArticles from "../services/useGetArticles";

const Home = () => {
    const articles = useGetArticles();
    console.log(articles);
    return (
        <h1>
            Home
        </h1>
    )
}

export default Home;