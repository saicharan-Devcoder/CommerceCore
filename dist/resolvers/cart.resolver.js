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
exports.cartResolvers = void 0;
const graphql_1 = require("graphql");
const cart_1 = require("../models/cart");
exports.cartResolvers = {
    Query: {
        cart: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { userId }) {
            try {
                const userCart = yield cart_1.Cart.findOne({
                    userId
                });
                if (!userCart) {
                    throw new graphql_1.GraphQLError(`Cart not found for user: ${userId}`);
                }
                return userCart;
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in fetching cart: ${error.message}`);
            }
        }),
    },
    Mutation: {
        addToCart: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { productId, userId, quantity }) {
            try {
                return yield cart_1.Cart.create({ productId, userId, quantity });
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in adding to cart: ${error.message}`);
            }
        }),
        removeFromCart: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { productId }) {
            try {
                return yield cart_1.Cart.findByIdAndDelete(productId);
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in removing from cart: ${error.message}`);
            }
        })
    }
};
