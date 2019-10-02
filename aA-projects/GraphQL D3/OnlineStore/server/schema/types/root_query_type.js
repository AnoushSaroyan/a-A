const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const UserType = require("./user_type");
const User = mongoose.model("user");

const CategoryType = require("./category_type");
const Category = mongoose.model("category");

const ProductType = require("./product_type");
const Product = mongoose.model("product")
const secretOrkey = require("../../../config/keys").secretOrkey;
const axios = require('axios');
const AWSkey = require("../../../config/keys").AWSkey;


const authOptions = {
    method: "GET",
    url:
        "https://u7e3i4u6p8.execute-api.us-east-1.amazonaws.com/default/generate-price",
    headers: {
        "x-api-key": AWSkey
    }
};

const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return User.find({});
            }
        },
        user: {
            type: UserType,
            args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(_, args) {
                return User.findById(args._id);
            }
        },
        categories: {
            type: new GraphQLList(CategoryType),
            resolve() {
                return Category.find({});
            }
        },
        category: {
            type: CategoryType,
            args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(_, args) {
                return Category.findById(args._id);
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve() {
                return Product.find({}).then(products => {
                    return products.map(product => {
                        return axios(authOptions).then(res => {
                            // return the cost onto the Product object
                            product.cost = res.data.cost;
                            //return the complete Product object
                            return product;
                        })
                    })
                })                
            }
        },
        product: {
            type: ProductType,
            args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(_, args) {
                // find our product
                return Product.findById(args._id).then(product => {

                    // ftehc price from AWS API using get RESTful request method
                    return axios(authOptions).then(res => {
                        // return the cost onto the Product object
                        product.cost = res.data.cost;
                        //return the complete Product object
                        return product;
                    })
                })
            }
        },
    })
});


module.exports = RootQueryType;