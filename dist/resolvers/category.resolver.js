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
exports.categoryResolvers = void 0;
const categories_1 = require("../models/categories");
exports.categoryResolvers = {
    Query: {
        categories: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield categories_1.Category.find();
        }),
        category: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            return yield categories_1.Category.findById(id);
        })
    },
    Mutation: {
        createCategory: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { category }) {
            return yield categories_1.Category.create(category);
        }),
        updateCategory: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, category }) {
            return yield categories_1.Category.findByIdAndUpdate(id, category, { new: true });
        }),
        deleteCategory: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            return yield categories_1.Category.findByIdAndDelete(id);
        })
    }
};
