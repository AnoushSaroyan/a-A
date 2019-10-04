import React from 'react';
// import queries from "../../graphql/queries";
import { FETCH_PRODUCT } from "../../graphql/queries";
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom';

const ProductIndex = (props) => (
    <Query query={FETCH_PRODUCT} variables={{id: props.match.params.productId}} >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return `Error! ${error.message}`

            return (
                <div>
                    <h1>{data.product.name}</h1>
                    <p>{data.product.description}</p>
                    <p>{data.product.weight}</p>
                </div>
            )

        }}
    </Query>
)

export default ProductIndex;