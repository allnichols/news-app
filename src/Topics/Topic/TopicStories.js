import React 'react';
import style from './Stories.module.css';

const topicStories = ( props ) => {

  return(
    <div key={props.id} className={styles.Stories}>

    <div>
      <img src={props.imgUrl} alt="article"/>
    </div>

      <div >
        <p>{props.source}</p>

        <a href={props.url}>
          <h4>{props.title}</h4>
        </a>

        <p> Published </p>
      </div>

    </div>
  )

}

export default topicStories;
