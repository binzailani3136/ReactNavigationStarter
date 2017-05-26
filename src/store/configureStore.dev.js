import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: 'localhost',
    port: '8000',
    filters: { blacklist: ['EFFECT_RESOLVED'] },
  });
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
  /* if (module.hot) {
    module.hot.accept('../reducers', () =>{
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(newRootReducer)
    });
  }*/
  return store;
}
