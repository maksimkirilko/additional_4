module.exports = (first, second) => {

    const firstArray = first.split('').reverse();
    const secondArray = second.split('').reverse();
    const result = [];

    firstArray.forEach((faElement, i) => {
        secondArray.forEach((saElement, j) => {
            if (!result[i + j]) {
                result[i + j] = 0;
            }
            result[i + j] += faElement * saElement;
        });
    });

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
};
