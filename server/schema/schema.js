const { images, clients } = require('../sampleData.js')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = require('graphql')

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    password: { type: GraphQLString }
  })
})

const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    image: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find(client => client.id === args.id)
      }
    },
    images: {
      type: new GraphQLList(ImageType),
      resolve(parent, args) { 
        return images
      }
    }
  }
})
 
module.exports = new GraphQLSchema({
  query: RootQuery
})