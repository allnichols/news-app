import React,{Component} from 'react';
import TopNews from './TopNews';
import MoreStories from './MoreStories/MoreStories';
import axios from 'axios';
import styles from './TopNews.module.css';

let key = '3de0065bbdae4f598e722fe518a67288';

class MainNews extends Component{

    state = {
      top5News:[],
      mainNews:[],
    }

    componentDidMount(){
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + key)
      .then(response =>{
        let top5 = response.data.articles.slice(0,5);
        let mainNews = response.data.articles.slice(6,19);
        this.setState({
          top5News:top5,
          mainNews:mainNews
        })
        console.log(mainNews);
      })
    }

  render(){
//top 5 articles
    let topArticles = null;
     if ( this.state.top5News.length >= 1) {
       topArticles = (
         <div>
         {this.state.top5News.map(article =>{
          return <TopNews
                    key={article.url}
                    source={article.source.name}
                    published={article.publishedAt}
                    title={article.title}
                    url={article.url}
                    imgUrl={article.urlToImage}/>
         })}
         </div>
       )
     }
//The rest of the articles on the main page.
    let otherStories = null;
     if ( this.state.mainNews.length >= 1) {
       otherStories = (
         <div>
          {this.state.mainNews.map(story => {
            return <MoreStories
                    key={story.url}
                    source={story.source.name}
                    url={story.url}
                    title={story.title}
                    imgUrl={story.urlToImage}
                    published={story.publishedAt}
                  />
          })}
        </div>
       )
     }


     return(
      <React.Fragment>
       <div className={styles.TopNews}>
         <h3>Top 5 Stories</h3>
         {topArticles}
       </div>

       <div>
        {otherStories}
       </div>

      </React.Fragment>
     )

  }


}

export default MainNews;
