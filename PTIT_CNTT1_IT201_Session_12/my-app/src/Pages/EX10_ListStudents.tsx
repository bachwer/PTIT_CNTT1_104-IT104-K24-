import React from "react";

const StudentPage: React.FC = () => {
    return (
        <div className="row" style={{marginTop: "40px"}}>
            <div className="col-lg-7 grid-margin stretch-card">
                <div className="card">
                    {/* START CONTROL */}
                    <div className="card-header">
                       <div className="row align-items-center g-2">
                           <div className="col-3 d-flex">
                               <button type="button" className="btn btn-primary btn-icon-text w-100">
                                   Thêm mới sinh viên
                               </button>
                           </div>
                           <div className="col-6">
                               <form
                                   className="search-form d-flex align-items-center gap-2"
                                   role="search"
                                   onSubmit={(e) => e.preventDefault()}
                               >
                                   <i className="icon-search"></i>
                                   <input
                                       type="search"
                                       className="form-control flex-grow-1"
                                       placeholder="Search Here"
                                       title="Search here"
                                   />
                                   <button type="submit" className="btn btn-primary btn-icon-text">
                                       Tìm kiếm
                                   </button>
                               </form>
                           </div>
                            <div className="col-3 d-flex align-items-center">
                                <select className="form-control">
                                    <option value="">Sắp xếp</option>
                                    <option value="">ABC def</option>
                                    <option value="">ABC def</option>
                                    <option value="">ABC def</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* END CONTROL */}

                    {/* START LIST STUDENT */}
                    <div className="card-body">
                        <h3 className="card-title">Danh sách sinh viên</h3>
                        <div className="table-responsive pt-3">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>SV001</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>20</td>
                                    <td>Nam</td>
                                    <td>
                                        <div className="template-demo">
                                            <button type="button" className="btn btn-danger btn-icon-text">
                                                Xem
                                            </button>
                                            <button type="button" className="btn btn-warning btn-icon-text">
                                                Sửa
                                            </button>
                                            <button type="button" className="btn btn-success btn-icon-text">
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>SV002</td>
                                    <td>Nguyễn Văn B</td>
                                    <td>21</td>
                                    <td>Nữ</td>
                                    <td>
                                        <div className="template-demo">
                                            <button type="button" className="btn btn-danger btn-icon-text">
                                                Xem
                                            </button>
                                            <button type="button" className="btn btn-warning btn-icon-text">
                                                Sửa
                                            </button>
                                            <button type="button" className="btn btn-success btn-icon-text">
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>SV003</td>
                                    <td>Nguyễn Văn C</td>
                                    <td>19</td>
                                    <td>Nam</td>
                                    <td>
                                        <div className="template-demo">
                                            <button type="button" className="btn btn-danger btn-icon-text">
                                                Xem
                                            </button>
                                            <button type="button" className="btn btn-warning btn-icon-text">
                                                Sửa
                                            </button>
                                            <button type="button" className="btn btn-success btn-icon-text">
                                                Xóa
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* END LIST STUDENT */}
                </div>
            </div>

            {/* START FORM SINH VIEN */}
            <div className="col-5 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sinh viên</h3>
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="masv">
                                    Mã sinh viên
                                </label>
                                <div className="col-sm-9">
                                    <input id="masv" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="tensv">
                                    Tên sinh viên
                                </label>
                                <div className="col-sm-9">
                                    <input id="tensv" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="tuoi">
                                    Tuổi
                                </label>
                                <div className="col-sm-9">
                                    <input id="tuoi" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="gioitinh">
                                    Giới tính
                                </label>
                                <div className="col-sm-9">
                                    <select id="gioitinh" className="form-control">
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="ngaysinh">
                                    Ngày sinh
                                </label>
                                <div className="col-sm-9">
                                    <input id="ngaysinh" className="form-control" placeholder="dd/mm/yyyy" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="noisinh">
                                    Nơi sinh
                                </label>
                                <div className="col-sm-9">
                                    <select id="noisinh" className="form-control">
                                        <option>Hà Nội</option>
                                        <option>TP. Hồ Chí Minh</option>
                                        <option>Đà Nẵng</option>
                                        <option>Quảng Ninh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor="diachi">
                                    Địa chỉ
                                </label>
                                <div className="col-sm-9">
                                    <textarea id="diachi" className="form-control"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary me-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* END FORM SINH VIEN */}
        </div>
    );
};

export default StudentPage;