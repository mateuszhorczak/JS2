// Zadanie 1
function task1() {

    let result = '';

    for (let i = 1; i <= 100; ++i) {
        if (i % 6 === 0) {
            result += ' FizBuz';
        } else if (i % 2 === 0) {
            result += ' Fiz';
        } else if (i % 3 === 0) {
            result += ' Buz';
        } else {
            result += ' ' + i;
        }
    }
    return result;
}


function task2() {
    function isFloat(value) {
        return typeof value === 'number' &&
            !Number.isNaN(value);
    }

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Give me radius: ', (radius) => {
        rl.close();

        radius = parseFloat(radius);

        if (!isFloat(radius)) {
            console.log('your radius is not a Number');
        } else {
            let circuit, area;
            circuit = (2 * Math.PI * radius).toFixed(2);
            area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
            console.log('circuit is: ' + circuit + '\narea is: ' + area);
        }
    });
}


function task3() {

    const quickSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        let pivot = arr[0];
        let leftArr = [];
        let rightArr = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }

        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    };

    // source https://www.freecodecamp.org/news/how-to-write-quick-sort-algorithm-with-javascript/


    function initArray() {
        var randomNumber;
        var sum = 0;
        var array = [];

        function getRandomInt(max) {

            return Math.floor(Math.random() * max);
        }

        do {

            randomNumber = getRandomInt(10) + 1;
            array.push(randomNumber);
            sum += randomNumber;
        } while (sum < 200);
        return array;
    }

    function deleteFirstSmallest() {
        array.shift();
    }

    function deleteLastHigher() {
        array.pop();
    }

    function countValueInArray(array) {
        let countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let counter = 1;
        for (let i = 0; i < array.length; ++i) {
            if (array[i] === array[i + 1]) {
                counter++;
            } else {
                countArray[array[i] - 1] = counter;
                counter = 1;
            }
        }
        return countArray;
    }

    function sliceArray() {
        const topArray = array.slice(0, 10);
        const endArray = array.slice(10, array.length);
        return endArray.concat(topArray);
    }


    var array = initArray();
    array = quickSort(array);
    deleteFirstSmallest();
    deleteLastHigher();
    countValueInArray(array);
    console.log(countValueInArray(array))
    console.log(sliceArray())
}


function task4() {
    let nameArray = ['Jan', 'Mateusz', 'Aleksander', 'Kazimierz', 'Adrian'];
    nameArray.forEach((name, index) => {
        if (name.length > 6) {
            const topName = nameArray[index].slice(0, 3);
            const endName = nameArray[index].slice(-3, nameArray[index].length + 1);
            nameArray[index] = topName + '...' + endName;
        }
        for (let i = 0; i < nameArray[index].length; ++i) {
            if (nameArray[index][i].toLowerCase() === 'a') {
                const topName = nameArray[index].slice(0, i);
                const endName = nameArray[index].slice(i + 1, nameArray[index].length + 1);
                nameArray[index] = topName + '4' + endName
            }
            if (nameArray[index][i].toLowerCase() === 'e') {
                const topName = nameArray[index].slice(0, i);
                const endName = nameArray[index].slice(i + 1, nameArray[index].length + 1);
                nameArray[index] = topName + '3' + endName
            }
        }
    });
    return nameArray;
}


function  task5() {
    function Product(name) {

        this.name = name;
        this.price = getRandomPrice();
        this.count = 0;
    }
    function getRandomPrice() {
        return (Math.random() * 99).toFixed(2)
    }

    function getRandomCount() {
        return Math.floor(Math.random() * 99);
    }

    let priceList = [
        new Product('ziemniaki'),
        new Product('chleb'),
        new Product('jajka'),
        new Product('mleko'),
        new Product('maslo'),
        new Product('ogorek'),
        new Product('pomidor'),
        new Product('gruszka'),
        new Product('rzodkiewka'),
        new Product('czosnek'),
    ]
    console.table(priceList);

    var productList = [];

    priceList.forEach((element) => {
        if (Math.random() > 0.5 && productList.length !== Math.floor(priceList.length / 2)) {
            productList.push(element);
        }
    });

    productList.forEach((element) => {
        element.count = getRandomCount();
    });

    return productList;

}




console.log('Zadanie 1');
console.log(task1());
console.log('zadanie 3');
task3();
console.log('Zadanie 4');
console.log(task4());
console.log('Zadanie 5');
console.table(task5());
console.log('Zadanie 2');
task2();
