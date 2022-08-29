/**
 * Nguoi Khoi Tao: Nguyen Thanh Tien;
 * 
 * Ngay Khoi Tao: 20/08/2022;
 * 
 * version: 1.0.0
 */


// Ham Dom ID

function getMyId(id) {
  return document.getElementById(id);
};



/// BAI TAP 1: cho nguoi dung nhap vo 3 so nguyen. Viet chuong trinh xuat 3 so theo thu tu tang dan.

/**
 * INPUT: nhap vao 3 so nguyen.
 *  so nguyen 1; so nguyen 2; so nguyen 3
 *  PROCESS:
 *  so thu tu = so nguyen lon nhat + so nguyen lon nhi + so nguyen lon 3;
 * 
 * OUTPUT:
 *  So thu tu;
 */

getMyId('btn_number').onclick = function () {
  //input:
  var numA = Number(getMyId('number1').value);
  var numB = Number(getMyId('number2').value);
  var numC = Number(getMyId('number3').value);
  
  // output:
  var sortNum = '';
  // truong hop 1
  if (numA > numB && numA > numC) {
    if (numB > numC) {
      sortNum = numC + ' < ' + numB + ' < ' + numA;
    }else {
      sortNum = numB + ' < ' + numC + ' < ' + numA;
    }
    //truong hop 2:
  }else if (numB > numA && numB > numC) {
    if (numA > numC) {
      sortNum = numC + ' < ' + numA + ' < ' + numB;
    }else {
      sortNum = numA + ' < ' + numC + ' < ' + numB;
    }
    /// truong hop con lai:
  }else {
    if (numA > numB) {
      sortNum = numB + ' < ' + numA + ' < ' + numC;
    }else {
      sortNum = numA + ' < ' + numB + ' < ' + numC;
    }
  }
  /// hien thị kêt quả:
  console.log('sắp xếp thứ tự: ', sortNum);
  getMyId('numResult').innerHTML = sortNum;
  
};


/// Bai Tap 2: Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)

/**
 * INPUT: chon thanh vien dang su dung may tinh:
 * 1 bo; 2 me ; 3 anh trai; 4 em gai;
 *
 * PROCESS:
 * dua vao cau tra loi cua user dua ra cau chao phu hop
 * 1 bo: Xin chao bo!
 * 2 me: Xin chao me!
 * 3 anh trai: Xin chao anh trai!
 * 4 em gai: xin chao em gai!
 * 
 * OUTPUT: 
 * in ra cau chao xin chao tuong ung 
 */
getMyId('sayHi').addEventListener('click', function () {
  var wellcome = getMyId('wellcome').value;

  //OUTPUT:
  var greetings = '';

  //process:
  if (wellcome === 'B') {
    greetings = 'Xin Chào Bố!';
  }else if (wellcome === 'M') {
    greetings = 'Xin Chào Mẹ!';
  }else if (wellcome === 'A') {
    greetings = 'Xin Chào Anh Trai!';
  }else {
    greetings = 'Xin Chào Em Gái!';
  };
  // hiện thị kết quả:
  getMyId('wellcomeResult').innerHTML = greetings;

    console.log(greetings);
});

/// BAI SO 3: cho 3 so nguyen viet chuong trinh xuat ra co bao nhieu so le va bao nhieu so chan;

/**
 * INPUT: lay gia tri 3 so nguoi dung nhap vao;
 * num1 = value;
 * num2 = value;
 * num3 = value;
 * 
 * process:
 * kiem tra num1, num2, num3 so nao so chan so nao la so le.
 * 
 * OUTPUT:
 * tra ket qua bao nhieu so chan bao nhieu so le
 * 
 */

getMyId('btnChanLe').addEventListener('click', function () {
  /// input:
  var isNum1 = Number(getMyId('isNum1').value);
  var isNum2 = Number(getMyId('isNum2').value);
  var isNum3 = Number(getMyId('isNum3').value);

  //output:
  var isNumResult = '';
  //truong hop 1:
  if (isNum1 % 2 == 0) {
    if (isNum2 % 2 == 0 && isNum3 % 2 == 0) {
      isNumResult = '3 số chẵn và 0 số lẻ';
    }else if (isNum2 % 2 != 0 && isNum3 % 2 != 0){
      isNumResult = '1 số chẵn và 2 số lẻ';
    }else{
      isNumResult = '2 số chẵn 1 số lẻ';
    }
  /// truong hop 2:
  }else if (isNum1 % 2 != 0) {
    if (isNum2 % 2 != 0 && isNum3 % 2 != 0) {
      isNumResult = '0 số chẵn và 3 số lẻ';
    }else if (isNum2 % 2 == 0 && isNum3 % 2 == 0) {
      isNumResult = '2 số chẵn và 1 số lẻ';
    }else{
      isNumResult = '1 số chẵn và 2 số lẻ';
    }    
  }
  /// hiên thị kết quả:
  getMyId('chanLeSo').innerHTML = isNumResult;
  console.log(isNumResult);

});

/// Bai Tap 4: viet chuong trinh cho nhap vao 3 canh cua tam giac. Hay cho biet do là tam giac gi?

/**
 * INPUT: nhap vao 3 goc: goc a; goc b; goc c
 * 
 * PROCESS:
 * tam giac can: 2 canh bang nhau 
 * tam giac deu: 3 canh bang nhau
 * tam giac vuon: c^2 = a^2 + b^2
 * con lai tra ket qua tam giac nao do.
 * 
 * OUTPUT:
 * tra ket qua = loai tam giac?
 */

getMyId('btnTamGiac').onclick = function () {
  // input:
  var canhA = Number(getMyId('canhA').value);
  var canhB = Number(getMyId('canhB').value);
  var canhC = Number(getMyId('canhC').value);

  // output:
  var tamGiac = '';

  if (canhA == canhB) {
    if (canhA == canhC) {
      tamGiac = 'Tam Giác Điều';
    }else if (canhA != canhC || canhB != canhC) {
      tamGiac = 'Tam Giác Cân';
    }
   
  }else if (canhA != canhB){
    
    var canhVuongA = Math.pow(canhA, 2);
    var canhVuongB = Math.pow(canhB, 2);
    var canhVuongC = Math.pow(canhC, 2);
    if (canhA == canhC || canhB == canhC) {
      tamGiac = 'Tam Giác Cân';
    }else if (canhVuongC == canhVuongA + canhVuongB || canhVuongA == canhVuongB + canhVuongC || canhVuongB == canhVuongA + canhVuongC) {
      tamGiac = 'Tam Giác Vuông';
    }
    else{
      tamGiac = 'Một Loại Tam Giác Nào Đó';
    }
  }
  /// hien thi ket qua:
  getMyId('tamGiac').innerHTML = tamGiac;
  console.log(tamGiac);
}

/// BAI 5: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.

/**
 * INPUT:
 * nhap vao ngay
 * nhap vao thang
 * nhap vao nam
 * 
 * PROCESS:
 * tính ngay hôm qua và ngày mai của ngày tháng năm mà nguoi dung nhap vao. tháng 2 có 28 ngày. sau ngay 30 hoặc 31 sẽ là ngày 1 và ngược lại.
 * 
 * OUTPUT:
 * ngay hom qua:
 * ngay mai:
 */


/// Tính Ngày Mai:
getMyId('btnTomorow').onclick = function () {
  //input: 
  var toDay = getMyId('day').value;
  var month = getMyId('month').value;
  var year = getMyId('year').value;
  
  // OUTPUT:
  var tomorow = '';

  //process:
  if (month % 2 != 0 && month <= 7 && year > 0) {
    
    if (toDay == 31) {
      month++;
      tomorow = '1 / ' + month + ' / ' + year; 
    }else if (toDay <= 30) {
      toDay++;
      tomorow = toDay + ' / ' + month + ' / ' + year;
    }else {
      tomorow = 'Ngày Không Hợp Lệ Nhé!';
    }

  }else if (month % 2 == 0 && month <= 7 && year > 0) {
    if (month == 2 && toDay == 28) { 
      month++;
      tomorow = '1 / ' + month + ' / ' + year;
    }else if (toDay == 30) {
      month++;
      tomorow = '1 / ' + month + ' / ' + year;
    }else if (toDay > 0 && toDay < 30) {
      toDay++;
      tomorow = toDay + ' / ' + month + ' / ' + year;
    }else {
      tomorow = 'Ngày Không Hợp Lệ Nhé!'
    }
  }else if (month % 2 == 0 && month > 7 && month <= 12 && year > 0) {

    if (toDay == 31 && month == 12) {
      year++;
      tomorow = '1 / 1 / ' + year;
    }else if (toDay == 31) {
      month++;
      tomorow = '1 / ' + month + ' / ' + year;
    }else if (toDay > 0 && toDay <= 30) {
      toDay++;
      tomorow = toDay + ' / ' + month + ' / ' + year;
    }else {
      tomorow = 'Ngày Không Hợp Lệ Nhé!'
    }
  }else if (month % 2 != 0 && month > 7 && month <= 12 && year > 0) {
    if (toDay == 30) {
      month++;
      tomorow = '1 / ' + month + ' / ' + year;
    }else if (toDay > 0 && toDay < 30) {
      toDay++;
      tomorow = toDay + ' / ' + month + ' / ' + year;
    }else {
      tomorow = 'Ngày Không Hợp Lệ Nhé!';
    }
  }else {
    tomorow = 'Ngày Tháng Nhập Không Hợp Lệ!'
  }
  ///// hiện thị kết quả:
  getMyId('hiendate').innerHTML = 'Ngày Mai: ' + tomorow;
  console.log(tomorow);
};

///Tính Ngày Hôm Qua:

getMyId('btnYesterday').onclick = function () {

  ///// input: 
  var toDay = getMyId('day').value;
  var month = getMyId('month').value;
  var year = getMyId('year').value;
 
// OUTPUT:
  var yesterday = '';
 
//process:
  if (month % 2 != 0 && month < 7 && year > 0) {
    if (toDay == 1 && month == 3) {
      month--;
      yesterday = '28 / ' + month + ' / ' + year;
    }else if (toDay == 1 && month == 1) {
      year--;
      yesterday = '31 / 12 / ' + year;
    }else if (toDay == 1) {
      month--;
      yesterday = '31 / ' + month + ' / ' + year;
    }else if (toDay > 0 && toDay <= 31) {
      toDay--;
      yesterday = toDay + ' / ' + month + ' / ' + year;
    }else {
      yesterday = 'Ngày Không Hợp Lệ Nhé!';
    }
  }else if (month % 2 == 0 && month < 7 && year > 0) {
    if (toDay == 1) {
      month--;
      yesterday = '31 / ' + month + ' / ' + year;
    }else if (toDay > 0 && toDay <= 30) {
      toDay--;
      yesterday = toDay + ' / ' + month + ' / ' + year;
    }else {
      yesterday = 'Ngày Không Hợp Lệ Nhé!';
    }

  }else if (month % 2 == 0 && month > 7 && month <= 12 && year > 0) {
    
    if (month == 8 && toDay == 1) {
      month--;
      yesterday = '31 / ' + month + ' / ' + year;
    }else if (toDay == 1) {
      month--;
      yesterday = '30 / ' + month + ' / ' + year;
    }else if (toDay > 0 && toDay <= 31) {
      toDay--;
      yesterday = toDay +' / ' + month + ' / ' + year;
    }else {
      yesterday = 'Ngày Không Hợp Lệ Nhé!';
    }
  }else if (month % 2 != 0 && month > 7 && month <= 12 && year > 0) {
    if (toDay == 1) {
      month--;
      yesterday = '31 / ' + month + ' / ' + year;
    }else if (toDay > 0 && toDay <= 30) {
      toDay++;
      yesterday = toDay + ' / ' + month + ' / ' + year;
    }else {
      yesterday = 'Ngày Không Hợp Lệ Nhé!';
    }
  }else {
    yesterday = 'Ngày Tháng Nhập Không Hợp Lệ!'
  }

  // hiện thị kết quả:
  getMyId('hiendate').innerHTML = 'Ngày Mai: ' + yesterday;
  console.log(yesterday);
};

/// BAI 6: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).

/**
 * INPUT: nhập vào tháng và năm
 * numMonth:
 * numYear:
 * 
 * PROCESS:tính sô ngày trong tháng và năm người dùng nhập vào.
 * tháng 2 có 28 ngày và năm nhuân có 29 ngày.
 * 
 * OUTPUT:
 * dayOfMonth: số ngày trong tháng
 */

getMyId('btnDate').onclick = function () {
  
  //INPUT:
  var numMonth = Number(getMyId('numMonth').value);
  var numYear = Number(getMyId('numYear').value);

  //OUTPUT:
  var numOfDay = '';

  // PROCESS:
  if (numMonth == 2 && numMonth <= 7 && numYear > 0) {
    if (numYear % 4 == 0) {
      if (numYear % 100 != 0) {
        numOfDay = 'Tháng ' + numMonth + ' Năm ' + numYear + ': Có 29 Ngày';
      }
      
    }else if (numYear % 400 == 0) {
      numOfDay = 'Tháng ' + numMonth + ' Năm ' + numYear + ': Có 29 Ngày';
    }else {
      numOfDay = 'Tháng ' + numMonth + ' Năm ' + numYear + ': Có 28 Ngày';
    }
  }else if (numMonth % 2 == 0 && numMonth <= 7 && numYear > 0) {
    numOfDay = 'Tháng ' + numMonth + ' Năm ' + numYear + ': Có 30 Ngày';
  }else if (numMonth % 2 != 0 && numMonth <= 7 && numYear > 0) {
    numOfDay = 'Tháng ' + numMonth + ' Năm ' + numYear + ': Có 31 Ngày';
  }else if (numMonth % 2 == 0 && numMonth > 7 && numMonth <= 12 && numYear > 0) {
    numOfDay = 'Tháng ' + numMonth + ' Năm ' + numYear + ': Có 31 Ngày';
  }else if (numMonth % 2 !=0 && numMonth > 7 && numMonth <= 12 && numYear > 0) {
    numOfDay = 'Tháng ' + numMonth + ' Năm ' + numYear + ': Có 30 Ngày';
  }else {
    numOfDay = ' Tháng Và Năm Nhập Vào Không Hợp Lệ !';
  }
  //// hiện thị kết quả:
  getMyId('soNgay').innerHTML = numOfDay;
  console.log(numOfDay);
};


/// Bài Tập 7: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó


/**
 * INPUT: giá trị nguoi dung nhập vào 1 số nguyên 3 chữ số
 * 
 * PROCESS:
 * var 1: chứa số hàng trăm;
 * var 2: chứa số hàng chục;
 * var 3: chứa số hàng đơn vị
 * đưa ra cách đọc chính xác từng số và gán giá trị cho output;
 * 
 * OUTPUT:
 * var output = var 1 + var 2 + var3 ( nối chuỗi).
 */

document.getElementById('btnDocSo').addEventListener('click', function () {
  /// INPUT:
  var inNumber = Number(getMyId('docSo').value);
  /// OUTPUT:
  var readNum = '';
  /// PROCESS:
  var soTram = Math.floor(inNumber / 100);
  var soChuc = Math.floor((inNumber % 100) / 10);
  var soDonVi = inNumber % 10;
  
  var docSoTram = '';
  var docSoChuc = '';
  var docSoDonVi = '';
  switch (soTram) {
    case 0: {
      docSoTram = 'Không Trăm'
    };break;
    case 1: {
      docSoTram = 'Một Trăm'
    };break;
    case 2: {
      docSoTram = 'Hai Trăm'
    };break;
    case 3: {
      docSoTram = 'Ba Trăm'
    };break;
    case 4: {
      docSoTram = 'Bốn Trăm'
    };break;
    case 5: {
      docSoTram = 'Năm Trăm'
    };break;
    case 6: {
      docSoTram = 'Sáu Trăm'
    };break;
    case 7: {
      docSoTram = 'Bảy Trăm'
    };break;
    case 8: {
      docSoTram = 'Tám Trăm'
    };break;
    case 9: {
      docSoTram = 'Chín Trăm'
    };break;
  }
  switch (soChuc) {
    case 0: {
      docSoChuc = 'Lẻ'
    };break;
    case 1: {
      docSoChuc = 'Mười'
    };break;
    case 2: {
      docSoChuc = 'Hai Mươi'
    };break;
    case 3: {
      docSoChuc = 'Ba Mươi'
    };break;
    case 4: {
      docSoChuc = 'Bốn Mươi'
    };break;
    case 5: {
      docSoChuc = 'Năm Mươi'
    };break;
    case 6: {
      docSoChuc = 'Sáu Mươi'
    };break;
    case 7: {
      docSoChuc = 'Bảy Mươi'
    };break;
    case 8: {
      docSoChuc = 'Tám Mươi'
    };break;
    case 9: {
      docSoChuc = 'Chín Mươi'
    };break;
  }
  switch (soDonVi) {
    case 0: {
      docSoDonVi = 'Không'
    };break;
    case 1: {
      docSoDonVi = 'Một'
    };break;
    case 2: {
      docSoDonVi = 'Hai'
    };break;
    case 3: {
      docSoDonVi = 'Ba'
    };break;
    case 4: {
      docSoDonVi = 'Bốn'
    };break;
    case 5: {
      docSoDonVi = 'Năm'
    };break;
    case 6: {
      docSoDonVi = 'Sáu'
    };break;
    case 7: {
      docSoDonVi = 'Bảy'
    };break;
    case 8: {
      docSoDonVi = 'Tám'
    };break;
    case 9: {
      docSoDonVi = 'Chín'
    };break;
  }
  readNum = docSoTram + ' ' + docSoChuc + ' ' + docSoDonVi;
  
  // Hiện Thị Kết Quả:
  getMyId('ketQuaDocSo').innerHTML = readNum; 
  console.log(readNum);
});

