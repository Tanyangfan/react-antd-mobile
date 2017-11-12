import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoute from './routes'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'

const store = configureStore

render(
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();