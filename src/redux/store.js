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
import CurrencySlice from './Currency/slice/CurrencySlice';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/authSlice';
import modalReducer from './Modal/modalSlice';
import transactionsSlice from './Transactions/transactionsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token','isSaveRoute','isHomePage', 'currency'],
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCurrencyReducer = persistReducer(persistConfig, CurrencySlice);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: transactionsSlice,
    currency: persistedCurrencyReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
