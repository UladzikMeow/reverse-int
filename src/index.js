module.exports = function reverse(n) {
    if (n >= 0) {
        let arrN = n.toString().split("");
        let newArr = [];
        console.log(arrN);
        for (let i = arrN.length - 1; i >= 0; i--) {
            newArr.push(arrN[i]);
        }
        return Number(newArr.join(""));
    } else {
        n = n * -1;
        let arrN = n.toString().split("");
        let newArr = [];
        console.log(arrN);
        for (let i = arrN.length - 1; i >= 0; i--) {
            newArr.push(arrN[i]);
        }
        return Number(newArr.join(""));
    }
};
