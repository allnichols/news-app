import React from 'react';
import styles from './TopNews.module.css';

const topNews = (props) => {

  return(
    <div  className={styles.TopArticles} key={props.id}>

    <div className={styles.imgContainer} >
      <img src={props.imgUrl} alt="article"/>
    </div>

      <div className={styles.titleContainer}>
        <p>{props.source}</p>

        <a href={props.url}>
          <h5>{props.title}</h5>
        </a>

      <p> Published </p>

      </div>
    </div>
  )

}

export default topNews;
