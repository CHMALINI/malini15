console.log('23-object-create-students-and-address-object');

const Students = {
    name: 'sai',
    age: 25,
    rank: 5,
    country: 'India',
}

const Address = {
    street: 'Sir DJ Road',
    city: 'hyderabad',
    pinCode: 401209,
    state: 'MH',
    country: 'India',
}

function showObjectDetails(obj) {
    for (let key in obj) {
        console.log(key, ' : ', obj[key]);
    }
}

showObjectDetails(Students);
console.log('----------');
showObjectDetails(Address);