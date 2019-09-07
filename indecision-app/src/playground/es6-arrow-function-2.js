// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };

const add = (a, b) => {
    // console.log(arguments);
 return a + b;
};

console.log(add(55, 2, 1000));

const user = {
    name: 'Taz',
    cities: ['London', 'Edinburgh'],
    printPlacesLived() {
        return this.cities.map((city) =>  this.name + ' has lived in ' + city + "!");
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    num: [1,2,3,4,5,],
    multiplyBy: 10,
    multiply() {
        return this.num.map((curNum) => curNum * this.multiplyBy );
    }
};

console.log(multiplier.multiply());