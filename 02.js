// Buatlah script untuk menentukan suatu angka merupakan bilangan ganjil atau genap.

const oddOrEven = (num) => {
    if (num % 2 === 0) {
        console.log("Input: " + num + "\nOutput: Genap");
    } else {
        console.log("Input: " + num + "\nOutput: Ganjil");
    }
}



oddOrEven(43);
oddOrEven(1032);