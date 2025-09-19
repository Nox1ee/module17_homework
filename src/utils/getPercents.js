function getPercents(percent, number) {
    if (isNaN(percent) || isNaN(number)) {
        return 'percent и number должны быть числами';
    } 

    if ((percent < 0) || (number < 0)) {
        return 'percent и number должны быть больше 0';
    }

    result = (percent / 100) * number;
    return result;
}

module.exports = getPercents;