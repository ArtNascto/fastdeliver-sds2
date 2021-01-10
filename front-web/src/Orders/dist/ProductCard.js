"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function ProductCard(_a) {
    var product = _a.product, onSelectProduct = _a.onSelectProduct, isSelected = _a.isSelected;
    return (React.createElement("div", { className: "order-card-container " + (isSelected ? 'selected' : ''), onClick: function () { return onSelectProduct(product); } },
        React.createElement("h3", { className: "order-card-title" }, product.name),
        React.createElement("img", { src: product.imageUri, className: "order-card-image", alt: "{product.name}" }),
        React.createElement("h3", { className: "order-card-price" },
            " ",
            helpers_1.formatPrice(product.price)),
        React.createElement("div", { className: "order-card-description" },
            React.createElement("h3", null, "Descri\u00E7\u00E3o"),
            React.createElement("p", null, product.description))));
}
exports["default"] = ProductCard;
