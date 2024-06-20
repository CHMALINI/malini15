console.log('8-object-string-properties-key');

function showStringProperties(curObj) {
    for (let key in curObj) {
        // console.log('key/prop:', key);
        if (typeof(curObj[key]) === 'string') {
            console.log(key, ':', curObj[key]);
        }
    }
}

const Person = {
    name: 'nitish',
    age: 22,
    height: 5.4,
    country: 'India',
    designation: 'UI Developer'
}

showStringProperties(Person);
console.log('----------');

const Technology = {
    name: 'JavaScipt',
    version: 6,
    purpose: 'Scripting language for Web',
    developer: 'Netscape Corporation'
}

showStringProperties(Technology);
console.log('----------');