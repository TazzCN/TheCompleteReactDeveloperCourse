const person = {
    name: 'Taz',
    age: 23,
    location: {
        city: 'Edinburgh',
        temp: 18
    }
};

const {name:firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: "Non-Stop",
    author: "Bryan Aldriss",
    publisher: {
        name: "Penguin"
    }

}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);