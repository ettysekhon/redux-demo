import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

// containers
import { App,
  BasketConfirmation,
  DeliverySlots,
  SelectStore } from './containers'

// routing
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'

const historyMiddleware = syncHistory(browserHistory)

// configure middleware & store
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger(),
  historyMiddleware
)(createStore)

const configureStore = (initialState) => {
  const configuredStore = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      configuredStore.replaceReducer(nextRootReducer)
    })
  }

  return configuredStore
}

const store = configureStore()

// configure router
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='basket-confirmation' component={BasketConfirmation}/>
        <Route path='delivery-slots' component={DeliverySlots}/>
        <Route path='select-store' component={SelectStore}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
