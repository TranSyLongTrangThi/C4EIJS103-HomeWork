// 1
let colors=["Blue","Red","White","Black","Yellow gold"];
// 2
console.log("Màu đầu tiên :" + [0])
// 3
console.log("Màu thứ ba : "+[4])
// 4
colors[4]="ultraviolet";
// 5
let AprilColor=[colors[4]];
// 6
colors.push=["Green"];
// 7
colors.unshift=["Pink"];
// 8
console.log("Độ dài mảng: "+colors.length)

// 9
let lastItem=colors.pop;
console.log("Độ dài mảng: "+colors.length)

// 10
for (let i=0;i<colors.length;i++)
{
    console.log("Các màu trong mảng :"+colors[i]);
}
// 11
for (let i=0;i<colors.length;i++)
{
    console.log(i+","+colors[i]);
}