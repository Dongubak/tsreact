"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var CounterContainer_1 = require("./features/counter/CounterContainer");
function App() {
    return (<div className="App">
      <CounterContainer_1.default></CounterContainer_1.default>
    </div>);
}
exports.default = App;
