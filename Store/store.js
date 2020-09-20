import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from '../Reducers/reducer'
import { InitialState } from '../Actions/actions.js'

/*
We pass the following three parameters to the createStore() method:

    reducer (Function) – This is the Reducer function that we created for our Store. It returns the next application State, given the current state and an action.

    initialState (any) – This is the initial State of our application. It is a plain JavaScript object that we created in our Actions file.

    enhancer (Function) – You can optionally specify some functions that use third-party code to enhance your application. In our case, we have used the “thunkMiddleware” provided by the “redux-thunk” library. This middleware helps us write asynchronous logic that interacts with our Store. With a basic Redux Store without this Middleware, we will only be able to perform synchronous updates to the Store by dispatching an action. We will use applyMiddleware() provided by “redux” library to convert “thunkMiddleware” to an enhancer.

Note that the store is not yet created. We have just defined and exported the “initStore” function that can be invoked in order to create the Store.
*/


export const initStore = (initialState = InitialState) => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  )
}