"use strict";
exports.__esModule = true;
var react_1 = require("react");
var api_1 = require("../api");
var OrderLocation_1 = require("./OrderLocation");
var ProductsList_1 = require("./ProductsList");
var StepsHeader_1 = require("./StepsHeader");
require("./styles.css");
function Orders() {
    var _a = react_1.useState([]), products = _a[0], setProducts = _a[1];
    var _b = react_1.useState(), orderLocation = _b[0], setOrderLocation = _b[1];
    react_1.useEffect(function () {
        api_1.fetchProducts()
            .then(function (response) {
            setProducts(response.data);
        })["catch"](function (error) {
            console.log({ error: error });
        });
    }, []);
    return (react_1["default"].createElement("div", { className: "orders-conteiner" },
        react_1["default"].createElement(StepsHeader_1["default"], null),
        react_1["default"].createElement(ProductsList_1["default"], { products: products }),
        react_1["default"].createElement(OrderLocation_1["default"], { onChangeLocation: function (location) { return setOrderLocation(location); } })));
}
exports["default"] = Orders;
