'use strict';

// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 2, 1000));

var user = {
    name: 'Taz',
    cities: ['London', 'Edinburgh'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + "!";
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    num: [1, 2, 3, 4, 5],
    multiplyBy: 10,
    multiply: function multiply() {
        var _this2 = this;

        return this.num.map(function (curNum) {
            return curNum * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
