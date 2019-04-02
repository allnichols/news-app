import React, {Component} from 'react';

class Topics extends Component{

  state = {
    topic:'',
  }

  componentDidMount(){
    console.log(this.props);
  }

  render(){



    return (
      <div>
        <p>Topic Page</p>
      </div>
    )

  }


}


export default Topics;
