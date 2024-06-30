function sumOfNum(arr){
    console.log(arr);
    var i = 0;
    var sum = 0;
    while(i < arr.length){
        sum += arr[i];
        i++;
    }
    console.log('sum of arr numbers: ',sum);
}
const arr = [12, 20, 30, 40];
sumOfNum(arr);