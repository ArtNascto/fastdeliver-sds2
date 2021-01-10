"use strict";
exports.__esModule = true;
exports.saveOrder = exports.fetchLocalMapBox = exports.fetchProducts = void 0;
var axios_1 = require("axios");
var API_URL = process.env.REACT_APP_API_URL;
var mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
function fetchProducts() {
    return axios_1["default"].get(API_URL + "/products");
}
exports.fetchProducts = fetchProducts;
function fetchLocalMapBox(local) {
    return axios_1["default"]("https://api.mapbox.com/geocoding/v5/mapbox.places/" + local + ".json?access_token=" + mapboxToken);
}
exports.fetchLocalMapBox = fetchLocalMapBox;
function saveOrder(payload) {
    return axios_1["default"].post(API_URL + "/orders", payload);
}
exports.saveOrder = saveOrder;
