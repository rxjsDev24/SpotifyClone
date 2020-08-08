export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const getRandom = (array) => {
    let arr = [];
    let index = Math.floor(Math.random() * array.length);
    arr.push(array[index]);
    while (arr.length !== 3) {
        index = Math.floor(Math.random() * array.length);
        if (arr.includes(array[index])) {
            continue;
        }
        arr.push(array[index])
    }
    return arr;
}