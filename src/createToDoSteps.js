/*
goal:Take user input from our React application and send information to Redux
act 1 --- 

step 1:  Create a Controlled Form Using State and an onChange Event Handler
- every time the user changes the input field (that is, whenever the user types something in) we should call our handleChange()
-- onChange={(event) => this.handleChange(event)

  step 2: define handle change 
   in this case what handlechange does is -
    pass through the event, which comes from the onChange event handler. 
   The event's target is the input that was listening for 
   the event (the text field), and the value is the current value of that text field.

   make define handle change an arrow functions 

   step 3: we can actually change our event in our form to 
   onChange={this.handleChange} value={this.state.text}/>

   act 2 --
   step 1: On Submission of Form, Dispatch an Action to the Store
    we need to make changes to our form so that when the user clicks submit,
     we dispatch an action to the store. 
    see index.js 

    step 2:  import connect from react-redux and modify our export statement:
    we don't need mapStateToProps()  b/c we are not getting state from our store
    we have it hard coded within the createtodo


    step 3: get working on mapdispatch to Props

    const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch(<some action>)
  }
}
On submission of the form in our component, we want to send 
the value we've captured in the local state to be added to our Redux store. With
above set up, addTodo becomes a function in props that is able take arguments.


step 4: Now we need to update the render() function of the CreateTodo
 component to call a callback on the submission of a form:

 we would do - 
 <form onSubmit={ event => this.handleSubmit(event) }>

 When handleSubmit() is called, whatever is currently stored in 
 this.state will be sent off to our reducer via our dispatched action. 


 now we want to be able to update state, we are properly dispatching but now need
 to be able to update by fixing our reducer 

 go to mangage todo .js
 
*/