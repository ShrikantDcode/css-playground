// Sample function to load data from a URL (mocked using setTimeout)
function loadData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating successful data retrieval
            const data = `Data loaded from ${url}`;
            resolve(data);
        }, 1000); // Simulating a delay of 1 second
    });
}

// Promisified version of loadData function
async function promisifiedLoadData(url) {
    try {
        const data = await loadData(url);
        console.log(data);
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Example of using Promise.all to execute multiple promises concurrently
async function examplePromiseAll() {
    const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
    const promises = urls.map(url => loadData(url));
    try {
        const results = await Promise.all(promises);
        console.log('Promise.all results:', results);
    } catch (error) {
        console.error('Promise.all error:', error);
    }
}

// Example of using Promise.race to execute multiple promises and return the result of the first resolved promise
async function examplePromiseRace() {
    const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
    const promises = urls.map(url => loadData(url));
    try {
        const result = await Promise.race(promises);
        console.log('Promise.race result:', result);
    } catch (error) {
        console.error('Promise.race error:', error);
    }
}

// Usage examples
//console.log('Starting promisifiedLoadData...');
//promisifiedLoadData('https://api.example.com/data');

//console.log('Starting Promise.all...');
//examplePromiseAll();

//console.log('Starting Promise.race...');
//examplePromiseRace();
// for(i=0; i<5; i++){
//     setTimeout(() => console.log(i), 1000); //55555
// }
// for(let i=0; i<5; i++){
//     setTimeout(() => console.log(i), 1000); //01234
// }

// let b = {'key': 123};// , {'key': 256}};
// let a = {{{'key': 123}}, {{'key': 256}}};
// console.log(a[b]);

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
// output: 55555

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10000);
}
//output: 55555

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10000);
}
//output: 01234
//0
//1
//2
//3
//4
//Note: each number will be logged in next line for every loop