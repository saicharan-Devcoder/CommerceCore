"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    countInStock: Int!
    imageUrl: String!
    category: Category!
  }

  type Category {
    id: ID!
    name: String!
    description: String!
    imageUrl: String!
    }

    type Cart {
      name: String!
      quantity: Int!
      price: Float!
      product: Product! 
    }

   type Order{
      id: ID!
      orderItems: [OrderItem!]!
      shippingAddress: ShippingAddress!
      paymentMethod: String!
      itemsPrice: Float!
      shippingPrice: Float!
      taxPrice: Float!
      totalPrice: Float!
      user: User!
      isPaid: Boolean!
      paidAt: String
      isDelivered: Boolean!
      deliveredAt: String
      createdAt: String!
      updatedAt: String!
   }

  type Query{
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    cart: [Cart!]!
    order: [Order!]!
  }

  type Mutation{
    addToCart(productId: ID!, quantity: Int!): Cart!
    removeFromCart(productId: ID!): Cart!
    createOrder(order: OrderInput!): Order!
    updateOrder(id: ID!, order: OrderInput!): Order!
    createProduct(product: ProductInput!): Product!
    updateProduct(id: ID!, product: ProductInput!): Product!
    deleteProduct(id: ID!): Product!
    createCategory(category: CategoryInput!): Category!
    updateCategory(id: ID!, category: CategoryInput!): Category!
    deleteCategory(id: ID!): Category!
  }
`;
