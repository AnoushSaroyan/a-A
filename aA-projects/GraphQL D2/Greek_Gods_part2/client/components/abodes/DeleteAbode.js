import React from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { DELETE_ABODE } = Mutations;

import Queries from "../../graphql/queries";
const { FETCH_ABODES } = Queries;

const linkStyle = {
    cursor: "pointer",
    fontSize: "10px",
    color: "red"
};

const DeleteAbode = props => {
    return (
        <Mutation
            mutation={DELETE_ABODE}
            refetchQueries={() => {
                return [
                    {
                        query: FETCH_ABODES
                    }
                ];
            }}
        >
            {(deleteAbode, { data }) => (
                <a
                    style={linkStyle}
                    onClick={e => {
                        e.preventDefault();
                        deleteAbode({ variables: { id: props.id } });
                    }}
                >
                    <p>Delete</p>
                </a>
            )}
        </Mutation>
    );
};

export default DeleteAbode;