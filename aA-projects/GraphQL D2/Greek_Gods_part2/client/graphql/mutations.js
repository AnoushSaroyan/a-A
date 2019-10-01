import gql from "graphql-tag";

export default {
    // we make sure to use the `mutation` key word when creating our frontend mutations
    // just like we would in GraphiQL
    DELETE_GOD: gql`
    mutation DeleteGod($id: ID) {
      deleteGod(id: $id) {
        id
      }
    }
  `,
    NEW_GOD: gql`
    mutation NewGod($name: String, $type: String, $description: String) {
      newGod(name: $name, type: $type, description: $description) {
        id
        name
        description
      }
    }
  `,

    UPDATE_GOD_NAME: gql`
    mutation updateGod($id: ID, $name: String) {
        updateGod(id: $id, name: $name) {
        id
        name
        }
    }
    `,

    NEW_ABODE: gql`
    mutation NewAbode($name: String, $coordinates: String) {
      newAbode(name: $name, coordinates: $coordinates) {
        id
        name
        coordinates
      }
    }
  `,

    DELETE_ABODE: gql`
    mutation DeleteAbode($id: ID) {
      deleteAbode(id: $id) {
        id
      }
    }
  `,

    NEW_EMBLEM: gql`
    mutation NewEmblem($name: String) {
      newEmblem(name: $name) {
        id
        name
      }
    }
  `,

    DELETE_EMBLEM: gql`
    mutation DeleteEmblem($id: ID) {
      deleteEmblem(id: $id) {
        id
      }
    }
  `,
};