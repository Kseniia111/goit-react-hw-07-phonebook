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
import { configureStore } from '@reduxjs/toolkit';
import { contacts } from './ContactsSlice';
import { filter } from './FilterSlice';
import { combineReducers } from 'redux';

const commonReducer = combineReducers({ contacts, filter });
const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedContactReducer = persistReducer(persistConfig, commonReducer);

export const store = configureStore({
  reducer: {
    app: persistReducer(persistConfig, persistedContactReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
