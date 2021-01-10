"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
var api_1 = require("../api");
var helpers_1 = require("./helpers");
var OrderLocation_1 = require("./OrderLocation");
var OrderSummary_1 = require("./OrderSummary");
var ProductsList_1 = require("./ProductsList");
var StepsHeader_1 = require("./StepsHeader");
require("./styles.css");
function Orders() {
    var _a = react_1.useState([]), products = _a[0], setProducts = _a[1];
    var _b = react_1.useState([]), selectedProducts = _b[0], setSelectedProducts = _b[1];
    var _c = react_1.useState(), orderLocation = _c[0], setOrderLocation = _c[1];
    var totalPrice = selectedProducts.reduce(function (sum, item) {
        return sum + item.price;
    }, 0);
    react_1.useEffect(function () {
        api_1.fetchProducts()
            .then(function (response) {
            setProducts(response.data);
        })["catch"](function (error) {
            react_toastify_1.toast.warning('Erro ao listar produtos');
        });
    }, []);
    var handleSelectProduct = function (product) {
        var isAlreadySelected = helpers_1.checkIsSelected(selectedProducts, product);
        if (isAlreadySelected) {
            var selected = selectedProducts.filter(function (item) { return item.id !== product.id; });
            setSelectedProducts(selected);
        }
        else {
            setSelectedProducts(function (previous) { return __spreadArrays(previous, [product]); });
        }
    };
    var handleSubmit = function () {
        var productsIds = selectedProducts.map(function (_a) {
            var id = _a.id;
            return ({ id: id });
        });
        var payload = __assign(__assign({}, orderLocation), { products: productsIds });
        api_1.saveOrder(payload)
            .then(function (response) {
            react_toastify_1.toast.error("Pedido enviado com sucesso! N\u00BA " + response.data.id);
            setSelectedProducts([]);
        })["catch"](function () {
            react_toastify_1.toast.warning('Erro ao enviar pedido');
        });
    };
    return (react_1["default"].createElement("div", { className: "orders-conteiner" },
        react_1["default"].createElement(StepsHeader_1["default"], null),
        react_1["default"].createElement(ProductsList_1["default"], { products: products, onSelectProduct: handleSelectProduct, selectedProducts: selectedProducts }),
        react_1["default"].createElement(OrderLocation_1["default"], { onChangeLocation: function (location) { return setOrderLocation(location); } }),
        react_1["default"].createElement(OrderSummary_1["default"], { amount: selectedProducts.length, totalPrice: totalPrice, onSubmit: handleSubmit })));
}
exports["default"] = Orders;
