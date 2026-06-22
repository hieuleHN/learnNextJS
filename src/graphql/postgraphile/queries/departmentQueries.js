export const GET_ALL_DEPARTMENTS = `
query {
  allDepartments {
    nodes {
      id
      name
    }
  }
}
`;