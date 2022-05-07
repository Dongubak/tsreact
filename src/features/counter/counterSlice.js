"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.increaseAmount = exports.decrease = exports.increase = exports.counterSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    count: 0,
    value: 0,
};
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increase: function (state) {
            state.count += 1;
        },
        decrease: function (state) {
            state.count -= 1;
        },
        increaseAmount: function (state, action) {
            state.value = action.payload;
        },
        setCount: function (state) {
            state.count = state.value;
            state.value = 0;
        }
    }
});
exports.increase = (_a = exports.counterSlice.actions, _a.increase), exports.decrease = _a.decrease, exports.increaseAmount = _a.increaseAmount;
exports.default = exports.counterSlice.reducer;
