module.exports =  towelSort = (matrix) => {
    let newArr = [];
    if (matrix) {
        matrix.forEach((element, i) => {
            if (i % 2) element.reverse();
            newArr = newArr.concat(element);
        })
    }
    return newArr;
}
