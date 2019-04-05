import React, { Component } from 'react';
import MoreStories from './MoreStories/MoreStories';
import TopNews from './TopNews';
import styles from './TopNews.module.css';
import axios from 'axios';

let key = '3de0065bbdae4f598e722fe518a67288';



console.log(API_KEY);

class TopNewsMain extends Component {

  state = {
    top5News:[],
    mainNews:[],
  }

  componentDidMount(){
    console.log(this.props);
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
                    imgUrl={article.urlToImage}
                    description={article.description}/>
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
           <h2 className={styles.Title}>Top Stories</h2>
       <div className={styles.TopNews}>

         {topArticles}
       </div>

       <div>
        {otherStories}
       </div>

      </React.Fragment>
     )

  }

  // let published = props.published;
  // return(
  //     <div className={styles.TopArticles} key={props.id}>
  //
  //       <img src={props.imgUrl} alt="article"/>
  //
  //       <div className={styles.titleContainer}>
  //         <p>{props.source}</p>
  //
  //         <a href={props.url}>
  //           <h5>{props.title}</h5>
  //         </a>
  //
  //         <p className={styles.Published}>Published - {published}</p>
  //       </div>
  //
  //     </div>

}

export default TopNewsMain;
