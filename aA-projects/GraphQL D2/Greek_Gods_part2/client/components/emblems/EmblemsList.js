import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

// import our FETCH_GODS query
import Queries from "../../graphql/queries";
import DeleteEmblem from "./DeleteEmblem";
// we denote FETCH_GODS with a constant for clarity that
// this is a GraphQL syntax tree object and only for queries
const { FETCH_EMBLEMS } = Queries;

const EmblemsList = () => {
    return (
        <div className="outer">
            <Link to="/new">create new emblem</Link>
            <ul>
                <Query query={FETCH_EMBLEMS}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error</p>;

                        return data.emblems.map(({ id, name }) => (
                            <li key={id}>
                                <Link to={`/emblems/${id}`}>
                                    <h4>{name}</h4>
                                </Link>
                                <DeleteEmblem id={id} />
                            </li>
                        ));
                    }}
                </Query>
            </ul>
        </div>
    );
};

export default EmblemsList;