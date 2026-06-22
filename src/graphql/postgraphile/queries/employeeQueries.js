// graphql/queries/employeeQueries.js

export const GET_EMPLOYEES = `
query GetEmployees {
  allEmployees {
    nodes {
      id
      email
      firstName
      lastName
      phone
      status
      employeeCode
      gender
      createdAt
      updatedAt

      departmentByDepartmentId {
        id
        name
      }
    }
  }
}
`;

export const GET_EMPLOYEE_BY_ID = `
query GetEmployeeById($id: Int!) {
  employeeById(id: $id) {
    id
    email
    firstName
    lastName
    phone
    status
    employeeCode
    dateOfBirth
    address
    startDate
    gender
    levelId
    roleId
    departmentId
    documentUrl
    createdAt
    updatedAt

    departmentByDepartmentId {
      id
      name
    }

    roleByRoleId {
      id
      name
    }

    levelByLevelId {
      id
      name
    }
  }
}
`;