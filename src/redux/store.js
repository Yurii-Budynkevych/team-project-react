import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/authSlice';
import modalReducer from './Modal/modalSlice';
import transactionsSlice from './Transactions/transactionsSlice';
import CurrencyReducers from './Currency/slice/CurrencySlice'

const persistConfig = {
  key: 'root',
  storage,
<<<<<<< HEAD
  whitelist: ['token', 'isSaveRoute', 'isHomePage'],
=======
  whitelist: ['token','isSaveRoute','isHomePage', 'currency'],
>>>>>>> 3ed4737703cdb2bebe033d582ae48c49e392363a
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCurrencyReducer = persistReducer(persistConfig, CurrencyReducers);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: transactionsSlice,
<<<<<<< HEAD
    modal: modalReducer,
=======
    currency: persistedCurrencyReducer,
>>>>>>> 3ed4737703cdb2bebe033d582ae48c49e392363a
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
