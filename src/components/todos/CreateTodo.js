import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  
  handleSubmit = event => {
    event.preventDefault()
    // const todo = {
    //   todo: this.state.text
    // }
    //action creator goes here and we pass in the state to a new object that we then pass into the action creator
    this.props.addTodo(this.state)
  }


  handleOnChange = event => {
     this.setState({
       text: event.target.value
     })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input onChange={this.handleOnChange} type="text" value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({ type: 'ADD_TODO', todo: formData})
  }
}


export default connect(null, mapDispatchToProps)(CreateTodo);
