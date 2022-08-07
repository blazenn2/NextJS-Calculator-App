import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showTheme: 0,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action) {
            state.showTheme = action.payload;
        }
    }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;