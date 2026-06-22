"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getEmployees } from "../src/services/postgraphile/employeePostgraphileService";
import { getDepartments } from "../src/services/postgraphile/departmentPostgraphileService";
import axios from "axios";




export default function Home() {
    const router=useRouter();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [employeesChange, setEmployeesChange] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [phongBan, setPhongBan] = useState(0);
    const [status, setStatus] = useState("");
    const [statusButton, setStatusButton] = useState("all");
    const params = useSearchParams();
    const currentSort = params.get('sort') || "moi-nhat";


  useEffect(() => {
    ( async () => {
      try {
        const dataDepartments = (await axios.get('http://localhost:3001/departments')).data;
        const dataEmployees = (await axios.get('http://localhost:3001/employees')).data;
        console.log(dataEmployees);
        
        setEmployeesChange(dataEmployees)
        setEmployees(dataEmployees)
        setDepartments(dataDepartments)
      } catch (err) {
        console.error("Lỗi khi lấy danh sách nhân viên:", err);
      } 
    })();
  }, []);



useEffect(()=>{
  (()=>{
    let data=employees
    setTimeout(() => {
      if(status=="all"&&phongBan==0){
        setEmployeesChange(data);
      }else if(status=="true"&&phongBan==0){
        data=data.filter(item=>item.status==true)
        setEmployeesChange(data)
      }else if(status=="false"&&phongBan==0){
        data=data.filter(item=>item.status==false)
        setEmployeesChange(data)
      }else if(status=="all"&&phongBan){
        data=data.filter(item=>item.status==true&&item.departmentByDepartmentId?.id==phongBan)
        setEmployeesChange(data)
      }else if(status=="true"&&phongBan){
        data=data.filter(item=>item.status==true&&item.departmentByDepartmentId?.id==phongBan)
        setEmployeesChange(data)
      }else if(status=="false"&&phongBan){
        data=data.filter(item=>item.status==false&&item.departmentByDepartmentId?.id==phongBan)
        setEmployeesChange(data)
      }else if(phongBan){
        data=data.filter(item=>item.departmentByDepartmentId?.id==phongBan)
        setEmployeesChange(data)
      }else if(status=="true"){
        data=data.filter(item=>item.status==true)
        setEmployeesChange(data)
      }else if(status=="false"){
        data=data.filter(item=>item.status==false)
        setEmployeesChange(data)
      }else if(status=="all"){
        setEmployeesChange(data);
      }
    }, 200);
  })()
},[status,phongBan,employees])


function handleChange(id){
    setPhongBan(id)
}

function handleClickStatus(value){
  setStatusButton(value)
  setStatus(value)
}



const totalRecords=employees.length;
const totalPages=Math.ceil(totalRecords/limit)

const startIndex=(page-1)*limit;
const endIndex=startIndex+limit;

const paginatedEmployees = employeesChange.slice(startIndex, endIndex);

const HienThiStart = totalRecords === 0 ? 0 : startIndex + 1;
const HienThiEnd = Math.min(endIndex, totalRecords);

function handleClickRow(id){
    console.log(123);
    
    router.push(`edit/${id}`);
}

  return (
    <div className="px-4 py-8">
      <div className="bg-gray-200 rounded-xl w-full h-screen">
        <div className="px-5">
            {/* title */}
            <div className="flex justify-between items-center py-7">
                <div className="text-black text-xl font-bold">Danh sách nhân viên</div>
                <div className="flex gap-4">
                    <button className="bg-gray-300 rounded-lg px-3 py-1 cursor-pointer">Tải lên</button>
                    <Link className="bg-black text-white rounded-xl px-3 py-1" href={"/create"}>Thêm mới</Link>
                </div>
            </div>
        {/* select */}
            <div>
                <select onChange={(e)=>{handleChange(e.target.value)}} className="bg-white rounded-lg py-1 px-1 cursor-pointer" name="select" id="">
                    <option value={0}>Phòng ban: Tất cả</option>
                    {departments.map(item=>(
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
        {/* menu table */}
            <div className="bg-white rounded-xl grid grid-cols-3 my-5 divide-x-2 divide-gray-300 py-2">
                
                    <div className="px-3">
                        <button onClick={()=>{handleClickStatus("all")}} className={statusButton=="all"?"px-3 w-full rounded-xl bg-gray-200 text-left py-3":"px-3 w-full rounded-xl hover:bg-gray-200 text-left py-3 cursor-pointer"}>
                          <span className="text-gray-500 py-5">Tất cả</span><br/>
                          <strong>534</strong>
                        </button>
                    </div>
                        <div className=" px-3">
                            <button onClick={()=>{handleClickStatus("true")}} className={statusButton=="true"?"px-3 w-full rounded-xl bg-gray-200 text-left py-3":"px-3 w-full rounded-xl hover:bg-gray-200 text-left py-3 cursor-pointer"}>
                                <span className="text-gray-500 py-5">Đang làm việc</span><br/>
                                <strong>482</strong>
                            </button>
                        </div>                    
                <div>
                        <div className="px-3">
                            <button onClick={()=>{handleClickStatus("false")}} className={statusButton=="false"?"px-3 w-full rounded-xl bg-gray-200 text-left py-3":"px-3 w-full rounded-xl hover:bg-gray-200 text-left py-3 cursor-pointer"}>
                                <span className="text-gray-500 py-5">Đã nghỉ việc</span><br/>
                                <strong>52</strong>
                            </button>
                        </div>
                    
                </div>
            </div>

            {/* bảng */}
            <div className="">
                <div className="flex justify-between items-center bg-white rounded-t-xl py-2 px-2">
                    <div className="flex gap-4">
                        <Link
                  href="?sort=moi-nhat"
                  className={`rounded-xl px-3 py-1 transition-colors ${
                    currentSort === "moi-nhat" ? "bg-gray-300" : "hover:bg-gray-200"
                  }`}
                >
                  Mới nhất
                </Link>
                {/* Click vào đây URL sẽ chuyển thành: ?sort=cu-nhat */}
                <Link
                  href="?sort=cu-nhat"
                  className={`rounded-xl px-3 py-1 transition-colors ${
                    currentSort === "cu-nhat" ? "bg-gray-300" : "hover:bg-gray-200"
                  }`}
                >
                  Cũ nhất
                </Link>
                    </div >
                    <div className="text-gray-600 border-1 px-2 py-1 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" 
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg></div>
                </div>

                <table className="w-full">
                    <tbody>
                        <tr className="border-1 border-gray-300">
                            <th className="font-bold py-3 px-5 text-left">STT</th>
                            <th className="font-bold py-3 px-5 text-left">Họ tên</th>
                            <th className="font-bold py-3 px-5 text-left">Mã nhân viên</th>
                            <th className="font-bold py-3 px-5 text-left">Email</th>
                            <th className="font-bold py-3 px-5 text-left">Số điện thoại</th>
                            <th className="font-bold py-3 px-5 text-left">Giới tính</th>
                            <th className="font-bold py-3 px-5 text-left">Phòng ban</th>
                            <th className="font-bold py-3 px-5 text-left">Trạng thái</th>
                        </tr>
                            {paginatedEmployees.map((item,index)=>(
                                <tr 
                                onClick={()=>{handleClickRow(item.id)}} 
                                className="cursor-pointer border-1 bg-white hover:bg-gray-100 border-gray-300" key={item.id}>
                                    <td className="font-extralight py-3 px-5">{startIndex+index+1}</td>
                                    <td className="font-extralight py-3 px-5">{item.firstName} {item.lastName}</td>
                                    <td className="font-extralight py-3 px-5">{item.employeeCode}</td>
                                    <td className="font-extralight py-3 px-5">{item.email}</td>
                                    <td className="font-extralight py-3 px-5">{item.phone}</td>
                                    <td className="font-extralight py-3 px-5">{item.gender}</td>
                                    <td className="font-extralight py-3 px-5">{item.departmentByDepartmentId.name}</td>
                                    <td className="font-extralight py-3 px-5"><div className={`${item.status?"px-1 py-1 bg-emerald-300 rounded-lg flex items-center gap-2":"px-1 py-1 bg-red-300 rounded-xl flex items-center gap-2"}`}>
                                        {item.status?<svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="#22c55e"
                                            >
                                            <circle cx="12" cy="12" r="10" />
                                            <path
                                                d="M8 12l2.5 2.5L16 9"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                            />
                                            </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#ef4444">
                                                <circle cx="12" cy="12" r="10" />
                                                <path
                                                    d="M8 8l8 8M16 8l-8 8"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                />
                                            </svg>
                                            }
                                            {item.status?"Đã làm việc":"Đã nghỉ việc"}</div></td>
                                            
                                </tr>
                            ))}
                            
                    </tbody>
                </table>
                
                <div className="flex justify-between items-center bg-white border-t border-gray-200 px-5 py-4 select-none">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <select name="" id="" value={limit} onChange={(e)=>{setLimit(Number(e.target.value));setPage(1)}}
                            className="bg-white border border-gray-300 rounded-lg px-2 py-1 outline-none cursor-pointer"
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                        </select>
                        <span>bản ghi/trang</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>
                        Hiển thị {HienThiStart} - {HienThiEnd} trên {totalRecords} bản ghi
                        </span>
                    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={page <= 1}
                            className={`px-3 py-1.5 border-r border-gray-300 ${
                            page <= 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-100 cursor-pointer"
                            }`}
                        >
                            &lt;
                        </button>

                        <button
                            onClick={() =>  setPage(page + 1)}
                            disabled={page >= totalPages}
                            className={`px-3 py-1.5 ${
                            page >= totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-100 cursor-pointer"
                            }`}
                        >
                            &gt;
                        </button>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
}
