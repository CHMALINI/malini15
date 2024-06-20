console.log('22-array-filter-sort-map');

const studentsArray = [
    { name: 'Nitish', year: 2019, ranking: 2 },
    { name: 'Malini', year: 2019, ranking: 3 },
    { name: 'manikanta', year: 2018, ranking: 4 },
    { name: 'siva', year: 2019, ranking: 7 },
    { name: 'praveen', year: 2017, ranking: 6 },
]

console.log('Higest Rank Holders:',
    studentsArray
    .filter(student => student.year === 2019 && student.ranking >= 5)
    .sort((n1, n2) => n1.ranking - n2.ranking)
    .reverse()
    .map(student => student.name)
);