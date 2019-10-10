// const person = {
//     name: 'Taz',
//     age: 23,
//     location: {
//         city: 'Edinburgh',
//         temp: 18
//     }
// };

// const {name:firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: "Non-Stop",
//     author: "Bryan Aldriss",
//     publisher: {
//         name: "Penguin"
//     }

// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['34/5 Haddington Place', 'Edinburgh', 'Scotland', 'EH7 4AG'];

const [Street, City, Country, Postcode] = address;

console.log(`You are in ${City} ${Country}`);

const item = ['Coffee (hot)', '£1.00', '£2.00', '£3.00'];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);