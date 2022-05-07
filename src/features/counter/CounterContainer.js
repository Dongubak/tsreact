"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Counter_1 = require("../../components/Counter");
var counterSlice_1 = require("./counterSlice");
function CounterContainer() {
    var count = (0, react_redux_1.useSelector)(function (state) { return state.counterReducer.count; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var onIncrease = function () {
        dispatch((0, counterSlice_1.increase)());
    };
    var onDecrease = function () {
        dispatch((0, counterSlice_1.decrease)());
    };
    return (<Counter_1.default count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>);
}
exports.default = CounterContainer;
