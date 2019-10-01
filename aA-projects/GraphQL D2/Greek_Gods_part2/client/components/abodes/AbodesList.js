import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

// import our FETCH_GODS query
import Queries from "../../graphql/queries";
import DeleteAbode from "./DeleteAbode";
// we denote FETCH_GODS with a constant for clarity that
// this is a GraphQL syntax tree object and only for queries
const { FETCH_ABODES } = Queries;

const AbodesList = () => {
    return (
        <div className="outer">
            <Link to="/new">create new abode</Link>
            <ul>
                <Query query={FETCH_ABODES}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error</p>;

                        return data.abodes.map(({ id, name, coordinates }) => (
                            <li key={id}>
                                <Link to={`/abodes/${id}`}>
                                    <h4>{name}</h4>
                                </Link>
                                <p className="description">Coordinates: {coordinates}</p>
                                <DeleteAbode id={id} />
                            </li>
                        ));
                    }}
                </Query>
            </ul>
        </div>
    );
};

export default AbodesList;