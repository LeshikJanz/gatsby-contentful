import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'

exports.replaceRouterComponent = (props) => {
  const store = createStore();

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={props.history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}