import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './notesSlice'; // Example slice

const store = configureStore({
  reducer: {
    notes: notesSlice, // Add your slices here
  },
});

export default store;
