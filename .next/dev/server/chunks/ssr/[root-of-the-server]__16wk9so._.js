module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/app/edit/[id]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditEmployeePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/components/EmployeeForm'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
async function EditEmployeePage({ params }) {
    const { id } = await params;
    const employees = [
        {
            id: 1,
            lastName: "Nguyễn Minh",
            firstName: "Hoàng",
            employeeCode: "PNKX365",
            email: "hoangnm@phenikaa-x.com",
            phone: "0858812541",
            gender: "Nam",
            dateOfBirth: "1996-08-15",
            startDate: "2023-02-10",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/hoangnm.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 2,
            lastName: "Đỗ Đức",
            firstName: "Anh",
            employeeCode: "HDK212",
            email: "anhdd@phenikaa-x.com",
            phone: "0902149993",
            gender: "Nam",
            dateOfBirth: "1998-05-20",
            startDate: "2024-01-05",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/anhdd.pdf",
            departmentId: 2,
            status: true
        },
        {
            id: 3,
            lastName: "Lê Công Bảo",
            firstName: "Ngọc",
            employeeCode: "HDK221",
            email: "ngoclcb@phenikaa-x.com",
            phone: "0329645776",
            gender: "Nam",
            dateOfBirth: "1995-11-02",
            startDate: "2022-08-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/ngoclcb.pdf",
            departmentId: 3,
            status: true
        },
        {
            id: 4,
            lastName: "Phạm Viết",
            firstName: "Vinh",
            employeeCode: "PNKX363",
            email: "vinhpv@phenikaa-x.com",
            phone: "0869674217",
            gender: "Nam",
            dateOfBirth: "2000-02-01",
            startDate: "2026-05-25",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/vinhpv.pdf",
            departmentId: 1,
            status: false
        },
        {
            id: 5,
            lastName: "Nguyễn Tuấn",
            firstName: "Anh",
            employeeCode: "PNKX362",
            email: "anhnt@phenikaa-x.com",
            phone: "0982210794",
            gender: "Nam",
            dateOfBirth: "1994-07-22",
            startDate: "2021-03-12",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/anhnt.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 6,
            lastName: "Đào Văn",
            firstName: "Quang",
            employeeCode: "PNKX361",
            email: "quangdv@phenikaa-x.com",
            phone: "0359275458",
            gender: "Nam",
            dateOfBirth: "1997-09-30",
            startDate: "2023-06-18",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 4,
            status: true
        },
        {
            id: 7,
            lastName: "Lê Minh",
            firstName: "Thảo",
            employeeCode: "PNKX360",
            email: "thaolm@phenikaa-x.com",
            phone: "0966789605",
            gender: "Nữ",
            dateOfBirth: "1999-04-12",
            startDate: "2024-02-20",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/thaolm.pdf",
            departmentId: 5,
            status: true
        },
        {
            id: 8,
            lastName: "Nguyễn Chấn",
            firstName: "Nam",
            employeeCode: "PNKX359",
            email: "namnc@phenikaa-x.com",
            phone: "0329848671",
            gender: "Nam",
            dateOfBirth: "1993-12-05",
            startDate: "2020-09-10",
            levelId: 2,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: null,
            departmentId: 4,
            status: false
        },
        {
            id: 9,
            lastName: "Hà Tiến Công",
            firstName: "Minh",
            employeeCode: "PNKX358",
            email: "minhtc@phenikaa-x.com",
            phone: "0773288421",
            gender: "Nam",
            dateOfBirth: "1996-03-25",
            startDate: "2023-11-01",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/minhtc.pdf",
            departmentId: 6,
            status: true
        },
        {
            id: 10,
            lastName: "Trần Bảo",
            firstName: "Khánh",
            employeeCode: "PNKX345",
            email: "khanhtb@phenikaa-x.com",
            phone: "0946844375",
            gender: "Nam",
            dateOfBirth: "1998-10-18",
            startDate: "2024-03-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/khanhtb.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 11,
            lastName: "Trần Văn",
            firstName: "Hải",
            employeeCode: "PNKX344",
            email: "haitv@phenikaa-x.com",
            phone: "0912345678",
            gender: "Nam",
            dateOfBirth: "1992-06-14",
            startDate: "2019-05-12",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: null,
            departmentId: 6,
            status: true
        },
        {
            id: 12,
            lastName: "Nguyễn Thị",
            firstName: "Mai",
            employeeCode: "PNKX343",
            email: "maint@phenikaa-x.com",
            phone: "0987654321",
            gender: "Nữ",
            dateOfBirth: "1995-01-09",
            startDate: "2022-10-22",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/maint.pdf",
            departmentId: 5,
            status: true
        },
        {
            id: 13,
            lastName: "Lê Hoàng",
            firstName: "Long",
            employeeCode: "HDK222",
            email: "longlh@phenikaa-x.com",
            phone: "0903334445",
            gender: "Nam",
            dateOfBirth: "1997-08-27",
            startDate: "2023-04-10",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/longlh.pdf",
            departmentId: 2,
            status: false
        },
        {
            id: 14,
            lastName: "Phạm Thanh",
            firstName: "Tùng",
            employeeCode: "PNKX342",
            email: "tungpt@phenikaa-x.com",
            phone: "0868112233",
            gender: "Nam",
            dateOfBirth: "1999-12-11",
            startDate: "2024-06-05",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 1,
            status: true
        },
        {
            id: 15,
            lastName: "Vũ Bích",
            firstName: "Ngọc",
            employeeCode: "PNKX341",
            email: "ngocvb@phenikaa-x.com",
            phone: "0945998877",
            gender: "Nữ",
            dateOfBirth: "2001-03-08",
            startDate: "2025-01-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/ngocvb.pdf",
            departmentId: 3,
            status: true
        },
        {
            id: 16,
            lastName: "Hoàng Đình",
            firstName: "Đạt",
            employeeCode: "PNKX340",
            email: "dathd@phenikaa-x.com",
            phone: "0352667788",
            gender: "Nam",
            dateOfBirth: "1996-07-19",
            startDate: "2023-09-01",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: null,
            departmentId: 4,
            status: true
        },
        {
            id: 17,
            lastName: "Bùi Minh",
            firstName: "Tuấn",
            employeeCode: "HDK223",
            email: "tuanbm@phenikaa-x.com",
            phone: "0834556677",
            gender: "Nam",
            dateOfBirth: "1994-02-28",
            startDate: "2021-11-11",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/tuanbm.pdf",
            departmentId: 2,
            status: true
        },
        {
            id: 18,
            lastName: "Đặng Thị Thu",
            firstName: "Hà",
            employeeCode: "PNKX339",
            email: "hadtt@phenikaa-x.com",
            phone: "0971223344",
            gender: "Nữ",
            dateOfBirth: "1998-09-14",
            startDate: "2024-05-20",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 5,
            status: false
        },
        {
            id: 19,
            lastName: "Ngô Chí",
            firstName: "Thành",
            employeeCode: "PNKX338",
            email: "thanhnc@phenikaa-x.com",
            phone: "0962334455",
            gender: "Nam",
            dateOfBirth: "1995-05-05",
            startDate: "2022-07-08",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/thanhnc.pdf",
            departmentId: 6,
            status: true
        },
        {
            id: 20,
            lastName: "Đỗ Minh",
            firstName: "Quân",
            employeeCode: "PNKX337",
            email: "quandm@phenikaa-x.com",
            phone: "0915445566",
            gender: "Nam",
            dateOfBirth: "1997-11-22",
            startDate: "2023-12-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/quandm.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 21,
            lastName: "Nguyễn Bảo",
            firstName: "Trâm",
            employeeCode: "PNKX336",
            email: "tramnb@phenikaa-x.com",
            phone: "0981556677",
            gender: "Nữ",
            dateOfBirth: "2000-08-30",
            startDate: "2025-03-01",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 3,
            status: true
        },
        {
            id: 22,
            lastName: "Phan Văn",
            firstName: "Đức",
            employeeCode: "PNKX335",
            email: "ducpv@phenikaa-x.com",
            phone: "0904667788",
            gender: "Nam",
            dateOfBirth: "1993-01-16",
            startDate: "2020-04-25",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/ducpv.pdf",
            departmentId: 4,
            status: false
        },
        {
            id: 23,
            lastName: "Dương Hồng",
            firstName: "Nhung",
            employeeCode: "PNKX334",
            email: "nhunghd@phenikaa-x.com",
            phone: "0936778899",
            gender: "Nữ",
            dateOfBirth: "1996-10-10",
            startDate: "2023-08-14",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/nhunghd.pdf",
            departmentId: 5,
            status: true
        },
        {
            id: 24,
            lastName: "Lý Minh",
            firstName: "Triết",
            employeeCode: "HDK224",
            email: "trietlm@phenikaa-x.com",
            phone: "0859889900",
            gender: "Nam",
            dateOfBirth: "1998-04-04",
            startDate: "2024-07-20",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 2,
            status: true
        },
        {
            id: 25,
            lastName: "Trịnh Công",
            firstName: "Sơn",
            employeeCode: "PNKX333",
            email: "sontc@phenikaa-x.com",
            phone: "0392112233",
            gender: "Nam",
            dateOfBirth: "1994-12-19",
            startDate: "2021-09-05",
            levelId: 2,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/sontc.pdf",
            departmentId: 6,
            status: true
        },
        {
            id: 26,
            lastName: "Phùng Tiến",
            firstName: "Đạt",
            employeeCode: "PNKX332",
            email: "datpt@phenikaa-x.com",
            phone: "0941223344",
            gender: "Nam",
            dateOfBirth: "1999-06-25",
            startDate: "2024-10-10",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/datpt.pdf",
            departmentId: 1,
            status: true
        },
        {
            id: 27,
            lastName: "Cao Minh",
            firstName: "Châu",
            employeeCode: "PNKX331",
            email: "chaucm@phenikaa-x.com",
            phone: "0975334455",
            gender: "Nữ",
            dateOfBirth: "2002-02-14",
            startDate: "2025-06-01",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 3,
            status: true
        },
        {
            id: 28,
            lastName: "Đinh Quang",
            firstName: "Vinh",
            employeeCode: "PNKX330",
            email: "vinhdq@phenikaa-x.com",
            phone: "0968445566",
            gender: "Nam",
            dateOfBirth: "1995-09-09",
            startDate: "2022-01-20",
            levelId: 1,
            address: "Hà Nội",
            roleId: 1,
            documentUrl: "/uploads/docs/vinhdq.pdf",
            departmentId: 4,
            status: false
        },
        {
            id: 29,
            lastName: "Nguyễn Hà",
            firstName: "Phương",
            employeeCode: "PNKX329",
            email: "phuongnh@phenikaa-x.com",
            phone: "0917556677",
            gender: "Nữ",
            dateOfBirth: "1997-03-21",
            startDate: "2023-05-15",
            levelId: 2,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: "/uploads/docs/phuongnh.pdf",
            departmentId: 5,
            status: true
        },
        {
            id: 30,
            lastName: "Võ Hoàng",
            firstName: "Yến",
            employeeCode: "PNKX328",
            email: "yenvh@phenikaa-x.com",
            phone: "0983667788",
            gender: "Nữ",
            dateOfBirth: "2000-11-11",
            startDate: "2025-09-05",
            levelId: 1,
            address: "Hà Nội",
            roleId: 2,
            documentUrl: null,
            departmentId: 6,
            status: true
        }
    ];
    const valueOJ = employees.find((item)=>item.id === Number(id));
    if (!valueOJ) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-center text-red-500 font-medium",
            children: "Không tìm thấy thông tin nhân viên này!"
        }, void 0, false, {
            fileName: "[project]/app/edit/[id]/page.jsx",
            lineNumber: 520,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(EmployeeForm, {
        initialData: valueOJ
    }, void 0, false, {
        fileName: "[project]/app/edit/[id]/page.jsx",
        lineNumber: 523,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/edit/[id]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/edit/[id]/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16wk9so._.js.map