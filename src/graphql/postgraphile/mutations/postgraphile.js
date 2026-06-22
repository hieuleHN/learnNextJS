export const UPDATE_DEPARTMENT = `
mutation UpdateDepartment(
  $id:Int!,
  $name:String!
) {
  updateDepartmentById(
    input:{
      id:$id
      departmentPatch:{
        name:$name
      }
    }
  ) {
    department {
      id
      name
    }
  }
}
`;