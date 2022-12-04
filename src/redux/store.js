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
import transactionsSlice from './Transactions/transactionsSlice';
import CurrencyReducers from './Currency/slice/CurrencySlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token','isSaveRoute','isHomePage', 'currency'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCurrencyReducer = persistReducer(persistConfig, CurrencyReducers);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: transactionsSlice,
    currency: persistedCurrencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
