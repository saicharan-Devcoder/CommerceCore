"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderResolvers = void 0;
const order_1 = require("../models/order");
exports.orderResolvers = {
    Query: {
        order: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield order_1.Order.find();
        }),
    },
    Mutation: {
        createOrder: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { order }) {
            return yield order_1.Order.create(order);
        }),
        updateOrder: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, order }) {
            return yield order_1.Order.findByIdAndUpdate(id, order, { new: true });
        }),
    }
};
