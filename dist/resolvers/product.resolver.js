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
const product_1 = require("../models/product");
exports.productResolvers = {
    Query: {
        products: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield product_1.Product.find();
        }),
        product: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            return yield product_1.Product.findById(id);
        })
    },
    Mutation: {
        createProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { product }) {
            return yield product_1.Product.create(product);
        }),
        updateProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, product }) {
            return yield product_1.Product.findByIdAndUpdate(id, product, { new: true });
        }),
        deleteProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            return yield product_1.Product.findByIdAndDelete(id);
        })
    }
};
