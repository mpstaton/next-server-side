import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../Store/store'

/*
It is time to inject the Redux functionality in our application lifecycle. 
To do so, we will have to use “react-redux” library that we installed as one of the dependencies earlier. 
It is the official React binding for Redux. 
It helps React components read data from a Redux store and dispatch actions to the store to update the data. 
Since we need our State object to be available throughout the entire application, we will have to inject it in a component the rest of the components inherit from. 
This parent component can be referred to as a Higher-Order Component (HOC). 
In Next.js, we can create a special component “_App.js” which wraps all the pages and can be used to share something that is common throughout the application. 
We will use this “_App” component to inject Redux to the application lifecycle. Add the "_App.js" file to the “Pages” folder with the following code:
*/


export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }){
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
      }
    }
    render() {
      const { Component, pageProps, store } = this.props
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )
    }
  }
)

/*
The App componenet is provided by the next library.
It initializes Pages. ctx stands for Context.
The <Provider> component is provided by the "react-redux" library
to "wrap" the Page component.

*/

