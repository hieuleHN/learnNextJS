// graphql/queries/employeeQueries.js

export const GET_LEVEL = `
  query {
  allLevels {
    nodes {
      id
      name
    }
  }
}
`;
