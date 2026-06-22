(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/hasuraClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchGraphQL",
    ()=>fetchGraphQL
]);
// services/hasuraClient.js
const HASURA_ENDPOINT = 'http://localhost:8080/v1/graphql';
async function fetchGraphQL(query, variables = {}) {
    try {
        const response = await fetch(HASURA_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-hasura-admin-secret': "mysecret" //process.env.HASURA_ADMIN_SECRET // Thêm token nếu có
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
        const result = await response.json();
        if (result.errors) {
            console.error('Lỗi từ Hasura GraphQL:', JSON.stringify(result.errors, null, 2));
            throw new Error('Không thể fetch dữ liệu từ Hasura');
        }
        return result.data;
    } catch (error) {
        console.error('Lỗi hệ thống khi gọi API:', error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/graphql/queries/employeeQueries.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graphql/queries/employeeQueries.js
__turbopack_context__.s([
    "GET_EMPLOYEES",
    ()=>GET_EMPLOYEES,
    "GET_EMPLOYEE_BY_ID",
    ()=>GET_EMPLOYEE_BY_ID
]);
const GET_EMPLOYEES = `
  query GetEmployees {
    employees {
      id
      email
      first_name
      last_name
      phone
      status
      employee_code
      gender
      created_at
      updated_at
      department {
        id
        name
      }
    }
  }
`;
const GET_EMPLOYEE_BY_ID = `
  query GetEmployeeById($id: Int!) {
    employees_by_pk(id: $id) {
      id
      email
      first_name
      last_name
      phone
      status
      employee_code
      gender
      level_id
      role_id
      department_id
      created_at
      updated_at
      level {
        id
        name
      }
      role {
        id
        name
      }
      department {
        id
        name
      }
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/graphql/mutations/employeeMutations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graphql/mutations/employeeMutations.js
// 1. THÊM MỚI - Trả về đầy đủ thuộc tính để cập nhật ngay vào State UI
__turbopack_context__.s([
    "DELETE_EMPLOYEE",
    ()=>DELETE_EMPLOYEE,
    "INSERT_EMPLOYEE",
    ()=>INSERT_EMPLOYEE,
    "UPDATE_EMPLOYEE",
    ()=>UPDATE_EMPLOYEE
]);
const INSERT_EMPLOYEE = `
  mutation InsertEmployee($object: employees_insert_input!) {
    insert_employees_one(object: $object) {
      id
      email
      first_name
      last_name
      employee_code
      gender
      address
      document_url
      date_of_birth
      start_date
      phone
      status
      level_id
      role_id
      department_id
      created_at
      updated_at
    }
  }
`;
const UPDATE_EMPLOYEE = `
  mutation UpdateEmployee($id: Int!, $changes: employees_set_input!) {
    update_employees_by_pk(pk_columns: {id: $id}, _set: $changes) {
      id
      email
      first_name
      last_name
      phone
      status
      level_id
      role_id
      department_id
      created_at
      updated_at
      level {
        id
        name
      }
      role {
        id
        name
      }
      department {
        id
        name
      }
    }
  }
`;
const DELETE_EMPLOYEE = `
  mutation DeleteEmployee($id: Int!) {
    delete_employees_by_pk(id: $id) {
      id
      email
      first_name
      last_name
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/employeeService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmployeeService",
    ()=>EmployeeService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hasuraClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$employeeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/queries/employeeQueries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2f$employeeMutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/mutations/employeeMutations.js [app-client] (ecmascript)");
;
;
;
const EmployeeService = {
    getAll: async ()=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGraphQL"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$employeeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_EMPLOYEES"]);
        return data?.employees || [];
    },
    getById: async (id)=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGraphQL"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$queries$2f$employeeQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET_EMPLOYEE_BY_ID"], {
            id
        });
        return data?.employees_by_pk || null;
    },
    create: async (employeeData)=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGraphQL"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2f$employeeMutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INSERT_EMPLOYEE"], {
            object: employeeData
        });
        return data?.insert_employees_one || null;
    },
    update: async (id, changes)=>{
        // changes truyền vào các cột muốn sửa ví dụ: { phone: "099999", status: "active" }
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGraphQL"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2f$employeeMutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UPDATE_EMPLOYEE"], {
            id,
            changes
        });
        return data?.update_employees_by_pk || null;
    },
    delete: async (id)=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hasuraClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGraphQL"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$mutations$2f$employeeMutations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DELETE_EMPLOYEE"], {
            id
        });
        return data?.delete_employees_by_pk || null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/EmployeeForm.jsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/components/EmployeeForm.jsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=_167b_u8._.js.map