const arr = [];

// arr[0] = [1, 1, 1, 0, 0, 0];
// arr[1] = [0, 1, 0, 0, 0, 0];
// arr[2] = [1, 1, 1, 0, 0, 0];
// arr[3] = [0, 0, 2, 4, 4, 0];
// arr[4] = [0, 0, 0, 2, 0, 0];
// arr[5] = [0, 0, 1, 2, 4, 0];

// arr[0] = [1, 1, 1, 0, 0, 0];
// arr[1] = [0, 1, 0, 0, 0, 0];
// arr[2] = [1, 1, 1, 0, 0, 0];
// arr[3] = [0, 9, 2, -4, -4, 0];
// arr[4] = [0, 0, 0, -2, 0, 0];
// arr[5] = [0, 0, -1, -2, -4, 0];

arr[0] = [-9, -9, -9, 1, 1, 1];
arr[1] = [0, -9, 0, 4, 3, 2];
arr[2] = [-9, -9, -9, 1, 2, 3];
arr[3] = [0, 0, 8, 6, 6, 0];
arr[4] = [0, 0, 0, -2, 0, 0];
arr[5] = [0, 0, 1, 2, 4, 0];


const calculateValues = (from, to, counter) => {
    let calculation = 0;

    for (let i = from; i <= to; i++) {
        for (let j = counter; j <= counter + 2; j++) {
            if ((i === from + 1 && j === counter) || (i === from + 1 && j === counter + 2))
                continue;
            calculation += arr[i][j];
        }
    }
    return calculation;
}

const maxValue = (calculationsArr) => {
    return Math.max(...calculationsArr)
}

const calculationsArr = [];

for (let z = 0; z < 4; z++) {
    for (let y = 0; y < 4; y++) {
        calculationsArr.push(calculateValues(z, z + 2, y));
    }
}

console.log(maxValue(calculationsArr));