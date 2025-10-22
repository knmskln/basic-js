const {NotImplementedError} = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
    let str2 = s2;
    let commonCharacterCount = 0;
    for (let i = 0; i < s1.length; i++) {
        if (str2.includes(s1[i])) {
            commonCharacterCount++;
            const indexToExclude = str2.indexOf(s1[i]);
            const newFirstPartStr2 = str2.slice(0, indexToExclude);
            const newSecondPartStr2 = str2.slice(indexToExclude + 1);
            str2 = newFirstPartStr2.concat(newSecondPartStr2);
        }
    }
    return commonCharacterCount;
}

module.exports = {
    getCommonCharacterCount
};
