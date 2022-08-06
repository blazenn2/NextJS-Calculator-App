import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstValue: '',
    secondValue: '',
    total: '',
    operator: null,
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        firstValAppend(state, action) {
            state.firstValue += action.payload;
            state.total = "";
        },
        secondValAppend(state, action) {
            state.secondValue += action.payload;
        },
        operator(state, action) {
            state.operator = action.payload;
        },
        decimalConversion(state) {
            if (state.secondValue === "" && !state.firstValue.includes(".")) state.firstValue += '.';
            else if (!state.secondValue.includes(".")) state.secondValue += '.';
        },
        reset(state) {
            state.firstValue = '';
            state.secondValue = '';
            state.operator = null;
            state.total = '';
        },
        deleteLastNumber(state) {
            if (state.operator === null) state.firstValue = state.firstValue.substring(0, state.firstValue.length - 1);
            else state.secondValue = state.secondValue.substring(0, state.secondValue.length - 1);
        },
        calculate(state) {
            if (state.operator === "+") state.total = (Number(state.firstValue) + Number(state.secondValue)).toString();
            if (state.operator === "-") state.total = (Number(state.firstValue) - Number(state.secondValue)).toString();
            if (state.operator === "*") state.total = (Number(state.firstValue) * Number(state.secondValue)).toString();
            if (state.operator === "/") state.total = (Number(state.firstValue) / Number(state.secondValue)).toString();
            // console.log(state.total);
            state.operator = null;
            state.firstValue = '';
            state.secondValue = '';
        }
    }
})

export const { firstValAppend, secondValAppend, operator, decimalConversion, reset, deleteLastNumber, calculate } = calculatorSlice.actions;
export default calculatorSlice.reducer;