"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Counter(_a) {
    var count = _a.count, onIncrease = _a.onIncrease, onDecrease = _a.onDecrease;
    return (<div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>);
}
exports.default = Counter;
