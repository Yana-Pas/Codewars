//https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    let sum = 0;

    if (array === null || array.length === 0 || array.length === 1){
        return 0;
    }
    for (let i = 0; i < array.length; i++){
        sum += array[i];

    }
    return sum - Math.max(...array) - Math.min(...array);
}