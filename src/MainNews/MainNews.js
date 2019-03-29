import React,{Component} from 'react';
import TopNews from './TopNews';
import axios from 'axios';
import styles from './TopNews.module.css';

let key = '3de0065bbdae4f598e722fe518a67288';

class MainNews extends Component{

    state = {
      top5News:[]
    }

    componentDidMount(){
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key)
      .then(response =>{
        let articles = response.data.articles;
        this.setState({ top5News:articles })
        console.log(articles);
      })
    }

  render(){

    let topArticles = null;

     if ( this.state.top5News.length >= 1) {
       topArticles = (
         <div>
         {this.state.top5News.map(article =>{
          return <TopNews
                    key={article.url}
                    source={article.source.name}
                    title={article.title}
                    url={article.url}
                    imgUrl={article.urlToImage}/>
         })}
         </div>
       )
     }

     return(
       <div className={styles.TopNews}>
       {topArticles}
       </div>
     )

  }


}

export default MainNews;
