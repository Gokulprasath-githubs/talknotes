import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [], // Ensure this is initialized as an empty array
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload); // Add a new note
        },
    },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
