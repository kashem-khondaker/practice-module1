var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var biggest_number = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (biggest_number < element) {
        biggest_number = element;
    }
}

console.log(biggest_number);