//1
console.log("");
let hour=60*60;
console.log("Câu 1: ")
console.log("Số giây trong một giờ: "+ hour)
alert("Số giây trong một giờ: "+ hour)

// 2
console.log("");
let day=hour*60
console.log("Câu 2: ")
console.log("Số giây trong một ngày: "+ day)
alert("Số giây trong một ngày: "+ day)

// 3
console.log("");
let year=day*365
console.log("Câu 3: ")
console.log("Số giây trong một năm: "+ year)
alert("Số giây trong một năm: "+ year)

// 4
console.log("");
console.log("Câu 4: ")
let userAge = prompt("Nhập tủi đi pạn EEEEEEEEEE: ");
console.log("Bạn đã đi hết "+ userAge*year+" giây cuộc đời rồi !!" )
alert("Bạn đã đi hết "+ userAge*year+" giây cuộc đời rồi !!")


// 5
console.log("");
console.log("Câu 5: ")
let A = prompt("Hãy chọn giá đúng cho A ^.^ :")
let B = prompt("Hãy chọn giá đúng cho B ^.^ :")
let C = prompt("Hãy chọn giá đúng cho C ^.^ :")
let D = prompt("Hãy chọn giá đúng cho D ^.^ :")

if (A>B)
{    
    alert(" Kết quả so sánh của A: "+A+" và B: "+B+" ---> A > B")
    console.log("Kết quả so sánh của A: "+A+" va B: "+B+" ---> A > B")
} 
else if(A=B)
{    alert(" Kết quả so sánh của  A: "+A+" va B: "+B+" ---> A = B")
    console.log("Kết quả so sánh của A: "+A+" va B: "+B+" ---> A = B")
}
else 
{    alert("Kết quả so sánh của A: "+A+" va B: "+B+" ---> A < B")
    console.log("Kết quả so sánh của A: "+A+" va B: "+B+" ---> A < B")
}


if (A>C)
{    alert("Kết quả so sánh của A: "+A+" va C: "+C+" ---> A > C")
    console.log("Kết quả so sánh của A: "+A+" va C: "+C+" ---> A > C")
} 
else if (A=C)
{    alert("Kết quả so sánh của A: "+A+" va C: "+C+" ---> A = C")
    console.log("Kết quả so sánh của A: "+A+" va C: "+C+" ---> A = C")
}
else
{    alert("Kết quả so sánh của A: "+A+" va C: "+C+" ---> A < C")
    console.log("Kết quả so sánh của A: "+A+" va C: "+C+" ---> A < C")
}


if (A>D)
{    alert("Kết quả so sánh của A: "+A+" va D: "+D+" ---> A > D")
    console.log("Kết quả so sánh của A: "+A+" va D: "+D+" ---> A > D")
} 
else if(A=D)
{    alert("Kết quả so sánh của A: "+A+" va D: "+D+" ---> A = D")
    console.log("Kết quả so sánh của A: "+A+" va D: "+D+" ---> A = D")
}
else 
{    alert("Kết quả so sánh của A: "+A+" va D: "+D+" ---> A < D")
    console.log("Kết quả so sánh của A: "+A+" va D: "+D+" ---> A < D")
}

if( B>D)
{    alert("Kết quả so sánh của B: "+B+" va D: "+D+" ---> B > D")
    console.log("Kết quả so sánh của B: "+B+" va D: "+D+" ---> B > D")
}
else if(B=D)
{    alert("Kết quả so sánh của B: "+B+" va D: "+D+" ---> B = D")
    console.log("Kết quả so sánh của B: "+B+" va D: "+D+" ---> B = D")
}
else
{    alert("Kết quả so sánh của B: "+B+" va D: "+D+" ---> B < D")
    console.log("Kết quả so sánh của B: "+B+" va D: "+D+" ---> B < D")
}

if (B>C)
{    alert("Kết quả so sánh của B: "+B+" va C: "+C+" ---> B > C")
    console.log("Kết quả so sánh của B: "+B+" va C: "+C+" ---> B > C")
}
else if(B=C)
{    alert("Kết quả so sánh của B: "+B+" va C: "+C+" ---> B = C")
    console.log("Kết quả so sánh của B: "+B+" va C: "+C+" ---> B = C")
}
else
{    alert("Kết quả so sánh của B: "+B+" va C: "+C+" ---> B < C")
    console.log("Kết quả so sánh của B: "+B+" va C: "+C+" ---> B < C")
}


if (C>D)
{    alert(" Kết quả so sánh của C: "+C+" va D: "+D+" ---> C > D")
    console.log("Kết quả so sánh của C: "+C+" va D: "+D+" ---> C > D")
}
else if(C=D)
{    alert("Kết quả so sánh của C: "+C+" va D: "+D+" ---> C = D")
    console.log("Kết quả so sánh của C: "+C+" va D: "+D+" ---> C = D")
}
else
{    alert("Kết quả so sánh của C: "+C+" va D: "+D+" ---> C < D")
    console.log("Kết quả so sánh của C: "+C+" va D: "+D+" ---> C < D")
}

// 6
console.log("");
console.log("Bài 6: ")
let celsius = prompt("Nhập nhiệt độ C: ");
let f=celsius*1.8+32
console.log("Đổi từ độ C "+ celsius + " sang độ F :"+f);
alert("Đổi từ độ C "+ celsius + " sang độ F :"+f);


// 7
console.log("");
console.log("Bài 7 : ")
let canhA= prompt("Nhập chiều dài cạnh a: ")
let canhB= prompt("Nhập chiều dài cạnh b: ")
let canhC= prompt("Nhập chiều dài cạnh c: ")
console.log("Chiều dài cạnh a :"+canhA)
console.log("Chiều dài cạnh b: "+canhB)
console.log("Chiều dài cạnh c :"+ canhC)
canhA=canhA*1;
canhB=canhB*1;
canhC=canhC*1;
let P=canhA+canhB+canhC;

if(canhA>0 && canhB>0 && canhC>0 && canhA+canhB>canhC && canhA+canhC>canhB && canhB+canhC>canhA)
{
    console.log("Chu vi hình tam giác là:"+P);
    alert("Chu vi hình tam giác là:"+P);
}
else if(canhA<0 || canhB<0 || canhC<0)
{
    alert("Giá trị của cạnh trong hình tam giác không được < 0")
    console.log("Giá trị của cạnh trong hình tam giác không được < 0")
}
else if(canhA+canhB<canhC || canhA+canhC<canhB || canhB+canhC<canhA)
{
    alert("Trong hình tam giác tổng của hai cạnh luôn luôn lớn hơn cạnh còn lại")
    console.log("Trong hình tam giác tổng của hai cạnh luôn luôn lớn hơn cạnh còn lại")
}
else if(canhA==0 || canhB==0 || canhC==0)
{
    alert("Giá trị của cạnh trong tam giác không được = 0 ")
    console.log("Giá trị của cạnh trong tam giác không được  = 0 ")
}


// 8
// Khai báo thư viện
function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(Word) {
            return Word[0].toUpperCase() + Word.substr(1);
        })
        .join(' ');
     }

console.log("");
console.log("Bài 8:")
let greeting= "Chào em, anh đứng đây từ chiều";
console.log("Chào em, anh đứng đây từ chiều");
// Viết hoa toàn bộ chữ cái đầu
console.log(toUpper(greeting))
// Viết hoa toàn bộ
console.log(greeting.toUpperCase())
// Chuyển về viết thường
console.log(greeting.toLowerCase())
// Tách từ đầu tiên riêng khỏi câu
let fistWord=greeting.slice(0,4);
console.log(fistWord)
// Tách Chữ đầu tiên ra khỏi từ
let firstLetter=greeting.slice(0,1);
console.log(firstLetter);

// 9
console.log("");
console.log("Bai 9: ")
let name=prompt("Nhập họ tên: ");
alert ("Ohayougozaimasu master, mừng chủ nhân "+ name +" đã trở về");
console.log("Ohayougozaimasu master, mừng chủ nhân "+ name +" đã trở về")


// 10
console.log("");
console.log("Bai 10:")
console.log(typeof 1)
console.log(typeof "Hello")
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)


