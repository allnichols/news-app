import React from 'react';
import styles from './MoreStories.module.css';

const moreStories = (props) => {

    return (
      <div  className={styles.MoreStories} key={props.id}>

      <div className={styles.imgContainer} >
        <img src={props.imgUrl} alt="article"/>
      </div>

        <div className={styles.titleContainer}>
          <p>{props.source}</p>

          <a href={props.url}>
            <h5>{props.title}</h5>
          </a>

        </div>

      </div>
    )
}

export default moreStories;
