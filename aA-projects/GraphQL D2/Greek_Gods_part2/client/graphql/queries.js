import gql from "graphql-tag";

// we use gql with a template literal to construct graphql queries
export default {
    FETCH_GODS: gql`
        query FetchGods {
            gods {
                id
                name
                description
            }
        }
    `,

    FETCH_GOD: gql`
        query FetchGod($id: ID!) {
            god(_id: $id) {
                _id
                name
                type 
                description
                domains
                abode {
                    id
                    name
                }
                emblems {
                    id
                    name
                }
                parents {
                    id 
                    name
                }
                children {
                    id 
                    name
                }
                siblings {
                    id 
                    name
                }

            }
        }
    `,

    FETCH_PARENTS: gql`
        query FetchGods {
            parents {
                _id
                name
            }
        }
    `,

    FETCH_SIBLINGS: gql`
        query FetchGods {
            siblings {
                _id
                name
            }
        }
    `,

    FETCH_CHILDREN: gql`
        query FetchGods {
            children {
                _id
                name
            }
        }
    `,

    FETCH_ABODES: gql`
        query FetchAbodes {
            abodes {
                id
                name
            }
        }
    `,

    FETCH_ABODE: gql`
        query FetchAbode($id: ID!) {
            abode(_id: $id) {
                _id
                name
                coordinates
            }
        }
    `, 

    FETCH_EMBLEMS: gql`
        query FetchEmblems {
            emblems {
                id
                name
            }
        }
    `,

    FETCH_EMBLEM: gql`
        query FetchEmblem($id: ID!) {
            emblem(_id: $id) {
                _id
                name
            }
        }
    `,
};