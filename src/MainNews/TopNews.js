import React from 'react';
import styles from './TopNews.module.css';

const topNewsMain = ( props ) => {


  return(
      <div className={styles.TopNews} key={props.id}>

        <img src={props.imgUrl} alt="article"/>

        <div className={styles.titleContainer}>
          <p>{props.source}</p>
          <a href={props.url}>
            <h5>{props.title}</h5>
          </a>
        </div>

      </div>

  )

}

export default topNewsMain;
