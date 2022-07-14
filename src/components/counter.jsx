import React, {Component} from 'react';

class Counter extends Component{

  state = {
    count: 0,
    tags:['tag1','tag2','tag3']
  };

/*
  styles={
    fontSize: 30,
    fontWeight: "bold"
  };*/
//style = {this.styles}

  renderTags(){
    if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
      </ul>
    );
  }

  render(){
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className ="btn btn-secondary btn-sm">Increment</button>
        {this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses(){
    return "badge m-2 bg-" + ((this.state.count === 0) ? "warning":"primary");
  }

  formatCount(){
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

}

export default Counter;
