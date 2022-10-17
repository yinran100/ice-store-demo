import { createStore } from 'ice';
import home from './models/home';

const store = createStore(
  {
    home,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.getState = store.getState;
export default store;
