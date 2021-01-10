"use strict";
exports.__esModule = true;
var react_1 = require("react");
var helpers_1 = require("./helpers");
var ProductCard_1 = require("./ProductCard");
function ProductsList(_a) {
    var products = _a.products, selectedProducts = _a.selectedProducts, onSelectProduct = _a.onSelectProduct;
    return (react_1["default"].createElement("div", { className: "orders-list-container" },
        react_1["default"].createElement("div", { className: "orders-list-items" }, products.map(function (product) { return (react_1["default"].createElement(ProductCard_1["default"], { key: product.id, product: product, onSelectProduct: onSelectProduct, isSelected: helpers_1.checkIsSelected(selectedProducts, product) })); }))));
}
exports["default"] = ProductsList;
