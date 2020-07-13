import React, { Component } from 'react'
import { connect } from 'react-redux';
 
class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   

  /*
handlechange should always be a arrow function b/c
The result is that handleChange() will always be bound 
to the particular instance of the component it is defined in.

Because arrow functions don't define their own version of this, 
 they'll default to the context they are in.
*/

handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }


  /*
Now that handleChange() is defined using an arrow function, we can actually 
write an even shorter onChange callback: onChange={this.handleChange}. 
In this case, this.handleChange refers to the definition of a function 
that takes in the event as an argument

we will also need to set the value attribute of our input element to 
this.state.text. This way, every key stroke within input will call a 
setState from within handleChange, 
the component will re-render and display the new value for this.state.text.

the last this.state.text is just to 
confirm that we are properly changing the state. If we see our DOM 
change with every character we type in, we're in good shape.
  */
  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
     </div>
   );
  }
  
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};


 
export default connect(null, mapDispatchToProps)(CreateTodo);




