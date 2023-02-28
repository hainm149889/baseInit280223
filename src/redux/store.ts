import reducers, {RootStateDefault} from './reducers';
import createSagaMiddleware from 'redux-saga';
import {
  applyMiddleware,
  createStore,
  Middleware,
  Store,
  StoreEnhancer,
} from 'redux';
import rootSaga from './sagas';

function bindMiddleware(middlewares: Middleware[]): StoreEnhancer {
  if (__DEV__) {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return applyMiddleware(...middlewares);
}

let store: Store;
let sagaMiddleware;
sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];
if (__DEV__) {
  const {createLogger} = require('redux-logger');
  middlewares.push(
    createLogger({
      collapsed: true,
      diff: true,
    }),
  );
}
store = createStore(
  reducers,
  RootStateDefault,
  bindMiddleware(middlewares),
) as any;
sagaMiddleware.run(rootSaga);

export default store;
