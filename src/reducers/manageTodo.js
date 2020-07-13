export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
 
      console.log({ todos: state.todos.concat(action.payload.text) });
 
      return { todos: state.todos.concat(action.payload.text) };
 
    default:
      return state;
  }
}

/*
step 1. 
 First we need to provide an initial state, empty array

 step 2.
 Second, we need to concatenate a new todo each time we receive an 
 action that looks like { type: 'ADD_TODO', payload: { text: 'watch baseball' } }


 Summary
There's a lot of typing in this section, but three main steps.

First, we made sure the React component of our application was working. We did this by building a form, and then making sure that whenever the user typed in the form's input, the state was updated.

Second, We connected the component to Redux and designed our mapDispatchToProps

Third, we built our reducer such that it responded to the appropriate event and concatenated the payload into our array of todos.
*/