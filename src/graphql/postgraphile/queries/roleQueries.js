// graphql/queries/employeeQueries.js

export const GET_ROLE = `
  query {
  allRoles {
    nodes {
      id
      name
    }
  }
}

`;
