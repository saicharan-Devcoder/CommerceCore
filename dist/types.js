"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatus = void 0;
var orderStatus;
(function (orderStatus) {
    orderStatus["Pending"] = "Pending";
    orderStatus["Processing"] = "Processing";
    orderStatus["Shipped"] = "Shipped";
    orderStatus["PickedUp"] = "PickedUp";
    orderStatus["Delivered"] = "Delivered";
})(orderStatus || (exports.orderStatus = orderStatus = {}));
