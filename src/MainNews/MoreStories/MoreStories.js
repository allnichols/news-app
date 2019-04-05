import React from 'react';
import styles from './MoreStories.module.css';

const moreStories = (props) => {

  let published = props.published.slice(0,10);

    return (
      <div  className={styles.MoreStories} key={props.id}>

      <div className={styles.imgContainer} >
        <img src={props.imgUrl} alt="article"/>
      </div>

        <div className={styles.titleContainer}>
          <p>{props.source}</p>

          <a href={props.url}>
            <h4>{props.title}</h4>
          </a>

          <p> Published - {published}</p>
        </div>

      </div>
    )
}

export default moreStories;
