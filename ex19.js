console.log('19-array-excludes-value-to-new-array');

function excludes(arrayToExclude, elementsToExcluded) {
    console.log('arrayToExclude: ', arrayToExclude);
    console.log('elementsToExcluded: ', elementsToExcluded);
    const outputArray = [];
    for (let curElement of arrayToExclude) {
        if (!elementsToExcluded.includes(curElement)) {
            outputArray.push(curElement)
        }
    }
    return outputArray;
}

const versionArray = [1, 3, 5, 7, 3];
const newVesionArray = (excludes(versionArray, [2]));
console.log('newVesionArray: ', newVesionArray);

console.log('---------');

const ageArray = [21, 23, 22, 23, 30, 23, 30];
const newAgeArray = (excludes(ageArray, [25, 30]));
console.log('newAgeArray: ', newAgeArray);