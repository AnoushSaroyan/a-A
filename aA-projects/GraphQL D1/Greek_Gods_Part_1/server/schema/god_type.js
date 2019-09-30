const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
// const God = require("../../models/God");
// const Abode = require("../../models/Abode");
const God = mongoose.model("god");
const Abode = mongoose.model("abode");
const AbodeType = require("./abode_type");

const GodType = new GraphQLObjectType({
    name: "GodType",
    // wrapped in a function to create a thunk
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        description: { type: GraphQLString },
        // remember the GraphQLList will return us an array of domains
        domains: { type: new GraphQLList(GraphQLString) },
        abode: {
            type: AbodeType,
            resolve(parentValue) {
                return Abode.findById(parentValue.abode)
                .then(abode => abode)
                .catch(err => err.responseJSON);
            }
        },
        parents: {
            type: new GraphQLList(GodType),
            resolve(parentValue) {
                return God.findRelatives(parentValue.id, 'parents');
            }
        },
        emblems: {
          type: new GraphQLList(require("./emblem_type")),
            resolve(parentValue){
              return God.findById(parentValue.id)
              .populate("emblem")
              .then(god => god.emblem)
              .catch(err => err.responseJSON)
            }
        }
    })
});

module.exports = GodType;