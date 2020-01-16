import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from 'redux-saga'
import {fetchCollectonStart} from './shop/shop.sagas'
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(fetchCollectonStart);

export const persistor = persistStore(store);

export default { store, persistor };
