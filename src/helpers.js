/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 * Modern version of the Fisher–Yates shuffle algorithm.
 */
const shuffle = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
};

export {shuffle};