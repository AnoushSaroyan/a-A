const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID } = graphql;
const mongoose = require("mongoose");

const CategoryType = require("./types/category_type");
const Category = mongoose.model("category");
const ProductType = require('./types/product_type');
const Product = mongoose.model('product');
const UserType = require("./types/user_type");
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        newCategory: {
            type: CategoryType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(_, { name }) {
                return new Category({ name }).save();
            }
        },
        deleteCategory: {
            type: CategoryType,
            args: { id: { type: GraphQLID } },
            resolve(_, { id }) {
                return Category.remove({ _id: id });
            }
        },
        newProduct: {
            type: ProductType,
            args: {
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                weight: { type: GraphQLFloat} 
            },
            async resolve(parentValue, { name, description, weight }, context) {
                const validUser = await AuthService.verifyUser({token: context.token});

                if (validUser.loggedIn){
                    const user = validUser._id;
                    return new Product({name, description, weight, user}).save();
                } else {
                    throw new Error("Sorry, you need to be logged in to create a product");
                }
            }   
        },
        deleteProduct: {
            type: ProductType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(_, { id }) {
                return Product.remove({_id: id});
            }
        },
        updateProductCategory: {
            type: ProductType,
            args: {
                productId: { type: GraphQLID },
                categoryId: { type: GraphQLID },
            },
            resolve(_, {productId, categoryId}) {
                return Product.updateProductCategory(productId, categoryId);
            }
        },
        register: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(_, data) {
                return AuthService.register(data);
            }           
        },
        logout: {
            type: UserType,
            args: {
                // all we need to log the user our is an id
                _id: { type: GraphQLID }
            },
            resolve(_, args) {
                return AuthService.logout(args);
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(_, args) {
                return AuthService.login(args);
            }
        },
        verifyUser: {
            type: UserType,
            args: {
                token: { type: GraphQLString }
            },
            resolve(_, args) {
                return AuthService.verifyUser(args);
            }
        },
    }
});

module.exports = mutation;