// first task
function hour(num){
    let minutes = num * 60;
    return minutes;
}
let hourToMinute = hour(24);
console.log(hourToMinute);




// second task
function findLeapYear(arr){
    const oddArr = [];
    var i = 0;
    while(i < arr.length){
        if(arr[i] % 2 != 0)
        oddArr.push(arr[i]);
        i++;
    }
    return oddArr;
}

const arr = [2023, 2024, 2025, 2028, 2030];
const arr1 = findLeapYear(arr);
console.log(arr1);
 