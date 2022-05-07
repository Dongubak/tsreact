import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counter {
    count: number,
    value: number,
}

const initialState: counter = {
    count: 0,
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            state.count += 1
        },
        decrease: (state) => {
            state.count -= 1
        },
        increaseAmount: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
        setCount: (state) => {
            state.count = state.value;
            state.value =  0;
        }
    }
});

export const { increase, decrease, increaseAmount } = counterSlice.actions;

export default counterSlice.reducer; 