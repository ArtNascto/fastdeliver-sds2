"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function OrderSummary(_a) {
    var amount = _a.amount, totalPrice = _a.totalPrice, onSubmit = _a.onSubmit;
    return (React.createElement("div", { className: "order-summary-container" },
        React.createElement("div", { className: "order-summary-content" },
            React.createElement("div", null,
                React.createElement("span", { className: "amount-selected-container" },
                    React.createElement("strong", { className: "amount-selected" }, amount),
                    "PEDIDOS SELECIONADOS"),
                React.createElement("span", { className: "order-summary-total" },
                    React.createElement("strong", { className: "amount-selected" }, helpers_1.formatPrice(totalPrice)),
                    "VALOR TOTAL")),
            React.createElement("button", { className: "order-summary-make-order", onClick: onSubmit }, "FAZER PEDIDO"))));
}
exports["default"] = OrderSummary;
