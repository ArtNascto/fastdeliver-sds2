"use strict";
exports.__esModule = true;
require("./styles.css");
var home_image_svg_1 = require("./home_image.svg");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function Home() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "home-container" },
            react_1["default"].createElement("div", { className: "home-content" },
                react_1["default"].createElement("div", { className: "home-actions" },
                    react_1["default"].createElement("h1", { className: "home-title" },
                        "Fa\u00E7a seu pedido",
                        react_1["default"].createElement("br", null),
                        " que entregamos ",
                        react_1["default"].createElement("br", null),
                        " pra voc\u00EA!!!"),
                    react_1["default"].createElement("h3", { className: "home-subtitle" },
                        "Escolha o seu pedido e em poucos minutos ",
                        react_1["default"].createElement("br", null),
                        " levaremos na sua porta"),
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/orders", className: "home-btn-order" }, "FAZER PEDIDO")),
                react_1["default"].createElement("div", { className: "home-image" },
                    react_1["default"].createElement(home_image_svg_1.ReactComponent, null))))));
}
exports["default"] = Home;
