"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { getEmployeeById, createEmployee, updateEmployee } from "../../src/services/postgraphile/employeePostgraphileService";
import { getDepartments } from "../../src/services/postgraphile/departmentPostgraphileService";
import { getLevels } from "../../src/services/postgraphile/levelPostgraphileService";
import { getRoles } from "../../src/services/postgraphile/rolePostgraphileService";
import axios from "axios";

export default function EmployeeForm({ initialData }) {
    const router=useRouter()
    const idEmployee=initialData
    

    const isEditMode = !!idEmployee;

    const [levels, setLevels]=useState([]);
    const [departments, setDepartments]=useState([]);
    const [roles, setRoles]=useState([]);

      const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

useEffect(() => {
  (async () => {
    try {
      const dataRole = await axios.get('http://localhost:3001/roles');
      setRoles(dataRole.data);

      const dataLevel = await axios.get('http://localhost:3001/level');
      setLevels(dataLevel.data);

      const dataDepartments = await axios.get('http://localhost:3001/departments');
      setDepartments(dataDepartments.data);

      if (isEditMode && idEmployee) {
        (async () => {
          const data = await axios.get(`http://localhost:3001/employees/${Number(idEmployee)}`);

          reset({
            ...data.data,
            levelId: data.data.levelId ? String(data.data.levelId) : "",
            roleId: data.data.roleId ? String(data.data.roleId) : "",
            departmentId: data.data.departmentId ? String(data.data.departmentId) : "",
          });
        })();
      }
    } catch (error) {
      console.error(error);
    }
  })();
}, [idEmployee, reset, isEditMode, setLevels, setDepartments, setRoles]);


    const currentDocumentUrl = watch("documentUrl");
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^(03|05|07|08|09)[0-9]{8}$/;

    

    const onSubmit =async (data) => {
      let fileNameString = null;
    
      if (data.documentUrl && data.documentUrl.length > 0) {
        const fileObject = data.documentUrl[0]; 
        if(fileObject.name){
          fileNameString = fileObject.name;
        }else{ fileNameString = data.documentUrl;}
        
      } else {
        fileNameString = isEditMode ? documentUrlOrl : null;
      }
      
        // Ép kiểu status về dạng boolean vì value từ select html luôn là string
        const finalData = {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            address: data.address,
            email: data.email,
            phone: data.phone,
            employeeCode: data.employeeCode,
            dateOfBirth: data.dateOfBirth,
            startDate: data.startDate,
            levelId: Number(data.levelId),
            roleId: Number(data.roleId),
            documentUrl: fileNameString,
            departmentId: Number(data.departmentId),
            status: data.status == "true" ? true : false,
        };

        try {
        if (isEditMode && idEmployee) {
            console.log("Gọi API Update với data:", finalData);
            await axios.patch(`http://localhost:3001/employees/${Number(idEmployee)}`, finalData);
        } else {
          console.log("Gọi API Create với data:", finalData);
            await axios.post('http://localhost:3001/employees', finalData);
        }
        router.push('/');
        } catch (err) {
          console.error('Lỗi khi gọi API tạo/cập nhật nhân viên:', err);
          // Hiển thị chi tiết lỗi GraphQL nếu có
          const message = err?.message || JSON.stringify(err, null, 2);
          alert('Lỗi khi lưu nhân viên: ' + message);
        }
    };

    return (
    <div className="bg-gray-100 min-h-screen">
        <div className="m-10 px-5 mx-auto max-w-6xl">
          <div className="flex items-center gap-5 pb-3">
              <i className="fa-solid fa-arrow-left"></i> <div className="text-base">Thêm mới nhân viên</div>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-7 gap-5">
            
              <div className="col-span-5">
                <div className="bg-white p-7 rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Hồ sơ nhân viên</h2>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center overflow-hidden">
                      <svg className="w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                  </div>
                    <input type="file" id="avatar-upload" placeholder="Tải ảnh lên" className="hidden"/>
                    <label htmlFor="avatar-upload" className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 cursor-pointer inline-block">
                                Tải ảnh lên
                            </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Họ và tên đệm</label>
                    <input type="text" {...register("firstName", { required: "Bạn chưa nhập họ tên đệm" })} className="w-full border border-gray-300 rounded-lg px-3 py-1.5 " />
                    {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
                  </div>
                   
                  <div>
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Tên</label>
                    <input type="text" {...register("lastName", { required: "Bạn chưa nhập tên" })} className="w-full border border-gray-300 rounded-lg px-3 py-1.5 " />
                    {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Ngày sinh</label>
                    <input type="date" {...register("dateOfBirth", { required: "Bạn chưa nhập ngày sinh" })} className="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-gray-600" />
                    {errors.dateOfBirth && <span className="text-red-500 text-sm">{errors.dateOfBirth.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Giới tính</label>
                      <select {...register("gender", { required: "Bạn chưa nhập giới tính" })} className="w-full border border-gray-300 rounded-lg px-3 py-1.5 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-800">
                          <option className="text-gray-600" value={"Nam"}>Nam</option>
                          <option className="text-gray-600" value={"Nữ"}>Nữ</option>
                      </select>
                      {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Ngày bắt đầu làm việc</label>
                    <input type="date" {...register("startDate", { required: "Bạn chưa nhập ngày bắt đầu làm việc" })} className="w-full border border-gray-300 rounded-lg px-3 py-1.5 " />
                    {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Mã nhân viên</label>
                    <input type="text" {...register("employeeCode", { required: "Bạn chưa nhập mã nhân viên" })} className="w-full border border-gray-300 rounded-lg px-3 py-1.5 " />
                    {errors.employeeCode && <span className="text-red-500 text-sm">{errors.employeeCode.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Thuộc cấp</label>
                      <select {...register("levelId", { required: "Bạn chưa nhập thuộc cấp" })} className="w-full border border-gray-300 rounded-lg px-3 py-2 ">
                      <option value="">Vui lòng chọn</option>
                      {levels.map(item=>(
                        <option key={item.id} value={String(item.id)}>{item.name}</option>
                      ))}
                    </select>
                    {errors.levelId && <span className="text-red-500 text-sm">{errors.levelId.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Số điện thoại</label>
                    <input type="text" {...register("phone", {
                                            required: "Bạn chưa nhập số điện thoại",
                                            pattern: { value: phoneRegex, message: "Số điện thoại không đúng định dạng" }
                                        })} className="w-full border border-gray-300 rounded-lg px-3 py-1.5 " />
                      {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Địa chỉ</label>
                    <input type="text" {...register("address", { required: "Bạn chưa nhập địa chỉ" })} className="w-full border border-gray-300 rounded-lg px-3 py-1.5 " />
                    {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="" className="tex-sm text-gray-600 mb-1">Phòng ban</label>
                    <select {...register("departmentId", { required: "Bạn chưa nhập phòng ban" })} className="w-full border border-gray-300 rounded-lg px-3 py-2 ">
                      <option value="">Vui lòng chọn</option>
                      {departments.map(item=>(
                        <option key={item.id} value={String(item.id)}>{item.name}</option>
                      ))}
                    </select>
                    {errors.departmentId && <span className="text-red-500 text-sm">{errors.departmentId.message}</span>}
                  </div>
                </div>
                </div>
                <div className="bg-white p-7 rounded-xl my-8">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-semibold mb-4">Giấy tờ đính kèm</h2>
                    <label className="block text-sm text-gray-600 mb-2">Tải bản scan giấy tờ</label>
                    
                    <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-gray-100 hover:bg-gray-50 ">
                        <input type="file" {...register("documentUrl")} className="absolute w-full h-full opacity-0 " />
                        <span className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 mb-2 shadow-sm ">
                            Tải lên
                        </span>
                        <p className="text-xs text-gray-400 pointer-events-none">PDF, JPG, JPEG, PNG</p>
                    </div>
                    <div className={!isEditMode?"hidden":"mt-2 text-sm text-gray-600"}>
                        Giấy tờ hiện tại: <a href={currentDocumentUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline">Xem file</a>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-span-2">
                <div className={!isEditMode?"hidden":"bg-white p-7 rounded-xl mb-5"}>
                  <h2 className="text-base font-semibold mb-4">Trang thái làm việc</h2>
                  <div>
                      <select {...register("status")} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-500">
                          <option value="true">Đang làm việc</option>
                          <option value="false">nghỉ việc</option>
                      </select>
                    </div>
                </div>
                <div className="bg-white p-7 rounded-xl mb-5">
                  <h2 className="text-base font-semibold mb-4">Tài khoản đăng nhập SSO</h2>
                  <div>
                      <label className="block text-sm text-gray-600 mb-1">Email</label>
                      <input {...register("email", {
                                        required: "Bạn chưa nhập email",
                                        pattern: { value: emailRegex, message: "Email không đúng định dạng" }
                                    })} type="email" className="w-full border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"/>
                      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                </div>
                <div className="bg-white p-7 rounded-xl mb-5">
                  <h2 className="text-base font-semibold mb-4">Vai trò khác</h2>
                  <div>
                      <label className="block text-sm text-gray-600 mb-1">Vai trò</label>
                      
                      <select defaultValue {...register("roleId", { required: "Bạn chưa nhập vai trò" })} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-gray-500">
                          <option value="">Vui lòng chọn</option>
                          {roles.map(item=>(
                        <option key={item.id} value={String(item.id)}>{item.name}</option>
                      ))}
                      </select>
                      {errors.roleId && <span className="text-red-500">{errors.roleId.message}</span>}
                    </div>
                </div>
              </div>
                
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    {isEditMode ? "Lưu thay đổi" : "Tạo mới"}
                </button>
              </form>
        </div>
    </div>
  )
}