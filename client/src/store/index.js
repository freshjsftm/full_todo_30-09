import { legacy_createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import rooReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const store = legacy_createStore(
  rooReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
