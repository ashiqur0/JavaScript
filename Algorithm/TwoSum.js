const twoSum = (arr, target) => {
    const numbMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const complement = target - currentNumber;

        if (numbMap.has(complement)) {
            return [numbMap.get(complement), i];
        }

        numbMap.set(currentNumber, i);
    }

    return undefined;
}

console.log(twoSum([2, 11, 7, 15], 9));