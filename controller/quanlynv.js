var arrNhanVien = [];
//ẩn hiện khi click vào button "Thêm Nhân Viên"
document.querySelector('#btnThem').onclick = function () {
    document.querySelector('#btnCapNhat').disabled = true;
    document.querySelector('#formThemSinhVien').reset();
    document.querySelector('#btnThemNV').disabled = false;
    document.querySelector('#tknv').disabled = false;
    const inPutValue = document.querySelectorAll(".input-sm");
    for (var i = 0; i < inPutValue.length; i++) {
        inPutValue[i].value = "";
    }
    const PvaLiDaTion = document.querySelectorAll(".validation-text");
    for (var i = 0; i < PvaLiDaTion.length; i++) {
        PvaLiDaTion[i].innerHTML = "";
    }
    document.querySelector('#btnReset').onclick = function () {
        const PvaLiDaTion = document.querySelectorAll(".validation-text");
        for (var i = 0; i < PvaLiDaTion.length; i++) {
            PvaLiDaTion[i].innerHTML = "";
        }
        const inPutValue = document.querySelectorAll(".input-sm");
        for (var i = 0; i < inPutValue.length; i++) {
            inPutValue[i].value = "";
        }
        var select = document.getElementById("chucvu");
        select.selectedIndex = 0;
        var dateInput = document.getElementById("datepicker");
        dateInput.value = dateInput.placeholder && '';
    }
}

//IN NHÂN VIÊN LÊN GIAO DIỆN
document.querySelector('#btnThemNV').onclick = function () {
    // event.preventDeFault();
    console.log(321);
    var nv = new NhanVien();
    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoVaTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.LuongCoBan = +document.querySelector('#luongCB').value;
    nv.LuongCoBanChuoi = document.querySelector('#luongCB').value;

    nv.heSoLuong = +document.querySelector('#chucvu').value;


    var slChucVu = document.querySelector('#chucvu')
    var viTriOpTion = slChucVu.selectedIndex;
    nv.chucVu = slChucVu[viTriOpTion].innerHTML;
    nv.gioLam = +document.querySelector('#gioLam').value
    nv.gioLamChuoi = document.querySelector('#gioLam').value

    /*
        thầy hay mentor thông cảm vì validation hơi dài, tại em 
        không biết làm sao để cái dòng valid thứ hai nó chỉ xuất 
        hiện, khi valid rỗng thoả mãn và trình bày sao cho ngắn ạ:(
    
    */

    //---------------VALIDATION-----------------
    var valid = true;

    //lấy attribute name thẻ P để gán vào validation 
    var taiKhoanNV = document.getElementById('ptknv');
    var pTaiKhoanNhanVien = taiKhoanNV.getAttribute('name');
    var testTK = document.getElementById('testTK');
    var testDoDaiTK = document.getElementById('testDoDaiTK');

    var hoVaTenNV = document.getElementById('pname');
    var pHoVaTenNV = hoVaTenNV.getAttribute('name');
    var testName = document.getElementById('testName');

    var emailNV = document.getElementById('pemail');
    var pEmail = emailNV.getAttribute('name');
    var testEmail = document.getElementById('testEmail');

    var matKhauNV = document.getElementById('Ppassword');
    var pMatKhauNV = matKhauNV.getAttribute('name')
    var testMatKhau = document.getElementById('testMatKhau');

    var luongCbNV = document.getElementById('pluongCB');
    var pLuongcbNV = luongCbNV.getAttribute('name')
    var testLuongCB = document.getElementById('testLuongCB');

    var gioLamNV = document.getElementById('pgioLam');
    var pGioLamNV = gioLamNV.getAttribute('name');
    var testGioLam = document.getElementById('ktGioLam');

    var ngayLamNV = document.getElementById('pdatepicker');
    var pNgayLamNV = ngayLamNV.getAttribute('name');
    var testNgayLam = document.getElementById('ktNgayLam');

    var chucVuNV = document.getElementById('pchucvu')
    //kiểm tra tên
    if (valid) {
        if (nv.hoVaTen === '') {
            valid = kiemTraRong(nv.hoVaTen, hoVaTenNV.id, pHoVaTenNV)
            hoVaTenNV.style.display = 'block';
            testName.style.display = 'none';
        } else {
            valid = kiemTraTen(nv.hoVaTen, testName.id)
            hoVaTenNV.style.display = 'none';
            testName.style.display = 'block';
        }

        //kiểm tra tài khoản 
        if (nv.taiKhoan === '') {
            valid = kiemTraRong(nv.taiKhoan, taiKhoanNV.id, pTaiKhoanNhanVien)
            taiKhoanNV.style.display = 'block';
            testTK.style.display = 'none';
            testDoDaiTK.style.display = 'none';


        } else {
            var idCheck = true;
            idCheck = valid = kiemTraSo(nv.taiKhoan, testTK.id) & kiemTraDoDai(nv.taiKhoan, testDoDaiTK.id, 4);
            taiKhoanNV.style.display = 'none';
            testTK.style.display = 'block';
            testDoDaiTK.style.display = 'block';

        }

        //kiểm tra email
        if (nv.email === '') {
            valid = kiemTraRong(nv.email, emailNV.id, pEmail)
            emailNV.style.display = 'block';
            testEmail.style.display = 'none';

        } else {
            valid = kiemTraEmail(nv.email, testEmail.id)
            emailNV.style.display = 'none';
            testEmail.style.display = 'block';

        }

        //kiểm tra mật khẩu 
        if (nv.matKhau === '') {
            valid = kiemTraRong(nv.matKhau, matKhauNV.id, pMatKhauNV)
            matKhauNV.style.display = 'block';
            testMatKhau.style.display = 'none'
        } else {
            valid = kiemtraMatKhau(nv.matKhau, testMatKhau.id);
            matKhauNV.style.display = 'none';
            testMatKhau.style.display = 'block'

        }
        //kiểm tra ngày làm 
        if (nv.ngayLam === '') {
            valid = kiemTraRong(nv.ngayLam, ngayLamNV.id, pNgayLamNV)
            ngayLamNV.style.display = 'block';
            testNgayLam.style.display = 'none'

        } else {
            valid = kiemTraNgayLam(nv.ngayLam, testNgayLam.id);
            ngayLamNV.style.display = 'none';
            testNgayLam.style.display = 'block'


        }
        //kiểm tra lương cơ bản 
        if (nv.LuongCoBanChuoi === '') {
            valid = kiemTraRong(nv.LuongCoBanChuoi, luongCbNV.id, pLuongcbNV)
            luongCbNV.style.display = 'block'
            testLuongCB.style.display = 'none'

        } else {
            valid = kiemTraKhoang(nv.LuongCoBan, testLuongCB.id, 1e+6, 2e+7);
            luongCbNV.style.display = 'none'
            testLuongCB.style.display = 'block';

        }
        //kiểm tra chức vụ 
        if (viTriOpTion === 0) {
            chucVuNV.innerHTML = 'Vui lòng chọn chức vụ'
            chucVuNV.style.display = 'block'


        } else {
            chucVuNV.style.display = 'none'


        }

        //kiểm tra giờ làm 
        if (nv.gioLamChuoi === '') {
            valid = kiemTraRong(nv.gioLamChuoi, gioLamNV.id, pGioLamNV)
            gioLamNV.style.display = 'block'
            testGioLam.style.display = 'none'
        } else {
            valid = kiemTraKhoang(nv.gioLam, testGioLam.id, 80, 200);
            gioLamNV.style.display = 'none'
            testGioLam.style.display = 'block'

        }
    }
    if (!valid || !idCheck) {
        return;
    }



    //chỉ cần 1 thẻ input = '' thì return;
    const inPutValue = document.querySelectorAll(".input-sm");
    for (var i = 0; i < inPutValue.length; i++) {
        if (inPutValue[i].value === '') {
            return;
        }

    }




    //dua du lieu vao array sau moi lan them du lieu 
    arrNhanVien.push(nv);
    saveStorage();

    console.log(nv);
    renderNhanVien(arrNhanVien);
    //reset form khi thêm nhân viên thành công
    document.querySelector('#formThemSinhVien').reset();

}


//FUNCTION RENDER NHÂN VIÊN LÊN GIAO DIỆN
function renderNhanVien(arrNV) {
    var htmlContent = '';
    for (var index = 0; index < arrNV.length; index++) {
        var nvNew = new NhanVien()
        var nv = arrNV[index]
        Object.assign(nvNew, nv);
        htmlContent += `
        <tr>
         <td>${nvNew.taiKhoan}</td>
         <td>${nvNew.hoVaTen}</td>
         <td>${nvNew.email}</td>
         <td>${nvNew.ngayLam}</td>
         <td>${nvNew.chucVu}</td>
         <td>${nvNew.tinhTongLuong()}</td>
         <td id = "xepLoaiNV">${nvNew.xepLoai()}</td>
         <td><button class ="btn btn-success" onclick ="xoaNhanVien('${nvNew.taiKhoan}')">Xoá</button></td>
         <td><button class="btn btn-primary" data-toggle="modal"
         data-target="#myModal" onclick= "suaSinhVien('${nvNew.taiKhoan}')">Chỉnh sửa</button></td>
        </tr>
        `
    }
    document.querySelector('#tableDanhSach').innerHTML = htmlContent;

    return htmlContent;

}


//XOÁ NHÂN VIÊN

function xoaNhanVien(tkNV) {

    var indexXoa = -1
    for (var index = 0; index < arrNhanVien.length; index++) {
        var svXoa = arrNhanVien[index]
        if (svXoa.taiKhoan === tkNV) {
            indexXoa = index
            break;
        }
    }
    if (indexXoa !== -1) {
        arrNhanVien.splice(indexXoa, 1);
        renderNhanVien(arrNhanVien);
    }

}


//---------CẬP NHẬT NHÂN VIÊN-----//

//B1 : lấy thông tin nhân viên in lại lên form
function suaSinhVien(maNVCLick) {



    console.log(maNVCLick);
    var indexSua = -1;
    for (var index = 0; index < arrNhanVien.length; index++) {
        if (arrNhanVien[index].taiKhoan === maNVCLick) {
            indexSua = index
            break;
        }

    }

    if (indexSua !== -1) {
        document.querySelector('#tknv').value = arrNhanVien[indexSua].taiKhoan;

        document.querySelector('#name').value = arrNhanVien[indexSua].hoVaTen;
        document.querySelector('#email').value = arrNhanVien[indexSua].email;
        document.querySelector('#password').value = arrNhanVien[indexSua].matKhau;
        document.querySelector('#datepicker').value = arrNhanVien[indexSua].ngayLam;
        document.querySelector('#luongCB').value = arrNhanVien[indexSua].LuongCoBan;
        document.querySelector('#chucvu').value = arrNhanVien[indexSua].heSoLuong;
        document.querySelector('#gioLam').value = arrNhanVien[indexSua].gioLam;




    }
    //Rest form lúc câp nhật nhưng vẫn giữ nguyên mã nhân viên không đổi
    document.querySelector('#btnReset').onclick = function () {
        const PvaLiDaTion = document.querySelectorAll(".validation-text");
        for (var i = 0; i < PvaLiDaTion.length; i++) {
            PvaLiDaTion[i].innerHTML = "";
        }
        const inPutValue = document.querySelectorAll(".input-sm");
        for (var i = 0; i < inPutValue.length; i++) {
            inPutValue[i].value = "";
        }
        var select = document.getElementById("chucvu");
        select.selectedIndex = 0;
        var dateInput = document.getElementById("datepicker");
        dateInput.value = dateInput.placeholder && '';
        document.querySelector('#tknv').value = arrNhanVien[indexSua].taiKhoan;






    }
    //ẩn hiện khi click vào nút chỉnh sửa
    document.querySelector('#btnThemNV').disabled = true;
    document.querySelector('#tknv').disabled = true;

    document.querySelector('#btnCapNhat').disabled = false;

}
// bước 2 : in lại nhân viên đã sửa lên lại giao diện
document.querySelector('#btnCapNhat').onclick = function () {
    var nhanVienEdit = new NhanVien;
    nhanVienEdit.taiKhoan = document.querySelector('#tknv').value;
    nhanVienEdit.hoVaTen = document.querySelector('#name').value;
    nhanVienEdit.email = document.querySelector('#email').value;
    nhanVienEdit.matKhau = document.querySelector('#password').value;
    nhanVienEdit.ngayLam = document.querySelector('#datepicker').value;
    nhanVienEdit.LuongCoBan = +document.querySelector('#luongCB').value;
    nhanVienEdit.LuongCoBanChuoi = document.querySelector('#luongCB').value;

    nhanVienEdit.heSoLuong = document.querySelector('#chucvu').value;
    var slChucVu = document.querySelector('#chucvu')
    var viTriOpTion = slChucVu.selectedIndex;
    nhanVienEdit.chucVu = slChucVu[viTriOpTion].innerHTML
    nhanVienEdit.gioLam = +document.querySelector('#gioLam').value;
    nhanVienEdit.gioLamChuoi = document.querySelector('#gioLam').value;

    for (var index = 0; index < arrNhanVien.length; index++) {
        if (arrNhanVien[index].taiKhoan === nhanVienEdit.taiKhoan) {
            var nvMang = arrNhanVien[index];
            nvMang.hoVaTen = nhanVienEdit.hoVaTen;
            nvMang.email = nhanVienEdit.email;
            nvMang.matKhau = nhanVienEdit.matKhau;
            nvMang.ngayLam = nhanVienEdit.ngayLam;
            nvMang.chucVu = nhanVienEdit.chucVu;
            nvMang.gioLam = nhanVienEdit.gioLam;
            nvMang.gioLamChuoi = nhanVienEdit.gioLamChuoi;

            nvMang.LuongCoBan = nhanVienEdit.LuongCoBan;
            nvMang.LuongCoBanChuoi = nhanVienEdit.LuongCoBanChuoi;


            nvMang.heSoLuong = nhanVienEdit.heSoLuong;


            break;
        }

    }
    //--------VALIDATION------//
    var valid = true




    var hoVaTenNV = document.getElementById('pname');
    var pHoVaTenNV = hoVaTenNV.getAttribute('name');
    var testName = document.getElementById('testName');

    var emailNV = document.getElementById('pemail');
    var pEmail = emailNV.getAttribute('name');
    var testEmail = document.getElementById('testEmail');

    var matKhauNV = document.getElementById('Ppassword');
    var pMatKhauNV = matKhauNV.getAttribute('name')
    var testMatKhau = document.getElementById('testMatKhau');

    var luongCbNV = document.getElementById('pluongCB');
    var pLuongcbNV = luongCbNV.getAttribute('name')
    var testLuongCB = document.getElementById('testLuongCB');

    var gioLamNV = document.getElementById('pgioLam');
    var pGioLamNV = gioLamNV.getAttribute('name');
    var testGioLam = document.getElementById('ktGioLam');

    var ngayLamNV = document.getElementById('pdatepicker');
    var pNgayLamNV = ngayLamNV.getAttribute('name');
    var testNgayLam = document.getElementById('ktNgayLam');

    var chucVuNV = document.getElementById('pchucvu')
    //kiểm tra tên
    if (valid) {
        if (nvMang.hoVaTen === '') {
            valid = kiemTraRong(nvMang.hoVaTen, hoVaTenNV.id, pHoVaTenNV)
            hoVaTenNV.style.display = 'block';
            testName.style.display = 'none';


        } else {
            var nameCheck = true;
           nameCheck = valid = kiemTraTen(nvMang.hoVaTen, testName.id)
            hoVaTenNV.style.display = 'none';
            testName.style.display = 'block';


        }



        //kiểm tra email
        if (nvMang.email === '') {
            valid = kiemTraRong(nvMang.email, emailNV.id, pEmail)
            emailNV.style.display = 'block';
            testEmail.style.display = 'none';

        } else {
            valid = kiemTraEmail(nvMang.email, testEmail.id)
            emailNV.style.display = 'none';
            testEmail.style.display = 'block';

        }

        //kiểm tra mật khẩu 
        if (nvMang.matKhau === '') {
            valid = kiemTraRong(nvMang.matKhau, matKhauNV.id, pMatKhauNV)
            matKhauNV.style.display = 'block';
            testMatKhau.style.display = 'none'
        } else {
            valid = kiemtraMatKhau(nvMang.matKhau, testMatKhau.id);
            matKhauNV.style.display = 'none';
            testMatKhau.style.display = 'block'

        }
        //kiểm tra ngày làm 
        if (nvMang.ngayLam === '') {
            valid = kiemTraRong(nvMang.ngayLam, ngayLamNV.id, pNgayLamNV)
            ngayLamNV.style.display = 'block';
            testNgayLam.style.display = 'none'

        } else {
            valid = kiemTraNgayLam(nvMang.ngayLam, testNgayLam.id);
            ngayLamNV.style.display = 'none';
            testNgayLam.style.display = 'block'

        }
        //kiểm tra lương cơ bản 
        if (nvMang.LuongCoBanChuoi === '') {
            valid = kiemTraRong(nvMang.LuongCoBanChuoi, luongCbNV.id, pLuongcbNV)
            luongCbNV.style.display = 'block'
            testLuongCB.style.display = 'none'

        } else {
            valid = kiemTraKhoang(nvMang.LuongCoBan, testLuongCB.id, 1e+6, 2e+7);
            luongCbNV.style.display = 'none'
            testLuongCB.style.display = 'block';

        }
        //kiểm tra chức vụ 
        if (viTriOpTion === 0) {
            chucVuNV.innerHTML = 'Vui lòng chọn chức vụ'
            chucVuNV.style.display = 'block'

        } else {
            chucVuNV.style.display = 'none'

        }

        //kiểm trá giờ làm 
        if (nvMang.gioLamChuoi === '') {
            valid = kiemTraRong(nvMang.gioLamChuoi, gioLamNV.id, pGioLamNV)
            gioLamNV.style.display = 'block'
            testGioLam.style.display = 'none'
        } else {
            valid = kiemTraKhoang(nvMang.gioLam, testGioLam.id, 80, 200);
            gioLamNV.style.display = 'none'
            testGioLam.style.display = 'block'

        }

    }
    if (!valid || !nameCheck) {
        return;
    }



    //chỉ cần 1 thẻ input = '' thì return;
    const inPutValue = document.querySelectorAll(".input-sm");
    for (var i = 0; i < inPutValue.length; i++) {
        if (inPutValue[i].value === '') {
            return;

        }
    }






    saveStorage();
    renderNhanVien(arrNhanVien);


}

//SAVE STORTAGE
function saveStorage() {
    var sArrNhanVien = JSON.stringify(arrNhanVien);
    console.log(sArrNhanVien);
    localStorage.setItem('arrNhanVien', sArrNhanVien);
}

//GET STORAGE
function getStorage() {
    if (localStorage.getItem('arrNhanVien')) {
        var stringArrNhanVien = localStorage.getItem('arrNhanVien');
        arrNhanVien = JSON.parse(stringArrNhanVien);
    }

}

getStorage()
renderNhanVien(arrNhanVien);



//Tìm nhân viên theo loại

document.querySelector('#searchName').oninput = function () {
    var tuKhoa = document.querySelector('#searchName').value.trim();
    tuKhoa = stringToSlug(tuKhoa);
    var arrNhanVienTk = [];


    for (var index = 0; index < arrNhanVien.length; index++) {
        var nvTim = new NhanVien()
        var nv = arrNhanVien[index]
        Object.assign(nvTim, nv);
        console.log(nvTim.xepLoai())
        if (stringToSlug(nvTim.xepLoai().trim()).search(tuKhoa) !== -1) {
            arrNhanVienTk.push(nv);
        }

    }

    renderNhanVien(arrNhanVienTk);
}


//ẩn hiện password

document.getElementById('showPassWord').onclick = function () {
    var x = document.getElementById('password');
    if (x.type === "password") {
        x.type = "text";
        document.querySelector('#showPassWord').style.color = 'red'
    } else {
        x.type = "password";
        document.querySelector('#showPassWord').style.color = 'grey'
    }
}
//reset form
document.querySelector('#btnReset').onclick = function () {
    const PvaLiDaTion = document.querySelectorAll(".validation-text");
    for (var i = 0; i < PvaLiDaTion.length; i++) {
        PvaLiDaTion[i].innerHTML = "";
    }
    const inPutValue = document.querySelectorAll(".input-sm");
    for (var i = 0; i < inPutValue.length; i++) {
        inPutValue[i].value = "";
    }
    var select = document.getElementById("chucvu");
    select.selectedIndex = 0;
    var dateInput = document.getElementById("datepicker");
    dateInput.value = dateInput.placeholder && '';
}

//Reset khi click nút đóng
document.querySelector('#btnDong').onclick = function () {

    const PvaLiDaTion = document.querySelectorAll(".validation-text");
    for (var i = 0; i < PvaLiDaTion.length; i++) {
        PvaLiDaTion[i].innerHTML = "";
    }
}