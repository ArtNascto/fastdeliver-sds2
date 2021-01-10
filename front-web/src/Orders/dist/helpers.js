"use strict";
exports.__esModule = true;
exports.formatPrice = exports.checkIsSelected = void 0;
function checkIsSelected(selectedProducts, product) {
    return selectedProducts.some(function (item) { return item.id === product.id; });
}
exports.checkIsSelected = checkIsSelected;
function formatPrice(price) {
    var formatter = new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    return formatter.format(price);
}
exports.formatPrice = formatPrice;
