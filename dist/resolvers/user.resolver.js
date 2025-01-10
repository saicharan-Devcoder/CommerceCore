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
exports.userResolvers = void 0;
const graphql_1 = require("graphql");
const user_1 = require("../models/user");
exports.userResolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield user_1.User.find();
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in fetching users: ${error.message}`);
            }
        }),
        user: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            const user = yield user_1.User.findById(id);
            if (!user) {
                throw new graphql_1.GraphQLError(`User not found with id: ${id}`);
            }
            return user;
        })
    },
    Mutation: {
        createUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { user }) {
            try {
                return yield user_1.User.create(user);
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in creating user: ${error.message}`);
            }
        }),
        updateUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, user }) {
            try {
                return yield user_1.User.findByIdAndUpdate(id, user, { new: true });
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in updating user: ${error.message}`);
            }
        }),
        deleteUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            try {
                return yield user_1.User.findByIdAndDelete(id);
            }
            catch (error) {
                throw new graphql_1.GraphQLError(`Error in deleting user: ${error.message}`);
            }
        })
    }
};
