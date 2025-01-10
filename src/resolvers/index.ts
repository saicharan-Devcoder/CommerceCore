import { productResolvers } from "./product.resolver";
import { orderResolvers } from "./order.resolver";
import { categoryResolvers } from "./category.resolver";
import { cartResolvers } from "./cart.resolver";
import { userResolvers } from "./user.resolver";

export const resolvers = [
    productResolvers,
    orderResolvers,
    categoryResolvers,
    cartResolvers,
    userResolvers
  ];