const filterOdds = (...arg) => arg.filter(x => x % 2 === 0);

const findMinVal = (...args) => args.reduce((acc, nextVal) => acc < nextVal ? acc : nextVal);

const mergeObject = (obj1, obj2) => ({ ...obj1, ...obj2 });


function doubleAndReturnArgs(arr, ...args) {
    let nums = [...args].map(x => x * 2);
    return [...arr, ...nums];
}


const removeRandom = item => {
    let ranInd = Math.floor(Math.random() * (item.length));
    return item.reduce((acc, nextVal, i) => {
        if (item[ranInd] !== nextVal) {
            acc.push(nextVal);
        }
        return acc;
    }, []);
};


const extend = (arr1, arr2) => [...arr1, ...arr2];


let addKeyVal = (obj, key, val) => {
    let newObj = { ...obj };
    newObj[key] = val;
    return newObj;
}


let removeKey = (obj, key) => {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}


let combine = (obj1, obj2) => ({ ...obj1, ...obj2 });


let update = (obj, key, val) => {
    let tempObj = { ...obj };
    tempObj[key] = val;
    return tempObj;
}

