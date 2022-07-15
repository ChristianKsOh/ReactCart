import React, {Component} from 'react';

class Counter extends Component{

  render(){
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={ () => this.props.onIncrement(this.props.counter) } className ="btn btn-secondary btn-sm">+</button>
        <button onClick={ () => this.props.onDelete(this.props.counter.id) } className ="btn btn-danger btn-sm m-2">Delete</button>
        {/*
        {this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()}
        */}
      </div>
    );
  }

  getBadgeClasses(){
    return "badge m-2 bg-" + ((this.props.counter.value === 0) ? "warning":"primary");
  }

  formatCount(){
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

}

export default Counter;
