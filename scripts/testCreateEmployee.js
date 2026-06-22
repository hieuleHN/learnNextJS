(async()=>{
  try{
    const mutation = `mutation InsertEmployee($employee:EmployeeInput!){createEmployee(input:{employee:$employee}){employee{id}}}`;
    const variables = { employee: { firstName: 'Test', lastName: 'User', email: 'test@example.com', employeeCode: 'TST001', status: true, departmentId: 1 } };

    const res = await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: mutation, variables }),
    });
    const json = await res.json();
    console.log(JSON.stringify(json, null, 2));
  }catch(e){
    console.error(e);
  }
})();
