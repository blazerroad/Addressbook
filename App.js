import React from 'react';
import MainNavigation from './navitgation/mainNavigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { crashReporter, thunk, vanillaPromise, readyStatePromise } from './store/middleware/middleware'
import { contactReducer } from './store/reducers/reducersFacad'
import { Services } from "./store/actions/services/services"

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = createStore(rootReducer, applyMiddleware(crashReporter, thunk, vanillaPromise, readyStatePromise));
Services.init(store.dispatch);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
