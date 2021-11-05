// Core
import { createStore, applyMiddleware } from 'redux';

// Instruments

import { composeEnhancers, middleware, } from './init/middleware';

import {rootReducer} from "./init/roodRedusser";

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);
