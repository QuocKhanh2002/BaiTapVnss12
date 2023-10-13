//bai4
let arrnumber =  +prompt("hay nhap vao day so bat ky ");
let sum = 0;
for(let i = 0; i< arrnumber ; i++)
{
    sum += arrnumber[i];
}
let a= arrnumber.join(" , ");
console.log(sum, a);

// Bai5

let arr = +prompt("nhap vao day so ");
let b = arr.join(",");
let min = arr[0];
for(let i = 0; i<arr; i++)
{
    if(min > arr[i])
    {
        max = arr[i];
    }
}
console.log(`so nho nhat la ${min}`)
console.log(b);

//bai6
const arrList = [1,3,4,5,7,6];
let input = +prompt("nhap vao so trong danh sach ");
let check = false;
for(let i = 0; i<arrList.length; i++)
{
    if(input == arrList[i])
    {
        check =true;
        document.write(arrList[i])

    }else if(check){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
