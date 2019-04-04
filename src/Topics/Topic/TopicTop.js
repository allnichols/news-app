import React from 'react';
import styles from './TopTopic.module.css';

const topicTop = (props) => {

  let published = props.published.slice(0,10);

  return(
    <div key={props.id} className={styles.Top}>

    <div>
      <img src={props.imgUrl} alt="article"/>
    </div>

      <div >
        <p>{props.source}</p>

        <a href={props.url}>
          <h5>{props.title}</h5>
        </a>

        <p> Published - {published} </p>
      </div>

    </div>
  )
}

export default topicTop;
