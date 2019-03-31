import React from 'react';
import styles from './TopNews.module.css';

const topNewsMain = ( props ) => {

  let published = props.published;
  return(
      <div className={styles.TopArticles} key={props.id}>

        <img src={props.imgUrl} alt="article"/>

        <div className={styles.titleContainer}>
          <p>{props.source}</p>

          <a href={props.url}>
            <h5>{props.title}</h5>
          </a>

          <p className={styles.Published}>Published - {published}</p>
        </div>

      </div>

  )

}

export default topNewsMain;