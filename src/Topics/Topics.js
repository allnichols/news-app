import React, { Component } from 'react';
import axios from 'axios';
import styles from './Topics.module.css';

import TopicTop from './Topic/TopicTop';

let key = '57c8394f5bc742bf9a569cbe33fe0be1';


class Topics extends Component{

  state = {
    query:'',
    top5News:[],
    mainNews:[],
  }

  componentDidMount(){
     let query = this.props.match.url.toLowerCase().slice(1);

     axios.get('https://newsapi.org/v2/top-headlines?country=us?q=' + query + '&apiKey=' + key)
     .then(response=> {
       let top5 = response.data.articles.splice(0,5);
       this.setState({
         top5News: top5
       })
     })
  }

  componentDidUpdate( prevState, snapshot ){
    let newQuery = this.props.match.url.toLowerCase().slice(1);


    if ( newQuery !== this.state.query ) {

      axios.get('https://newsapi.org/v2/top-headlines?q=' + newQuery + '&apiKey=' + key)
      .then(response=> {

        let top5 = response.data.articles.splice(0,5);

        this.setState({
          query: newQuery,
          top5News: top5,
        })

      })
    }
  }


  render(){

    let topTopics = this.state.top5News.map(story => {
        return (
          <TopicTop
            key={story.url}
            imgUrl={story.urlToImage}
            source={story.source.name}
            url={story.url}
            title={story.title}
            published={story.publishedAt}
          />
        )
    });


    return (
      <div className={styles.Topics}>

        <h2>top <span>{this.state.query}</span> Stories</h2>

        {topTopics}

      </div>
    )

  }


}


export default Topics;
