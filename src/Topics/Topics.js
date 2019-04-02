import React, { Component } from 'react';
import axios from 'axios';
import styles from './Topics.module.css';

let key = '3de0065bbdae4f598e722fe518a67288';

class Topics extends Component{

  state = {
    query:'',
  }

  componentDidMount(){
     let query = this.props.match.url.toLowerCase().slice(1);
     console.log('did mount');
     axios.get('https://newsapi.org/v2/everything?q=' + query + '&apiKey=' + key)
     .then(response=> {
       console.log(response.data.articles);
       this.setState({
         query: query
       })
     })
  }

  componentDidUpdate( prevState, snapshot ){
    let newQuery = this.props.match.url.toLowerCase().slice(1);
    console.log(newQuery);

    if ( newQuery !== this.state.query ) {

      axios.get('https://newsapi.org/v2/everything?q=' + newQuery + '&apiKey=' + key)
      .then(response=> {
        
        console.log(response.data.articles);

        this.setState({
          query: newQuery
        })

      })
    }
  }

  componentWillUnmount(){
    console.log( 'unmount' );
  }

  render(){



    return (
      <div className={styles.Topics}>
        <h2>{this.state.query}</h2>
      </div>
    )

  }


}


export default Topics;
