const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = require('graphql')

const Image = require('../models/image.js')
const Client = require('../models/client.js')

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
        return Client.findById(args.id)
      }
    },
    images: {
      type: new GraphQLList(ImageType),
      resolve(parent, args) { 
        return Image.find();
      }
    }
  }
})

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addImage: {
      type: ImageType,
      args: {
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        image: { type: GraphQLString }
      },
      resolve(parent, args) {
        const image = new Image({
          name: args.name,
          type: args.type,
          image: args.image
        })
        return image.save()
      }
    }
  }
})
 
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})