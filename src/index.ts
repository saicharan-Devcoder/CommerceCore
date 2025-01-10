import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { connectDB } from "./db";


const startServer = async () => {
    await connectDB();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({
    port: 8000
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
}).catch((error) => {
    console.error(error);
});
}

startServer();
