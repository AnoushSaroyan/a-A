import React from 'react';
// import queries from "../../graphql/queries";
import { FETCH_PRODUCTS }from "../../graphql/queries";
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom';

const ProductIndex = () => (
    <Query query={FETCH_PRODUCTS}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return `Error! ${error.message}`

            return (
                <ul>
                    {data.products.map(product => (
                        <li key={product._id}>
                            <Link to={`/products/${product._id}`}>{product.name}</Link> 
                        </li>
                    ))}
                </ul>
            )

        }}
    </Query>
)

export default ProductIndex;