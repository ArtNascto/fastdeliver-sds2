"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.min.css");
require("./App.css");
var Routes_1 = require("./Routes");
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Routes_1["default"], null),
        react_1["default"].createElement(react_toastify_1.ToastContainer, null)));
}
exports["default"] = App;
