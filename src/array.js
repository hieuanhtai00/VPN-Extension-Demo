/*
  Returns random int value between 0 (inclusive) and the specified value (exclusive)
  TODO(grig): more accurate randomInt
*/
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
    Returns random array element using weights. Element weight should be stored in 'weight' property of array element.
    If 'weight' property is absent then weight for this element is 1.
  */
function weightedRandom(array) {
    var map = [];
    var totalWeight = 0;

    for (var i = 0; i < array.length; i++) {
        var weight = array[i].weight || 1;

        map.push({
            start: totalWeight,
            end: totalWeight + weight,
        });

        totalWeight += weight;
    }

    var random = randomInt(totalWeight);

    for (i = 0; i < map.length; i++) {
        if (random >= map[i].start && random < map[i].end) {
            return array[i];
        }
    }
}

/*
    Clone array
  */
function clone(array) {
    return array.slice(0);
}

/*
    Return shuffled array without modifying original one
    TODO(grig): replace cloning with a new empty array
  */
function shuffle(array) {
    var arrayClone = clone(array);
    var currentIndex = arrayClone.length;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        var randomIndex = randomInt(currentIndex);
        currentIndex--;

        // And swap it with the current element.
        var temporaryValue = arrayClone[currentIndex];
        arrayClone[currentIndex] = arrayClone[randomIndex];
        arrayClone[randomIndex] = temporaryValue;
    }

    return arrayClone;
}

/*
    Return shuffled array with attention to element weights.
    Element weight should be stored in 'weight' property of array element.
    If 'weight' property is absent then weight for this element is 1.
    Original array is not modified.
  */
function weightedShuffle(array) {
    var arrayClone = clone(array);
    var result = [];

    for (var i = 0; i < array.length; i++) {
        var item = weightedRandom(arrayClone);
        result.push(item);
        arrayClone.splice(arrayClone.indexOf(item), 1);
    }

    return result;
}

exports.weightedShuffle = weightedShuffle;
exports.shuffle = shuffle;
