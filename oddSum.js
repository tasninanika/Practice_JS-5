function oddArray(arr){
    const oddArr = [];
    var i = 0;
    while(i < arr.length){
        if(arr[i] % 2 != 0)
        oddArr.push(arr[i]);
        i++;
    }
    return oddArr;
}

function oddArrSum(Arr2){
    var i = 0;
    var sum = 0;
    while(i < Arr2.length){
        if(arr[i] % 2 != 0)
            sum += Arr2[i];
            i++;
    }
    return sum;
}
const arr = [12, 21, 30, 43, 19, 90];
const arr1 = oddArray(arr);
console.log(arr1);
const summation = oddArrSum(arr1);
console.log('Sum of the odd numbers in the array: ', summation);
