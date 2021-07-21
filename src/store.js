import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'store/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from 'store/rootSaga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const middleware = [thunk,sagaMiddleware];



export default function configureStore(initialState = {}) {
  const composeEnhancers = typeof window === 'object'
            && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(reducer, initialState, enhancer);
  // then run the saga
  sagaMiddleware.run(watcherSaga)
  return store;
}

