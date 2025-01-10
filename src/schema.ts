import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    countInStock: Int!
    imageUrl: String!
    category: Category!
  }

  type User{
    id: ID!
    name: String!
    email: String!
    isAdmin: Boolean!
    createdAt: String!
  }

  type Category {
    id: ID!
    name: String!
    description: String!
    imageUrl: String!
    }

    type Cart {
      id: ID!
      user: User!
      cartItems: [CartItems!]!
    }

    type CartItems{
      id: ID!
      product: Product!
      quantity: Int!
    }

    type OrderItem{
      id: ID!
      product: Product!
      quantity: Int!
    }

    type ShippingAddress{
      address: String!
      city: String!
      postalCode: String!
      country: String!
    }

   
    type User{
      id: ID!
      name: String!
      email: String!
      isAdmin: Boolean!
      createdAt: String!
    }

   type Order{
      id: ID!
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
    updatedAt: String
   }

  input UserInput{
    name: String!
    email: String!
    password: String!
    isAdmin: Boolean!
  }

  input OrderInput{
    orderItems: [OrderItemInput!]!
    shippingAddress: ShippingAddressInput!
    paymentMethod: String!
    itemsPrice: Float!
    shippingPrice: Float!
    taxPrice: Float!
    totalPrice: Float!
    userId: ID!
    isPaid: Boolean!
    paidAt: String
    isDelivered: Boolean!
    deliveredAt: String
  }

  input ShippingAddressInput{
      address: String!
      city: String!
      postalCode: String!
      country: String!
  }


  input OrderItemInput{
    product: ID!
    quantity: Int!
  }

  input ProductInput{
    name: String!
    price: Float!
    description: String!
    countInStock: Int!
    imageUrl: String!
    categoryId: ID
    userId: ID!
  }

  input CategoryInput{
    name: String!
    description: String!
    imageUrl: String!
  }

  type Query{
    users: [User!]!
    user(id: ID!): User
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    cart: [Cart!]!
    order: [Order!]!
  }


  type Mutation{
    createUser(user: UserInput!): User!
    updateUser(id: ID!, user: UserInput!): User!
    deleteUser(id: ID!): User!
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