import React, { Component } from 'react'
import { connect } from 'react-redux';
class CreateTodo extends Component {

    state = {
      text: '',
    };

    onSubmit = event => {
      event.preventDefault()
      this.props.addTodo(this.state)
    }
    
    onChange = (event) => {
      this.setState({
        text: event.target.value
      })
    };
    
    render() {
      return(
        <div>
        <form onSubmit={event => this.onSubmit(event)}>
        <p>
          <label> add todo </label>
          <input type="text" onChange= {this.onChange(event)} value={this.state.text} />
        </p>
        <input type="submit" />
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({
      type: 'ADD_TODO', payload:formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
