import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../components/home.slice';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
