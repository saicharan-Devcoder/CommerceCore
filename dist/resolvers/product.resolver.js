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
exports.productResolvers = void 0;
const graphql_1 = require("graphql");
const product_1 = require("../models/product");
exports.productResolvers = {
    Query: {
        products: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield product_1.Product.find();
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in fetching products: ${error.message}`);
            }
        }),
        product: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            const product = yield product_1.Product.findById(id);
            if (!product) {
                throw new graphql_1.GraphQLError(`Product not found with id: ${id}`);
            }
            return product;
        })
    },
    Mutation: {
        createProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { product, context }) {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new graphql_1.GraphQLError("You are not authorized to create a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }
            try {
                return yield product_1.Product.create(product);
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in creating product: ${error.message}`);
            }
        }),
        updateProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, product, context }) {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new graphql_1.GraphQLError("You are not authorized to update a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }
            try {
                return yield product_1.Product.findByIdAndUpdate(id, product, { new: true });
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in updating product: ${error.message}`);
            }
        }),
        deleteProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, context }) {
            if (context && context.user && context.user.role !== "ADMIN") {
                throw new graphql_1.GraphQLError("You are not authorized to update a product", {
                    extensions: {
                        code: "UNAUTHORIZED"
                    }
                });
            }
            try {
                return yield product_1.Product.findByIdAndDelete(id);
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in deleting product: ${error.message}`);
            }
        })
    }
};
