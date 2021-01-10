"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Footer_1 = require("./Footer");
var Home_1 = require("./Home");
var Navbar_1 = require("./Navbar");
var Orders_1 = require("./Orders");
function Routes() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/orders" },
                react_1["default"].createElement(Orders_1["default"], null)),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/" },
                react_1["default"].createElement(Home_1["default"], null))),
        react_1["default"].createElement(Footer_1["default"], null)));
}
exports["default"] = Routes;
