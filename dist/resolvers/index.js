"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const product_resolver_1 = require("./product.resolver");
const order_resolver_1 = require("./order.resolver");
const category_resolver_1 = require("./category.resolver");
const cart_resolver_1 = require("./cart.resolver");
exports.resolvers = [
    product_resolver_1.productResolvers,
    order_resolver_1.orderResolvers,
    category_resolver_1.categoryResolvers,
    cart_resolver_1.cartResolvers,
];
