const concatenateArrays = <T>(...arrays: T[][]): T[] => {

    let result: T[] = [];

    for (let i = 0; i < arrays.length; i++) {
        result = result.concat(arrays[i]);
    }

    return result;

};

